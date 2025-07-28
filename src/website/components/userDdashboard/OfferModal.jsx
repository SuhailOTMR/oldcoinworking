import { IoPlayCircle, IoStar } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOfferDetail } from "../../../redux/user/offerSlice";
import { IoCloseSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsCashCoin } from "react-icons/bs";
import Divider from "../../../Common/Divider";
const OfferModal = ({ isOpenModal, setIsOpenModal, id }) => {
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const offerDetail = useSelector((state) => state.offer.offerDetail);
  const dispatch = useDispatch();
  const haldleCloseModal = (e) => {
    setIsOpenModal(false);
  };
  useEffect(() => {
    dispatch(fetchOfferDetail(id));
  }, [id]);
  return (
    <>
    <div className={`offermodal modal ${isOpenModal ? "show-modal" : ""}`}>
  <div className="modal-content max-w-xs sm:max-w-md lg:max-w-lg mx-auto p-3 sm:p-6">
    <div className="offerDetailContent">
      <div className="flex justify-between items-center border-b border-[#28354c] pb-3">
        <h5 className="text-lg sm:text-xl text-white">Start Offer</h5>
        <span className="close-button" onClick={haldleCloseModal}>
          <IoCloseSharp />
        </span>
      </div>
      <div className="pt-4">
        <div className="rounded-md border border-[#242e40] overflow-hidden offerDetailImg mb-2 relative h-32 sm:h-40">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm z-0"
            style={{ backgroundImage: `url(${offerDetail?.offer_image})` }}
          ></div>
          {/* Main Image */}
          <img
            className="offerImg relative z-10 w-24 sm:w-36 h-24 sm:h-36 object-cover mx-auto my-2 sm:my-4"
            src={offerDetail?.offer_image}
            alt="offerimg"
          />
        </div>

        <h5 className="offer-name text-lg sm:text-xl text-gray-100 font-bold text-center pb-2">
          {offerDetail?.offer}
        </h5>
        <p className="text-[#ffd900] text-xl sm:text-2xl font-bold text-center">
          ${offerDetail?.payout}
        </p>

        <div className="status flex flex-wrap gap-2 sm:gap-4 self-center mt-4 mb-4 justify-center w-full text-center">
          <div className="w-full max-w-screen-lg mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap flex-auto gap-3 sm:gap-5 items-center justify-center">
              {/* Status Section */}
              <div className="flex flex-col text-xs sm:text-sm">
                <h2 className="self-center font-semibold text-zinc-300">Status</h2>
                <p className="mt-2 text-white">Not Started</p>
              </div>

              <Divider className="hidden sm:block" />

              {/* Popularity Section */}
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Popularity
                </h2>
                <div className="flex gap-0.5 mt-2.5" role="meter">
                  {[...Array(4)].map((_, index) => (
                    <img
                      key={`filled-${index}`}
                      src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8cd512fcf0c96dd9703bec02e723505dc9ca3abec5e173e96312b8875ce9bf16"
                      alt=""
                      className="w-2 sm:w-2.5 h-auto"
                    />
                  ))}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/206e9736eb69db563094b2d4313d2d165c7ace1598f14faa72fd573437c4d112"
                    alt=""
                    className="w-2 sm:w-2.5 h-auto"
                  />
                </div>
              </div>

              <Divider className="hidden sm:block" />

              {/* Category Section */}
              <div className="text-xs sm:text-sm whitespace-nowrap">
                <h2 className="font-semibold text-zinc-300">Category</h2>
                <span className="inline-block px-2 py-px mt-1.5 font-bold text-white bg-yellow-400 rounded-lg">
                  Games
                </span>
              </div>

              <Divider className="hidden sm:block" />

              {/* Provider Section */}
              <div className="flex gap-3.5 items-start text-xs sm:text-sm font-semibold text-white">
                <div className="flex flex-col">
                  <h2 className="self-center">Provider</h2>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/799deb5b611f4cf4a844fefb36929f44cd61b0b5fdfb29db97255c4c7c361cde"
                    alt="Provider logo"
                    className="object-contain w-[40px] sm:w-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-about">
          <h5 className="text-sm sm:text-base text-white font-bold pb-2">Requirement</h5>
          <p className="text-[#c3c3c3] text-xs sm:text-sm font-bold">
            {offerDetail?.offer_desc}
          </p>
        </div>

        <div className="offerEvents">
          <h5 className="text-sm sm:text-lg text-white font-bold py-2 flex items-center">
            <BsCashCoin className="px-0.5" />
            Rewards
          </h5>
          <ul>
            {offerDetail?.events?.map((item) => (
              <li key={item?.event_name}>
                <p className="text-xs sm:text-sm">{item?.event_name}</p>
                <span className="flex items-center">
                  <HiCurrencyDollar />
                  {item?.payout}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          target="_blank"
          className="submit-btn px-2 py-2 sm:px-4 sm:py-3 text-center text-white flex gap-2 justify-center items-center rounded-md"
          to={`https://api.coinlooty.com/tracking/click?sid=${auth?.id}&o=${id}`}
        >
          <IoPlayCircle /> <span>Play & Earn ${offerDetail?.payout}</span>
        </Link>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
export default OfferModal;
