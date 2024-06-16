import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewArea = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="pb-12">
      {/* title */}
      <p className="pb-4 text-[20px] text-[#000] leading-normal font-semibold ">
        Testimonial
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviews &&
          reviews.map((item, index) => (
            <ReviewCard key={index} review={item} />
          ))}
      </div>
    </div>
  );
};

export default ReviewArea;
