import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayerCard = ({ playerInfo }) => {
  return (
    <div  className="flex items-end gap-7 w-full">
      {/* image */}
      <div className=" w-[80px] rounded-full overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={playerInfo?.picture}
          alt=""
        />
      </div>

      {/* info */}
      <div >
<Link to={`/player-profile/${playerInfo?.auth?._id}`}>
<p className="text-[18px] cursor-pointer text-black font-medium text-blue-500 hover:underline">
  {playerInfo?.auth?.name}
</p>
</Link>

        <p className="text-base text-black font-normal leading-6">
          {playerInfo?.location}
        </p>
        <div className="flex items-center text-base text-black font-medium gap-2">
          <span className="after:">{playerInfo?.position?.toUpperCase()}</span>l
          <span>{playerInfo?.height}</span>l<span>{playerInfo?.class}</span>
        </div>

        <div className="w-fit">
          <Link
            to={`/player-profile/${playerInfo?.auth?._id}`}
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
