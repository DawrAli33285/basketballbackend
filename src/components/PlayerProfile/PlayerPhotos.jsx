import { useEffect, useState } from "react";

const PlayerPhotos = ({ photos }) => {
  // const [photos, setPhotos] = useState(null);

  // useEffect(() => {
  //   fetch("/photos.json")
  //     .then((res) => res.json())
  //     .then((data) => setPhotos(data));
  // }, []);

  return (
    <div>
      {/* wrapper */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-7">
        {photos && photos.length > 0 ? (
          photos.map((item, index) => (
            <div className="w-full lg:w-[165px] h-[165px] relative" key={index}>
              {/* image */}
              <img
                className="w-full h-full object-cover"
                src={item}
                alt={`photo-${index}`}
              />
            </div>
          ))
        ) : (
          <p className="col-span-2 lg:col-span-4 text-center text-[#000] text-base leading-6 font-normal">
            No photos
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerPhotos;
