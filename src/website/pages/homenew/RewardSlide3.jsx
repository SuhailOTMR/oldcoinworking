import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination , Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const RewardSlide3 = () => {
  const services = [
    {
      name: "Netflix",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4a822625c443975dc5c93f190a94019d6d684f37de08006173ad12feb2530d06?placeholderIfAbsent=true",
    },
    {
      name: "Amazone",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/639101ffe393a8165f93541ded0b72ed3019c62454adb4e4effd61fe4c305d20?placeholderIfAbsent=true",
    },
    {
      name: "Paypal",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/145dd2ffcf380e80071975fdaed37d7c876d9a7e320b4693c5f1b119a2db2a02?placeholderIfAbsent=true",
    },
    {
      name: "Netflix",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4a822625c443975dc5c93f190a94019d6d684f37de08006173ad12feb2530d06?placeholderIfAbsent=true",
    },
    {
      name: "Amazone",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/639101ffe393a8165f93541ded0b72ed3019c62454adb4e4effd61fe4c305d20?placeholderIfAbsent=true",
    },
    {
      name: "Paypal",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/145dd2ffcf380e80071975fdaed37d7c876d9a7e320b4693c5f1b119a2db2a02?placeholderIfAbsent=true",
    },
    {
      name: "Paypal",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/145dd2ffcf380e80071975fdaed37d7c876d9a7e320b4693c5f1b119a2db2a02?placeholderIfAbsent=true",
    },
    {
      name: "Amazone",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/639101ffe393a8165f93541ded0b72ed3019c62454adb4e4effd61fe4c305d20?placeholderIfAbsent=true",
    },
    {
      name: "Netflix",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4a822625c443975dc5c93f190a94019d6d684f37de08006173ad12feb2530d06?placeholderIfAbsent=true",
    },
    {
      name: "Amazone",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/639101ffe393a8165f93541ded0b72ed3019c62454adb4e4effd61fe4c305d20?placeholderIfAbsent=true",
    },
    {
      name: "Paypal",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/145dd2ffcf380e80071975fdaed37d7c876d9a7e320b4693c5f1b119a2db2a02?placeholderIfAbsent=true",
    },
    {
      name: "Netflix",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/4a822625c443975dc5c93f190a94019d6d684f37de08006173ad12feb2530d06?placeholderIfAbsent=true",
    },
  ];

  // Splitting services into chunks of 3 for alternating rows
  const chunkedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    chunkedServices.push(services.slice(i, i + 3));
  }

  return (
    <>
      
      <Swiper
      modules={[Grid, Pagination, Autoplay]}
      spaceBetween={16}
      grid={{ rows: 1, fill: "row" }}
      autoplay={{ delay: 0, disableOnInteraction: false, stopOnLastSlide: false }}
      loop={true}
      breakpoints={{
        320:{ slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 6 },
      }}
      speed={2500}
      className="grid gap-4 px-5 py-0 mx-auto my-2.5 grid-cols-[repeat(7,1fr)] max-w-[1400px] max-md:grid-cols-[repeat(4,1fr)] max-sm:px-2.5 max-sm:py-0 max-sm:grid-cols-[repeat(2,1fr)]"
      // dir={"rtl"} // Set direction dynamically
      aria-label="Service selection"
    >
      {chunkedServices.map((row, rowIndex) => (
        <div key={rowIndex} >
          {row.map((service, index) => (
            <SwiperSlide key={index}>
              <article className="w-full cursor-pointer">
                <div className="flex justify-between items-center px-2.5 py-0 bg-[#141524] rounded-3xl border-solid border-[0.3px] border-zinc-500 h-[45.7px] max-sm:px-2.5 max-sm:py-0 max-sm:h-10">
                  <img
                    src={service.iconUrl}
                    alt={service.name}
                    className="w-9 h-9 rounded-full max-sm:w-7 max-sm:h-7"
                  />
                  <span className="text-xl font-bold text-white max-sm:text-base">
                    {service.name}
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </div>
      ))}
    </Swiper>
    </>
  );
};

export default RewardSlide3;
