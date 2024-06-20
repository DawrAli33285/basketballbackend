import { useEffect, useState } from "react";
import "../../pages/PlayerProfile/PlayerProfile.css";
import Select from "react-select";

const SwitchPlayer = ({ players }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(7);
  const [playerClass, setPlayerClass] = useState("");
  const [position, setPosition] = useState("");
  const [playerState, setPlayerState] = useState("");

  const classOptions = [
    {value:"",label:'All'},
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];
  const stateOptions = [
    {value:"",label:'All'},
    { value: "North Carolina", label: "North Carolina" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "Los Angeles", label: "Los Angeles" },
  ];
  const positionOptions = [
    {value:"",label:'All'},
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

  const filteredPlayers = () => {
    return players?.filter((player) => {
      const playerClassLower = playerClass?.toLowerCase();
      const positionLower = position?.toLowerCase();
      const playerStateLower = playerState?.toLowerCase();

      const classMatches = playerClass
        ? player?.class?.toLowerCase()?.startsWith(playerClassLower)
        : true;
      const positionMatches = position
        ? player?.position?.toLowerCase()?.startsWith(positionLower)
        : true;
      const stateMatches = playerState
        ? player?.state?.toLowerCase()?.startsWith(playerStateLower)
        : true;

      return classMatches && positionMatches && stateMatches;
    });
  };

  return (
    <div>
      <h4 className="small--gray--text">SWITCH PLAYER</h4>

      {/* filtering area */}
      <div className="pt-5 pb-2 space-y-5 border-b border-solid border-[#DBDBDB]">
        <div>
          <Select
            styles={customSelectStyles}
            options={classOptions}
            placeholder="Class"
            onChange={(selectedOption) => setPlayerClass(selectedOption?.value || "")}
          />
        </div>
        <div>
          <Select
            styles={customSelectStyles}
            options={positionOptions}
            placeholder="Position"
            onChange={(selectedOption) => setPosition(selectedOption?.value || "")}
          />
        </div>
        <div>
          <Select
            styles={customSelectStyles}
            options={stateOptions}
            placeholder="State"
            onChange={(selectedOption) => setPlayerState(selectedOption?.value || "")}
          />
        </div>
      </div>

      {/* players area */}
      <div>
        {/* player list */}
        <div>
          {filteredPlayers()
            ?.slice(startIndex, endIndex)
            .map((player, index) => (
              <div
              style={{width:'17rem'}}
                className="flex items-center gap-8 py-3 border-b border-solid border-[#DBDBDB] mb-6"
                key={index}
              >
                {/* profile */}
                <div className="min-w-[80px] max-w-[80px] h-[80px] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={player?.picture}
                    alt=""
                  />
                </div>

                {/* details */}
                <div className="space-y-2.5">
                  <p className="text-[18px] font-medium text-[#000] leading-normal">
                    {player?.auth?.name}
                  </p>
                  <p className="text-base font-normal text-[#000] leading-6">
                    {player?.location}
                  </p>
                  <div className="flex items-center gap-[2px] text-base font-medium text-[#000] leading-normal">
                    <span>{player?.position?.toUpperCase()}</span>l<span> {player?.height} </span>l
                    <span> {player?.class} </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {players?.length > 7 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setStartIndex((prev) => endIndex);
              setEndIndex((prev) => prev + 7);
            }}
            className="py-3 w-full flex items-center justify-center text-sm text-[#000] border border-solid border-[#DBDBDB] rounded-[70px]"
          >
            More Players
          </button>
        )}
      </div>
    </div>
  );
};

export default SwitchPlayer;
