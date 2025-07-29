// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
// import offer1 from "../../assest/images/dummyoffers/offer1.jpeg";
// import offer2 from "../../assest/images/dummyoffers/offer2.jpeg";
// import offer3 from "../../assest/images/dummyoffers/offer3.jpeg";
// import trustpilot from "../../assest/images/trustpilot.png";
// import BaseUrl from "../../../Api/BaseUrl";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";
// import "./home.css";
// import icon1 from "../../assest/images/cashout/icon _Amazon_.png";
// import icon2 from "../../assest/images/cashout/icon _Bitcoin Cryptocurrency_.png";
// import icon3 from "../../assest/images/cashout/icon _Visa_.png";
// import icon4 from "../../assest/images/cashout/icon _apple logo_.png";
// import icon5 from "../../assest/images/cashout/Google-Play 2.png";
// import chooseOfferimg from "../../assest/images/chooseOffer.png";
// import compOfferimg from "../../assest/images/compOfferimg.png";
// import earnAward from "../../assest/images/earnAward.png";
// import cashoutImg from "../../assest/images/cashoutImg.png";
// import userImg from "../../assest/images/reviewUser.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import TextInput from "../../../Common/Input/TextInput";

// // Import Swiper styles
// import "swiper/css";
// import { Autoplay, Pagination } from "swiper/modules";
// import { fetchUserLiveMessages } from "../../../redux/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { LoadingContext, useLoading } from "../../../context/loading-context";
// import PasswordInput from "../../../Common/Input/PasswordInput";
// import Waystoearn from "../../components/Waystoearn";
// import Feature from "../../components/Features";
// import LiveCashOut from "./LiveCashOut";
// import TrustPilot from "./TrustPilot";
// import OfferPartners from "./OfferPartner";
// import RewardSlide1 from "./RewardSlide1";
// import RewardSlide2 from "./RewardSlide2";
// import RewardSlide3 from "./RewardSlide3";
// import EmailInput from "../../../Common/Input/EmailInput";

// const HomeNew = () => {
//   const { startLoading, stopLoading } = useLoading();
//   const navigate = useNavigate();
//   const liveMessages = useSelector((state) => state.user.messageList);
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [type, setType] = useState("password");
//   const [icon, setIcon] = useState(<FaEyeSlash />);

//   const handleGoogleLogin = async () => {
//     try {
//       startLoading();

//       // Initiate Google OAuth process using Axios
//       const response = await axios.get(
//         "https://api.coinlooty.com/auth/google/callback",
//         {
//           withCredentials: true, // Important for cookies/session
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = response.data;

//       if (data.authUrl) {
//         // Redirect to Google OAuth URL
//         window.location.href = data.authUrl;
//       } else {
//         toast.error("Unable to initiate Google login");
//       }
//     } catch (error) {
//       console.error("Google login error:", error);
//       toast.error("Login failed. Please try again.");
//     } finally {
//       stopLoading();
//     }
//   };

//   const validation = (e) => {
//     const noWhiteSpaceRegex = /^\S+$/;
//     if (
//       !noWhiteSpaceRegex.test(formData.email) ||
//       !noWhiteSpaceRegex.test(formData.password)
//     ) {
//       toast.error("No spaces allowed in username or password!");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === " ") {
//       e.preventDefault();
//     }
//   };

//   const handleToggleData = () => {
//     if (type === "password") {
//       setIcon(<FaEye />);
//       setType("text");
//     } else {
//       setIcon(<FaEyeSlash />);
//       setType("password");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validation()) return;
//     try {
//       startLoading();
//       const response = await fetch(`${BaseUrl}user/login`, {
//         method: "POST",
//         headers: {
//           accept: "application/json",
//         },
//         body: new URLSearchParams(formData),
//       });

//       const resData = await response.json();

//       if (resData.responseCode === 200) {
//         toast.success(resData.responseMessage);
//         localStorage.setItem(
//           "opinionUser",
//           JSON.stringify(resData.userDetails)
//         );
//         navigate("/dashboard");
//       } else {
//         toast.error(resData.responseMessage);
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       stopLoading();
//     }
//   };

//   useEffect(() => {
//     startLoading(); // Start loader

