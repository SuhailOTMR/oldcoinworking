import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import img from "../../../assest/images/dollar.png";
import doubleDoller from "../../../assest/images/doubledoller.png";
import promo from "../../../assest/images/promo.png";

const Rewards = ({ className = "" }) => {
  const data = [
    {
      id: 1,
      icon: <FaYoutube className="w-8 h-8 text-red-500" />,
      coins: 1500,
      text: "Create a video",
    },
    {
      id: 2,
      icon: <FaDiscord className="w-8 h-8 text-[#9552FF]" />,
      coins: 50,
      text: "Join our Discord",
    },
    {
      id: 3,
      icon: <FaFacebook className="w-8 h-8 text-[#0285FF]" />,
      coins: 1500,
      text: "Create a video",
    },
    {
      id: 4,
      icon: <FaYoutube className="w-8 h-8 text-red-500" />,
      coins: 1500,
      text: "Create a video",
    },
    {
      id: 5,
      icon: <FaDiscord className="w-8 h-8 text-[#9552FF]" />,
      coins: 50,
      text: "Join our Discord",
    },
    {
      id: 6,
      icon: <FaFacebook className="w-8 h-8 text-[#0285FF]" />,
      coins: 1500,
      text: "Create a video",
    },
    {
      id: 7,
      icon: <FaYoutube className="w-8 h-8 text-red-500" />,
      coins: 1500,
      text: "Create a video",
    },
    {
      id: 8,
      icon: <FaDiscord className="w-8 h-8 text-[#9552FF]" />,
      coins: 50,
      text: "Join our Discord",
    },
    {
      id: 9,
      icon: <FaFacebook className="w-8 h-8 text-[#0285FF]" />,
      coins: 1500,
      text: "Create a video",
    },
  ];
  const [promoCode, setPromoCode] = useState("");

  const handleSubmit = () => {
    if (promoCode.trim()) {
      // Handle promo code submission
      console.log("Promo code submitted:", promoCode);
    }
  };
  return (
    <div className="p-4">
      <div
        className={`flex flex-col ${className}`}
        style={{ minWidth: "300px" }}
      >
        <h1 className="text-2xl font-bold text-white mb-4 text-left">
          Rewards
        </h1>

        <div className="bg-[#1e1e2e] rounded-lg p-6 flex flex-col items-center">
          {/* Profile Section */}
          <div className="relative w-24 h-24 mb-4">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z9fUT5IdzXb5OlUl/ellipse-6.png"
              alt="Profile"
              className="w-full h-full rounded-full border-2 border-[#ffd900] object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold text-white mb-2">
            Marco_Devis
          </h2>
          <p className="text-sm font-medium text-white mb-1">
            Reach to level 2
          </p>
          <p className="text-xl font-extrabold bg-gradient-to-r from-[#ffd900] to-[#ffa900] bg-clip-text text-transparent mb-6">
            Get 100 coins
          </p>

          {/* Claim Button */}
          <button className=" submit-btn rounded-full px-8 py-2 mb-6">
            <span className="text-md font-bold text-[#1e1e2e]">
              Claim daily rewards
            </span>
          </button>

          <hr className="w-full border-[#8d8989] mb-4" />

          {/* Level Indicators */}
          <div className="relative w-full mb-8 px-2">
            {/* Progress Bar */}
            <div className="h-2 bg-[#141524] w-full rounded-full" />

            {/* Level Buttons */}
            <div className="flex justify-between items-center -mt-4 flex-wrap gap-2">
              <button className="submit-btn rounded-full px-6 py-1 flex items-center min-w-[80px] max-w-xs">
                <span className="text-xs font-semibold text-[#141524]">
                  Level 1
                </span>
              </button>

              <button className="bg-[#141524] rounded-full px-6 py-1 flex items-center border border-[#ffd900] min-w-[80px] max-w-xs">
                <span className="text-xs font-semibold text-white">
                  Level 2
                </span>
              </button>

              <button className="bg-[#141524] rounded-full px-6 py-1 border flex items-center border-[#ffd900] min-w-[80px] max-w-xs">
                <span className="text-xs font-semibold text-white">
                  Level 3
                </span>
              </button>
            </div>
          </div>

          {/* Reward Cards */}
          <div className="flex flex-wrap justify-center sm:justify-between w-full gap-4">
            <div className="flex-1 bg-[#141524] rounded-xl border border-[#b4b4b2] p-4 flex flex-col items-center min-w-[120px] max-w-[200px] w-full sm:w-auto">
              <img src={doubleDoller} alt="50 coins" className="w-8 h-8 mb-2" />
              <span className="text-white font-medium">50</span>
              <span className="text-[#707070] font-medium">Coins</span>
              <div className="mt-auto">
                <div className="bg-[#707070] rounded-xl px-4 py-1 flex items-center">
                  <span className="text-white text-sm">Claimed</span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#141524] rounded-xl border border-[#b4b4b2] p-4 flex flex-col items-center min-w-[120px] max-w-[200px] w-full sm:w-auto">
              <img
                src={doubleDoller}
                alt="100 coins"
                className="w-8 h-8 mb-2"
              />
              <span className="text-white font-medium">100</span>
              <span className="text-[#707070] font-medium">Coins</span>
              <div className="mt-auto">
                <div className="bg-[#707070] rounded-xl px-4 py-1 flex items-center">
                  <span className="text-white text-sm">Claimed</span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#141524] rounded-xl border border-[#b4b4b2] p-4 flex flex-col items-center min-w-[120px] max-w-[200px] w-full sm:w-auto">
              <img src={promo} alt="Bronze" className="w-8 h-8 mb-2" />
              <span className="text-white font-medium">Bronze</span>
              <span className="text-[#707070] font-medium">Promo Code</span>
              <div className="mt-auto">
                <div className="bg-[#707070] rounded-xl px-4 py-1 flex items-center">
                  <span className="text-white text-sm">Claimed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#1e1e2e] text-white w-full p-4 rounded-lg mt-4">
        <div className="mb-4 text-left">
          <h2 className="text-3xl font-bold mb-2">Tasks</h2>
          <p className="text-xl">
            Follow our socials to get notified of when we drop new bonus codes
          </p>
        </div>
        <div className="w-full mb-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            // pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}
            className="w-full"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center bg-[#141524] p-4 rounded-xl w-auto max-w-[300px] mx-auto">
                  <div className="flex items-center justify-around w-full">
                    {item.icon}
                    <div className="flex items-center">
                      <img src={img} alt="Coin" className="w-5 h-5 mr-2" />
                      <p className="text-lg font-semibold">{item.coins}</p>
                    </div>
                  </div>
                  <div className="pt-5 text-center">
                    <p className="text-lg">{item.text}</p>
                    <button className="mt-2  submit-btn text-black py-1 px-4 rounded-full text-sm font-bold">
                      Submit link
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={`bg-[#1e1e2e] rounded-lg p-6 w-full mt-4 text-left ${className}`}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Promo Code</h2>

        <div className="flex gap-4 mb-4">
          <a
            href="#"
            className="text-[#a9a8a8] hover:text-white transition-colors"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="#"
            className="text-[#a9a8a8] hover:text-white transition-colors"
          >
            <FaYoutube className="w-7 h-7" />
          </a>
          <a
            href="#"
            className="text-[#a9a8a8] hover:text-white transition-colors"
          >
            <FaDiscord className="w-7 h-7" />
          </a>
          <a
            href="#"
            className="text-[#aaa8a8] hover:text-white transition-colors"
          >
            <FaTwitter className="w-7 h-7" />
          </a>
        </div>

        <p className="text-sm font-semibold mb-8 leading-6 text-white">
          You may get a promo code on the achievement bar or find more promo
          codes on our Discord server and Facebook page. We give away free promo
          codes on different occasions.
        </p>

        <p className="text-base font-extrabold mb-4 text-white">
          Enter your promo code to spin!
        </p>

        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="flex-1 bg-[#141524] text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-auto"
          />
          <button
            onClick={handleSubmit}
            className="submit-btn text-[#141524] font-bold px-6 py-2 rounded hover:opacity-90 transition-opacity min-w-[120px] w-full sm:w-auto"
          >
            Claim
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-orange-500 to-yellow-400 p-4 rounded-lg w-full text-center mt-4">
        <h3 className="text-xl font-extrabold mb-2 text-white">
          Affiliate system is now live
        </h3>
        <p className="text-sm font-bold mb-4 text-white">
          Earn up to 30% commission!
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-full text-sm font-bold">
          Go to affiliate page
        </button>
      </div>
    </div>
  );
};

export default Rewards;
