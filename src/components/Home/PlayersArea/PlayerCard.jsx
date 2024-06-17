import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayerCard = ({ playerInfo }) => {
  return (
    <div className="flex items-end gap-7">
      {/* image */}
      <div className=" w-[100px] h-[100px] lg:w-[120px]   lg:h-[120px] rounded-full overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={playerInfo.player_image}
          alt=""
        />
      </div>

      {/* info */}
      <div className="space-y-1.5">
        <p className="text-[18px] text-black font-medium">
          {playerInfo.player_name}
        </p>
        <p className="text-base text-black font-normal leading-6">
          {playerInfo.location}
        </p>
        <div className="flex items-center text-base text-black font-medium gap-2">
          <span className="after:">{playerInfo.feature}</span>l
          <span>{playerInfo.player_height}</span>l<span>{playerInfo.year}</span>
        </div>

        <div className="w-fit">
          <Link
            to={`/player-profile/${playerInfo.player_id}`}
            className="py-1 px-5 text-sm  rounded-[30px] border-solid border border-black "
          >
            {" "}
            View Profile{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  playerInfo: PropTypes.object,
};

export default PlayerCard;