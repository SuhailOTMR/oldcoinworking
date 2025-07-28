import React from 'react'
import { FaEdit, FaPencilAlt } from 'react-icons/fa'
import { GrShare } from "react-icons/gr";

const DailyBoard = ({ className = "" }) => {
  const img = "/dummy.png";

  const topThreeData = [
    {
      position: 2,
      name: "Ambreen",
      prize: "$35",
      borderColor: "p-0.5 border-t-2 border-l-2 border-r-2 border-[#8D8989]",
      avatarBg: "bg-[#384152]",
      additionalStyles:
        "p-0.5 border-t-2 border-l-2 border-r-2 border-[#8D8989] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[26px] before:pointer-events-none before:shadow-[inset_10px_0_15px_rgba(141,137,137,0.5),inset_-10px_0_15px_rgba(141,137,137,0.5)]",
      textColor:
        "bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent",
    },
    {
      position: 1,
      name: "Marco",
      prize: "$50",
      borderColor: "p-0.5 border-t-2 border-l-2 border-r-2 border-yellow-500",
      avatarBg: "bg-[#384152]",
      additionalStyles:
        "p-0.5 border-t-2 border-l-2 border-r-2 border-yellow-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[26px] before:pointer-events-none before:shadow-[inset_10px_0_15px_rgba(255,204,0,0.5),inset_-10px_0_15px_rgba(255,204,0,0.5)]",
      textColor:
        "bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent",
    },
    {
      position: 3,
      name: "Victor",
      prize: "$17.5",
      borderColor: "p-0.5 border-t-2 border-l-2 border-r-2 border-orange-500",
      avatarBg: "bg-[#384152]",
      additionalStyles:
        "p-0.5 border-t-2 border-l-2 border-r-2 border-orange-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[26px] before:pointer-events-none before:shadow-[inset_10px_0_15px_rgba(255,165,0,0.5),inset_-10px_0_15px_rgba(255,165,0,0.5)]",
      textColor:
        "bg-gradient-to-b from-orange-200 to-orange-500 bg-clip-text text-transparent",
    },
  ];

  const tableData = [
    {
      rank: 1,
      user: "Marco",
      earnings: "$585",
      prize: "$50",
      bgColor: "bg-[#384152]",
    },
    {
      rank: 2,
      user: "Ambreen",
      earnings: "$500",
      prize: "$35",
      bgColor: "bg-[#252a34]",
    },
    {
      rank: 3,
      user: "Victor",
      earnings: "$465",
      prize: "$17.5",
      bgColor: "bg-[#384152]",
    },
    {
      rank: 4,
      user: "benmjo97",
      earnings: "$385",
      prize: "$50",
      bgColor: "bg-[#252a34]",
    },
    {
      rank: 5,
      user: "benmjo97",
      earnings: "$355",
      prize: "$50",
      bgColor: "bg-[#384152]",
    },
    {
      rank: 6,
      user: "benmjo97",
      earnings: "$285",
      prize: "$50",
      bgColor: "bg-[#252a34]",
    },
    {
      rank: 7,
      user: "benmjo97",
      earnings: "$250",
      prize: "$50",
      bgColor: "bg-[#384152]",
    },
    {
      rank: 8,
      user: "benmjo97",
      earnings: "$200",
      prize: "$50",
      bgColor: "bg-[#252a34]",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center overflow-x-auto">
        <div
          className={`flex justify-center items-end gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-9 min-w-[300px] sm:min-w-[400px] max-w-full ${className}`}
        >
          {topThreeData.map((player, index) => (
            <div
              key={player.name}
              className={`flex flex-col items-center ${
                index === 1 ? "mb-12 sm:mb-16" : "mb-2 sm:mb-0"
              }`}
            >
              {/* Card Container */}
              <div
                className={`relative w-[100px] sm:w-[120px] md:w-[126px] h-[170px] sm:h-[190px] md:h-[201px] 
                      rounded-[20px] sm:rounded-[24px] md:rounded-[26px] bg-gradient-to-b ${player.additionalStyles}`}
              >
                {/* Avatar Image */}
                <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`relative w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px] 
                          rounded-full ${player.avatarBg} border-3 ${player.borderColor} 
                          flex items-center justify-center`}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Verified Icon with Position Number */}
                    <div className="absolute bottom-[-4px] flex items-center">
                      <img
                        src="https://dashboard.codeparrot.ai/api/image/Z9Lo15IdzXb5OlHM/vector.png"
                        alt="verified"
                        className="w-[20px] sm:w-[22px] md:w-[25px] h-[20px] sm:h-[22px] md:h-[25px]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[14px] md:text-[15px] font-bold text-black">
                        {player.position}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Player Info */}
                <div className="h-full w-full flex flex-col items-center justify-end pb-4 sm:pb-6 pt-14 sm:pt-16">
                  <h3
                    className={`text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-b ${player.textColor} bg-clip-text text-transparent`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-sm sm:text-lg md:text-xl font-bold text-white mt-1 sm:mt-2">
                    {player.prize}
                  </p>
                  <p className="text-xs sm:text-sm md:text-lg font-semibold text-gray-200 mt-1 sm:mt-2">
                    Prize
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto border border-gray-400 rounded-sm mb-2">
  <table className="w-full border-collapse text-white min-w-[300px] sm:min-w-[500px] md:min-w-[600px]">
    {/* Table Header */}
    <thead>
      <tr className="border-b border-gray-700 text-[#d9d9d9] font-bold text-sm md:text-base">
        <th className="py-2 text-center w-12 md:w-16">#</th>
        <th className="py-2 text-left w-32 md:w-40">User</th>
        <th className="py-2 text-center w-20 md:w-28">Earnings</th>
        <th className="py-2 text-center w-20 md:w-28">Prize</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {tableData.map((row, index) => (
        <tr key={index} className={`rounded-lg ${row.bgColor}`}>
          <td className="py-3 text-center">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded mx-auto ${
                index === 1
                  ? "bg-[#7f7f7f]"
                  : index === 2
                  ? "bg-[#ffd6a4]"
                  : "bg-[#ffd900]/15"
              }`}
            >
              <span
                className={`font-bold text-xs md:text-sm ${
                  index === 1
                    ? "text-[#c5c1c1]"
                    : index === 2
                    ? "text-[#ff910d]"
                    : "text-[#ffd900]"
                }`}
              >
                {row.rank}
              </span>
            </div>
          </td>

          <td className="py-5 flex items-center gap-2">
            <span className="text-white font-medium text-xs md:text-sm">
              {row.user}
            </span>
            <GrShare className="w-3 h-3 md:w-4 md:h-4 text-gray-400 cursor-pointer hover:text-white" />
          </td>

          <td className="py-3 text-center text-white font-bold text-xs md:text-sm">
            {row.earnings}
          </td>

          <td className="py-3 text-center text-white font-bold text-xs md:text-sm">
            {row.prize}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
}

export default DailyBoard