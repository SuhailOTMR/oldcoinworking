import { useDispatch, useSelector } from "react-redux";
import referimg from "../../../assest/images/referalimg2.png";
import { useEffect, useState } from "react";
import {
  fetchTopReferl,
  generateReferralCode,
} from "../../../../redux/user/referralSlice";
import {
  fetchTotalAmount,
  fetchTotalPoint,
} from "../../../../redux/user/walletSlice";
import { IoCopy } from "react-icons/io5";
import toast from "react-hot-toast";
import { FaChevronRight } from "react-icons/fa";
import { FaCopy, FaShareAlt } from "react-icons/fa";
import { FaWallet, FaUserPlus, FaClock } from "react-icons/fa";
import img from "../../../assest/images/update_doller.png";
import { PiWarningCircleBold } from "react-icons/pi";
import { useLoading } from "../../../../context/loading-context";

const Affiliates = () => {
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const { startLoading, stopLoading } = useLoading();
  const totalReferal = useSelector((state) => state?.referal?.totalRef);
  const totalPoint = useSelector((state) => state?.wallet?.totalPoint);
  const totalAmount = useSelector((state) => state?.wallet?.totalAmount);
  const [referralCode, setReferralCode] = useState(false);
  const [tab, setTab] = useState("earning");
  const dispatch = useDispatch();
  const [referralLink] = useState("https://coinlooty.com/ref/4b227777d4");

  // Mock data for referrals
  const referrals = [
    {
      id: 1,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-6.png",
    },
    {
      id: 2,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-8.png",
    },
    {
      id: 3,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-10.png",
    },
    {
      id: 4,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-7.png",
    },
    {
      id: 5,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-9.png",
    },
    {
      id: 6,
      name: "Marco_victor",
      earned: 247,
      commission: 247,
      avatar:
        "https://dashboard.codeparrot.ai/api/image/Z9lLSpIdzXb5Olbb/ellipse-11.png",
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Referral Link",
        text: "Join using my referral link!",
        url: referralLink,
      });
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      toast.success("Text copied!");
    } catch (error) {
      console.log("error in copy text");
    }
  };

  const generateCode = async () => {
    const res = await dispatch(
      generateReferralCode({ userId: auth.id, formData: { userId: auth.id } })
    );
    const resData = res.payload;
    if (resData?.responseCode === 200) {
      const code = resData?.referralCode;
      setReferralCode(`https://coinlooty.com/ref/${code}`);
    }
  };

  useEffect(() => {
    startLoading(); // Start loading
  
    const fetchData = async () => {
      try {
        generateCode();
        await dispatch(fetchTopReferl(auth.id)).unwrap();
        await dispatch(fetchTotalPoint(auth.id)).unwrap();
        await dispatch(fetchTotalAmount(auth.id)).unwrap();
      } catch (error) {
        toast.error("Error fetching data" );
      } finally {
        stopLoading(); // Stop loading after everything completes
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      {/* <div className="affiliate text-left md:p-6 p-4">
        <div className="flex gap-6">
          <div className="w-full">
            <h5 className="text-2xl text-white text-left pb-6 font-bold">
              Affiliates
            </h5>
            <div className="statics-box md:mb-6 mb-4">
              <div className="item">
                <h4>${totalAmount}</h4>
                <p>Total Earnings</p>
                <div className="saperater"></div>
              </div>

              <div className="item">
                <h4>0</h4>
                <p>Completed Offers</p>
                <div className="saperater"></div>
              </div>

              <div className="item">
                <h4>{totalReferal ? totalReferal : "0"}</h4>
                <p>Users Referred</p>
                <div className="saperater"></div>
              </div>

              <div className="item">
                <h4>$0</h4>
                <p>Referred Earnings</p>
              </div>
            </div>
            <div className="referral-box">
              <div className="refer-user bg-white rounded-md p-4 text-left">
                <h5 className="text-xl text-gray-100">Your referral link</h5>
                <div>
                  <p className="text-gray-200">
                    Share your referral link to your friends, and get{" "}
                    {totalPoint} points.
                  </p>
                  <img src={referimg} alt="referimg" />
                </div>
                <div className="flex gap-2 justify-start items-center mt-5">
                  <input value={referralCode} readOnly />
                  <IoCopy onClick={handleCopyText} />
                </div>
              </div>
            </div>
            <div className="tabs">
              <button
                className={`tab ${tab === "earning" ? "active" : ""}`}
                onClick={() => setTab("earning")}
              >
                Earnings
              </button>
              <button
                className={`tab ${tab === "withdraw" ? "active" : ""}`}
                onClick={() => setTab("withdraw")}
              >
                Withdraws
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-4">
        <div className="flex flex-col gap-4 w-full ">
        <h5 className="text-2xl text-white text-left pb-3 font-bold">
              Affiliates
            </h5>
          {/* Available Balance Section */}
          <div className="bg-[#1e1e2e] rounded-lg p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#e1dada] text-sm font-semibold text-left">
                Available
              </span>
              <span className="text-white text-2xl font-bold flex items-center">
                <img
                  src={img}
                  alt="coin"
                  className="w-6 h-6 mr-2"
                />
                {totalAmount}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-[#FFD900] to-[#FFA900] text-[#141524] 
                     font-bold text-sm py-2 px-6 rounded-full hover:opacity-90 
                     transition-opacity"
            >
              Withdraw
            </button>
          </div>

          {/* Statistics Section */}
          <div className="bg-[#1e1e2e] rounded-lg p-4">
            <span className="text-[#e1dada] text-sm font-semibold ml-2">
              Statistics
            </span>

            <div className="flex flex-col gap-4 mt-4">
              {/* First Stat */}
              <div className="flex items-center gap-4">
                <div className="bg-[#ffd900]/50 w-[63px] h-[60px] rounded-lg flex items-center justify-center">
                  <FaWallet className="text-[#ffd900] text-2xl" />
                </div>
                <span className="text-white text-2xl font-bold flex items-center">
                  <img
                    src={img}
                    alt="coin"
                    className="w-6 h-6 mr-2"
                  />
                  0
                </span>
              </div>

              {/* Second Stat */}
              <div className="flex items-center gap-4">
                <div className="bg-[#ffd900]/50 w-[63px] h-[60px] rounded-lg flex items-center justify-center">
                  <FaUserPlus className="text-[#ffd900] text-2xl" />
                </div>
                <span className="text-white text-2xl font-bold">1</span>
              </div>

              {/* Third Stat */}
              <div className="flex items-center gap-4">
                <div className="bg-[#ffd900]/50 w-[63px] h-[60px] rounded-lg flex items-center justify-center">
                  <FaClock className="text-[#ffd900] text-2xl" />
                </div>
                <span className="text-white text-2xl font-bold flex items-center">
                  <img
                    src={img}
                    alt="coin"
                    className="w-6 h-6 mr-2"
                  />
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1e1e2e] rounded-[10px] p-4 flex flex-col gap-4 mt-4 text-left">
          {/* Referral Link Section */}
          <span className="text-[16px] sm:text-[18px] font-semibold font-montserrat text-[#e1dada]">
            Your referral link
          </span>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex-1 bg-[#141524] rounded-[9px] p-3 w-full">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold font-montserrat text-white truncate">
                {referralLink}
              </p>
            </div>
            <button
              onClick={handleCopyText}
              className="w-[40px] h-[40px] bg-[#8c7a17] rounded-[5px] flex items-center justify-center 
                hover:bg-[#9c8a27] transition-colors shrink-0"
            >
              <FaCopy className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Share Referral Link Section */}
          <div className="flex flex-col gap-2">
            <span className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold font-montserrat text-[#e1dada]">
              Share your referral link
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-[#585029] rounded-[9px] px-6 py-3 
                hover:bg-[#685f39] transition-colors w-full sm:w-[60%] md:w-[50%] lg:w-[30%] xl:w-[25%]"
            >
              <FaShareAlt className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold font-montserrat text-white">
                Share referral link
              </span>
            </button>
          </div>

          {/* Affiliates & Withdrawal Section */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-gradient-to-r from-[#ffd900] to-[#ffa900] rounded-[15px] px-4 py-1">
              <span className="text-[12px] sm:text-[14px] font-semibold font-montserrat text-white">
                Affiliates
              </span>
            </div>
            <div className="border border-[#ffd900] rounded-[15px] px-4 py-1">
              <span className="text-[12px] sm:text-[14px] font-semibold font-montserrat text-white">
                Withdrawal
              </span>
            </div>
          </div>

          {/* Warning Message */}
          <div className="flex items-start gap-2">
            <PiWarningCircleBold className="text-white w-5 h-5 shrink-0" />
            <p className="text-[13px] sm:text-[15px] font-medium font-montserrat text-white leading-tight sm:leading-normal">
              Users who signed up using your referral code are listed here. Earn
              a commission every time they complete an offer!
            </p>
          </div>
        </div>

        <div className="w-full mt-4">
          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-max w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-transparent text-left">
                  <th className="text-[#e1dada] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2">
                    Referrals
                  </th>
                  <th className="text-[#e1dada] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2">
                    Earned
                  </th>
                  <th className="text-[#e1dada] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2">
                    Your Commission
                  </th>
                </tr>
              </thead>

              {/* Horizontal Line */}
              <tbody>
                <tr>
                  <td colSpan="3">
                    <hr className="border-[#e1dada] border-opacity-30 border-[2px]" />
                  </td>
                </tr>

                {/* Table Body */}
                {referrals.map((referral) => (
                  <tr
                    key={referral.id}
                    className="border-b border-[#e1dada] border-opacity-30"
                  >
                    {/* Referral Name and Avatar */}
                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={referral.avatar}
                          alt="avatar"
                          className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
                        />
                        <span className="text-white text-xs sm:text-sm font-semibold">
                          {referral.name}
                        </span>
                      </div>
                    </td>

                    {/* Earned Amount */}
                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={img}
                          alt="coin"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="text-white font-bold text-xs sm:text-sm md:text-base">
                          {referral.earned}
                        </span>
                      </div>
                    </td>

                    {/* Commission Amount */}
                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={img}
                          alt="coin"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="text-white font-bold text-xs sm:text-sm md:text-base">
                          {referral.commission}
                        </span>
                        <FaChevronRight className="text-[#FFD900]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliates;
