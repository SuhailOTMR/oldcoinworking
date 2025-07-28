import { FaUniversity } from "react-icons/fa"; // Bank icon

const BankAccountIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-300 to-gray-600 rounded-lg w-36 h-36 icon-hover cursor-pointer">
      <FaUniversity size={80} className="text-white" />
      <h2 className="text-white font-bold text-lg mt-2 text-center">Bank Account</h2>
    </div>
  );
};

export default BankAccountIcon;