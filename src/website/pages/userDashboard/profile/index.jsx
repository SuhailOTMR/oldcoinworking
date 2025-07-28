import { useEffect, useState } from "react";
import ChangePasswordModal from "../../../components/userDdashboard/ChangePasswordModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDetails,
  updateUserDetails,
} from "../../../../redux/user/userSlice";
import { MdPhotoCameraBack } from "react-icons/md";
import UploadProfileModal from "../../../components/userDdashboard/UploadProfileModal";
import toast from "react-hot-toast";
import ChangeProfileImgModal from "../../../components/userDdashboard/ChangeProfileImgModal";
import { fetchWithdrawRequestList } from "../../../../redux/user/withdrawSlice";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Overview from "./Overview/Overview";
import PublicProfile from "./PublicProfile/PublicProfile";
import Account from "./Account/Account";
import { useLoading } from "../../../../context/loading-context";

const UserProfile = () => {
  const [tab, setTab] = useState("Earning");
  const [isEditable, setIsEditable] = useState(false);
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.detail);
  const withdrawList = useSelector(
    (state) => state.withdraw?.WithdrawRequestList
  );
  const [formData, setFormData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [isOpenChangePicModal, setIsOpenChangePicModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const { startLoading, stopLoading } = useLoading();

  const tabs = ["Overview", "Public profile", "Account"];

  // const handleClick = (e) => {
  //   setIsOpenModal(!isOpenModal);
  // };
  // const handleUploadModal = () => {
  //   setIsOpenUploadModal(true);
  // };
  // const handleSettingModal = () => {
  //   setIsOpenChangePicModal(true);
  // };
  // const handleInput = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleUpdate = async () => {
  //   const form = new FormData();
  //   form.append("userId", auth.id);
  //   form.append("firstName", formData?.firstName);
  //   form.append("lastName", formData?.lastName);
  //   form.append("email", formData?.email);
  //   form.append("education", formData?.education);
  //   const updateUser = await dispatch(
  //     updateUserDetails({ userId: auth.id, formData: form })
  //   );
  //   const res = updateUser.payload;
  //   console.log("userupdateres", res);
  //   if (res?.responseCode === 200) {
  //     toast.success(res?.responseMesage);
  //     setIsEditable(false);
  //   } else {
  //     toast.error(res?.responseMesage || "something went wrong");
  //   }
  // };

  useEffect(() => {
    setFormData({ ...userDetails, ...formData });
  }, [userDetails]);

  useEffect(() => {
    if (!auth?.id) return; // Ensure auth exists before making API calls
  
    startLoading(); // Start loader
  
    Promise.all([
      dispatch(fetchUserDetails(auth.id)),
      dispatch(fetchWithdrawRequestList(auth.id))
    ])
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data. Please try again.");
      })
      .finally(() => stopLoading()); // Stop loader when done
  
  }, []);
  

  return (
    <>
      {/* <div className="profilesec md:p-6 p-4">
        <div className="secTop md:flex justify-between items-center md:pb-6 pb-2">
          <h5 className="text-2xl text-white text-left font-bold pb-4">
            My Profile
          </h5>
          <div className="flex justify-end gap-3 mb-2 mb:mb-0">
            <button
              onClick={handleSettingModal}
              className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all"
            >
              Setting
            </button>
            {!isEditable ? (
              <button
                className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all"
                onClick={() => setIsEditable(true)}
              >
                Edit
              </button>
            ) : (
              <button
                className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all saveBtn"
                onClick={handleUpdate}
              >
                Save
              </button>
            )}
            <button
              onClick={handleClick}
              className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all"
            >
              Change Password
            </button>
          </div>
        </div>
        <div className="userprofile md:py-4 md:px-4 py-2 px-2 bg-slate-700 rounded shadow text-left ">
          
          <div className="flex justify-between items-start">
            <div className="flex gap-4 md:flex-row flex-col sm:w-full w-full">
              <div className="profile-img flex items-center justify-center flex-col">
                {userDetails?.image ? (
                  <img src={userDetails?.image} alt="userImg" width={100} />
                ) : (
                  <div className="" onClick={handleUploadModal}>
                    <MdPhotoCameraBack />
                    <span>Upload </span>
                  </div>
                )}
              </div>
              <div className="user-prof">
                {!isEditable ? (
                  <h5 className="text-white text-3xl font-semibold">
                    {userDetails?.firstName} {userDetails?.lastName}
                  </h5>
                ) : (
                  <>
                    <input
                      className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                      type="text"
                      name="firstName"
                      value={formData?.firstName}
                      onChange={(e) => handleInput(e)}
                      placeholder="First name"
                    />
                    <input
                      className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                      type="text"
                      name="lastName"
                      value={formData?.lastName}
                      onChange={(e) => handleInput(e)}
                      placeholder="Last name"
                    />
                  </>
                )}
                {!isEditable ? (
                  <p>{userDetails?.email}</p>
                ) : (
                  <input
                    className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={(e) => handleInput(e)}
                    placeholder="Email address"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="tabContent">
        {tab === "withdraw" && (
          <>
            {!withdrawList ? (
              <>
                <div className="mx-4">
                  <p className="text-left text-white">Data not found</p>
                </div>
              </>
            ) : (
              <div className="mx-4">
                <div className="overflow-x-auto bg-[#111827]">
                  <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden leaderboard-table">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            User name
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Transaction ID
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {withdrawList?.map((user, index) => (
                          <tr>
                            <td
                              className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm"
                              key={user?._id}
                            >
                              <div className="flex">
                                <div className="flex-shrink-0 w-5 h-5">
                                  <span>{user?.userId}</span>
                                </div>
                                <div className="ml-1">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {user?.userName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                ${user?.amount}
                              </p>
                            </td>
                            <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user?.status}
                              </p>
                            </td>
                            <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user?.transactionId}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div> */}
      {/* <ChangePasswordModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <UploadProfileModal
        isOpenModal={isOpenUploadModal}
        setIsOpenModal={setIsOpenUploadModal}
      />
      <ChangeProfileImgModal
        isOpenModal={isOpenChangePicModal}
        setIsOpenModal={setIsOpenChangePicModal}
        userDetails={userDetails}
      /> */}

      <main className="flex z-10 flex-col px-3.5 mt-2.5 w-full">
        <div className="flex flex-col gap-7 items-start text-base font-bold text-white py-3">
          <h5 className="text-2xl text-white text-left font-bold pb-4">
            My Profile
          </h5>
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-7 items-center justify-center">
            {tabs?.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1 justify-center px-2 py-1 sm:py-2 rounded-3xl transition-all ${
                  tab === activeTab ? "bg-[#1E293B] min-h-[29px]" : ""
                }`}
              >
                {/* Gradient Indicator for Active Tab */}
                {tab === activeTab && (
                  <div
                    className="w-1.5 h-4 rounded shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(255, 217, 0, 1) 0%, rgba(255, 169, 0, 1) 100%)",
                    }}
                  />
                )}
                <span className="text-xs sm:text-sm md:text-base px-2">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Render Component Based on Active Tab */}
        {activeTab === "Overview" && (
          <Overview
            userDetails={userDetails}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === "Public profile" && <PublicProfile userDetails={userDetails}/>}
        {activeTab === "Account" && <Account userDetails={userDetails}/>}
      </main>
    </>
  );
};
export default UserProfile;
