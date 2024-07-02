import { useEffect, useState } from "react";
import SectionTop from "../SectionTop/SectionTop";
import { Link } from "react-router-dom";

const ClassPlayerArea = ({ classPlayers }) => {



  return (
    <div >
      {/* top area */}
      <SectionTop title={"Class of 2024 Player’s"} />

      {/* wrapper */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-7 pt-6 pb-10">
        {classPlayers &&
          classPlayers?.map((player, index) => (
            <div key={index} className="lg:w-[15rem] w-full flex flex-col items-center gap-5">
              {/* player image */}
              <div
                className="w-[100px] h-[100px]  lg:w-[130px]   lg:h-[130px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={player?.picture}
                  alt=""
                />
              </div>

              {/* player details */}
              <div className="text-center">
                <Link to={`/player-profile/${player?.auth?._id}`}>
                  <p className="text-[16px] cursor-pointer text-base font-medium leading-normal text-blue-500 hover:underline">
                    {player?.auth?.name}
                  </p>

                </Link>
                <div className="m-0 flex items-center text-sm text-[#171717] gap-[2px] lg:flex-row flex-col">
                  <span>{player?.position.toUpperCase()}</span><span className=" hidden lg:block">l</span><span> {player?.height} </span>
                  <span className=" hidden lg:block">l</span>
                  <span>{player?.location}</span>
                </div>
                <Link
                  to={`/player-profile/${player?.auth?._id}`}
                  className="mt-[8px] block px-5 py-1 text-[12px] text-[#000] leading-5 border border-solid border-[#000] rounded-[30px]"
                >
                  View profile
                </Link>
              </div>
            </div>
          ))}


      </div>
    </div>
  );
};

export default ClassPlayerArea;