//     dispatch(fetchUserLiveMessages())
//       .catch(() => toast.error("Error fetching messages"))
//       .finally(() => stopLoading()); // Stop loader after fetching

//     // Load Montserrat font
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);




//   return (
//     <div className="bg-slate-800 landingBg">
//       <div className="main-banner">
//         <div className="mx-auto md:flex items-center md:pb-14 md:pt-8 pb-8 pt-6 px-3 relative content">
//           <div className="md:w-1/2 w-full">
//             <h1 className="md:text-4xl text-3xl font-bold text-white p-2 md:py-6 pb-4">
//               <span className="text-[#d13d5e]">Earn Rewards </span> By <br />
//               Sharing Your Opinion &<br /> Exploring New Apps
//             </h1>
//             <p className="text-white text-sm md:text-lg pb-4">
//               Earn money by testing apps, games and taking surveys. Earn up to{" "}
//               <span className="text-bg font-bold">$50.40 </span>per offer 494
//               available offers now. Get started today!
//             </p>

//             {/* banner */}
//             <div className="bannerOffers">
//               <div className="container mx-auto pb-2">
//                 <div className="flex justify-between items-center">
//                   <div className="item bg-[#384152] p-3 rounded-xl animation">
//                     <img
//                       src={offer3}
//                       alt="Netflix"
//                       className="object-cover rounded-xl"
//                       width={100}
//                     />
//                     <div className="offerContent">
//                       <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">
//                         Battle Grounds
//                       </h5>
//                       <p className="text-indigo-400 text-sm">Sign Up</p>
//                       <p className="font-bold price">$5.00</p>
//                     </div>
//                   </div>
//                   <div className="item bg-[#384152] p-3 rounded-xl topOffer animation">
//                     <img
//                       src={offer1}
//                       alt="Netflix"
//                       className="object-cover rounded-xl"
//                       width={100}
//                     />
//                     <div className="offerContent">
//                       <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">
//                         Candy Crush
//                       </h5>
//                       <p className="text-indigo-400 text-sm">Reach level 10</p>
//                       <p className="font-bold price">$5.00</p>
//                     </div>
//                   </div>
//                   <div className="item bg-[#384152] p-3 rounded-xl animation">
//                     <img
//                       src={offer2}
//                       alt="Netflix"
//                       className="object-cover rounded-xl"
//                       width={100}
//                     />
//                     <div className="offerContent">
//                       <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">
//                         Free Fire
//                       </h5>
//                       <p className="text-indigo-400 text-sm">Sign Up</p>
//                       <p className="font-bold price">$5.00</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* trustpilot */}
//           </div>
//           <div className="md:w-1/2 w-full">
//             <div className="reviews">
//               <div className="reviewShadow">
//                 <img src={trustpilot} alt="reviewsIcon" />
//                 <p className="text-[#E0E6F2] text-sm">
//                   See our 100000 reviews on
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 sm:p-6 md:p-6 bg-gray-700 rounded-lg shadow-md signup-form">
//               <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
//                 Sign In for Free
//               </h2>
//               <form onSubmit={handleSubmit} className="space-y-4 bannerForm">
//                 <div className="text-left">
//                   <div className="relative w-full gap-1">

