import { useEffect, useState } from "react";
import SectionTop from "../SectionTop/SectionTop";
import PlayerCard from "./PlayerCard";
import Select from "react-select";

const PlayersArea = ({ players, setState }) => {
  const [playerClass, setClass] = useState("");
  const [selectedOption, setSelectedOption] = useState({ value: "", label: "All" });

  const positionOptions = [
    { value: "", label: "All" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const customSelectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "#000", // Change border color
      borderRadius: "8px", // Make it rounded
      boxShadow: state.isFocused ? "0 0 0 1px #DBDBDB" : "none",
      "&:focus": {
        borderColor: "#DBDBDB", // Change border color on focus
      }, // Optional: shadow on focus
      "&:hover": {
        borderColor: "#000",
      },
      cursor: "pointer",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      zIndex: 9999,
      color: "#000",
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "#f33" : "white",
      cursor: "pointer",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "#000",
      borderColor: "#000",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: "#000",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "inherit",
      "&:hover": {
        color: "inherit",
      },
    }),
  };

  return (
    <div className="mb-[50px] relative">
      {/* top part */}
      <SectionTop title={"Top Player’s"} />

      {/* year select */}
      <div className="flex flex-row items-center space-x-2 w-full max-w-[300px] absolute right-[80px] -top-1">
        <Select
          value={selectedOption}
          styles={customSelectStyles}
          onChange={(e) => {
            setClass(e.value);
            setSelectedOption(e);
          }}
          options={positionOptions}
          className="flex-grow"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => {
            setClass("");
            setSelectedOption({ value: "", label: "All" });
          }}
        >
          Reset
        </button>
      </div>

      {/* players */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-[75px]">
        {players &&
          players
            .filter((u) => u?.class?.startsWith(playerClass?.toString()))
            .map((player, index) => <PlayerCard key={index} playerInfo={player} />)}
      </div>
    </div>
  );
};

export default PlayersArea;
