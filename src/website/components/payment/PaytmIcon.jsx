import { FaPaypal } from "react-icons/fa"; // Paytm icon is not available, using Paypal as an alternative
import { SiPaytm } from "react-icons/si";

const PaytmIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-36 h-36 rounded-lg bg-gradient-to-b from-[#1CB5E0] to-[#000046] mr-3 icon-hover cursor-pointer">
      <SiPaytm size={80} className="text-white" />
      <h2 className="text-white font-bold text-lg mt-2">Paytm</h2>
    </div>
  );
};

export default PaytmIcon;
