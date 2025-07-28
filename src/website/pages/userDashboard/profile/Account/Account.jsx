import React, { useState } from "react";
import PasswordInput from "../../../../../Common/Input/PasswordInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Account = () => {
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
   const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({});
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />);

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    if (!isEditable) {
      setIsEditable(true);
      return;
    }
    console.log("click");
  };

  const handleToggleData = () => {
    if (type === "password") {
      setIcon(<FaEye />);
      setType("text");
    } else {
      setIcon(<FaEyeSlash />);
      setType("password");
    }
  };

  return (
    <main className="p-3 rounded-xl bg-[#1e1e2e] w-[398px] max-md:mx-auto max-md:my-0 max-md:w-full max-md:max-w-[398px] max-sm:px-2.5 max-sm:py-3 m-2 text-left">
      <section>
        {/* <h2 className="mb-3 text-base font-bold text-white">Account privacy</h2> */}
        {/* <hr className="mx-0 my-3 h-px bg-zinc-300" />; */}
        <h3 className="mb-1.5 text-xs font-semibold text-zinc-300">
          Private account
        </h3>
        <p className="mb-5 text-xs font-medium leading-snug text-white">
          When your account is set to private mode, only you can access your
          profile and activity on <span className="text-bg">CoinLooty</span>. This ensures that your interactions
          remain hidden from other users, giving you complete control over your
          privacy.
        </p>
        {/* <div className="mb-8">
        <Toggle initialState={isPrivate} onChange={setIsPrivate} />
      </div> */}
      </section>
      <section className="mt-5">
        <h2 className="mb-3 text-base font-bold text-white">Change password</h2>
        <hr className="mx-0 my-3 h-px bg-zinc-300" />;
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-7">
            <label className="mb-1.5 text-sm font-bold text-white block">
              Old Password
            </label>
            <div className="relative w-full mt-2">
              <PasswordInput
                type={type}
                inputName={"password"}
                placeholderName={"Password"}
                valueName={formData?.password}
                handleChangeInput={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                isEditable={isEditable}
                // handleKeyDownInput={handleKeyDown}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-400 focus:outline-none"
                onClick={handleToggleData}
              >
                {icon}
              </button>
            </div>
            <label className="mb-1.5 text-sm font-bold text-white block mt-1.5">
              New password
            </label>
            <div className="relative w-full mt-2">
              <PasswordInput
                type={type}
                inputName={"password"}
                placeholderName={"New password"}
                valueName={formData?.password}
                handleChangeInput={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                isEditable={isEditable}
                // handleKeyDownInput={handleKeyDown}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-400 focus:outline-none"
                onClick={handleToggleData}
              >
                {icon}
              </button>
            </div>
            <label className="mb-1.5 text-sm font-bold text-white block mt-1.5">
              Confirm new password
            </label>
            <div className="relative w-full mt-2">
              <PasswordInput
                type={type}
                inputName={"password"}
                placeholderName={"Confirm new password"}
                valueName={formData?.password}
                handleChangeInput={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                isEditable={isEditable}
                // handleKeyDownInput={handleKeyDown}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-400 focus:outline-none"
                onClick={handleToggleData}
              >
                {icon}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleUpdateProfile}
              className="mx-auto my-0 text-sm font-semibold bg-yellow-400 text-gray-900 rounded-3xl cursor-pointer h-[43px] w-[168px] max-sm:h-10 max-sm:w-[140px] hover:bg-yellow-500 transition-colors"
            >
              {isEditable ? "Update Profile" : "Edit Profile"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Account;
