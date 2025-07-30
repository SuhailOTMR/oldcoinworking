import React, { useState } from "react";

export default function AppComingSoonPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          📱 App Launching Soon!
        </h2>
        <p className="text-gray-700 mb-4">
          We are excited to announce that our mobile app is launching soon on{" "}
          <strong>Android and iOS</strong>. Stay tuned for the official release!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            className="h-10"
          />
          <img
            src="/app-store-badge.png"
            alt="Download on the App Store"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}
