import React, { useState, useEffect } from "react";
import { IoCamera } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { uploadProfileImage } from "../../../../../redux/user/userSlice";
import { useLoading } from "../../../../../context/loading-context";

const UpdateProfile = ({ isEditable, userDetails }) => {
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useLoading();
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const profileImg = useSelector((state) => state.user.uploadImg); // Redux stored image

  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(userDetails?.image || profileImg); // Initial preview

  // Handle file selection and preview update
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file); // Store file for upload
      setPreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  // Handle image upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!img) {
      toast.error("Please select an image to upload.");
      return;
    }
    startLoading();

    const form = new FormData();
    form.append("image", img);

    try {
      const uploadRes = await dispatch(
        uploadProfileImage({ userId: auth.id, form })
      );

      const res = uploadRes.payload;
      // console.log("Upload Response:", res);

      if (res?.responceCode === 200) { // Fixed typo
        toast.success(res.resposneMessage || "Profile image updated successfully.");
        setImg(null); // Clear selected file after upload
        setPreview(res.responsResult.image || preview); // Update preview to reflect uploaded image
      } else {
        toast.error(res.resposneMessage || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image.");
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="relative self-center">
      {/* Label for clicking the image */}
      <label
        htmlFor="profileImage"
        className={`cursor-pointer relative ${
          !isEditable ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {/* Fixed Container for Image */}
        <div className="relative w-[82px] h-[82px] rounded-full overflow-hidden">
          {/* Profile Image */}
          <img
            src={preview} // Show preview image immediately
            alt="Profile avatar"
            className="w-full h-full object-cover rounded-full"
          />

          {/* Camera Icon Overlay - Will Not Change Position */}
          {isEditable && (
            <div className="absolute bottom-0 right-0 bg-gray-800 p-1.5 rounded-full border border-white">
              <IoCamera className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
      </label>

      {/* Hidden File Input */}
      <input
        type="file"
        id="profileImage"
        accept="image/*"
        className="hidden"
        disabled={!isEditable}
        onChange={handleChange}
      />

      {/* Upload Button */}
      {isEditable && img && (
        <button
          onClick={handleSubmit}
          className="mt-2 px-4 py-2 submit-btn text-white rounded-md transition"
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UpdateProfile;
