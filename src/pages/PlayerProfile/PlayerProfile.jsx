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
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import axios from 'axios'
const PlayerProfile = () => {
  const [playerData, setPlayerData] = useState(null);
  const [playersProfile,setPlayers]=useState()
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUser,setCurrentUser]=useState("")
  const [showPlayer,setShowPlayers]=useState([])
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const { id } = useParams();
  const flagProfile=async()=>{
    console.log("PLAYER PROFILE")
    console.log(playerData)
    let alreadyFlagged=playerData?.flaggedBy.find(u=>u===currentUser?._id)
  

    if(!currentUser){
      toastr.error("Please login to flag profile")
      return;
    }
    const headers={
      headers:{
        authorization:`Bearer ${JSON.parse(localStorage?.getItem('user'))?.token}`
      }
    }
    let response=await axios.get(`${BASE_URL}/flagProfile/${id}`,headers)
   if(response.status===200){
    if(alreadyFlagged){
      setPlayerData((prev)=>{
        let old={...prev};
   let flaggedBy=old.flaggedBy.filter(u=>u!=currentUser?._id)
   old={...old,flaggedBy}
      return old
      })
    }else{
      setPlayerData((prev)=>{
        let old={...prev};
      old.flaggedBy.push(currentUser?._id)
      return old
      })
    }
    toastr.success(response?.data?.message)
   }
    setIsPopupOpen(!isPopupOpen);
  }
  useEffect(() => {
fetchUser(id)
    // fetch("/players.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const result = data.find((item) => item.player_id === id);

    //     return setPlayerData(result);
    //   });
  }, [id]);
useEffect(()=>{
setCurrentUser(JSON.parse(localStorage?.getItem('user')))
},[localStorage?.getItem('user')])

const fetchUser=async(id)=>{
let response=await axios.get(`${BASE_URL}/get-profile/${id}`)
if(response.status==200){
  console.log("DATA")
console.log(response.data)
  const {profile,players,showPlayers}=response.data
setPlayers(players)
setPlayerData(profile)
setShowPlayers(showPlayers)
}
}




const shareOnTwitter = () => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://basketballfrontend.vercel.app/player-profile/${playerData?.auth?._id}`)}`;
  window.open(shareUrl, "_blank");
  setIsPopupOpen(false);
};

const shareOnFacebook = () => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://basketballfrontend.vercel.app/player-profile/${playerData?.auth?._id}`)}`;
  window.open(shareUrl, "_blank");
  setIsPopupOpen(false);
};

const copyLink = () => {
  navigator.clipboard.writeText(`https://basketballfrontend.vercel.app/player-profile/${playerData?.auth?._id}`);
  toastr.success("Video link copied successfully");
  setIsPopupOpen(false);
};


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
          <div className="w-full flex justify-end">
        <svg
          className="cursor-pointer"
          onClick={togglePopup}
          fill="#000000"
          height="25px"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="Layer_1"
        >
          <path d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"></path>
        </svg>
        {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <div  className="popup-item" onClick={flagProfile}>
            {playerData?.flaggedBy?.find(u=>u==currentUser?._id)?<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff9999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z" fill="#800000"></path> <path d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z" fill="#800000"></path> </g></svg>: <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
           
              Flag Profile
            </div>
            <div className="popup-item" onClick={shareOnTwitter}>
            <svg width="25" height="25" fill="#000000" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M19.55,55.08c-7.37,0-13.37-1.58-16.54-3.24A1,1,0,0,1,3.43,50a38.37,38.37,0,0,0,15.86-4.44c-4.41-1.19-8.9-4.34-9.79-8.41a1,1,0,0,1,1.27-1.17,4.33,4.33,0,0,0,1.26.12A15.68,15.68,0,0,1,4.59,23.44a1,1,0,0,1,1.7-.76l0,0q.72.6,1.49,1.13a16.6,16.6,0,0,1-.6-12.94,1,1,0,0,1,1.69-.28C16,18.9,26.08,22.7,31.2,22.53a12.11,12.11,0,0,1-.2-2.2A12.35,12.35,0,0,1,43.34,8a14.33,14.33,0,0,1,8.93,3.42,19.86,19.86,0,0,0,2-.57A23.11,23.11,0,0,0,58,9.23a1,1,0,0,1,1.32,1.42,40.24,40.24,0,0,1-3.8,4.69A37.34,37.34,0,0,0,60.12,14a1,1,0,0,1,1.21,1.51,26.09,26.09,0,0,1-4.91,5c-.15,4.75-3.85,26.26-21.48,32.28l-.11,0A52.51,52.51,0,0,1,19.55,55.08ZM7.67,51.51a48.65,48.65,0,0,0,26.64-.63h0C51.31,45,54.55,23,54.42,20a1,1,0,0,1,.4-.85A23.91,23.91,0,0,0,57.39,17c-1.55.44-3.11.74-3.52.33a1,1,0,0,1-.23-.36,9.72,9.72,0,0,0-.49-1.08,1,1,0,0,1,.31-1.27,20.16,20.16,0,0,0,1.86-2l-.42.14a22.27,22.27,0,0,1-2.77.76,1,1,0,0,1-1-.35C49.93,11.67,46.33,10,43.34,10A10.31,10.31,0,0,0,33.4,23.14a1,1,0,0,1-.79,1.26c-5,.88-15.9-2.55-24.07-11.18-1.24,5,.65,10.69,3.47,13a1,1,0,0,1-1,1.68,26.14,26.14,0,0,1-4.08-2.29c.93,4.33,4,7.93,8.66,10.08a1,1,0,0,1-.09,1.85,12.93,12.93,0,0,1-3.48.5c1.63,3.1,6.15,5.52,9.87,5.91a1,1,0,0,1,.61,1.7C20.32,47.83,14,50.45,7.67,51.51ZM5.58,23.4h0Z"></path></g></svg>
              Share on Twitter
            </div>
            <div className="popup-item" onClick={shareOnFacebook}>
            <svg width="25" height="25" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
              Share on Facebook
            </div>
            <div className="popup-item" onClick={copyLink}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6875 3.75C8.96439 3.75 7.5 5.23565 7.5 7.15385L7.5 15.4615C7.5 18.1444 9.55201 20.25 12 20.25C14.448 20.25 16.5 18.1444 16.5 15.4615V7.15385H18V15.4615C18 18.8963 15.351 21.75 12 21.75C8.649 21.75 6 18.8963 6 15.4615L6 7.15385C6 4.48383 8.06137 2.25 10.6875 2.25C13.3136 2.25 15.375 4.48383 15.375 7.15385V15.4615C15.375 17.3669 13.9013 18.9808 12 18.9808C10.0987 18.9808 8.625 17.3669 8.625 15.4615V7.15385H10.125V15.4615C10.125 16.615 11.0018 17.4808 12 17.4808C12.9982 17.4808 13.875 16.615 13.875 15.4615V7.15385C13.875 5.23565 12.4106 3.75 10.6875 3.75Z" fill="#000000"></path> </g></svg>
              Copy Link
            </div>
          </div>
        </div>
      )}
      </div>
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
                <SwitchPlayer players={showPlayer} />
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
        {playerData?.socialLinks?.length>0?playerData?.socialLinks?.filter(u=>u?.link?.length>0)?.map((linkItem, index) => (
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
