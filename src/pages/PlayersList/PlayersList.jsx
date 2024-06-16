import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayerList.css";
import Select from "react-select";
import PlayerRow from "./PlayerRow";

const PlayersList = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const classOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];
  const stateOptions = [
    { value: "North Carolina", label: "North Carolina" },
    { value: "new Jersy", label: "New Jersy" },
    { value: "Los Angeles", label: "Los Angeles" },
  ];
  const positionOptions = [
    { value: "PG", label: "PG" },
    { value: "SG", label: "SG" },
    { value: "SF", label: "SF" },
    { value: "PF", label: "PF" },
    { value: "C", label: "C" },
  ];

  const customSelectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "#DBDBDB", // Change border color
      borderRadius: "70px", // Make it rounded
      boxShadow: state.isFocused ? "0 0 0 1px #DBDBDB" : "none",
      "&:focus": {
        borderColor: "#DBDBDB", // Change border color on focus
      }, // Optional: shadow on focus
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      zIndex: 9999,
      color: "#000",
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "#f33" : "white",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "grey",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: "#000",
    }),
  };

  return (
    <div>
      {/* top part */}
      <div className="relative">
        {/* search bar */}
        <div className="w-full relative ">
          {/* icon */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <circle
                cx="9.76688"
                cy="9.76688"
                r="8.98856"
                stroke="#818181"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0186 16.4854L19.5426 20.0002"
                stroke="#818181"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full py-2.5 lg:py-3.5 px-6 pl-14  bg-[#F8FAFC] border border-solid border-[#E9E9E9] rounded-[30px] focus:outline-none "
          />
        </div>

        {/* select options */}
        <div className="flex items-center justify-between pt-3 flex-col lg:flex-row gap-3 lg:gap-0">
          <div className=" w-full lg:w-[230px]">
            <Select
              styles={customSelectStyles}
              options={classOptions}
              placeholder="Class"
            />
          </div>
          <div className=" w-full lg:w-[230px]">
            <Select
              styles={customSelectStyles}
              options={positionOptions}
              placeholder="Postion"
            />
          </div>
          <div className=" w-full lg:w-[230px]">
            <Select
              styles={customSelectStyles}
              options={stateOptions}
              placeholder="State"
            />
          </div>
        </div>

        {/* go back */}
        <div
          onClick={() => navigate(-1)}
          className="w-6 h-6 cursor-pointer absolute top-1/2 -translate-y-1/2 -left-9 hidden lg:block "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M1.25 7.27441L16.25 7.27441"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.2998 13.299L1.2498 7.275L7.2998 1.25"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* player table area */}
      <div className=" pt-12 lg:pt-[60px] mb-8 lg:mb-[115px] overflow-x-auto min-w-full ">
        {players && (
          <div>
            {/* player heading */}
            <div className="flex items-center text-base text-[#0E0E0E] leading-6 font-semibold pb-3 ">
              <p className=" min-w-[280px] lg:w-[30%]">Player Name</p>
              <p className=" min-w-[120px] lg:w-[15%]">Class</p>
              <p className=" min-w-[120px] lg:w-[10%]">Height</p>
              <p className=" min-w-[140px] lg:w-[10%]">Position</p>
              <p className=" min-w-[200px] lg:flex-grow">Star Rating</p>
            </div>

            <div>
              {players.map((singlePlayer, index) => (
                <PlayerRow player={singlePlayer} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersList;
