import React from 'react'
import { FaBitcoin } from 'react-icons/fa';

const BitcoinIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-yellow-300 to-orange-600 rounded-lg w-36 h-36 mr-3 icon-hover cursor-pointer">
      <FaBitcoin size={80} className="text-white" />
      <h2 className="text-white font-bold text-lg mt-2">Bitcoin</h2>
    </div>
  );
}

export default BitcoinIcon