import React from "react";
import { FaApple, FaCcVisa, FaBitcoin, FaAmazon } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const CashoutStats = () => {
    const cashouts = Array(20).fill({
        name: "Jennifer",
        time: "1 minute ago",
        amount: "$15.00",
        avatar: "https://img.freepik.com/premium-photo/passport-photo-man-welldressed-caucasian-businessman-suit-tie-smiling-id-portrait_817921-61256.jpg?w=740",
    });

    return (
        <div
            className="w-[100vw] lg:w-[70vw] bg-cover bg-no-repeat bg-center overflow-hidden"
            style={{ backgroundImage: "url('/cashout.png')", margin: "auto",borderRadius:"30px",minHeight:"500px" }}
        >
            <div className="flex flex-col md:flex-row w-full min-h-[500px] px-6 py-10 md:p-12 text-white ">
                {/* Left Section */}


                <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-lg text-gray-300">THIS MONTH’S</p>
                        <h2 className="font-bold text-[28px]">TOTAL CASHOUT</h2>
                        <p className="font-extrabold  mt-4 mb-6 text-[40px]" style={{color:"white"}}>
                            $491,186.52
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-3xl mt-2">
                        <FaApple />
                        <FaCcVisa />
                        <SiGoogleplay />
                        <FaBitcoin />
                        <FaAmazon />
                    </div>
                </div>


                {/* Right Section */}
                <div className="flex-1 mt-10 md:mt-0 md:ml-10 bg-[#12142A] rounded-xl p-4 shadow-md max-h-[400px] overflow-y-auto space-y-4 hide-scrollbar" style={{minHeight:"500px"}}>
                    {cashouts.map((user, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-[#181933] rounded-lg px-4 py-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full border border-white"
                                />
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.time}</p>
                                </div>
                            </div>
                            <p className="text-lg font-bold " style={{color:"#27FD6A"}}>{user.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CashoutStats;
