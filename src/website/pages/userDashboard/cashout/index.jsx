import { useDispatch, useSelector } from "react-redux";
import wallet from "../../../assest/images/wallet.png";
import { fetchUserDetails } from "../../../../redux/user/userSlice";
import { useEffect, useState } from "react";
import { fetchTotalAmount } from "../../../../redux/user/walletSlice";
import { userWithdrawAmount } from "../../../../redux/user/withdrawSlice";
import SubmitDocumentModal from "../../../components/userDdashboard/SubmitDocumentModal";
import toast from "react-hot-toast";
import { FaDollarSign, FaWallet } from "react-icons/fa";
import Payment from "../../../components/payment/BitcoinIcon";
import BitcoinIcon from "../../../components/payment/BitcoinIcon";
import PayPalIcon from "../../../components/payment/PayPalIcon";
import UpiIcon from "../../../components/payment/UpiIcon";
import PaytmIcon from "../../../components/payment/PaytmIcon";
import BankAccountIcon from "../../../components/payment/BackAccountIcon";
import { useLoading } from "../../../../context/loading-context";

const Cashout = ({className = ''}) => {
  const dispatch = useDispatch();
  const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({});
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  const totalAmount = useSelector((state) => state?.wallet?.totalAmount);
  const { startLoading, stopLoading } = useLoading();

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
    // console.log("paymentValue", e.target.value);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const hableDocumentModal = (e) => {
    setIsOpenDocumentModal(true);
  };


