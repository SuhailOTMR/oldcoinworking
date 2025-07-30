import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/user/popupSlice';

const Footer = () => {
  const dispatch = useDispatch();
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
            {/* {[0, 1, 2, 3, 4].map(i => (
              <a key={i} href="">
                <img
                  src={`/zoo100${i}.png`}
                  alt=""
                  className=" customicon"
                />
              </a>
            ))} */}

            <a href="">
              <img
                src={`/zoo1000.png`}
                alt=""
                className=" customicon"
              />
            </a>
            <a href="">
              <img
                src={`/zoo1001.png`}
                alt=""
                className=" customicon"
              />
            </a>
            <a href="">
              <img
                src={`/zoo1002.png`}
                alt=""
                className=" customicon"
              />
            </a>
            <a href="">
              <img
                src={`/zoo1003.png`}
                alt=""
                className=" customicon"
              />
            </a>
            <a href="https://www.instagram.com/coinlooty/">
              <img
                src={`/zoo1004.png`}
                alt=""
                className=" customicon"
              />
            </a>

          </div>


        </div>

        {/* Links section */}
        <div className="flex flex-wrap justify-between gap-6 lg:w-2/3">

          {/* Coinlooty */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Coinlooty</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              {/* <a href="#" className=" text-white no-underline text-left">Daily Bonus</a> */}
              <button onClick={() => dispatch(openPopup('signin'))} className=" text-white no-underline text-left">Daily Bonus</button>
              {/* <a href="#" className=" text-white no-underline text-left">Wallet / My Rewards</a> */}
              <button onClick={() => dispatch(openPopup('signin'))} className=" text-white no-underline text-left">Wallet / My Rewards</button>
              <a href="#how" className=" text-white no-underline text-left">How it Works</a>
              {/* <a href="#" className=" text-white no-underline text-left">Refer & Earn</a> */}
               <button onClick={() => dispatch(openPopup('signin'))} className=" text-white no-underline text-left">Refer & Earn</button>
            </div>
          </div>

          {/* Support */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Support</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              {/* <a href="#" className=" text-white no-underline text-left">Help Center/FAQ</a> */}
              <Link to={'faq'} className=" text-white no-underline text-left">
                Help Center/FAQ
              </Link>
              {/* <a href="#" className=" text-white no-underline text-left">Live chat</a> */}
              <button onClick={() => dispatch(openPopup('signin'))} className=" text-white no-underline text-left">Live chat</button>
              <button onClick={() => dispatch(openPopup('signin'))} className=" text-white no-underline text-left">Submit a ticket</button>
              <a href="#" className=" text-white no-underline text-left">Email Support</a>
            </div>
          </div>

          {/* Legal */}
          <div className="min-w-[150px]">
            <h3 className="font-bold font-sans text-left" style={{ color: "#FFA900" }}>Legal</h3>
            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{ marginTop: "3px" }} />
            <div className="flex flex-col gap-2">
              {/* <a href="#" className=" text-white no-underline text-left">Privacy Policy</a> */}
              <Link to={'privacypolicy'} className=" text-white no-underline text-left">
                Privacy Policy
              </Link>
              <Link to={'termcondition'} className=" text-white no-underline text-left">
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
              {/* <a href="#" className=" text-white no-underline text-left">About Us</a> */}
              <Link to={'about-us'} className=" text-white no-underline text-left">
              About Us
              </Link>
              <a href="#" className=" text-white no-underline text-left">Team</a>
              <a href="#" className=" text-white no-underline text-left">Career</a>
            </div>
          </div>

          {/* App buttons */}
          <div className="min-w-[150px] flex flex-col gap-3">
            {/* <img src="/newgoogleplay.webp" alt="Google Play" className="max-w-[160px] w-full" /> */}
            <Link to={'soon'}>
              <img src="/newgoogleplay.webp" alt="Google Play" className="max-w-[160px] w-full" />
            </Link>
            {/* <img src="/appstore.png" alt="App Store" className="max-w-[160px] w-full" /> */}
            <Link to={'soon'}>
              <img src="/appstore.png" alt="App Store" className="max-w-[160px] w-full" /> 
            </Link>
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