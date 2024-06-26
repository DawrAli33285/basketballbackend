import PropTypes from "prop-types";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

const SingleTeam = ({ teamIcon, teamName }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="w-[60px] h-[60px] rounded-full bg-[#F1F1F1] p-3">
        <img className="w-full h-full object-contain" src={teamIcon} alt="" />
      </div>
      <p className="text-[#0E0E0E] text-base font-bold leading-normal">
        {teamName}
      </p>
    </div>
  );
};

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 18"
    fill="none"
  >
    <path
      d="M15.4253 11.127C15.1879 11.3571 15.0788 11.6898 15.1329 12.0162L15.9478 16.5262C16.0166 16.9084 15.8552 17.2952 15.5353 17.5162C15.2218 17.7453 14.8047 17.7728 14.4628 17.5895L10.4029 15.472C10.2617 15.3968 10.105 15.3565 9.94456 15.3519H9.69614C9.60998 15.3647 9.52564 15.3922 9.44864 15.4344L5.38781 17.562C5.18706 17.6628 4.95973 17.6986 4.73698 17.6628C4.19431 17.5602 3.83223 17.0432 3.92114 16.4977L4.73698 11.9877C4.79106 11.6587 4.68198 11.3241 4.44456 11.0903L1.13448 7.88199C0.857644 7.61341 0.761394 7.21008 0.887894 6.84616C1.01073 6.48316 1.32423 6.21824 1.70281 6.15866L6.25864 5.49774C6.60514 5.46199 6.90948 5.25116 7.06531 4.93949L9.07281 0.823659C9.12048 0.731992 9.18189 0.647659 9.25614 0.576159L9.33864 0.511992C9.38173 0.464326 9.43123 0.424909 9.48623 0.392826L9.58614 0.356159L9.74198 0.291992H10.1279C10.4726 0.327742 10.776 0.533992 10.9346 0.841992L12.9686 4.93949C13.1153 5.23924 13.4004 5.44733 13.7295 5.49774L18.2853 6.15866C18.6703 6.21366 18.9921 6.47949 19.1195 6.84616C19.2396 7.21374 19.136 7.61708 18.8536 7.88199L15.4253 11.127Z"
      fill={filled ? "#FFB900" : "#DBDBDB"}
    />
  </svg>
);

const PlayerRow = ({ player }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < player?.starRating} />);
  }

  return (
    <div className="flex flex-col items-center text-base font-medium text-[#171717] leading-normal pt-4 lg:px-4 border-solid border-[#DBDBDB] border-t min-w-fit w-full lg:w-full">
      <div className="lg:flex hidden items-center w-full">
        {/* player name */}
        <div className="flex items-center gap-4 min-w-[280px] lg:w-[30%]">
          <div className="overflow-hidden">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={player?.picture}
              alt=""
            />
          </div>
          <div>
            <Link
              to={`/player-profile/${player?._id}`}
              className="text-[18px] font-medium text-[#000] w-fit block text-blue-500 hover:underline"
            >
              {player?.auth?.name}
            </Link>
          </div>

        </div>

        {/* class */}
        <div className="min-w-[120px] lg:w-[15%]">
          <p>{player?.class}</p>
        </div>
        {/* height */}
        <div className="min-w-[120px] lg:w-[10%]">
          <p>{player?.height}</p>
        </div>
        {/* position */}
        <div className="min-w-[140px] lg:w-[10%]">
          <p>{player?.position?.toUpperCase()}</p>
        </div>
        {/* rating */}
        <div className="min-w-[200px] lg:flex-grow flex items-center gap-3">
          {stars}
        </div>

        {/* open button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`cursor-pointer ease-in-out duration-300 w-4 h-4 ${isCollapsed ? "rotate-180" : ""
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M0.979454 0.813439C1.15697 0.635928 1.43474 0.61979 1.63048 0.765027L1.68656 0.813439L5.99967 5.12633L10.3128 0.813439C10.4903 0.635928 10.7681 0.61979 10.9638 0.765027L11.0199 0.813439C11.1974 0.99095 11.2135 1.26873 11.0683 1.46447L11.0199 1.52055L6.35323 6.18721C6.17572 6.36472 5.89794 6.38086 5.7022 6.23562L5.64612 6.18721L0.979454 1.52055C0.784192 1.32528 0.784192 1.0087 0.979454 0.813439Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex lg:hidden items-center w-full px-[10px]">
        {/* player name */}
        <div className="flex items-center gap-[6px] w-[40%]">
          <div className="overflow-hidden">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover"
              src={player?.picture}
              alt=""
            />
          </div>
          <div>
            <Link
              to={`/player-profile/${player?._id}`}
              className="text-[14px] font-medium w-fit block text-blue-500 hover:underline"
            >
              {player?.auth?.name}
            </Link>
          </div>

        </div>

        {/* class */}
        <div className="w-[20%]">
          <p>{player?.class}</p>
        </div>
        {/* height */}
        <div className="w-[20%]">
          <p>{player?.height}</p>
        </div>
        {/* position */}
        <div className="w-[20%] flex gap-[10px] items-center">
          <p>{player?.position?.toUpperCase()}</p>
          {/* open button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`cursor-pointer ease-in-out duration-300 w-4 h-4 ${isCollapsed ? "rotate-180" : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              className="w-full h-full"
            >
              <path
                d="M0.979454 0.813439C1.15697 0.635928 1.43474 0.61979 1.63048 0.765027L1.68656 0.813439L5.99967 5.12633L10.3128 0.813439C10.4903 0.635928 10.7681 0.61979 10.9638 0.765027L11.0199 0.813439C11.1974 0.99095 11.2135 1.26873 11.0683 1.46447L11.0199 1.52055L6.35323 6.18721C6.17572 6.36472 5.89794 6.38086 5.7022 6.23562L5.64612 6.18721L0.979454 1.52055C0.784192 1.32528 0.784192 1.0087 0.979454 0.813439Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

      </div>
      {/* collapsed content */}
      <div className={`${isCollapsed ? "block" : "hidden"} w-full py-4`}>
        <Collapse isOpened={isCollapsed}>
          {/* teams wrapper */}
          <div className="flex items-center justify-between w-full">
            {player?.offers?.map((offer, i) => (
              <SingleTeam key={i} teamIcon={offer?.logo} teamName={offer?.university} />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired,
};

SingleTeam.propTypes = {
  teamIcon: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default PlayerRow;
