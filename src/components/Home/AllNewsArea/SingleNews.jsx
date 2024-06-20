import PropTypes from "prop-types";

const SingleNews = ({ news }) => {

  return (
    <div className="space-y-2.5">
      {/* img wrapper */}
      <div className="w-full h-[220px] rounded-xl overflow-hidden mb-1.5">
        <img
          className="w-full h-full object-cover"
          src={news?.banner}
          alt=""
        />
      </div>

      <p className="text-[#000] text-base leading-6"> {news.news_date} </p>

      <h3 className="text-[#000] text-[18px] font-medium leading-normal" > {news?.title} </h3>

      <p className="text-base text-[#818181] font-medium">{news?.description}</p>
    </div>
  );
};

SingleNews.propTypes = {
  news: PropTypes.object,
};

export default SingleNews;