const handleSubmit = async () => {
  try {
    startLoading(); // Start loading state

    const response = await dispatch(
      userWithdrawAmount({ ...formData, userId: auth.id })
    );
    const resData = response.payload;

    if (resData?.responseCode === 200) {
      toast.success(resData?.responseMesage);
    } else {
      toast.error(resData?.responseMessage || "Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    stopLoading(); // Stop loading state
  }
};


useEffect(() => {
  startLoading(); // Start loading

  dispatch(fetchTotalAmount(auth.id))
    .unwrap()
    .catch((error) => {
      console.error("Error fetching total amount:", error);
    })
    .finally(() => {
      stopLoading(); // Stop loading after the process completes
    });
}, []);

  useEffect(() => {
    // console.log("paymentMethod", paymentMethod);
  }, [paymentMethod]);
  return (
    <>
      {/* <div className="cashoutsec text-left md:p-6 p-3">
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <h5 className="text-2xl text-white text-left pb-6 font-bold">
              Cashout
            </h5>
            <p className="text-gray-200">
              Redeem your <b>Coin Looty</b> earnings directly to PayPal, Amazon,
              Bitcoin and more! Withdraw to your crypto wallet starting at just
              $0.50, and to Stake starting at $0.25!
            </p>
          </div>
          <div className="dashboard-bg md:w-1/2 w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              {/* <img src={wallet} alt="waaletimg" className='walletImg' /> */}
              {/* <FaWallet className="walletImg text-[#FFD900] text-6xl" />
              <h5 className="text-xl font-bold text-white">Balance</h5>
            </div>
            <p className="wallet-balance text-[#04FF0E] font-bold text-xl">
              ${totalAmount}
            </p>
          </div>
        </div>
      </div> */} 
      <div
        className={`flex flex-col p-5 ${className}`}
        style={{ minWidth: "336px" }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white font-montserrat">
            Cashout
          </h1>
          <span className="text-sm font-bold font-montserrat bg-gradient-to-r from-[#FFD900] to-[#FFA900] bg-clip-text text-transparent">
            My withdrawls
          </span>
        </div>

        {/* Description */}
        <p className="text-md text-white font-montserrat font-medium mt-4 md:w-1/2 w-full text-left">
          Redeem your Opinion true earnings directly to PayPal, Amazon, Bitcoin
          and more! Withdraw to your crypto wallet starting at just $0.50, and
          to Stake starting at $0.25!
        </p>

        {/* Balance Card */}
        <div className="flex items-center mt-6 bg-[#384152] rounded-lg p-4">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9FrVippvFKitT_V/frame.png"
            alt="Balance Icon"
            className="w-15 h-15"
          />
          <span className="text-white font-bold text-base ml-4 font-montserrat">
            Balance
          </span>
          <span className="text-[#04FF0E] font-bold text-xl ml-auto font-montserrat">
          ${totalAmount}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center justify-center submit-btn rounded-full py-3 px-8 min-w-[119px]">
            <FaDollarSign className="text-2xl font-bold text-[#1E293B] mr-1" />
            <span className="text-xl font-bold text-[#1E293B] font-montserrat">
              Cash
            </span>
          </button>

          <button className="flex items-center justify-center border border-[#FFD900] rounded-full py-3 px-8 min-w-[137px] hover:bg-[#384152] transition-colors">
            <span className="text-base font-bold text-white font-montserrat">
              Gift card
            </span>
          </button>
        </div>
        {/* <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-6 lg:gap-3 mb-3 mt-2">
          <BitcoinIcon />
          <PayPalIcon />
          <UpiIcon />
          <PaytmIcon />
          <BankAccountIcon />
        </div> */}
      </div>
      <div className=" md:p-6 p-3">
        <div className="withdraw-amount">
          <div className="text-left md:mt-4 mt-2">
            <p className="text-gray-400">
              If you haven't submitted your document yet, submit the document
              here for the varification:
            </p>
            <button
              className="text-white p-2 rounded px-4 mt-2 submit-btn"
              onClick={hableDocumentModal}
            >
              Submit Document
            </button>
          </div>
          <div className="md:py-4 py-2 md:px-4 px-2 rounded shadow text-left md:mt-6 mt-2 withdrw-bg">
            <h5 className="text-xl text-white text-left pb-4 font-bold">
              Withdraw Cash
            </h5>
            <div className=" gap-4">
              <div className="w-full mb-3">
                <label className="text-gray-200">Amount</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded p-2"
                  placeholder="Enter Amount"
                  name="amount"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mb-3">
                <label className="text-gray-200">Select Payment Method</label>
                <select
                  className="w-full bg-gray-800 rounded p-2"
                  onChange={(e) => handlePaymentMethod(e)}
                >
                  <option value="">Select</option>
                  <option value="paypal">Paypal</option>
                  <option value="paytm">Paytm</option>
                  <option value="upi">UPI</option>
                  <option value="bankAccount">Bank Account</option>
                </select>
              </div>
              <div className="w-full mb-6">
                {paymentMethod === "paypal" && (
                  <>
                    <label className="text-gray-200">Paypal Account</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded p-2"
                      placeholder="Enter Payment Details"
                      name="paypal"
                      onChange={handleChange}
                    />{" "}
                  </>
                )}
                {paymentMethod === "paytm" && (
                  <>
                    <label className="text-gray-200">Paytm Number</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded p-2"
                      placeholder="Enter Payment Details"
                      name="paytm"
                      onChange={handleChange}
                    />{" "}
                  </>
                )}
                {paymentMethod === "upi" && (
                  <>
                    <label className="text-gray-200">UPI ID</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded p-2"
                      placeholder="Enter Payment Details"
                      name="upi"
                      onChange={handleChange}
                    />{" "}
                  </>
                )}
                {paymentMethod === "bankAccount" && (
                  <>
                    <label className="text-gray-200">Bank Account Number</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded p-2"
                      placeholder="Enter Payment Details"
                      name="bankAccount"
                      onChange={handleChange}
                    />{" "}
                  </>
                )}
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-6 lg:gap-3 mb-3">
                {/* <BitcoinIcon/>
                            <PayPalIcon/>
                            <UpiIcon/>
                            <PaytmIcon/>
                            <BankAccountIcon/> */}
              </div>
              <button
                className="submit-btn text-white p-2 rounded w-full"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <SubmitDocumentModal
        isOpenModal={isOpenDocumentModal}
        setIsOpenModal={setIsOpenDocumentModal}
      />
    </>
  );
};

export default Cashout;
