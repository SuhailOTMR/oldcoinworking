import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopUserEarned } from "../../../../redux/user/walletSlice";
import { use } from "react";
import { FaCheckCircle, FaMedal, FaPencilAlt, FaTrophy } from "react-icons/fa";
import {
  FaGamepad,
  FaMoneyBillWave,
  FaCoins,
  FaGift,
  FaEllipsisH,
} from "react-icons/fa";
import DailyBoard from "./DailyBoard";
import MonthlyBoard from "./MonthlyBoard";
import { useLoading } from "../../../../context/loading-context";
import toast from "react-hot-toast";

const LeaderBoard = ({ className = "" }) => {
  const dispatch = useDispatch();
  const earnedUser = useSelector((state) => state.wallet.topUserEarnedList);
  const [activeTab, setActiveTab] = useState("daily");
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading(); // Start loading
  
    dispatch(fetchTopUserEarned())
      .unwrap() // Ensures proper error handling in Redux
      .catch((error) => {
        console.error("Error fetching top user earned:", error);
        toast.error(`Error fetching messages: ${error.message}`);
      })
      .finally(() => stopLoading()); // Stop loading when API call finishes
  }, []);

  return (
    <>
      <div className={`flex justify-center mt-2 ${className}`}>
        <div className="w-[282px] h-[42px] rounded-[28px] bg-[#384152] border border-[#FFD900] p-[3px]">
          <div className="flex h-full">
            <button
              onClick={() => setActiveTab("daily")}
              className={`w-[137px] h-[36px] rounded-[28px] font-montserrat font-bold text-[15px] transition-all
              ${
                activeTab === "daily"
                  ? "bg-gradient-to-r from-[#FFD900] to-[#FFA900] text-[#111828]"
                  : "text-white hover:bg-[#4B5569]"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`w-[137px] h-[36px] rounded-[28px] font-montserrat font-bold text-[15px] transition-all
              ${
                activeTab === "monthly"
                  ? "bg-gradient-to-r from-[#FFD900] to-[#FFA900] text-[#111828]"
                  : "text-white hover:bg-[#4B5569]"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
      <div className={`flex justify-center ${className}`}>
        <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-[48px] sm:h-[52px] md:h-[56px] rounded-[28px] bg-[#384152]">
          <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold font-montserrat bg-gradient-to-r from-[#FFD900] to-[#FFA900] bg-clip-text text-transparent">
            {activeTab === "daily" ? "$500 LEADERBOARD" : "$5000 LEADERBOARD"}
          </h1>
        </div>
      </div>

      {activeTab === "daily" && <DailyBoard />}
      {activeTab === "monthly" && <MonthlyBoard />}
    </>
  );
};

export default LeaderBoard;
