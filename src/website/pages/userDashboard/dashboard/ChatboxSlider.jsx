import React, { useRef } from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import Tooltip styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useToggleUSD } from '../../../../context/ToggleUSDContext';
;

const ChatboxSlider = ({ liveMessages, isUSDChecked }) => {
  const [latestMessages, setLatestMessages] = useState([]);

  // Update the messages list dynamically
  useEffect(() => {
    if (liveMessages?.length) {
      const recentMessages = liveMessages.slice(-25); // Get last 50 messages
      setLatestMessages((prevMessages) => {
        const updatedMessages = recentMessages.map((msg) => ({
          ...msg,
          isNew: !prevMessages.some((prev) => prev._id === msg._id), // Identify new messages
        }));

        // Ensure newly updated messages are shown first
        return [
          ...updatedMessages.filter((msg) => msg.isNew), 
          ...updatedMessages.filter((msg) => !msg.isNew),
        ];
      });
    }
  }, [liveMessages]); // Depend on liveMessages to trigger updates

  return (
    <div className="liveMessage">
      <div className="liveMessageWrapper cursor-pointer">
        <Swiper
          dir="rtl" // Enable right-to-left direction
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false, stopOnLastSlide: true }}
          speed={1000}
          //initialSlide={25}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
          }}
          className="chatSwiper"
        >
          {latestMessages?.map((item, index) => (
            <SwiperSlide key={item?._id || index}>
              <div
                className="liveMessageItem"
                data-tooltip-id="tooltip-global"
                data-tooltip-content={[
                  `👤 User: ${item?.userName}`,
                  `📝 Message: ${item?.offer || "N/A"}`,
                  `✅ Status: ${item?.status || "N/A"}`,
                  `💰 Amount: ${`${
                    item &&
                    (isUSDChecked
                      ? `$${
                          item.totalUsdValue?.toLocaleString("en-US") ?? "N/A"
                        }`
                      : item.totalCoinsValue?.toLocaleString("en-US") ?? "N/A")
                  }`}`,
                ].join("\n")}
              >
                <img src={item?.image} alt="userImg" />
                <div className="liveMessageContent">
                  <div className="flex justify-start items-start flex-col">
                    <p>{item?.userName}</p>
                    
                    <span>{item?.status === "complete" ? item?.offer : item?.status}</span>
                  </div>
                  <p className="amount">
                    {item &&
                      (isUSDChecked
                        ? `$${
                            item.totalUsdValue?.toLocaleString("en-US") ?? "N/A"
                          }`
                        : item.totalCoinsValue?.toLocaleString("en-US") ?? "N/A")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tooltip Component */}
        <Tooltip
          id="tooltip-global"
          place="bottom"
          effect="solid"
          className="custom-tooltip"
          delayShow={100}
          delayHide={100}
          border
          style={{
            whiteSpace: "pre-line",
            background: "#000",
            color: "#fff",
            textAlign: "left",
            zIndex: 9999,
          }}
        />
      </div>
    </div>
  );
};



export default ChatboxSlider