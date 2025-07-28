// import { Link } from "react-router-dom";
// import logo from "../../Common/loader/COIN_LOOTY_new_logo.gif";
// import { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [tab, setTab] = useState('signin')
//   return (
//     <header className="header bg-gray-900 md:py-4 p-2">
//       <div className="header-wrapper">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="wrapper flex md:gap-8 gap-4 justify-between items-center">
//             <div className="logo">
//               <Link to="/">
//                 {" "}
//                 <img src={logo} alt="Website Logo" width={200} />
//               </Link>
//             </div>
//             <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
//               <ul className="nav-links flex md:gap-4 hidden md:flex">
//                 <li className="text-gray-200 capitalize font-medium hover:text-gray-400">
//                   <Link to="/">earn</Link>
//                 </li>
//                 <li className="text-gray-200 capitalize font-medium hover:text-gray-400">
//                   <Link to="/">cashout</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="account flex md:gap-3 gap-2">
//             <Link to="/">
//               {" "}
//               <button className={`btn text-white rounded-full md:px-4 px-3 signin sm:text-sm ${tab === "signin" ? "active" : ""}`} onClick={() => setTab("signin")}>
//                 Sign In
//               </button>
//             </Link>
//             <Link to="/signup">
//               {" "}
//               <button className={`btn text-white border rounded-full md:px-4 px-3 signup ${tab === "signup" ? "active" : ""}`} onClick={() => setTab("signup")}>
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//           {/* <div className="hamburger" onClick={toggleMenu}>
//       <span>&#9776;</span>
//     </div> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// old coinlooty code is above



