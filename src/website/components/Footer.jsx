// import { Link } from "react-router-dom";
// import logo from "../../Common/loader/COIN_LOOTY_new_logo.gif";
// import trustpilot from "../assest/images/trustpilot.png";
// import { BiLogoFacebook } from "react-icons/bi";
// import { FiInstagram } from "react-icons/fi";
// import { AiOutlineTwitter } from "react-icons/ai";
// import icon from "../assest/images/english.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#111828] text-gray-300 pt-12 pb-4 px-6 md:px-12 border-t border-outline-variant px-4 py-8 text-center sm:px-6 lg:px-8 xl:px-10 border-gray-700">
//       <div className="container mx-auto max-w-7xl text-center md:text-left">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:items-start gap-2">
//           {/* Logo and Ratings Section */}
//           <div className="flex-1 mb-2 md:mb-0 flex flex-col items-center md:items-start">
//             <Link href="/">
//               <img
//                 src={logo}
//                 alt="Your Logo"
//                 width={200}
//                 height={40}
//                 className="cursor-pointer mb-4"
//               />
//             </Link>
//             <p className="text-gray-200">
//               Coin Looty is an online reward website for new generation where
//               you can start earning online today and turn your opinions into
//               cash
//             </p>
//           </div>

//           {/* Links Section */}
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-center md:text-left">
//             {/* Language Section */}
//             <div className="flex md:flex-col  flex-row items-center md:items-start justify-center md:justify-start gap-2">
//               <h3 className="text-white text-lg font-semibold md:mb-4 mb-0">
//                 Language
//               </h3>
//               <div className="flex items-center justify-center md:justify-start language-en">
//                 <img src={icon} alt="icon" />
//                 <span className="ml-2">English</span>
//               </div>
//             </div>

//             {/* About Section */}
//             <div className="flex flex-col items-center md:items-start hidden md:block">
//               <h3 className="text-white text-lg font-semibold mb-4">About</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="/blog"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/terms"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/privacy"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/cookies"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     Cookie Policy
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Ratings Section */}
//             <div className="flex-1 flex-col items-center md:items-start hidden md:block">
//               <div className="reviews">
//                 <p className="text-white">See our reviews on</p>
//                 <img src={trustpilot} alt="reviewsIcon" />
//               </div>
//               <ul className="social-icons">
//                 <li>
//                   <Link
//                     href="/"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     <BiLogoFacebook />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     <FiInstagram />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/"
//                     className="hover:text-teal-400 transition duration-300"
//                   >
//                     <AiOutlineTwitter />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom Text */}
//         <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm">
//           <p>Copyright © 2025 CoinLooty. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// old code is above 



import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full text-white py-12 bg-transparent min-h-[300px] relative">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 px-6">

        {/* Logo and Description */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <img src="/logo.png" alt="Coin Looty Logo" className="max-w-[300px] w-full" />
          <p className="max-w-[90%] text-left">
            Coin Looty is an online reward website for <span className="text-[#FFA900]">new generation</span> where you can start earning online today <span className="text-[#FFA900]">and turn your opinions</span> into cash.
          </p>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center gap-3 text-left">
            {[0, 1, 2, 3, 4].map(i => (
              <a key={i} href="">
                <img
                  src={`/zoo100${i}.png`}
                  alt=""
                  className=" customicon"
                />
              </a>
            ))}
          </div>


        </div>

        {/* Links section */}
        <div className="flex flex-wrap justify-between gap-6 lg:w-2/3">

          {/* Coinlooty */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Coinlooty</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              <a href="#" className=" text-white no-underline text-left">Daily Bonus</a>
              <a href="#" className=" text-white no-underline text-left">Wallet / My Rewards</a>
              <a href="#" className=" text-white no-underline text-left">How it Works</a>
              <a href="#" className=" text-white no-underline text-left">Refer & Earn</a>
            </div>
          </div>

          {/* Support */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Support</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              <a href="#" className=" text-white no-underline text-left">Help Center/FAQ</a>
              <a href="#" className=" text-white no-underline text-left">Live chat</a>
              <a href="#" className=" text-white no-underline text-left">Submit a Ticket</a>
              <a href="#" className=" text-white no-underline text-left">Email Support</a>
            </div>
          </div>

          {/* Legal */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Legal</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              {/* <a href="#" className=" text-white no-underline text-left">Privacy Policy</a> */}
              <Link to={'privacypolicy'}  className=" text-white no-underline text-left">
              Privacy Policy
              </Link>
              <Link to={'termcondition'}  className=" text-white no-underline text-left">
              Term & Condition
              </Link>
              <a href="#" className=" text-white no-underline text-left">Disclaimer</a>
            </div>
          </div>

          {/* Company */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Company</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              <a href="#" className=" text-white no-underline text-left">About Us</a>
              <a href="#" className=" text-white no-underline text-left">Team</a>
              <a href="#" className=" text-white no-underline text-left">Career</a>
            </div>
          </div>

          {/* App buttons */}
          <div className="min-w-[150px] flex flex-col gap-3">
            <img src="/newgoogleplay.webp" alt="Google Play" className="max-w-[160px] w-full" />
            <img src="/appstore.png" alt="App Store" className="max-w-[160px] w-full" />
          </div>
        </div>
      </div>

      {/* Divider + Disclaimer */}
      <hr className="h-[3px] w-[90vw] bg-white my-8 mx-auto" />

      <p className="text-white w-[90%] mx-auto text-center">Copyright © 2025 CoinLooty. All Rights Reserved.</p>
    </div>
  )
}

export default Footer