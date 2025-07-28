import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseUrl from "../../../Api/BaseUrl";
import toast from "react-hot-toast";
import "./style.css";
import TextInput from "../../../Common/Input/TextInput";
import EmailInput from "../../../Common/Input/EmailInput";
import NumberInput from "../../../Common/Input/NumberInput";
import PasswordInput from "../../../Common/Input/PasswordInput";
import Label from "../../../Common/Label/Label";
import { useToggleUSD } from "../../../context/ToggleUSDContext";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLoading } from "../../../context/loading-context";
import axios from "axios";

const Signup = () => {
  const [successfullMsg, setSuccessfullMsg] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<FaEyeSlash/>);
  const {startLoading, stopLoading} = useLoading()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClose = () => {};

  const handleGoogleLogin = async () => {
    try {
      startLoading()
  
      // Initiate Google OAuth process using Axios
      const response = await axios.get("https://api.coinlooty.com/auth/google/callback", {
        withCredentials: true, // Important for cookies/session
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = response.data;
  
      if (data.authUrl) {
        // Redirect to Google OAuth URL
        window.location.href = data.authUrl;
      } else {
        toast.error("Unable to initiate Google login");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
     stopLoading()
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
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

  const validation = () => {
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // debugger
    if (
      formData?.firstName === "" ||
      formData?.lastName === "" ||
      formData?.userName === "" ||
      formData?.email === "" ||
      formData?.mobileNumber === "" ||
      formData?.address === "" ||
      formData?.education === "" ||
      formData?.password === "" ||
      formData?.confirm_password === ""
    ) {
      toast.error("Enter required fields");
    }
    if (!emailRegx.test(formData?.email)) {
      toast.error("Your email is not valid!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;
  
    startLoading(); // Start loader before API call
  
    try {
      const contactRes = await fetch(`${BaseUrl}user/signup`, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: new URLSearchParams(formData),
      });
  
      const responseData = await contactRes.json();
  
      if (responseData.responseCode === 200) {
        localStorage.setItem("verifyotp", responseData.responseResult.otp);
        localStorage.setItem("email", responseData.responseResult.email);
        toast.success("User registered successfully");
  
        setSuccessfullMsg(
          "Thank you for contacting us! Your message has been sent successfully. Our team will contact you soon."
        );
  
        navigate("/verifyotp");
      } else {
        toast.error(responseData.responseMessage);
        setSuccessfullMsg(responseData.responseMessage);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      stopLoading(); // Stop loader after API call
    }
  };
  
  return (
    <>
      <div className="bg-slate-800">
        <div className="py-10 md:px-10 px-4 container mx-auto">
          <div className="contant text-center">
            <h2 className="font-bold md:text-4xl text-2xl text-gray-200 gradient-text md:mb-4 mb-2">
              Sign up
            </h2>
            <p className="text-gray-200">
              Create an account and start earning now.
            </p>
          </div>
          <div className="md:w-4/6 w-full mx-auto pt-6">
            <div className="registration-form md:py-8 md:px-8 p-3 mx-auto bg-slate-700 rounded-2xl shadow text-left">
              <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                  <div className="md:mb-4 md:w-1/2 w-full">
                    <Label labelName={"First Name"} htmlFor={"firstname"} />
                    <TextInput
                      idName={"firstname"}
                      inputName={"firstName"}
                      placeholderName={"Your first name"}
                      handleChangeInput={handleChange}
                      valueName={formData?.firstName}
                      handleKeyDownInput={handleKeyDown}
                    />
                  </div>
                  <div className="md:mb-4 md:w-1/2 w-full">
                    <Label labelName={"Last Name"} htmlFor={"lastName"} />
                    <TextInput
                      idName={"lastName"}
                      inputName={"lastName"}
                      placeholderName={"Your last name"}
                      handleChangeInput={handleChange}
                      valueName={formData?.lastName}
                      handleKeyDownInput={handleKeyDown}
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                  <div className="md:mb-4 md:w-1/2 w-full">
                    <Label labelName={"User Name"} htmlFor={"userName"} />
                    <TextInput
                      idName={"userName"}
                      inputName={"userName"}
                      placeholderName={"User name"}
                      handleChangeInput={handleChange}
                      valueName={formData?.userName}
                      handleKeyDownInput={handleKeyDown}
                    />
                  </div>
                  <div className="md:mb-4 md:w-1/2 w-full">
                    <Label labelName={"Email Address"} htmlFor={"email"} />
                    <EmailInput
                      idName={"email"}
                      inputName={"email"}
                      placeholderName={"Your email address"}
                      handleChangeInput={handleChange}
                      valueName={formData?.email}
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                  <div className="md:mb-4 md:w-1/2 w-full">
                    <Label labelName={"Mobile"} htmlFor={"mobile"} />
                    <NumberInput
                      idName={"mobile"}
                      inputName={"mobileNumber"}
                      placeholderName={"Your contact"}
                      handleChangeInput={handleChange}
                      valueName={formData?.mobileNumber}
                    />
                  </div>
                  <div className="md:mb-4 w-full md:w-1/2">
                    <Label labelName={"Password"} htmlFor={"password"} />
                    <div className="relative w-full">
                      <PasswordInput
                        type={type}
                        idName={"password"}
                        inputName={"password"}
                        placeholderName={"Your password"}
                        handleChangeInput={handleChange}
                        valueName={formData?.password}
                        autoCompleteName={"new-password"}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center justify-center w-10 h-full text-gray-500 md:text-lg text-sm hover:text-gray-400 focus:outline-none"
                        onClick={handleToggleData}
                      >
                        {icon}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                <p className="text-white text-center">
                  By signing up you agree to the <Link to="/termcondition" className="text-[#ffd900] font-bold">Term & Condition</Link>  and <Link to="privacypolicy" className="text-[#ffd900] font-bold">Privacy
                  Policy</Link>
                </p>
              </div>

                <div className="flex items-center gap-4 justify-center mt-4">
                <div className="w-full md:w-2/4">
                    <button
                      type="submit"
                      className="btn-bg text-white w-full py-2 text-center rounded submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-evenly gap-3 sm:gap-4 mt-4">
                <div className="w-full md:w-2/4">
                    <button
                      type="submit"
                      className="btn-bg text-black font-semibold w-full py-2 flex justify-center items-center rounded-3xl bg-white"
                      onClick={handleGoogleLogin}
                    ><FcGoogle className="text-xl"/>
                      Sign up with Google
                    </button>
                  </div>
                  <div className="w-full md:w-2/4">
                    <button
                      type="submit"
                      className="btn-bg flex justify-center text-white items-center font-semibold w-full py-2 text-center rounded-3xl bg-blue-600"
                    >
                      <FaFacebookF className="text-md"/>
                      Sign up with Facebook
                    </button>
                  </div>
                </div>

                {successfullMsg && (
                  <div className="flex justify-between items-center gap-4 shadow bg-white mt-2 px-2">
                    <p className="py-4 text-left text-green-500 px-2">
                      {successfullMsg}
                    </p>
                    <button
                      className="px-2 border border-gray-300 rounded text-gray-700"
                      onClick={handleClose}
                    >
                      X
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