import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Style from './style.module.css';
import { BsGlobe, BsCashCoin } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SignUp = ({ isPopupOpen, setIsPopupOpen }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors before making a new request

    try {
      const response = await fetch("https://api.coinlooty.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          userName,
          email,
          mobile,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "Ok") {
        // Handle successful signup (store token, user details, etc.)
        setData(result);
        console.log("SignUp successful:", result);
      } else {
        // Handle errors (user already exists, invalid data, etc.)
        setError(result.responseMessage || "Sign Up failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="bg-[#1E1B2E] text-white w-full max-w-md rounded-2xl p-6 overflow-y-auto hide-scrollbar relative"
        style={{ maxHeight: '90vh' }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-0 right-0 text-white hover:text-gray-300"
          style={{margin:"10px 20px"}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Error or Success Message */}
        {error ? (
          <h2 style={{ color: "red", fontSize: "17px", textAlign: "center" }}>{error}</h2>
        ) : data && data.status === "Ok" ? (
          <h2 style={{ color: "green", fontSize: "17px", textAlign: "center" }}>
            {data.responseMessage}
          </h2>
        ) : null}

        {/* Form Fields */}
        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          {[ 
            { label: 'First Name', value: firstName, setValue: setFirstName, placeholder: 'Enter First Name' },
            { label: 'Last Name', value: lastName, setValue: setLastName, placeholder: 'Enter Last Name' },
            { label: 'User Name', value: userName, setValue: setUserName, placeholder: 'Enter User Name' },
            { label: 'Email Address', value: email, setValue: setEmail, placeholder: 'Enter Email Address' },
            { label: 'Mobile', value: mobile, setValue: setMobile, placeholder: 'Enter Mobile' },
            { label: 'Password', value: password, setValue: setPassword, placeholder: 'Enter Password', type: 'password' }
          ].map(({ label, value, setValue, placeholder, type = 'text' }, i) => (
            <div key={i}>
              <label className="text-sm" style={{marginLeft:"-80%"}}>{label}</label>
              <div className="flex items-center mt-1 bg-[#2B2A3D] rounded-lg px-3 py-2">
                <span className="mr-3 text-lg text-gray-400">
                  {type === 'password' ? <FaLock /> : <FaEnvelope />}
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
          <div className="flex items-start space-x-2 text-xs text-white" style={{ margin: "10px 0px" }}>
            <input type="checkbox" id="terms" className="mt-1 accent-yellow-400" />
            <label htmlFor="terms">
              By signing up you agree to the <span className="text-yellow-400 font-semibold"><Link to={'termcondition'}>
              Term & Condition
              </Link></span> and{' '}
              <span className="text-yellow-400 font-semibold"><Link to={'privacypolicy'}>Privacy Policy</Link></span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 rounded-xl mt-5 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Social Auth */}
        <div className="my-4 text-center text-sm text-gray-400">or sign up with</div>
        <div className="flex justify-center gap-6 mt-2">
          <button className="text-2xl"><FcGoogle /></button>
          <button className="text-2xl text-blue-600"><FaFacebook /></button>
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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors before making a new request

    try {
      const response = await fetch("https://api.coinlooty.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login (store token, user details, etc.)
        setData(result);  // Store full result to check responseMessage and other details
        console.log("Login successful:", result);
      } else {
        // Handle errors (invalid credentials, etc.)
        setError(result.responseMessage || "Login failed. Please try again.");
        console.log(result);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
          onClick={() => setIsPopupOpen(false)}
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
              <label htmlFor="email" className="text-white text-sm font-semibold mb-2 block" style={{marginLeft:"-87%"}}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-white text-sm font-semibold mt-2 mb-2 block" style={{marginLeft:"-81%"}}>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-right text-[13px]" style={{ margin: "5px" }}>
                {/* <a href="#" className="text-yellow-400 hover:underline">
                  Forget your password?
                </a> */}
                <Link to={"forgotpassword"} className="text-yellow-400 hover:underline">
                Forget your password
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white font-semibold rounded-md ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#ffce3a] to-[#fba207]"
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
            onClick={() => {
              setPopupType("signup");
              setIsPopupOpen(true);
            }}
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('signin'); // 'signin' or 'signup'

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
          <a href="#" className="block">
            <img src="/logo.png" alt="Logo" className={Style.logo} />
          </a>
          <div className={Style.navmenu}>
            <div className="flex gap-1">
              <FaHandHoldingUsd style={{ color: "#a9a9ca", fontSize: "20px", cursor: "pointer" }} />
              <span style={{ color: "#a9a9ca", cursor: "pointer" }}>Earn</span>
            </div>
            <div className="flex gap-1 mt-1">
              <BsCashCoin style={{ color: "#a9a9ca", fontSize: "20px", marginTop: "5px", cursor: "pointer" }} />
              <span style={{ color: "#a9a9ca", cursor: "pointer" }}>Cashout</span>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-2 ${Style.cusomgap1}`}>
          <button className={`btn ${Style.navmenu}`} style={{ cursor: "pointer" }}>
            {/* i just want to display glob icon fix that here */}
            {/* <div id="google_translate_element" className="mb-4">
              <BsGlobe style={{ fontSize: "20px", color: "#a9a9ca" }}   />

            </div> */}
            <div id="google_translate_element" style={{ display: "none" }}></div>

            <BsGlobe   style={{ fontSize: "20px", color: "#a9a9ca" }}   />


            
            
          </button>
          <div className={Style.info}>
            <button
              className={Style.custombtn}
              onClick={() => {
                setPopupType('signin');
                setIsPopupOpen(true);
              }}
              style={{ cursor: "pointer",fontWeight:"bold" }}
            >
              Login
            </button>
            <button
              className={Style.custombtn}
              onClick={() => {
                setPopupType('signup');
                setIsPopupOpen(true);
              }}
              style={{ cursor: "pointer",fontWeight:"bold" }}
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
      <div
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
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Help</a>
        </div>
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
            onClick={() => setIsPopupOpen(false)}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />
          <div className="fixed top-1/2 left-1/2 z-[1300] transform -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-md">
            {popupType === 'signup' ? (
              <SignUp setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} />
            ) : (
              <Signin setIsPopupOpen={setIsPopupOpen} setPopupType={setPopupType} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;




// import Style, SignUp, Signin from your local files

