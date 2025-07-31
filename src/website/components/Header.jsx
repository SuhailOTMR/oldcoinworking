import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup, closePopup } from '../../redux/user/popupSlice';
import { Link } from "react-router-dom";
import Style from './style.module.css';
import { BsGlobe, BsCashCoin } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import BaseUrl from '../../Api/BaseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";


// import { LoadingContext, useLoading } from "../../../context/loading-context";
import { LoadingContext, useLoading } from '../../context/loading-context'

// const SignUp = ({ isPopupOpen, setIsPopupOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const dispatch = useDispatch();
//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null); // Clear any previous errors before making a new request

//     try {
//       const response = await fetch("https://api.coinlooty.com/user/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           userName,
//           email,
//           mobile,
//           password,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.status === "Ok") {
//         // Handle successful signup (store token, user details, etc.)
//         setData(result);
//         console.log("SignUp successful:", result);
//       } else {
//         // Handle errors (user already exists, invalid data, etc.)
//         setError(result.responseMessage || "Sign Up failed. Please try again.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div
//         className="bg-[#1E1B2E] text-white w-full max-w-md rounded-2xl p-6 overflow-y-auto hide-scrollbar relative"
//         style={{ maxHeight: '90vh' }}
//       >
//         {/* Close Button */}
//         <button
//           // onClick={() => setIsPopupOpen(false)}
//           onClick={() => dispatch(closePopup())}
//           className="absolute top-0 right-0 text-white hover:text-gray-300"
//           style={{ margin: "10px 20px" }}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         {/* Error or Success Message */}
//         {error ? (
//           <h2 style={{ color: "red", fontSize: "17px", textAlign: "center" }}>{error}</h2>
//         ) : data && data.status === "Ok" ? (
//           <h2 style={{ color: "green", fontSize: "17px", textAlign: "center" }}>
//             {data.responseMessage}
//           </h2>
//         ) : null}

//         {/* Form Fields */}
//         <form onSubmit={handleSignUpSubmit} className="space-y-4">
//           {[
//             { label: 'First Name', value: firstName, setValue: setFirstName, placeholder: 'Enter First Name' },
//             { label: 'Last Name', value: lastName, setValue: setLastName, placeholder: 'Enter Last Name' },
//             { label: 'User Name', value: userName, setValue: setUserName, placeholder: 'Enter User Name' },
//             { label: 'Email Address', value: email, setValue: setEmail, placeholder: 'Enter Email Address' },
//             { label: 'Mobile', value: mobile, setValue: setMobile, placeholder: 'Enter Mobile' },
//             { label: 'Password', value: password, setValue: setPassword, placeholder: 'Enter Password', type: 'password' }
//           ].map(({ label, value, setValue, placeholder, type = 'text' }, i) => (
//             <div key={i}>
//               <label className="text-sm" style={{ marginLeft: "-80%" }}>{label}</label>
//               <div className="flex items-center mt-1 bg-[#2B2A3D] rounded-lg px-3 py-2">
//                 <span className="mr-3 text-lg text-gray-400">
//                   {type === 'password' ? <FaLock /> : <FaEnvelope />}
//                 </span>
//                 <input
//                   type={type}
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   placeholder={placeholder}
//                   className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
//                   required
//                 />
//               </div>
//             </div>
//           ))}

//           {/* Terms & Conditions */}
//           <div className="flex items-start space-x-2 text-xs text-white" style={{ margin: "10px 0px" }}>
//             <input type="checkbox" id="terms" className="mt-1 accent-yellow-400" required />
//             <label htmlFor="terms">
//               By signing up you agree to the <span className="text-yellow-400 font-semibold"><button onClick={() => dispatch(closePopup())}>
//                 <Link to={'termcondition'}>
//                   Term & Condition
//                 </Link>
//               </button></span> and{' '}
//               <span className="text-yellow-400 font-semibold"><button onClick={() => dispatch(closePopup())}>
//                 <Link to={'privacypolicy'}>Privacy Policy</Link>
//               </button></span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 rounded-xl mt-5 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
//             disabled={loading}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Social Auth */}
//         <div className="my-4 text-center text-sm text-gray-400">or sign up with</div>
//         <div className="flex justify-center gap-6 mt-2">
//           <button className="text-2xl"><FcGoogle /></button>
//           <button className="text-2xl text-blue-600"><FaFacebook /></button>
//         </div>
//       </div>
//     </div>
//   );
// };