//                     <EmailInput
//                     inputName={"emailAddress"}
//                     placeholderName={"Email Address"}
//                     valueName={formData?.email}
//                     handleChangeInput={(e) =>
//                       setFormData({ ...formData, email: [e.target.value] })
//                     }
//                     handleKeyDownInput={handleKeyDown}
//                   />
//                   </div>
//                   <div className="relative w-full mt-2">
//                     <PasswordInput
//                       type={type}
//                       inputName={"password"}
//                       placeholderName={"Password"}
//                       valueName={formData?.password}
//                       handleChangeInput={(e) =>
//                         setFormData({ ...formData, password: e.target.value })
//                       }
//                       handleKeyDownInput={handleKeyDown}
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-400 focus:outline-none"
//                       onClick={handleToggleData}
//                     >
//                       {icon}
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full submit-btn text-white px-3 py-2 rounded-md"
//                 >
//                   Start earning now
//                 </button>
//               </form>
//               <div>
//                 <p>
//                   By signing up you agree to the{" "}
//                   <Link to="/termcondition" className="text-bg font-bold">
//                     Term & Condition
//                   </Link>
//                     and{" "}
//                   <Link to="privacypolicy" className="text-bg font-bold">
//                     Privacy Policy
//                   </Link>
//                 </p>
//               </div>
//               <div className="flex justify-between items-center pt-1">
//                 <div className="flex justify-start items-center gap-1">
//                   {" "}
//                   <input type="checkbox" id="rembPass" name="rembPass" />
//                   <label htmlFor="rembPass" className="text-gray-400">
//                     Remember me
//                   </label>
//                 </div>
//                 <Link to="/forgotpassword" className="text-gray-400">
//                   Forgot password?
//                 </Link>
//               </div>
//               <div className="my-4 text-center text-gray-300 text-sm flex justify-between items-center gap-2">
//                 <div className="to-right-line"></div>
//                 <span>OR SIGN IN WITH</span>
//                 <div className="to-left-line"></div>
//               </div>
//               <div className="flex gap-2 justify-center">
//                 <div className="cursor-pointer">
//                   <button onClick={handleGoogleLogin}>
//                     <FcGoogle className="w-6 h-6 mr-2" />
//                   </button>
//                 </div>
//                 <div className="cursor-pointer">
//                   <FaFacebook className="w-6 h-6 mr-2 text-white" />
//                 </div>
//               </div>
//               <div className="pt-2 account-btn">
//                 <p>
//                   Don't have an acount yet?{" "}
//                   <Link to="/signup" className="text-bg">
//                     Register Now
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* get paid now  */}
//       <div className="how-it-works md:pt-3">
//         <div className="container mx-auto md:px-10 px-2 py-3">
//           <div className="sec-heading">
//             {/* <div className="heading-shadow"> 
//             </div> */}
//             <div className="relative">
//               <h5>Get paid now</h5>
//               <p>
//                 <span>Easily done </span>in minutes!
//               </p>
//             </div>
//           </div>
//           <div className="steps-sec">
//             <div className="items">
//               <div>
//                 <h5 className="text-start">1. Select an offer</h5>
//                 <p className="text-start">
//                   Explore exciting tasks on our 'Earn' page! Discover top offers
//                   from leading companies showcasing their apps, surveys, and
//                   products.
//                 </p>
//               </div>
//               <div className="img">
//                 <img src={chooseOfferimg} alt="gameImg" />
//               </div>
//             </div>
//             <div className="items">
//               <div>
//                 <h5 className="text-start">2. Complete the offer</h5>
//                 <p className="text-start">
//                   Our offers are straightforward and have already empowered
//                   thousands to earn money. Many can be completed in just a few
//                   minutes, making earning quick and convenient for you!
//                 </p>
//               </div>
//               <div className="img">
//                 <img src={compOfferimg} alt="gameImg" />
//               </div>
//             </div>
//             <div className="items">
//               <div>
//                 <h5 className="text-start">3. Get paid</h5>
//                 <p className="text-start">
//                   After finishing each task, you'll be rewarded with coins,
//                   where 1000 coins translate to $1.00. Simply redeem your coins
//                   to access your free reward!
//                 </p>
//               </div>
//               <div className="img">
//                 <img src={earnAward} alt="gameImg" />
//               </div>
//             </div>
//           </div>
//           <div className="explore-btn">
//             <button>Start earning now</button>
//           </div>
//         </div>
//       </div>

//       {/* offer partner  */}
//       <OfferPartners />
//       {/* <Waystoearn /> */}
//       <Feature />

//       {/* cashout */}
//       <div className="casoutSS">
//         {/* <div className="bg-shadows">
//                 </div> */}
//         <div className="cashoutVia py-2 md:px-4 px-2">
//           <div className="container mx-auto">
//             {/* <div className="sec-heading">
//               <div className="relative">
//                 <h5>Cashout via</h5>
//               </div>
//             </div>
//             <div className="">
//               <Swiper
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 4,
//                     spaceBetween: 20,
//                   },
//                   768: {
//                     slidesPerView: 4,
//                     spaceBetween: 40,
//                   },
//                   1024: {
//                     slidesPerView: 10,
//                     spaceBetween: 50,
//                   },
//                 }}
//                 className="mySwiper cashout-items"
//               >
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon1} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon2} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon3} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon4} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon5} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon1} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon2} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon3} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon4} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon5} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon1} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon2} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon3} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon4} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon5} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon1} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon2} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="items">
//                     <img src={icon3} alt="cashoutIcon" />
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div> */}
//             <RewardSlide1/>
//             <RewardSlide2/>
//             <RewardSlide3/>
//           </div>

