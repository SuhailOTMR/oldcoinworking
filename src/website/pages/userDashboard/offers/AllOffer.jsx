import "../dashboard/dashboard.css";
import { IoPlay } from "react-icons/io5";
import OfferModal from "../../../components/userDdashboard/OfferModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOfferList } from "../../../../redux/user/offerSlice";
import Pagination from "../../../components/userDdashboard/Pagination";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple, FaSearch } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";
import { useToggleUSD } from "../../../../context/ToggleUSDContext";
import { useLoading } from "../../../../context/loading-context";
import toast from "react-hot-toast";

const AllOffers = () => {
  const { startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const offerList = useSelector((state) => state.offer.offerList);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const offerListLoading = useSelector((state) => state.offer.loading);
  const [offerId, setOfferId] = useState(null);
  const dispatch = useDispatch();
  const { isUSDChecked } = useToggleUSD();

  const [searchTerm, setSearchTerm] = useState("");

  const defaultOffers = [
    {
      id: 1,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 2,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-2.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 3,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-3.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 4,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-4.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 5,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-5.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 6,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-6.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
    {
      id: 7,
      image:
        "https://dashboard.codeparrot.ai/api/image/Z9qaRCppvFKitUcI/rectangl-7.png",
      title: "Candy Crush",
      type: "Game",
      price: "7.85",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // onSearch(value);
  };

  const handleClick = (id) => {
    setIsOpenModal(!isOpenModal);
    setOfferId(id);
  };
  
  const fetchOffer = async (pageno) => {
    try {
      startLoading();
      const res = await dispatch(fetchOfferList(pageno));

      const resData = res.payload;
      if (resData?.responseCode === 200) {
        setTotalPages(resData?.totalPages);
      }

      const newOffer = offerList.filter(
        (item) => item?.offer_type.toLowerCase() !== "survey"
      );

      setFilteredOffers(newOffer);
      // console.log("newOffer", newOffer);
    } catch (error) {
      toast.error("Error fetching offers");
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchOffer(currentPage);
  }, []);

  return (
    <>
      <div className="offers-box md:mb-6 mb-2 md:p-6 p-4 relative allOffersPage">
        <h5 className="text-2xl text-white text-left pb-6 font-bold">
          All Offers
        </h5>
        <div className="flex gap-4 items-wrapper flex-wrap">
          {/* {offerListLoading && <p className='text-white text-2xl'>Loading...</p>} */}
          {offerListLoading ? (
            <p className="loading text-white">Loading...</p>
          ) : (
            filteredOffers?.map((item) => (
              <div
                className="item"
                onClick={() => handleClick(item?.id)}
                key={item?._id}
              >
                <div className="offer-hover">
                  <div className="offer-start-icon">
                    <IoPlay />
                  </div>
                  <p>Start Offer</p>
                </div>
                <div className="offer-img">
                  <img src={item?.offer_image} alt="offerimg" />
                </div>
                <div className="device-icon">
                  {item?.devices === "All" ? (
                    <>
                      {" "}
                      <BsAndroid2 className="" />
                      <FaApple className="" />
                      <IoIosDesktop className="" />
                    </>
                  ) : item?.devices === "Android" ? (
                    <BsAndroid2 className="" />
                  ) : item?.devices === "iPhone|iPad" ? (
                    <FaApple className="" />
                  ) : (
                    <IoIosDesktop className="" />
                  )}
                </div>
                <div className="offer-content">
                  <p>{item?.offer}</p>
                  <span>{item?.categories}</span>
                  <p className="offer-price">
                    {isUSDChecked ? `$${item?.payout}` : item?.amount}
                  </p>
                  <div className="text-left flex justify-between items-center"></div>
                </div>
              </div>
            ))
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchData={fetchOffer}
          totalPages={totalPages}
        />
      </div>
      <OfferModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        id={offerId}
      />

      {/* <div className="flex flex-col gap-4 w-full min-w-[320px] p-4">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[45px] md:h-[54px] relative">
          <div className="flex items-center w-full h-full bg-[#384152] rounded-full border border-white px-4">
            <FaSearch className="text-yellow-500 w-5 h-5 md:w-7 md:h-7" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent border-none outline-none px-2 text-[#DFDADA] placeholder-[#DFDADA] font-montserrat text-sm md:text-lg"
            />
          </div>
        </div>

        {filteredOffers.map((offer) => (
          <div
            key={offer._id}
            className="flex flex-wrap items-center justify-between bg-[#1e1e2e] rounded-lg p-3 w-full h-auto overflow-hidden"
            onClick={() => handleClick(offer?.id)}
          >
            <div className="flex items-center gap-2 md:gap-3 relative w-[65%] sm:w-auto">
            
              <div className="relative w-[55px] h-[55px] md:w-[75px] md:h-[75px] rounded-lg overflow-hidden group">
                <img
                  src={offer.offer_image}
                  alt={offer.offer}
                  className="w-full h-full object-cover"
                />

                
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                  <div className="offer-start-icon text-white text-sm md:text-base">
                    <IoPlay />
                  </div>
                  <p className="text-white text-xs md:text-sm">Start Offer</p>
                </div>

                
                <div className="absolute top-1 right-1 bg-black bg-opacity-60 p-1 rounded-md flex items-center gap-1 text-white text-[8px] md:text-xs">
                  {offer?.devices === "All" ? (
                    <>
                      <BsAndroid2 />
                      <FaApple />
                      <IoIosDesktop />
                    </>
                  ) : offer?.devices === "Android" ? (
                    <BsAndroid2 />
                  ) : offer?.devices === "iPhone|iPad" ? (
                    <FaApple />
                  ) : (
                    <IoIosDesktop />
                  )}
                </div>
              </div>

              <div className="flex flex-col w-2/3 sm:w-auto">
                <h3 className="font-montserrat font-bold text-sm md:text-xl text-white w-full truncate">
                  {offer.offer.length > 25
                    ? `${offer.offer.slice(0, 25)}...`
                    : offer.offer}
                </h3>
                <p className="font-montserrat font-semibold text-xs md:text-sm text-white truncate">
                  {offer.type}
                </p>
              </div>
            </div>

            <button className="px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-[#FFD900] to-[#F7931A] rounded-full mt-2 sm:mt-0">
              <span className="font-montserrat font-bold text-sm md:text-xl text-[#1e293b] truncate">
                {isUSDChecked ? `$${offer?.payout}` : offer?.amount}
              </span>
            </button>
          </div>
        ))}
      </div> */}
    </>
  );
};
export default AllOffers;
