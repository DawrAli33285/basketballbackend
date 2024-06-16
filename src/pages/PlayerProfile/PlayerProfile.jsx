import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PlayerProfile.css";
import SwitchPlayer from "../../components/PlayerProfile/SwitchPlayer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Collapse } from "react-collapse";
import PlayerReels from "../../components/PlayerProfile/PlayerReels";
import PlayerPhotos from "../../components/PlayerProfile/PlayerPhotos";
import PlayerOffers from "../../components/PlayerProfile/PlayerOffers";
import PlayerNews from "../../components/PlayerProfile/PlayerNews";
import { BASE_URL } from "../../baseurl/baseurl";
import axios from 'axios'
const PlayerProfile = () => {
  const [playerData, setPlayerData] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
fetchUser(id)
    // fetch("/players.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const result = data.find((item) => item.player_id === id);

    //     return setPlayerData(result);
    //   });
  }, [id]);

const fetchUser=async(id)=>{
let response=await axios.get(`${BASE_URL}/get-profile/${id}`)
if(response.status==200){
  const {profile}=response.data
  console.log(profile)
setPlayerData(profile)
}

}
const currentYear = new Date().getFullYear();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactDetailsOpen, setIsContactDetailsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isAccomplishmentsOpen, setIsAccomplishmentsOpen] = useState(false);
  const [isPreviousCoachOpen, setIsPreviousCoachOpen] = useState(false);

  const contactInfo = [
    {
      label: "Name",
      value: "Name",
    },
    {
      label: "Email",
      value:"Name",
    },
    {
      label: "School",
      value: "Name"
    },
    {
      label: "Jersey number",
      value: "23",
    },
    {
      label: "Height",
      value:"Name",
    },
    {
      label: "Weight",
      value: "Name",
    },
    {
      label: "Class",
      value:  "Name",
    },
    {
      label: "Birthplace",
      value: "Brooklyn, New York",
    },
  ];
  const coachInfo = [
    {
      label: "Coach Name",
      value: "Michael Bale",
    },
    {
      label: "Coach Phone",
      value: "+2558822288",
    },
    {
      label: "Coach Email",
      value: "samuel@james.com",
    },
    {
      label: "Coach Program",
      value: "NNJJA",
    },
  ];
  const academicInfo = [
    {
      label: "GPA",
      value: "5.00",
    },
    {
      label: "SAT Score",
      value: "182",
    },
    {
      label: "ACT Score",
      value: "85",
    },
    {
      label: "NCAA ID",
      value: "856545685",
    },
  ];
  const contactDetailsInfo = [
    {
      label: "Phone Number",
      value: "Name",
    },
    {
      label: "Email",
      value:  "Name",
    },

  ];

  const atheleticInfo = [
    "First runner up at inter basket ball championship",
    "Highest Point on any Basket Ball turf Match",
    "Most Awarded Player in The Turf",
  ];

  const seasonString = `${currentYear}-${currentYear.toString().slice(-2)}`;

  const commonSingleItemStyle = `p-5 bg-[#fff] rounded-xl shadow-[0px_0px_13px_0px_rgba(0,0,0,0.05)] single-profile-content `;

  // player stats
  // const [stats, setStats] = useState(null);  

  // useEffect(() => {
  //   fetch("/stats.json")
  //     .then((res) => res.json())
  //     .then((data) => setStats(data));
  // }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* top part */}
      <div className="flex items-center pb-6 ">
        {/* go back */}
        <div onClick={() => navigate(-1)} className="w-6 h-6 cursor-pointer">
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

        <p className="text-center text-[18px] font-medium  text-black flex-grow">
          Player Profile
        </p>
      </div>

      {playerData && (
        <div>
          {/* player info part */}
          <div className="flex p-3 lg:p-6 rounded-xl info-box items-start gap-8 flex-col lg:flex-row lg:items-center ">
            {/* player about stats */}
            <div className=" flex items-center gap-6 flex-col lg:flex-row lg:items-start w-full lg:w-auto ">
              {/* image */}
              <div className="w-[125px] h-[125px] rounded-full border-black border-solid border-[6px] overflow-hidden">
                <img
                  className="w-full h-full object-cover border-red-600 border-solid border-[6px] rounded-full "
                  src={playerData?.player?.picture}
                  alt=""
                />
              </div>

              <div className="space-y-8 ">
                {/* personal info */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <p className="text-[22px] font-bold text-[#131416] leading-8 ">
                      {" "}
                      {playerData?.auth?.name}
                    </p>

                    <div className="w6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M10.7489 2.45031C11.4389 1.86031 12.5689 1.86031 13.2689 2.45031L14.8489 3.81031C15.1489 4.07031 15.7089 4.28031 16.1089 4.28031H17.8089C18.8689 4.28031 19.7389 5.15031 19.7389 6.21031V7.91031C19.7389 8.30031 19.9489 8.87031 20.2089 9.17031L21.5689 10.7503C22.1589 11.4403 22.1589 12.5703 21.5689 13.2703L20.2089 14.8503C19.9489 15.1503 19.7389 15.7103 19.7389 16.1103V17.8103C19.7389 18.8703 18.8689 19.7403 17.8089 19.7403H16.1089C15.7189 19.7403 15.1489 19.9503 14.8489 20.2103L13.2689 21.5703C12.5789 22.1603 11.4489 22.1603 10.7489 21.5703L9.16891 20.2103C8.86891 19.9503 8.30891 19.7403 7.90891 19.7403H6.17891C5.11891 19.7403 4.24891 18.8703 4.24891 17.8103V16.1003C4.24891 15.7103 4.03891 15.1503 3.78891 14.8503L2.43891 13.2603C1.85891 12.5703 1.85891 11.4503 2.43891 10.7603L3.78891 9.17031C4.03891 8.87031 4.24891 8.31031 4.24891 7.92031V6.20031C4.24891 5.14031 5.11891 4.27031 6.17891 4.27031H7.90891C8.29891 4.27031 8.86891 4.06031 9.16891 3.80031L10.7489 2.45031Z"
                          fill="#4588FF"
                        />
                        <path
                          d="M8.37891 12.0001L10.7889 14.4201L15.6189 9.58008"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* university */}
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden">
                    <img
  className="w-full h-full object-cover"
  src={playerData?.player?.institute?.logo || 'https://i.ibb.co/26bGnc2/university-icon.png'}
  alt=""
/>

                    </div>
                    <p className="text-base text-[#131416] leading-6">
                      {" "}
                      {playerData?.player?.institute?.universityName}{" "}
                    </p>
                  </div>
                  {/* location */}
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-[18px] h-[18px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        className="w-full h-full"
                      >
                        <g clipPath="url(#clip0_4025_507)">
                          <path
                            d="M16.625 8.41699C16.625 13.9587 9.5 18.7087 9.5 18.7087C9.5 18.7087 2.375 13.9587 2.375 8.41699C2.375 6.52733 3.12567 4.71505 4.46186 3.37886C5.79806 2.04266 7.61033 1.29199 9.5 1.29199C11.3897 1.29199 13.2019 2.04266 14.5381 3.37886C15.8743 4.71505 16.625 6.52733 16.625 8.41699Z"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.5 10.792C10.8117 10.792 11.875 9.72867 11.875 8.41699C11.875 7.10532 10.8117 6.04199 9.5 6.04199C8.18832 6.04199 7.125 7.10532 7.125 8.41699C7.125 9.72867 8.18832 10.792 9.5 10.792Z"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4025_507">
                            <rect
                              width="19"
                              height="19"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <p className="text-base text-[#131416] leading-6">
                      {" "}
                      {playerData?.player?.location}{" "}
                    </p>
                  </div>
                </div>

                {/* personal stats */}
                <div className="flex items-center w-full lg:w-auto justify-center lg:justify-start gap-10 personal-stats">
                  <div className="holder">
                    <p>Position</p>
                    <p className="value">{playerData?.player?.position.toUpperCase()}</p>
                  </div>
                  <div className="holder">
                    <p>Height</p>
                    <p className="value">{playerData?.player?.height}</p>
                  </div>
                  <div className="holder">
                    <p>Weight</p>
                    <p className="value">{playerData?.player?.weight}</p>
                  </div>
                  <div className="holder">
                    <p>Year</p>
                    <p className="value">{playerData?.player?.class}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* season stats */}
            <div className="info-box rounded-xl overflow-hidden flex-grow w-full lg:w-auto">
              {/* top area */}
              <div className="bg-primaryColor text-center py-2">
                <p className="text-[#fff] text-base font-semibold">
                {seasonString} SEASON STATS 
                </p>
              </div>

              {/* bottom area */}
              <div className="season-stats flex items-center justify-between py-6 px-10">
                <div className="holder">
                  <p>PTS</p>
                  <p className="value">{playerData?.stats?.find(u=>u.stats=="career")?.pts}</p>
                </div>
                <div className="holder">
                  <p>REB</p>
                  <p className="value">{playerData?.stats?.find(u=>u.stats=="career")?.reb}</p>
                </div>
                <div className="holder">
                  <p>AST</p>
                  <p className="value">{playerData?.stats?.find(u=>u.stats=="career")?.ast}</p>
                </div>
                <div className="holder">
                  <p>FG%</p>
                  <p className="value">{playerData?.stats?.find(u=>u.stats=="career")?.fg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* stats area */}
      {playerData?.stats.length>0 && (
        <div className="overflow-x-auto rounded-t-xl ">
          <table className="mt-6 stats-table bg-[#F8FAFC#F8FAFC]  ">
            {/* top part */}
            <thead>
              <tr className="text-sm bg-[#EAF0F6] text-[#0E0E0E] leading-7 font-normal ">
                <th>STATS</th>
                <th>GP</th>
                <th>FG%</th>
                <th>3P%</th>
                <th>FT%</th>
                <th>REB%</th>
                <th>AST%</th>
                <th>BLK%</th>
                <th>STL%</th>
                <th>PF%</th>
                <th>TO%</th>
                <th>PTS%</th>
              </tr>
            </thead>

            {/* bottom */}
            <tbody>
              {playerData?.stats.map((item, index) => (
                <tr
                  className=" text-sm text-[#0E0E0E] leading-7   p-2.5"
                  key={index}
                >
                  <td>{item.stats}</td>
                  <td>{item.gp}</td>
                  <td>{item.fg}</td>
                  <td>{item.threep}</td>
                  <td>{item.ft}</td>
                  <td>{item.reb}</td>
                  <td>{item.ast}</td>
                  <td>{item.blk}</td>
                  <td>{item.stl}</td>
                  <td>{item.pf}</td>
                  <td>{item.tp}</td>
                  <td>{item.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* content area  */}
      <div className="pt-6 pb-[55px] player-content">
        <div>
          <Tabs focusTabOnClick={false}>
            <TabList>
              <Tab>About</Tab>
              <Tab>Video</Tab>
              <Tab>Photos</Tab>
              <Tab>Offers</Tab>
              <Tab>News feed</Tab>
            </TabList>

            {/* bottom contents area */}

            <div className="flex items-start pt-5 lg:pt-[50px] gap-8 flex-col-reverse lg:flex-row">
              {/* player switching */}
              <div className=" w-full lg:w-auto lg:min-w-[25%] pt-5">
                <SwitchPlayer />
              </div>

              {/* tabs content */}
              <div className="w-full lg:w-[75%]">
                {/* About panel */}
                <TabPanel className={`space-y-6`}>
                  {/* About */}
                  <div className={commonSingleItemStyle}>
                    <div className="title flex items-center justify-between cursor-pointer">
                      <span> ABOUT ME </span>
                    </div>

                    <div className="content">
{playerData?.about}
                    </div>
                  </div>
                  {/* Contact */}
                  <div className={commonSingleItemStyle}>
                    <div
                      className="title flex items-center justify-between cursor-pointer"
                      onClick={() => setIsContactOpen(!isContactOpen)}
                    >
                      <span>CONTACT INFORMATION </span>
                      <span
                        className={`duration-300 ease-in-out ${
                          isContactOpen ? `rotate-0` : `rotate-180`
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 13.75L11 8.25L5.5 13.75"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <Collapse isOpened={isContactOpen}>
                      <div className="content space-y-4">
                       
                        <div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Name</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.auth?.name}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Email</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.auth?.email}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">School</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.institute?.universityName}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Jersey number</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.jerseyNumber}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Height</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.height}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Weight</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.weight}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Class</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.class}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-[#000] leading-normal">Birthplace</p>
                          <p className="text-base text-[#000] leading-6">{playerData?.player?.birthPlace}</p>
                        </div>
                      </div>
                     
                      </div>
                    </Collapse>
                  </div>
                  {/* CONTACT DETAILS */}
                  <div className={commonSingleItemStyle}>
                    <div
                      className="title flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setIsContactDetailsOpen(!isContactDetailsOpen)
                      }
                    >
                      <span>CONTACT DETAILS </span>
                      <span
                        className={`duration-300 ease-in-out ${
                          isContactDetailsOpen ? `rotate-0` : `rotate-180`
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 13.75L11 8.25L5.5 13.75"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <Collapse isOpened={isContactDetailsOpen}>
                      <div className="content space-y-4">
               
    
     
        <div>
          <p className="text-xs text-[#000] leading-normal">Name</p>
          <p className="text-base text-[#000] leading-6">{playerData?.auth.name}</p>
        </div>
        <div>
          <p className="text-xs text-[#000] leading-normal">Email</p>
          <p className="text-base text-[#000] leading-6">{playerData?.auth.email}</p>
        </div>
        <div>
          <p className="text-xs text-[#000] leading-normal">School</p>
          <p className="text-base text-[#000] leading-6">{playerData?.player?.institute?.universityName}</p>
        </div>
        <div>
          <p className="text-xs text-[#000] leading-normal">Height</p>
          <p className="text-base text-[#000] leading-6">{playerData?.player?.height}</p>
        </div>
        <div>
          <p className="text-xs text-[#000] leading-normal">Weight</p>
          <p className="text-base text-[#000] leading-6">{playerData?.player?.weight}</p>
        </div>
        <div>
          <p className="text-xs text-[#000] leading-normal">Class</p>
          <p className="text-base text-[#000] leading-6">{playerData?.player?.class}</p>
        </div>
        {playerData?.socialLinks?.length>0?playerData?.socialLinks?.map((linkItem, index) => (
          <div key={`socialLink_${index}`}>
            <p className="text-xs text-[#000] leading-normal">{linkItem.social_type}</p>
            <p className="text-base text-[#000] leading-6">{linkItem.link}</p>
          </div>
        )):''}
      

                      </div>
                    </Collapse>
                  </div>
                  {/* ACADEMICS */}
                  <div className={commonSingleItemStyle}>
                    <div
                      className="title flex items-center justify-between cursor-pointer"
                      onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                    >
                      <span>ACADEMICS </span>
                      <span
                        className={`duration-300 ease-in-out ${
                          isAcademicsOpen ? `rotate-0` : `rotate-180`
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 13.75L11 8.25L5.5 13.75"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <Collapse isOpened={isAcademicsOpen}>
                      <div className="content space-y-4">
                      {playerData?.academics.map((item, index) => (
  <div className="space-y-2" key={index}>
    <p className="text-xs text-[#000] leading-normal">ACT Score</p>
    <p className="text-base text-[#000] leading-6">{parseFloat(item.actScore)}</p>

    <p className="text-xs text-[#000] leading-normal">GPA</p>
    <p className="text-base text-[#000] leading-6">{parseFloat(item.gpa)}</p>

    <p className="text-xs text-[#000] leading-normal">NCAA ID</p>
    <p className="text-base text-[#000] leading-6">{parseFloat(item.ncaaId)}</p>

    <p className="text-xs text-[#000] leading-normal">SAT Score</p>
    <p className="text-base text-[#000] leading-6">{parseFloat(item.satScore)}</p>
  </div>
))}
                      </div>
                    </Collapse>
                  </div>
                  {/* ATHLETIC ACCOMPLISHMENTS */}
                  <div className={commonSingleItemStyle}>
                    <div
                      className="title flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setIsAccomplishmentsOpen(!isAccomplishmentsOpen)
                      }
                    >
                      <span>ATHLETIC ACCOMPLISHMENTS </span>
                      <span
                        className={`duration-300 ease-in-out ${
                          isAccomplishmentsOpen ? `rotate-0` : `rotate-180`
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 13.75L11 8.25L5.5 13.75"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <Collapse isOpened={isAccomplishmentsOpen}>
                      <div className="content space-y-4">
                        {playerData?.athleticaccomplishments.map((item, index) => (
                          <p
                            className="text-base text-[#000] leading-6 relative before:w-1.5 before:h-1.5 before:bg-[#000] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-5 "
                            key={index}
                          >
                            {" "}
                            {item}{" "}
                          </p>
                        ))}
                      </div>
                    </Collapse>
                  </div>
                  {/* PREVIOUS COACH */}
                  <div className={commonSingleItemStyle}>
                    <div
                      className="title flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setIsPreviousCoachOpen(!isPreviousCoachOpen)
                      }
                    >
                      <span>PREVIOUS COACH </span>
                      <span
                        className={`duration-300 ease-in-out ${
                          isPreviousCoachOpen ? `rotate-0` : `rotate-180`
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 13.75L11 8.25L5.5 13.75"
                            stroke="#25282B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <Collapse isOpened={isPreviousCoachOpen}>
                      <div className="content space-y-4">
                      <div className="flex flex-col gap-4">
        {playerData?.coach ? (
          <>
            <div className="space-y-2">
              <p className="text-xs text-[#000] leading-normal">Coach Name</p>
              <p className="text-base text-[#000] leading-6">{playerData?.coach?.name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-[#000] leading-normal">Coach Phone</p>
              <p className="text-base text-[#000] leading-6">{playerData?.coach?.phone}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-[#000] leading-normal">Coach Email</p>
              <p className="text-base text-[#000] leading-6">{playerData?.coach?.email}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-[#000] leading-normal">Coach Program</p>
              <p className="text-base text-[#000] leading-6">{playerData?.coach?.coachProgram}</p>
            </div>
          </>
        ) : (
          <p className="text-center text-[#000] text-base leading-6 font-normal">
            No coach information available
          </p>
        )}
      </div>
                      </div>
                    </Collapse>
                  </div>
                </TabPanel>

                {/* Video Panel */}
                <TabPanel>
                  <PlayerReels userid={playerData?.auth?._id} videos={playerData?.videoData} />
                </TabPanel>

                {/* Photos Panel */}
                <TabPanel>
                  <PlayerPhotos photos={playerData?.photos} />
                </TabPanel>

                {/* Offers Panel */}
                <TabPanel>
                  <PlayerOffers offers={playerData?.offers} />
                </TabPanel>

                {/* News Feed Panel */}
                <TabPanel>
                  <PlayerNews newsFeedData={playerData?.newsFeedData}/>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