//         </div>
//       </div>


//       {/* live cash out  */}
//       <LiveCashOut value={435789.54} />

//       {/* Trust Pilot */}
//       <TrustPilot />

//       <div className="userTestimonialSec py-5 md:pt-6 px-2">
//         <div className="container mx-auto md:px-10 px-2">
//           <div className="sec-heading">
//             {/* <div className="heading-shadow"> 
//             </div> */}
//             <div className="relative">
//               <h5>User Testimonials</h5>
//               <p>
//                 What our members say about <span>Coin Looty </span>
//               </p>
//             </div>
//           </div>
//           <div className="testi-sec flex md:flex-row flex-col md:p-4 md:pt-4 pb-6 gap-2">
//             <Swiper
//             modules={[Pagination, Autoplay]}
//               // pagination={true}
//               slidesPerView={2}
//               spaceBetween={10}
//               centeredSlides={true}
//               loop={true} 
//               autoplay={{ delay: 0, disableOnInteraction: false, stopOnLastSlide: false }}
//               // pagination={{
//               // clickable: true,
//               // }}
//               speed={2500}
//               dir="rtl"
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                   spaceBetween: 10,
//                 },
//                 768: {
//                   slidesPerView: 3,
//                   spaceBetween: 20,
//                 },
//                 1024: {
//                   slidesPerView: 4,
//                   spaceBetween: 20,
//                 },
//               }}
//               className="testiSwiper"
//             >
//               <SwiperSlide>
//                 {/* <div className="items">
//                   <div className="img">
//                     <img src={userImg} alt="gameImg" />
//                     <div className="aboutUser">
//                       <h5>Nitin Poddar </h5>
//                       <span>30|01|2025</span>
//                     </div>
//                   </div>
//                   <div className="content">
//                     <p>
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its
//                       definitely top 5 sites."
//                     </p>
//                   </div>
//                 </div> */}
//                 <div className="text-white w-full h-full cursor-pointer slide">
//                   <div className="flex flex-col px-2.5 pt-4 pb-2.5 w-full h-full bg-[#1e1e2e] rounded-xl">
//                     <header className="flex gap-4 items-start self-start">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4fd208caa41ac3f5858edfd4bdba19af95e68530373993097aeffc18fe489d9b?placeholderIfAbsent=true"
//                         alt={`Nitin Poddar profile`}
//                         className="object-contain shrink-0 w-6 rounded aspect-square"
//                       />
//                       <div className="flex flex-col">
//                         <h3 className="text-xs font-semibold text-start">
//                           Nitin Poddar
//                         </h3>
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/2e20c9faef669f017e42e20435a674e54660c96c0d1f0ffcb886c49c6216a90b?placeholderIfAbsent=true"
//                           alt="Rating"
//                           className="object-contain aspect-[5] w-[50px] text-start"
//                         />
//                         <time className="self-start text-xs font-medium text-start">
//                           "30|01|2025"
//                         </time>
//                       </div>
//                     </header>
//                     <p className="mt-4 text-md font-semibold text-start">
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its definitely top 5
//                       sites."
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-white w-full h-full cursor-pointer slide">
//                   <div className="flex flex-col px-2.5 pt-4 pb-2.5 w-full h-full bg-[#1e1e2e] rounded-xl">
//                     <header className="flex gap-4 items-start self-start">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4fd208caa41ac3f5858edfd4bdba19af95e68530373993097aeffc18fe489d9b?placeholderIfAbsent=true"
//                         alt={`Nitin Poddar profile`}
//                         className="object-contain shrink-0 w-6 rounded aspect-square"
//                       />
//                       <div className="flex flex-col">
//                         <h3 className="text-xs font-semibold text-start">
//                           Nitin Poddar
//                         </h3>
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/2e20c9faef669f017e42e20435a674e54660c96c0d1f0ffcb886c49c6216a90b?placeholderIfAbsent=true"
//                           alt="Rating"
//                           className="object-contain aspect-[5] w-[50px] text-start"
//                         />
//                         <time className="self-start text-xs font-medium text-start">
//                           "30|01|2025"
//                         </time>
//                       </div>
//                     </header>
//                     <p className="mt-4 text-md font-semibold text-start">
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its definitely top 5
//                       sites."
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-white w-full h-full cursor-pointer slide">
//                   <div className="flex flex-col px-2.5 pt-4 pb-2.5 w-full h-full bg-[#1e1e2e] rounded-xl">
//                     <header className="flex gap-4 items-start self-start">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4fd208caa41ac3f5858edfd4bdba19af95e68530373993097aeffc18fe489d9b?placeholderIfAbsent=true"
//                         alt={`Nitin Poddar profile`}
//                         className="object-contain shrink-0 w-6 rounded aspect-square"
//                       />
//                       <div className="flex flex-col">
//                         <h3 className="text-xs font-semibold text-start">
//                           Nitin Poddar
//                         </h3>
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/2e20c9faef669f017e42e20435a674e54660c96c0d1f0ffcb886c49c6216a90b?placeholderIfAbsent=true"
//                           alt="Rating"
//                           className="object-contain aspect-[5] w-[50px] text-start"
//                         />
//                         <time className="self-start text-xs font-medium text-start">
//                           "30|01|2025"
//                         </time>
//                       </div>
//                     </header>
//                     <p className="mt-4 text-md font-semibold text-start">
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its definitely top 5
//                       sites."
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-white w-full h-full cursor-pointer slide">
//                   <div className="flex flex-col px-2.5 pt-4 pb-2.5 w-full h-full bg-[#1e1e2e] rounded-xl">
//                     <header className="flex gap-4 items-start self-start">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4fd208caa41ac3f5858edfd4bdba19af95e68530373993097aeffc18fe489d9b?placeholderIfAbsent=true"
//                         alt={`Nitin Poddar profile`}
//                         className="object-contain shrink-0 w-6 rounded aspect-square"
//                       />
//                       <div className="flex flex-col">
//                         <h3 className="text-xs font-semibold text-start">
//                           Nitin Poddar
//                         </h3>
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/2e20c9faef669f017e42e20435a674e54660c96c0d1f0ffcb886c49c6216a90b?placeholderIfAbsent=true"
//                           alt="Rating"
//                           className="object-contain aspect-[5] w-[50px] text-start"
//                         />
//                         <time className="self-start text-xs font-medium text-start">
//                           "30|01|2025"
//                         </time>
//                       </div>
//                     </header>
//                     <p className="mt-4 text-md font-semibold text-start">
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its definitely top 5
//                       sites."
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-white w-full h-full cursor-pointer slide">
//                   <div className="flex flex-col px-2.5 pt-4 pb-2.5 w-full h-full bg-[#1e1e2e] rounded-xl">
//                     <header className="flex gap-4 items-start self-start">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4fd208caa41ac3f5858edfd4bdba19af95e68530373993097aeffc18fe489d9b?placeholderIfAbsent=true"
//                         alt={`Nitin Poddar profile`}
//                         className="object-contain shrink-0 w-6 rounded aspect-square"
//                       />
//                       <div className="flex flex-col">
//                         <h3 className="text-xs font-semibold text-start">
//                           Nitin Poddar
//                         </h3>
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/2e20c9faef669f017e42e20435a674e54660c96c0d1f0ffcb886c49c6216a90b?placeholderIfAbsent=true"
//                           alt="Rating"
//                           className="object-contain aspect-[5] w-[50px] text-start"
//                         />
//                         <time className="self-start text-xs font-medium text-start">
//                           "30|01|2025"
//                         </time>
//                       </div>
//                     </header>
//                     <p className="mt-4 text-md font-semibold text-start">
//                       "I really enjoy this site I earn quite a bit of money it
//                       has alot of offerwalls and surveys its definitely top 5
//                       sites."
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomeNew;