// const SignUp = ({ isPopupOpen, setIsPopupOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (
//       !firstName ||
//       !lastName ||
//       !userName ||
//       !email ||
//       !mobile ||
//       !password
//     ) {
//       toast.error("Please fill all required fields.");
//       setLoading(false);
//       return;
//     }

//     if (!emailRegx.test(email)) {
//       toast.error("Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("https://api.coinlooty.com/user/signup", {
//         method: "POST",
//         headers: {
//           accept: "application/json",
//         },
//         body: new URLSearchParams({
//           firstName,
//           lastName,
//           userName,
//           email,
//           mobileNumber: mobile,
//           password,
//         }),
//       });

//       const result = await response.json();

//       if (result.responseCode === 200) {
//         toast.success("User registered successfully");
//         localStorage.setItem("verifyotp", result.responseResult.otp);
//         localStorage.setItem("email", result.responseResult.email);
//         setData(result);
//         navigate("/verifyotp");
//       } else {
//         setError(result.responseMessage || "Sign Up failed. Please try again.");
//         toast.error(result.responseMessage || "Sign Up failed.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://api.coinlooty.com/auth/google/callback",
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = response.data;
//       if (data.authUrl) {
//         window.location.href = data.authUrl;
//       } else {
//         toast.error("Unable to initiate Google login");
//       }
//     } catch (error) {
//       console.error("Google login error:", error);
//       toast.error("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div
//         className="bg-[#1E1B2E] text-white w-full max-w-md rounded-2xl p-6 overflow-y-auto hide-scrollbar relative"
//         style={{ maxHeight: "90vh" }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => dispatch(closePopup())}
//           className="absolute top-0 right-0 text-white hover:text-gray-300"
//           style={{ margin: "10px 20px" }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             width="24"
//             height="24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         {/* Error or Success Message */}
//         {error ? (
//           <h2
//             style={{ color: "red", fontSize: "17px", textAlign: "center" }}
//           >
//             {error}
//           </h2>
//         ) : data && data.responseMessage ? (
//           <h2
//             style={{ color: "green", fontSize: "17px", textAlign: "center" }}
//           >
//             {data.responseMessage}
//           </h2>
//         ) : null}

//         {/* Form Fields */}
//         <form onSubmit={handleSignUpSubmit} className="space-y-4">
//           {[
//             {
//               label: "First Name",
//               value: firstName,
//               setValue: setFirstName,
//               placeholder: "Enter First Name",
//             },
//             {
//               label: "Last Name",
//               value: lastName,
//               setValue: setLastName,
//               placeholder: "Enter Last Name",
//             },
//             {
//               label: "User Name",
//               value: userName,
//               setValue: setUserName,
//               placeholder: "Enter User Name",
//             },
//             {
//               label: "Email Address",
//               value: email,
//               setValue: setEmail,
//               placeholder: "Enter Email Address",
//             },
//             {
//               label: "Mobile",
//               value: mobile,
//               setValue: setMobile,
//               placeholder: "Enter Mobile",
//             },
//             {
//               label: "Password",
//               value: password,
//               setValue: setPassword,
//               placeholder: "Enter Password",
//               type: "password",
//             },
//           ].map(({ label, value, setValue, placeholder, type = "text" }, i) => (
//             <div key={i}>
//               <label className="text-sm" style={{ marginLeft: "-80%" }}>
//                 {label}
//               </label>
//               <div className="flex items-center mt-1 bg-[#2B2A3D] rounded-lg px-3 py-2">
//                 <span className="mr-3 text-lg text-gray-400">
//                   {type === "password" ? <FaLock /> : <FaEnvelope />}
//                 </span>
//                 <input
//                   type={type}
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   placeholder={placeholder}
//                   className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
//                   required
//                 />
//               </div>
//             </div>
//           ))}

