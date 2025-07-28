import { MdPayment } from "react-icons/md"; // Generic payment icon

const UpiIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-36 h-36 rounded-lg bg-gradient-to-b from-orange-400 to-green-400 shadow-lg mr-3 cursor-pointer icon-hover">
      <MdPayment size={80} className="text-white" />
      <h2 className="text-white font-bold text-lg mt-2">UPI</h2>
    </div>
  );
};

export default UpiIcon;
