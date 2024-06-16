import { useEffect, useState } from "react";
import "../../pages/PlayerProfile/PlayerProfile.css";
import Select from "react-select";

const SwitchPlayer = () => {
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
      <h4 className="small--gray--text">SWTICH PLAYER</h4>

      {/* filtering area */}
      <div className="pt-5 pb-2 space-y-5 border-b border-solid border-[#DBDBDB]">
        <div>
          <Select
            styles={customSelectStyles}
            options={classOptions}
            placeholder="Class"
          />
        </div>
        <div>
          <Select
            styles={customSelectStyles}
            options={positionOptions}
            placeholder="Position"
          />
        </div>
        <div>
          <Select
            styles={customSelectStyles}
            options={stateOptions}
            placeholder="State"
          />
        </div>
      </div>

      {/* players area */}
      <div>
        {/* player list */}
        <div>
          {players &&
            players.slice(0, 7).map((player, index) => (
              <div
                className="flex items-center gap-8  py-3 border-b border-solid border-[#DBDBDB] mb-6"
                key={index}
              >
                {/* profile */}
                <div className="min-w-[80px] max-w-[80px] h-[80px] rounded-full overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={player.player_image}
                    alt=""
                  />
                </div>

                {/* details */}
                <div className="space-y-2.5">
                  <p className="text-[18px] font-medium text-[#000] leading-normal">
                    {" "}
                    {player.player_name}{" "}
                  </p>
                  <p className="text-base font-normal  text-[#000] leading-6">
                    {" "}
                    {player.location}{" "}
                  </p>
                  <div className="flex items-center gap-[2px] text-base font-medium text-[#000] leading-normal">
                    <span>PG</span>l<span> {player.player_height} </span>l
                    <span> {player.year} </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button className="py-3 w-full flex items-center justify-center text-sm text-[#000] border border-solid border-[#DBDBDB] rounded-[70px]">
          More Players
        </button>
      </div>
    </div>
  );
};

export default SwitchPlayer;
