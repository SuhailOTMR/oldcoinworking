import React from 'react'
import { FaPaypal } from 'react-icons/fa';

const PayPalIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg w-36 h-36 shadow-lg mr-3 icon-hover cursor-pointer">
      <FaPaypal size={80} className="text-white" />
      <h2 className="text-white font-bold text-lg mt-2">PayPal</h2>
    </div>
  );
}

export default PayPalIcon