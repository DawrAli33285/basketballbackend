import PropTypes from "prop-types";
import SingleNews from "./SingleNews";

const NewsWrapper = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-7">
      {newsData?.map((item, index) => (
        <SingleNews key={index} news={item} />
      ))}
    </div>
  );
};

NewsWrapper.propTypes = {
  newsData: PropTypes.array,
};

export default NewsWrapper;