//           {/* Terms & Conditions */}
//           <div
//             className="flex items-start space-x-2 text-xs text-white"
//             style={{ margin: "10px 0px" }}
//           >
//             <input
//               type="checkbox"
//               id="terms"
//               className="mt-1 accent-yellow-400"
//               required
//             />
//             <label htmlFor="terms">
//               By signing up you agree to the{" "}
//               <span className="text-yellow-400 font-semibold">
//                 <button onClick={() => dispatch(closePopup())}>
//                   <Link to={"termcondition"}>Term & Condition</Link>
//                 </button>
//               </span>{" "}
//               and{" "}
//               <span className="text-yellow-400 font-semibold">
//                 <button onClick={() => dispatch(closePopup())}>
//                   <Link to={"privacypolicy"}>Privacy Policy</Link>
//                 </button>
//               </span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 rounded-xl mt-5 ${
//               loading ? "cursor-not-allowed opacity-50" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Social Auth */}
//         <div className="my-4 text-center text-sm text-gray-400">
//           or sign up with
//         </div>
//         <div className="flex justify-center gap-6 mt-2">
//           <button className="text-2xl" onClick={handleGoogleLogin}>
//             <FcGoogle />
//           </button>
//           <button className="text-2xl text-blue-600">
//             <FaFacebook />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


const SignUp = ({ isPopupOpen, setIsPopupOpen }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !email ||
      !mobile ||
      !password
    ) {
      toast.error("Please fill all required fields.");
      setLoading(false);
      return;
    }

    if (!emailRegx.test(email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.coinlooty.com/user/signup", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: new URLSearchParams({
          firstName,
          lastName,
          userName,
          email,
          mobileNumber: mobile,
          password,
        }),
      });

      const result = await response.json();

      if (result.responseCode === 200) {
        toast.success("User registered successfully");
        localStorage.setItem("verifyotp", result.responseResult.otp);
        localStorage.setItem("email", result.responseResult.email);
        navigate("/verifyotp");
      } else {
        toast.error(result.responseMessage || "Sign Up failed.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.coinlooty.com/auth/google/callback",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        toast.error("Unable to initiate Google login");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="bg-[#1E1B2E] text-white w-full max-w-md rounded-2xl p-6 overflow-y-auto hide-scrollbar relative"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close Button */}
        <button
          onClick={() => dispatch(closePopup())}
          className="absolute top-0 right-0 text-white hover:text-gray-300"
          style={{ margin: "10px 20px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Form Fields */}
        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          {[
            {
              label: "First Name",
              value: firstName,
              setValue: setFirstName,
              placeholder: "Enter First Name",
            },
            {
              label: "Last Name",
              value: lastName,
              setValue: setLastName,
              placeholder: "Enter Last Name",
            },
            {
              label: "User Name",
              value: userName,
              setValue: setUserName,
              placeholder: "Enter User Name",
            },
            {
              label: "Email Address",
              value: email,
              setValue: setEmail,
              placeholder: "Enter Email Address",
            },
            {
              label: "Mobile",
              value: mobile,
              setValue: setMobile,
              placeholder: "Enter Mobile",
            },
            {
              label: "Password",
              value: password,
              setValue: setPassword,
              placeholder: "Enter Password",
              type: "password",
            },
          ].map(({ label, value, setValue, placeholder, type = "text" }, i) => (
            <div key={i}>
              <label className="text-sm" style={{ marginLeft: "-80%" }}>
                {label}
              </label>
              <div className="flex items-center mt-1 bg-[#2B2A3D] rounded-lg px-3 py-2">
                <span className="mr-3 text-lg text-gray-400">
                  {type === "password" ? <FaLock /> : <FaEnvelope />}
                </span>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholder}
                  className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
                  required
                />
              </div>
            </div>
          ))}

          {/* Terms & Conditions */}
          <div
            className="flex items-start space-x-2 text-xs text-white"
            style={{ margin: "10px 0px" }}
          >
            <input
              type="checkbox"
              id="terms"
              className="mt-1 accent-yellow-400"
              required
            />
            <label htmlFor="terms">
              By signing up you agree to the{" "}
              <span className="text-yellow-400 font-semibold">
                <button onClick={() => dispatch(closePopup())}>
                  <Link to={"termcondition"}>Term & Condition</Link>
                </button>
              </span>{" "}
              and{" "}
              <span className="text-yellow-400 font-semibold">
                <button onClick={() => dispatch(closePopup())}>
                  <Link to={"privacypolicy"}>Privacy Policy</Link>
                </button>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 rounded-xl mt-5 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Social Auth */}
        <div className="my-4 text-center text-sm text-gray-400">
          or sign up with
        </div>
        <div className="flex justify-center gap-6 mt-2">
          <button className="text-2xl" onClick={handleGoogleLogin}>
            <FcGoogle />
          </button>
          <button className="text-2xl text-blue-600">
            <FaFacebook />
          </button>
        </div>
      </div>
    </div>
  );
};

