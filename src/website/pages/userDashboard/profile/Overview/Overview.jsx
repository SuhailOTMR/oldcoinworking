import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Overview = ({userDetails}) => {
  const subTabs = ["Earning", "Withdrawls", "Charge back"];
  const [tab, setTab] = useState("Earning");
  
  return (
    <>
      <section className="flex flex-col p-3 w-full rounded-xl bg-[#1e1e2e]">
      <article className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 md:gap-8 p-4 rounded-lg bg-gray-900 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
  {/* Profile Section */}
  <div className="flex flex-auto items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold text-zinc-300">
    <img
      src={userDetails?.image}
      alt="Profile picture"
      className="object-fill shrink-0 w-16 sm:w-20 md:w-24 rounded-full aspect-square"
    />
    <div className="flex flex-col">
      <h1 className="text-lg sm:text-xl md:text-2xl text-white">{userDetails?.firstName} {userDetails?.lastName}</h1>
      <div className="flex gap-1.5 items-center whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/347822c832c19d58b7ad713b158f7611584cedef887cbd77e80c6fa1b78cfb2f?placeholderIfAbsent=true"
          alt="Country flag"
          className="object-contain shrink-0 rounded-full aspect-square w-[12px] sm:w-[15px]"
        />
        <span className="text-xs sm:text-sm">India</span>
      </div>
      <p className="text-xs sm:text-sm text-left">Joined 9 days ago</p>
    </div>
  </div>

  {/* Points Section */}
  <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/851dc3ddf97d08ca27071d7bd969720309bb7a149737ce0fbc39a2a047565bea?placeholderIfAbsent=true"
      alt="Points icon"
      className="object-contain shrink-0 aspect-square w-[20px] sm:w-[25px]"
    />
    <span>247</span>
  </div>
</article>


        <div className="flex flex-col gap-1.5 mt-12">
          <div className="flex gap-5 justify-between px-5 py-2.5 w-full font-semibold bg-gray-900 rounded-lg">
            <div className="my-auto text-sm text-zinc-300">
              Offers Completed
            </div>
            <div className="flex gap-1 text-xl text-white whitespace-nowrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/6a4c0b32c96b11497230dea5a67ddb63aa9f886fb07123bc9dc984c66cc77462?placeholderIfAbsent=true"
                alt="Currency icon"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
              />

              <div>247</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between px-5 py-2.5 w-full font-semibold bg-gray-900 rounded-lg">
            <div className="my-auto text-sm text-zinc-300">User Refferred</div>
            <div className="flex gap-1 text-xl text-white whitespace-nowrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/6a4c0b32c96b11497230dea5a67ddb63aa9f886fb07123bc9dc984c66cc77462?placeholderIfAbsent=true"
                alt="Currency icon"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
              />

              <div>247</div>
            </div>
          </div>
        </div>

        <section className="flex flex-col px-3.5 pt-3.5 pb-44 mt-8 text-sm font-semibold text-white bg-gray-900 rounded-[30px]">
          <h3 className="self-center">Recent earnings (30 days)</h3>
          <hr className="shrink-0 mt-2 mb-0 h-0 border-stone-300" />
        </section>
      </section>

      <section className="w-full">
        <header className="flex gap-2.5 mt-8 text-xl font-bold text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/985fbe70264fb4f1ee1624270ad330510048eb4893707b7ac8e283a483344155?placeholderIfAbsent=true"
            alt="Activities icon"
            className="object-contain shrink-0 aspect-[1.4] w-[35px]"
          />
          <h2>Activities</h2>
        </header>

        <div className="flex gap-4 mt-2.5">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="tabs flex gap-4 items-center text-xs font-bold text-white rounded-lg">
              {subTabs.map((item, index) => (
                <button
                  key={index}
                  className={`tab ${tab === item ? "active" : ""}`}
                  onClick={() => setTab(item)} // Update tab dynamically
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3 md:p-4 lg:p-5 rounded-2xl bg-gray-900 w-full max-w-sm md:max-w-md lg:max-w-lg h-auto">
  {/* Row for Offer Name & Reward */}
  <div className="flex justify-between items-center text-xs sm:text-sm md:text-base font-semibold text-zinc-300">
    <span>Offer Name</span>
    <span>Reward</span>
  </div>

  {/* Table-like Content Section */}
  <div className="flex justify-between items-center p-3 md:p-4 rounded-lg bg-gray-800 text-white">
    <span className="text-xs sm:text-sm md:text-base font-medium">Special Discount</span>
    <span className="text-xs sm:text-sm md:text-base font-bold text-green-400">+500 Points</span>
  </div>
</div>

      </section>
    </>
  );
}

export default Overview