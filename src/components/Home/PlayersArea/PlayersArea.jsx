import { useEffect, useState } from "react";
import SectionTop from "../SectionTop/SectionTop";
import PlayerCard from "./PlayerCard";
import Select from "react-select";

const PlayersArea = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const positionOptions = [
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
      <div className="max-w-[100px] absolute right-[80px] -top-1 ">
        <Select
          defaultValue={{ value: "2024", label: "2024" }}
          styles={customSelectStyles}
          options={positionOptions}
        />
      </div>

      {/* players */}
      <div className="grid grid-cols-1  lg:grid-cols-3  gap-9 lg:gap-[75px]">
        {players &&
          players.map((player, index) => (
            <PlayerCard key={index} playerInfo={player} />
          ))}
      </div>
    </div>
  );
};

export default PlayersArea;