const Signin = ({ isPopupOpen, setIsPopupOpen, setPopupType }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
   const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { startLoading, stopLoading } = useLoading();

  const validation = () => {
    const noWhiteSpaceRegex = /^\S+$/;
    if (
      !noWhiteSpaceRegex.test(formData.email) ||
      !noWhiteSpaceRegex.test(formData.password)
    ) {
      toast.error("No spaces allowed in username or password!");
      return true; // has error
    }
    return false; // no error
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // if (validation()) return;
    try {
      startLoading();
      const response = await fetch(`${BaseUrl}user/login`, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: new URLSearchParams(formData),
      });

      const resData = await response.json();

      if (resData.responseCode === 200) {
        // toast.success(resData.responseMessage);
        toast.success(resData.responseMessage, {
          position: "top-center",
          theme: "dark",
        });
        localStorage.setItem(
          "opinionUser",
          JSON.stringify(resData.userDetails)
        );
        navigate("/dashboard");
      } else {
        // toast.error(resData.responseMessage);
        toast.error(resData.responseMessage, {
          position: "top-center",
          theme: "dark",
        });

      }
    } catch (error) {
      // toast.error("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      stopLoading();
    }

  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="relative bg-[#141524] rounded-2xl px-6 py-8 w-full max-w-md"
        style={{ minWidth: "19rem" }}
      >
        {/* Close Button */}
        <button
          // onClick={() => setIsPopupOpen(false)}
          onClick={() => dispatch(closePopup())}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>

        {/* Error or Success Message */}
        {error ? (
          <h2 style={{ color: "red", fontSize: "17px", textAlign: "center" }}>
            {error}
          </h2>
        ) : data && data.responseMessage ? (
          <h2
            style={{
              color: data.status === "Ok" ? "green" : "red",
              fontSize: "17px",
              textAlign: "center",
            }}
          >
            {data.responseMessage}
          </h2>
        ) : null}

        {/* Form Fields */}
        <div className="w-full space-y-4">
          <form onSubmit={handleLoginSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-white text-sm font-semibold mb-2 block" style={{ marginLeft: "-87%" }}>
                Email
              </label>
              <div className="flex items-center bg-[#1f2035] px-4 py-3 rounded-md">
                <svg className="text-gray-400 mr-2" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 2.6v13.4h16V6.6l-8 7.6-8-7.6z" />
                </svg>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="bg-transparent outline-none text-white w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-white text-sm font-semibold mt-2 mb-2 block" style={{ marginLeft: "-81%" }}>
                Password
              </label>
              <div className="flex items-center bg-[#1f2035] px-4 py-3 rounded-md">
                <svg className="text-gray-400 mr-2" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5zm3 8V6a3 3 0 0 0-6 0v3h6z" />
                </svg>


                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="bg-transparent outline-none text-white w-full"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />


              </div>
              <div className="text-right text-[13px]" style={{ margin: "5px" }}>

                <button style={{ backgroundColor: "transparent", border: "none" }} onClick={() => dispatch(closePopup())}>
                  <Link to={"forgotpassword"} className="text-yellow-400 hover:underline">
                    Forget your password
                  </Link>
                </button>

              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white font-semibold rounded-md ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#ffce3a] to-[#fba207]"
                }`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 border-t border-gray-600 relative">
            <span className="absolute left-1/2 -top-3 bg-[#141524] px-2 text-sm text-gray-400 transform -translate-x-1/2">
              or
            </span>
          </div>

          {/* Google Button */}
          <button className="w-full py-3 rounded-md border border-gray-300 bg-white flex items-center justify-center text-black font-semibold hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
            Sign In with Google
          </button>

          {/* Facebook Button */}
          <button className="w-full py-3 rounded-md bg-[#1877f2] text-white font-semibold flex items-center justify-center hover:bg-[#166fe0]">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.2l-.3 2.9h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
            Sign In with Facebook
          </button>
        </div>

        {/* Register Link */}
        <div className="text-sm text-white mt-6 text-center">
          Don’t have an account yet?{" "}
          <button
            type="button"

            onClick={() => dispatch(openPopup('signup'))}
            className="text-yellow-400 hover:underline"
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isOpen: isPopupOpen, popupType } = useSelector(state => state.popup);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return (
    <>
      {/* Navbar Header */}
      <div
        className="w-screen fixed z-[1000] shadow-lg px-2 flex justify-between items-center"
        style={{ backgroundColor: "#141524", height: "80px" }}
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="block">
            <img src="/logo.png" alt="Logo" className={Style.logo} />
          </Link>

          <div className={Style.navmenu}>
            <div className="flex gap-1">
              <FaHandHoldingUsd style={{ color: "#a9a9ca", fontSize: "20px", cursor: "pointer" }} />

              <a href="#earn">
                <span style={{ color: "#a9a9ca", cursor: "pointer" }}>Earn</span>
              </a>
            </div>
            {/* <div className="flex gap-1 mt-1">
              <BsCashCoin style={{ color: "#a9a9ca", fontSize: "20px", marginTop: "5px", cursor: "pointer" }} />
              <span style={{ color: "#a9a9ca", cursor: "pointer" }}>Cashout</span>
            </div> */}
            <a href="#cashout">

              <div className="flex gap-1 mt-1">
                <BsCashCoin style={{ color: "#a9a9ca", fontSize: "20px", marginTop: "5px", cursor: "pointer" }} />
                <span style={{ color: "#a9a9ca", cursor: "pointer" }}>Cashout</span>
              </div>
            </a>
          </div>
        </div>

        <div className={`flex items-center gap-2 ${Style.cusomgap1}`}>
          <button className={`btn ${Style.navmenu}`} style={{ cursor: "pointer" }}>
            <div id="google_translate_element" style={{ display: "none" }}></div>
            <BsGlobe style={{ fontSize: "20px", color: "#a9a9ca" }} />
          </button>

          <div className={Style.info}>
            <button
              className={Style.custombtn}
              onClick={() => dispatch(openPopup('signin'))}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Login
            </button>
            <button
              className={Style.custombtn}
              onClick={() => dispatch(openPopup('signup'))}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Sign Up
            </button>
          </div>

          <button
            className={`btn ${Style.togglerBtn}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <CiMenuFries style={{ fontSize: "22px" }} />
          </button>
        </div>
      </div>

      {/* Slide-out Menu */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[1100] shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
          <h5 className="text-lg font-semibold text-gray-800">Menu</h5>
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose className="text-2xl text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-500">Contact</Link>
          <Link to="/help" className="block text-gray-700 hover:text-blue-500">Help</Link>
        </div>
      </div> */}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw] max-w-[400px] bg-[#1c1e2b] z-[1100] shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <h5 className="text-lg font-semibold text-white">Menu</h5>
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose className="text-2xl text-white" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col px-6 py-5 space-y-5 text-white text-base font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <a href="#earn" className="hover:text-yellow-400 transition">Earn</a>
          <a href="#cashout" className="hover:text-yellow-400 transition">Cashout</a>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          <Link to="/help" className="hover:text-yellow-400 transition">Help</Link>
        </nav>
      </div>


      {/* Backdrop for slide menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-[1000]"
        />
      )}

      {/* Popup for login/signup */}
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 z-[1200]"
            onClick={() => dispatch(closePopup())}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />
          <div className="fixed top-1/2 left-1/2 z-[1300] transform -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-md">
            {popupType === 'signup' ? (
              <SignUp />
            ) : (
              <Signin />
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Header;