// old code is above 




import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../../redux/user/popupSlice';
import Scroller from './scroller/scroller';
import Carousel from './controller';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const HomeNew = () => {
  const dispatch = useDispatch();
  const starStyle = {
    color: '#FFA900',
    fontSize: '25px',
    marginTop: '3px',
    marginLeft: '5px',
  };

  const cards = ['zoo100.png', 'zoo101.png', 'zoo102.png', 'zoo103.png', 'zoo104.png', 'zoo105.png', 'zoo106.png', 'zoo107.png', 'zoo108.png', 'soo101.png', 'soo2003.png', 'soo2002.png'];
  const card1 = ['zoo109.png', 'zoo110.png', 'zoo111.png', 'zoo112.png', 'zoo113.png', 'zoo114.png', 'zoo115.png', 'zoo116.png', 'zoo117.png'];

  return (
    <>
      {/* Hero background section */}
      <div className="w-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>



        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-white pt-[140px] text-center space-y-5">

            {/* Narrowed width for h1 and p */}
            <div className="max-w-xl w-full">
              <h1 className="font-bold font-sans " style={{ fontSize: "30px" }}>
                <span className="text-[#FFA900]">Earn Rewards</span> By Sharing Your Opinion & Exploring New Apps
              </h1>
              <p className="mt-3">
                Earn money by testing apps, games and taking surveys. Earn up to{' '}
                <b className="text-[#FFA900]">$50.40</b> per offer 494 available offers now. Get started today!
              </p>
            </div>

            <button className="w-[200px] bg-[#FFA900] rounded-full shadow-lg py-2 font-semibold text-black" onClick={() => dispatch(openPopup('signup'))}>
              Sign UP
            </button>

          </div>

        </div>


        <Scroller />

        <div className="container mx-auto px-4">
          <div className="yo">
            <div>
              <span className="text-2xl font-bold">$60,000,000+</span>
              <span>Paid Out to Users</span>
            </div>
            <div>
              <span className="text-2xl font-bold">1M+</span>
              <span>Active Users Worldwide</span>
            </div>
            <div>
              <span className="text-2xl font-bold">4.6 EXCELLENT</span>
              <div className="flex">
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStarHalfAlt style={starStyle} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats section */}
      {/* <div className="container mx-auto px-4">
        <div className="yo">
          <div>
            <span className="text-2xl font-bold">$60,000,000+</span>
            <span>Paid Out to Users</span>
          </div>
          <div>
            <span className="text-2xl font-bold">1M+</span>
            <span>Active Users Worldwide</span>
          </div>
          <div>
            <span className="text-2xl font-bold">4.6 EXCELLENT</span>
            <div className="flex">
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStarHalfAlt style={starStyle} />
            </div>
          </div>
        </div>
      </div> */}

      {/* Offer instructions */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="text-white space-y-4">
            <h1 className="font-bold font-sans text-xl text-left">1. CHOOSE AN OFFER</h1>
            <p className="w-[90%] ml-5 text-left">Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.
            </p>

            <img src="/pandafinal.png" alt="" className="img-fluid yopanda rounded-2xl" />

            <h3 className="font-bold font-sans mt-3 text-xl text-left">2. COMPLETE OFFER</h3>
            <p className="w-[90%] ml-5 text-left">Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.</p>

            <h3 className="font-bold font-sans mt-3 text-xl text-left">3. GET PAID</h3>
            <p className="w-[90%] ml-5 text-left">For each task you complete, you’ll be rewarded with coins: 1000 coins = $1,00. Cashout the coins and get your hands on your free cash!</p>
          </div>

          <div className="contentWrapper secondSection flex flex-col gap-4 text-white">
            <h2 className="text-center font-bold font-sans w-[80%] mx-auto forpadding"

            >
              WANT TO POCKET SOME QUICK CASH? FIND OUT <span className="text-[#FFA900]">HOW HERE</span>
            </h2>
            <button className="bg-[#FFA900] text-black font-bold text-xl py-2 w-[280px] rounded-full mx-auto" onClick={() => dispatch(openPopup('signin'))}>
              Start earning now
            </button>
            <img src="/yoyo.png" alt="" className="img-fluid pandaimg rounded-2xl mt-4" />
          </div>
        </div>
      </div>

      {/* Highlighted section */}
      <div className="col col-11 col-lg-5 mx-auto mt-8 custom2heading">
        <h2 className="text-white font-bold font-sans text-center" style={{ fontSize: "25px" }}>
          WE'RE THE ROP SPOT TO BOOST YOUR EARNING. <span className="text-[#FFA900]">DISCOVER WHY</span>
        </h2>
      </div>

      {/* Image triplet */}
      <div className="container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-4 customtriple">
        {['zoo2.png', 'zoo3.png', 'zoo1.png'].map((img, i) => (
          <img key={i} src={`/${img}`} alt="" className="img-fluid yopanda  mx-auto imgfor" />
        ))}
      </div>

      {/* Earning Cards */}
      {/* <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
                {[
                    { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash...' },
                    { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps...' },
                    { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters!' },
                ].map((card, index) => (
                    <div key={index} className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3">
                        <div
                            className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
                            style={{ backgroundImage: `url('/${card.img}')` }}
                        />
                        <span className="text-2xl font-bold font-sans">{card.title}</span>
                        <p className="w-[90%] mx-auto">{card.desc}</p>
                        <h3 className="text-[#27FD6A] font-bold">{card.value}</h3>
                        <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full">
                            Start Playing & Earning
                        </button>
                    </div>
                ))}
            </div> */}

      <h1 style={{ color: "white", fontSize: "30px", textAlign: "center", margin: "20px 0px", fontWeight: "bold" }} className='font-sans' >EXCITED WAYS TO <span style={{ color: "#FFA900" }}>MAKE MONEY!</span></h1>

      <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6 justify-center" >
        {[
          { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash. It’s that simple—try out exciting new games and get rewarded.' },
          { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps. Get Paid Instantly. Making money has never been this easy.' },
          { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters! Companies pay you to improve their products and services.' },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3 mx-auto max-w-[305px] w-full" style={{ padding: "40px 0px" }}
          >
            <div
              className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
              style={{ backgroundImage: `url('/${card.img}')` }}
            />
            <span className="text-2xl font-bold font-sans">{card.title}</span>
            <p className="w-[90%] mx-auto" style={{ textAlign: "center" }}>{card.desc}</p>
            <h3 className="text-[#27FD6A] font-bold" style={{ fontSize: "25px" }}>{card.value}</h3>
            <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full" onClick={() => dispatch(openPopup('signin'))}>
              Start Playing & Earning
            </button>
          </div>
        ))}
      </div>


      {/* Partners */}
      <div className="container mx-auto px-4 mt-12 text-center text-white font-bold">
        <h3 style={{ fontSize: "30px" }}>INTEGRATED <span className="text-[#FFA900]">PARTNER</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-4 ">
          {cards.map((img, i) => (
            <img key={i} src={`/${img}`} alt="" className="w-[90%] mx-auto customway" />
          ))}
        </div>
      </div>

      {/* Cashout */}
      <div className="container mx-auto px-4 mt-12 text-center text-white font-bold">
        <h3 style={{ fontSize: "30px" }}>CASHOUT <span className="text-[#FFA900]">VIA</span></h3>
        <div className="flex flex-wrap justify-center mt-6 gap-4 youCard">
          {/* {card1.map((img, index) => (
                        <img
                            key={index}
                            src={`/${img}`}
                            alt=""
                            className="customLogocards w-[100px] h-auto mx-auto"
                        />
                    ))} */}
          <img
            src='/zoo109.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo110.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo111.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo112.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo113.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo114.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo115.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo116.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo117.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto hiddlelogoformobile"
          />
        </div>
        <img src="/zoo700.png" alt="" className="img-fluid mt-20" style={{ width: "1000px", margin: "60px auto" }} />

        {/* <CashoutDashboard/> */}
      </div>

      {/* Carousel section */}
      <Carousel />



      {/* Community section */}
      <div
        className="w-full bg-cover bg-center py-12 px-4"
        style={{ backgroundImage: `url('/zoo2000.png')`, marginTop: "0px" }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src="/zoo2001.png" alt="" className="img-fluid mx-auto" />
          <div className="text-white space-y-4 text-left">
            <h3 className="font-bold font-sans footPara text-xl" >Join the community</h3>
            <p className="footPara1 w-[80%]">
              When you sign up for Freecash, you join a community of millions of people who choose to make money online. This amazing community can help you to complete the offers fast and earn more money.
              In this video, one of our community members shares how to get started on Freecash now.
            </p>
          </div>
        </div>
      </div>






      {/*  */}
    </>
  );
};

export default HomeNew;
