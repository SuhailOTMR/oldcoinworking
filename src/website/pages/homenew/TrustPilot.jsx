import React from "react";

import { motion } from "framer-motion";

const TrustPilot = () => {
  return (

<article className="flex justify-center items-center w-full px-4 sm:px-0">
  <div className="relative w-full max-w-[650px] h-[284px] font-['Montserrat'] flex flex-col items-center">
    <div
      className="relative mx-auto rounded-3xl h-[186px] top-[70px] w-full max-w-[600px] flex flex-col items-center justify-center px-4 py-4"
      style={{
        background: "linear-gradient(180deg, #1B5844, #00B875)",
      }}
    >
      <h2 className="text-lg sm:text-base font-bold text-white text-center mb-3">
        See our 10000 reviews on
      </h2>

      {/* Logo & Rating */}
      <div className="flex justify-center items-center gap-x-2 w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c7efbd057058fc0157392c26decac51974c54aa"
          alt="Trustpilot"
          className="h-[50px] w-[170px] max-w-[50%] sm:max-w-[45%] object-contain"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6604e8d061ee7ff16a9af918bc6b00895f3e6464"
          alt="Five stars"
          className="h-[35px] w-[160px] max-w-[50%] sm:max-w-[45%] object-contain"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center w-full py-4">
        <button
          className="py-2 px-6 min-w-[140px] w-auto text-lg sm:text-base font-semibold rounded-2xl bg-zinc-50 text-slate-900 hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center"
          onClick={() => window.open("https://www.trustpilot.com", "_blank")}
        >
          See our reviews
        </button>
      </div>

      {/* Bouncing Stars */}
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6d715a702474e264d5169de3fa337d2bc194e0"
        alt="Decorative star"
        className="absolute h-[90px] left-[75%] rotate-[-4.6deg] top-[-54px] w-[92px] max-w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f91792dc1f6c1b3302b6038058969aa835101465"
        alt="Decorative star"
        className="absolute top-[-1.95rem] w-10 h-[50px] left-[15%] rotate-[-14.929deg] max-w-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/793eb806a5ba79cc6d19182cd192d0e788e9c3e0"
        alt="Decorative star"
        className="absolute h-[53px] left-[93%] rotate-[-19.242deg] top-[78px] w-[46px] max-w-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2959d2acf202a36c44a1c58c0b1befce16f707"
        alt="Decorative star"
        className="absolute h-[66px] left-[65%] rotate-[-13.17deg] top-[144px] w-[70px] max-w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ae775d3b803cb635013869fe24e0b12314ff85"
        alt="Decorative star"
        className="absolute left-[-5%] h-[66px] rotate-[-2.954deg] top-[134px] w-[70px] max-w-full"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
</article>

  );
};

export default TrustPilot;
