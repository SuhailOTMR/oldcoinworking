import "../dashboard/dashboard.css";
import { IoPlay } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import OfferModal from "../../../components/userDdashboard/OfferModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOfferList } from "../../../../redux/user/offerSlice";
import { fetchSurveyList } from "../../../../redux/user/surveySlice";
import { Link } from "react-router-dom";
import { useToggleUSD } from "../../../../context/ToggleUSDContext";
import { useLoading } from "../../../../context/loading-context";
import toast from "react-hot-toast";

const AllSurvey = () => {
  const surveyColors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  const { startLoading, stopLoading } = useLoading(); // Use loading context
  const surveyList = useSelector((state) => state.survey.surveyList);
  const dispatch = useDispatch();
  const { isUSDChecked } = useToggleUSD();

  useEffect(() => {
    startLoading(); // Start loader before fetching
  
    dispatch(fetchSurveyList())
      .unwrap() // Unwraps the promise to handle errors properly
      .catch((error) => {
        console.error("Error fetching surveys:", error);
        toast.error("Failed to load surveys. Please try again.");
      })
      .finally(() => stopLoading()); // Stop loader after fetching
  }, []);
  


  return (
    <>
      {/* First Survey Section */}
      {/* <div className="offers-box mb-12 md:p-6 p-4">
        <h5 className="text-2xl text-white text-left pb-6 font-bold">
          All Surveys
        </h5>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full p-2 rounded-full bg-[#384152] text-white mb-4"
        />
        <div className="flex gap-4 items-wrapper flex-wrap">
          {surveyList?.map((item, index) => (
            <div className="item" key={item?._id}>
              <Link to={`/survey/${item?._id}`}>
                <div className="offer-hover">
                  <div className="offer-start-icon">
                    <IoPlay />
                  </div>
                  <p>Start Survey</p>
                </div>
              </Link>
              <div
                className="survey-img"
                style={{ backgroundColor: surveyColors[index] }}
              >
                <GiTakeMyMoney />
              </div>
              <div className="offer-content">
                <p className="survey_name">LIVE SURVEY</p>
                <div className="text-left">
                  <span>{item?.loi} min</span>
                  <p className="offer-price pt-2">
                    {isUSDChecked
                      ? `$${Number(item?.cpi).toFixed(
                          item?.cpi?.toString().startsWith("0") ? 3 : 2
                        )}`
                      : (item?.cpi * 100).toFixed(
                          item?.cpi?.toString().startsWith("0") ? 3 : 2
                        )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Second Survey Section (Copied Data) */}
      <div className="flex flex-col gap-4 p-4">
        {/* Section Title */}
        <h2 className="text-white text-2xl font-bold text-center">
          🔥 All Surveys
        </h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 What are you looking for?"
          className="w-full p-3 rounded-full bg-[#384152] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 mb-4"
        />

        {/* Surveys List */}
        {surveyList.map((item, index) => (
          <div
            key={item?._id}
            className="flex items-center justify-between bg-[#1e1e2e] p-4 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            {/* Left: Icon with Play Button */}
            <div className="flex items-center">
              <Link to={`/survey/${item?._id}`}>
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-lg shadow-md relative overflow-hidden group"
                  style={{ backgroundColor: surveyColors[index] }}
                >
                  {/* Main Survey Icon */}
                  <GiTakeMyMoney className="text-white text-3xl transition-all duration-300 group-hover:opacity-30 " />

                  {/* Hover Play Button */}
                  <div className="absolute bottom-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center gap-1 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(86deg,_rgb(0_0_0_/_71%)_-16.9%,_rgb(0_0_0_/_69%)_119.9%)] z-2">

                    <IoPlay className="w-[15px] h-[15px] rounded-full bg-[#FFE27C] flex justify-center items-center text-[#FA8804]" />

                    <p className="text-xs font-semibold text-white">
                      Start Survey
                    </p>
                  </div>
                </div>
              </Link>

              {/* Survey Details */}
              <div className="flex flex-col ml-2 md:ml-4">
  <span className="text-green-400 font-bold text-sm md:text-base lg:text-lg">
    {item?.title || "Live Survey"}
  </span>
  <span className="text-gray-400 text-xs md:text-sm lg:text-base">
    {item?.loi} min
  </span>
</div>

            </div>

            {/* Right: Reward Display */}
            <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-4 md:px-5 py-1.5 md:py-2 shadow-md border border-yellow-500">
  <span className="text-[#1e293b] font-bold text-sm md:text-lg">
    {isUSDChecked
      ? `$${Number(item?.cpi).toFixed(
          item?.cpi?.toString().startsWith("0") ? 3 : 2
        )}`
      : (item?.cpi * 100).toFixed(
          item?.cpi?.toString().startsWith("0") ? 3 : 2
        )}
  </span>
</div>

          </div>
        ))}
      </div>
    </>
  );
};
export default AllSurvey;
