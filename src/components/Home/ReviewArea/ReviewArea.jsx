import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./reviewarea.css"
const ReviewArea = ({reviews}) => {

  return (
    <div className="pb-12">
      {/* title */}
      <p className="pb-4 text-[20px] text-[#000] leading-normal font-semibold ">
        Testimonial
      </p>
      <div className="grid review-area grid-cols-1  gap-6">
        {reviews &&
          reviews?.map((item, index) => (
            <ReviewCard key={index} review={item} />
          ))}
      </div>
    </div>
  );
};

export default ReviewArea;
