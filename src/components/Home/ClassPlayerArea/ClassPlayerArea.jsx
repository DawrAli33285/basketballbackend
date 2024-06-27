import { useEffect, useState } from "react";
import SectionTop from "../SectionTop/SectionTop";
import { Link } from "react-router-dom";

const ClassPlayerArea = ({classPlayers}) => {



  return (
    <div >
      {/* top area */}
      <SectionTop title={"Class of 2024 Player’s"} />

      {/* wrapper */}
      <div  className="grid grid-cols-1 lg:grid-cols-6 gap-36 pt-6 pb-10">
        {classPlayers &&
          classPlayers?.map((player, index) => (
            <div  key={index} className="lg:w-[15rem] w-full flex flex-col items-center gap-5">
              {/* player image */}
              <div className=" w-[100px] h-[100px]  lg:w-[130px]   lg:h-[130px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={player?.picture}
                  alt=""
                />
              </div>

              {/* player details */}
              <div  className="text-center space-y-1.5">
                <p className="text-[#000] text-base font-medium leading-normal">
                  {" "}
                  {player?.auth?.name}{" "}
                </p>
                <div className="flex items-center text-sm text-[#171717] gap-[2px]">
                  <span>{player?.position.toUpperCase()}</span>l<span> {player?.height} </span>l
                  <span>{player?.location}</span>
                </div>
                <Link
                  to={`/player-profile/${player?.auth?._id}`}
                  className="block px-5 py-1 text-sm text-[#000] leading-5 border border-solid border-[#000] rounded-[30px]"
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
