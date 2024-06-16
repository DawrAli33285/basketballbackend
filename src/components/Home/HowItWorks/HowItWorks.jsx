import PropTypes from "prop-types";

const SingleBox = ({ title, children, stepNumber }) => {
  return (
    <div
      className={`bg-[#fff] px-[22px] pb-6 pt-[40px] rounded-xl border border-solid border-[#E9E9E9] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.06)] relative h-fit w-full`}
    >
      <span className="  text-base text-[#fff] leading-6 font-normal bg-primaryColor rounded-full w-11 h-11  flex items-center justify-center absolute left-1/2 -top-6 -translate-x-1/2 ">
        {" "}
        {stepNumber}{" "}
      </span>
      <h3 className=" text-center text-[18px] text-[#000] font-medium leading-normal pb-3 ">
        {" "}
        {title}{" "}
      </h3>

      <p className="text-base text-[#000] leading-[26px] text-center ">
        {" "}
        {children}{" "}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className=" my-12  lg:my-[80px]">
      <h3 className="text-[26px] font-bold text-[#000] leading-normal text-center ">
        How it works
      </h3>

      {/* steps wrapper */}
      <div className="flex gap-8 mt-12 relative flex-col lg:flex-row ">
        {/* arrow */}
        <div className="w-[60px] h-[30px] absolute z-10 top-12 left-[30%] hidden lg:block ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="57"
            viewBox="0 0 68 57"
            fill="none"
          >
            <path
              d="M1.76169 24.1869C20.5174 23.3029 41.2981 27.8945 57.3634 38.1368"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M45.7134 41.4592C51.7152 38.8648 57.7059 38.3557 61.5454 40.8035"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M55.4585 26.1736C55.6393 32.7097 57.7059 38.3557 61.5454 40.8035"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex-1">
          <SingleBox
            title={"Answer a few Questions to Find Your Perfect Coach"}
            stepNumber={1}
          >
            Finding the right tennis coach is difficult, but we’ve already done
            the hard work for you. Tell us your goals and our coach-finder will
            search our 2,300+ coach database to find the perfect instructor for
            you.
          </SingleBox>
        </div>
        {/* arrow */}
        <div className="w-[60px] h-[30px] absolute z-10 top-[110px] left-[64%] hidden lg:block ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="57"
            viewBox="0 0 68 57"
            fill="none"
          >
            <path
              d="M1.76169 24.1869C20.5174 23.3029 41.2981 27.8945 57.3634 38.1368"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M45.7134 41.4592C51.7152 38.8648 57.7059 38.3557 61.5454 40.8035"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M55.4585 26.1736C55.6393 32.7097 57.7059 38.3557 61.5454 40.8035"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="lg:mt-12 flex-1">
          <SingleBox
            title={"Schedule Your Lessons When & Where You Choose"}
            stepNumber={2}
          >
            Schedule your lessons at courts and times that are convenient for
            you. If you need any help or have questions, our concierge team is
            here to help you every step of the way.
          </SingleBox>
        </div>
        <div className="flex-1 lg:mt-[80px]">
          <SingleBox
            title={"Learn, Play and Improve Your tennis Game"}
            stepNumber={3}
          >
            Our top-rated coaches are knowledgeable, fun and patient. You’ll be
            amazed how quickly you will improve when you’re working with a coach
            hand-picked just for you.
          </SingleBox>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

SingleBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  stepNumber: PropTypes.number,
};
