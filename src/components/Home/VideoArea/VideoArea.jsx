import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import SectionTop from "../SectionTop/SectionTop";

const VideoArea = ({videos}) => {


  return (
    <div className="my-[50px]">
      {/* top part */}
      <SectionTop title={"Videos"} />

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[30px] ">
        {videos &&
          videos?.map((item, index) => (
            <VideoCard key={index} videoInfo={item} />
          ))}
      </div>
    </div>
  );
};

export default VideoArea;
