import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LiveCashOut = ({ value }) => {
  const liveMessages = useSelector((state) => state.user.messageList);
  const [wholePart, decimalPart] = value.toString().split(".");
  const formattedWholePart = wholePart.split("");
  const decimalDigits = decimalPart ? decimalPart.split("") : [];
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   setNumber(parseFloat(value));  Convert value to number
  // }, [value]);

  const { val } = useSpring({
    from: { val: 0 },
    to: { val: value },
    config: { tension: 50, friction: 20 },
  });

  return (
    <div
  className="cashoutSec py-5 md:pt-14 px-4 relative overflow-hidden"
  style={{
    backgroundImage: "url('/live-cashouts-background.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container mx-auto flex flex-col justify-center items-center w-full max-w-screen-lg">
    <div className="p-5 rounded-[30px] text-white w-2/3 max-md:mx-auto max-md:w-full max-md:max-w-[402px] max-sm:p-4 max-sm:rounded-3xl registration-form ">
      
      {/* Header Section */}
      <div className="relative mb-8">
        <div className="flex gap-4 items-center justify-center">
          <div className="relative">
            <div className="bg-green-500 rounded-full opacity-30 h-[29px] w-[29px]" />
            <div className="absolute top-2/4 left-2/4 bg-green-500 rounded-full -translate-x-2/4 -translate-y-2/4 h-[15px] w-[15px]" />
          </div>
          <h1 className="text-xl font-bold">Live CashOuts</h1>
        </div>
        <p className="absolute right-10 text-xl text-bg rotate-[2.4deg] top-[30px] max-sm:right-5 max-sm:text-base">
          This Year Users Cashed Out
        </p>
      </div>

      {/* {Counter Display */}
      <div className="flex gap-1 justify-center p-4 mx-0 my-5 rounded-xl bg-black">
        {formattedWholePart.map((digit, index) => (
          <React.Fragment key={`whole-${index}`}>
            <span
              className="text-4xl font-semibold rounded-md h-[41px] w-[37px] inline-block text-center text-white"
              style={{
                background: "linear-gradient(to bottom, #1a1a1a 0%, #808080 100%)",
              }}
            >
              {digit}
            </span>
            {(formattedWholePart.length - index - 1) % 3 === 0 &&
              index !== formattedWholePart.length - 1 && (
                <span className="self-end mb-2.5 text-xl font-bold text-white">,</span>
              )}
          </React.Fragment>
        ))}
        {decimalDigits.length > 0 && (
          <>
            <span className="self-end mb-2.5 text-xl font-bold text-white">.</span>
            {decimalDigits.map((digit, index) => (
              <span
                key={`decimal-${index}`}
                className="text-4xl font-semibold rounded-md h-[41px] w-[37px] inline-block text-center text-white"
                style={{
                  background: "linear-gradient(to bottom, #1a1a1a 0%, #808080 100%)",
                }}
              >
                {digit}
              </span>
            ))}
          </>
        )}
      </div> 

      {/* Counter Display with Animated Digits */}
      {/* <div className="flex gap-1 justify-center p-4 mx-0 my-5 rounded-xl bg-black">
            {val.to((val) => val.toFixed(2)).toString().split("").map((char, index) => (
              <animated.span
                key={index}
                className="text-4xl font-semibold rounded-md h-[41px] w-[37px] inline-block text-center text-white"
                style={{
                  background: "linear-gradient(to bottom, #1a1a1a 0%, #808080 100%)",
                }}
              >
                {char}
              </animated.span>
            ))}
          </div> */}

      {/* Live Messages Section */}
      <div className="flex flex-col gap-4 overflow-y-auto max-h-60 px-2">
        {liveMessages?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-2 py-3 rounded-xl bg-slate-600"
          >
            <div className="flex items-center gap-2 w-20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/415e1fd07e4841a3d62d97fa0e9e5e0b4e66b8ae"
                className="rounded-full h-[35px] w-[35px]"
                alt="User"
              />
              <p className="text-sm leading-tight font-bold">{item?.userName}</p>
            </div>
            <p className="text-sm leading-tight font-semibold">2 Hours ago</p>
            <p className="text-sm leading-tight font-semibold">$2</p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/676842355b19007c76e6278a29fe7cd6d1ba9eef"
              className="w-5 h-5"
              alt="Payment method"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default LiveCashOut;
