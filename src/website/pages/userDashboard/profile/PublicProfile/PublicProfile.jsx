import React, { useEffect, useState } from "react";
import TextInput from "../../../../../Common/Input/TextInput";
import EmailInput from "../../../../../Common/Input/EmailInput";
import UpdateProfile from "./UpdateProfile";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../../../redux/user/userSlice";
import toast from "react-hot-toast";
import { useLoading } from "../../../../../context/loading-context";

const PublicProfile = ({ userDetails }) => {
  const { startLoading, stopLoading } = useLoading();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({});
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleProfileUpdate = async () => {
    if (!isEditable) {
      setIsEditable(true);
      return;
    }
  
    try {
      startLoading(); // Start loader
  
      const form = new FormData();
      form.append("userId", auth.id);
      form.append("firstName", formData?.firstName);
      form.append("lastName", formData?.lastName);
      form.append("email", formData?.email);
      form.append("education", formData?.education);
  
      const response = await dispatch(updateUserDetails({ userId: auth.id, formData: form })).unwrap();
  
      if (response?.responseCode === 200) {
        toast.success(response?.responseMesage);
        setIsEditable(false);
      } else {
        toast.error(response?.responseMesage || "Something went wrong");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error?.message || "Something went wrong. Please try again.");
    } finally {
      stopLoading(); // Stop loader
    }
  };
  
  useEffect(() => {
    setFormData({ ...userDetails, ...formData });
  }, [userDetails]);

  return (
    <section className="text-sm font-semibold text-white max-w-[398px] m-2">
      <div className="flex flex-col pt-4 pb-10 w-full rounded-xl bg-[#1e1e2e]">
        <UpdateProfile isEditable={isEditable} userDetails={userDetails} />

        <div className="flex flex-col px-4 mt-8 w-full text-left">
          <div className="w-full">
            {/* First Name */}
            <label
              htmlFor="displayName"
              className="text-base font-bold text-white py-2 inline-block"
            >
              First Name
            </label>
            <TextInput
              idName="displayName"
              inputName="firstName"
              valueName={
                isEditable ? formData?.firstName : userDetails?.firstName
              }
              // defaultValue={userDetails?.firstName}
              disabled={!isEditable}
              handleChangeInput={handleInput}
              isEditable={isEditable}
            />

            {/* Last Name */}
            <label
              htmlFor="lastName"
              className="text-base font-bold text-white py-2 inline-block"
            >
              Last Name
            </label>
            <TextInput
              idName="lastName"
              inputName="lastName"
              valueName={
                isEditable ? formData?.lastName : userDetails?.lastName
              }
              disabled={!isEditable}
              handleChangeInput={handleInput}
              isEditable={isEditable}
            />

            {/* Description */}
            <p className="mt-1.5 text-xs font-medium text-white">
              Your name may appear around{" "}
              <span className="text-bg">Coinlooty</span> where you contribute or
              are mentioned. You can remove it at any time.
            </p>
          </div>

          {/* Email Input */}
          <div className="mt-5 w-full">
            <label
              htmlFor="email"
              className="text-base font-bold text-white py-2 inline-block"
            >
              Your Email
            </label>
            <EmailInput
              idName="email"
              inputName="email"
              valueName={isEditable ? formData?.email : userDetails?.email}
              defaultValue={userDetails?.email}
              disabled={!isEditable}
              handleChangeInput={handleInput}
              isEditable={isEditable}
            />
          </div>

          {/* Edit / Update Button */}
          <button
            onClick={handleProfileUpdate}
            className="self-center px-8 py-3.5 mt-3.5 max-w-full rounded-3xl w-[168px] submit-btn transition-colors"
          >
            {isEditable ? "Update Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicProfile;
