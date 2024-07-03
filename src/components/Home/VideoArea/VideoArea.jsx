import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import SectionTop from "../SectionTop/SectionTop";
import "./VideoCard.css"
const VideoArea = ({videos,setState}) => {


  return (
    <div className="my-[50px]">
      {/* top part */}
      <SectionTop title={"Videos"} />

      <div className=" grid grid-cols-1 videos-wrapper gap-[30px] ">
        {videos &&
          videos?.map((item, index) => (
            <VideoCard  key={index} videoInfo={item} />
          ))}
      </div>
    </div>
  );
};

export default VideoArea;
