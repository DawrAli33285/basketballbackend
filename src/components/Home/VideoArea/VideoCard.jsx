import PropTypes from "prop-types";
import "./VideoCard.css";

const VideoCard = ({ videoInfo }) => {
  return (
    <div>
      {/* video area */}
      <div className="w-full h-[220px] rounded-xl overflow-hidden mb-5 relative">
        <img
          className="w-full h-full object-cover"
          src={videoInfo.video_src}
          alt=""
        />

        {/* play icon */}
        <div className="play-icon w-[45px] h-[45px] cursor-pointer p-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.335 1C21.6986 1 27.67 6.97008 27.67 14.335C27.67 21.6999 21.6986 27.67 14.335 27.67C6.97008 27.67 1 21.6999 1 14.335C1 6.97008 6.97008 1 14.335 1Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5458 14.3292C18.5458 13.1907 12.71 9.54825 12.048 10.2032C11.386 10.8581 11.3223 17.7387 12.048 18.4553C12.7736 19.1745 18.5458 15.4678 18.5458 14.3292Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* title */}
      <h3 className="text-[18px] font-medium pb-2.5 text-black">
        {" "}
        {videoInfo.video_title}{" "}
      </h3>
      <p className="text-base text-black font-medium">
        {" "}
        {videoInfo.video_desc}{" "}
      </p>
    </div>
  );
};

VideoCard.propTypes = {
  videoInfo: PropTypes.object,
};

export default VideoCard;
