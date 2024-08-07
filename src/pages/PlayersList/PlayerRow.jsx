import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../baseurl/baseurl";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import axios from "axios";

const SingleTeam = ({ teamIcon, teamName }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="w-[60px] h-[60px] rounded-full bg-[#F1F1F1] p-3">
        <img className="w-full h-full object-contain" src={teamIcon} alt="" />
      </div>
      <p className="text-[#0E0E0E] text-base font-bold leading-normal">
        {teamName}
      </p>
    </div>
  );
};

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 18"
    fill="none"
  >
    <path
      d="M15.4253 11.127C15.1879 11.3571 15.0788 11.6898 15.1329 12.0162L15.9478 16.5262C16.0166 16.9084 15.8552 17.2952 15.5353 17.5162C15.2218 17.7453 14.8047 17.7728 14.4628 17.5895L10.4029 15.472C10.2617 15.3968 10.105 15.3565 9.94456 15.3519H9.69614C9.60998 15.3647 9.52564 15.3922 9.44864 15.4344L5.38781 17.562C5.18706 17.6628 4.95973 17.6986 4.73698 17.6628C4.19431 17.5602 3.83223 17.0432 3.92114 16.4977L4.73698 11.9877C4.79106 11.6587 4.68198 11.3241 4.44456 11.0903L1.13448 7.88199C0.857644 7.61341 0.761394 7.21008 0.887894 6.84616C1.01073 6.48316 1.32423 6.21824 1.70281 6.15866L6.25864 5.49774C6.60514 5.46199 6.90948 5.25116 7.06531 4.93949L9.07281 0.823659C9.12048 0.731992 9.18189 0.647659 9.25614 0.576159L9.33864 0.511992C9.38173 0.464326 9.43123 0.424909 9.48623 0.392826L9.58614 0.356159L9.74198 0.291992H10.1279C10.4726 0.327742 10.776 0.533992 10.9346 0.841992L12.9686 4.93949C13.1153 5.23924 13.4004 5.44733 13.7295 5.49774L18.2853 6.15866C18.6703 6.21366 18.9921 6.47949 19.1195 6.84616C19.2396 7.21374 19.136 7.61708 18.8536 7.88199L15.4253 11.127Z"
      fill={filled ? "#FFB900" : "#DBDBDB"}
    />
  </svg>
);
const followNow=async(id)=>{
 
let currentUser=JSON.parse(localStorage.getItem('user'))
if(currentUser.length==0 || !currentUser){
  toastr.error("Please login to follow")
  return false;
}
let headers={
  headers:{
    authorization:`Bearer ${currentUser?.token}`
  }
}

try{
  let response=await axios.get(`${BASE_URL}/addRemoveFollow/${id}`,headers)
toastr.success(response?.data?.message)
setTimeout(()=>{
  window.location.reload(true)
},500)
}catch(error){
  console.log(error.message)
if(error?.response && error?.response.data){
  toastr.error(error?.response?.data?.error)
}else{
  toastr.error("Server error please try again")
}
}
}



const PlayerRow = ({ player }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < player?.starRating} />);
  }
  useEffect(() => {
    console.log("player is", player)
  }, [player])
  return (
    <div className="flex flex-col items-center text-base font-medium text-[#171717] leading-normal pt-4 lg:px-4 border-solid border-[#DBDBDB] border-t min-w-fit w-full lg:w-full">
      <div className="lg:flex hidden items-center w-full pb-[20px]">
        {/* player name */}
        <div className="flex items-center gap-4 min-w-[280px] lg:w-[30%]">
          <div className="overflow-hidden">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={player?.picture}
              alt=""
            />
          </div>
          <div>
            <Link
              to={`/player-profile/${player?._id}`}
              className="text-[18px] font-medium text-[#000] w-fit block text-blue-500 hover:underline"
            >
              {player?.auth?.name}

            </Link>
          </div>

        </div>

        {/* class */}
        <div className="min-w-[120px] lg:w-[15%]">
          <p>{player?.class}</p>
        </div>
        {/* height */}
        <div className="min-w-[120px] lg:w-[10%]">
          <p>{player?.height}</p>
        </div>
        {/* position */}
        <div className="min-w-[140px] lg:w-[10%]">
          <p>{player?.position?.toUpperCase()}</p>
        </div>
        {/* rating */}
        <div className="min-w-[200px] lg:flex-grow flex items-center gap-3">
          {stars}
        </div>

        {/* open button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`cursor-pointer ease-in-out duration-300 w-4 h-4 ${isCollapsed ? "rotate-180" : ""
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M0.979454 0.813439C1.15697 0.635928 1.43474 0.61979 1.63048 0.765027L1.68656 0.813439L5.99967 5.12633L10.3128 0.813439C10.4903 0.635928 10.7681 0.61979 10.9638 0.765027L11.0199 0.813439C11.1974 0.99095 11.2135 1.26873 11.0683 1.46447L11.0199 1.52055L6.35323 6.18721C6.17572 6.36472 5.89794 6.38086 5.7022 6.23562L5.64612 6.18721L0.979454 1.52055C0.784192 1.32528 0.784192 1.0087 0.979454 0.813439Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex lg:hidden items-center w-full px-[10px] pb-[20px]">
        {/* player name */}
        <div className="flex items-center gap-[6px] w-[40%]">
          <div className="overflow-hidden">
            <img
              className="w-[40px] h-[37px]  object-cover"
              src={player?.picture}
              alt=""
            />
          </div>
          <div>
            <Link
              to={`/player-profile/${player?._id}`}
              className="text-[16px] flex-col font-medium w-fit block text-blue-500 hover:underline"
            >
              {player?.auth?.name}
              <p className="text-[12px] text-[#818181]">{player?.location}</p>
              <p className="text-[12px] text-[#818181]">{player?.institute?.universityName?.toUpperCase()}</p>
            </Link>
          </div>
        </div>

        {/* class */}
        <div className="w-[40%]">
          <p className="text-[#818181] text-[16px] font-[400]">{player?.height} | {player?.position?.toUpperCase()} | {player?.weight}</p>

        </div>

        <div className="w-[20%] flex gap-[10px] items-center">
          <p className="text-[16px] text-[#818181]">{player?.class}</p>
          {/* open button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`cursor-pointer ease-in-out duration-300 w-4 h-4 ${isCollapsed ? "rotate-180" : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              className="w-full h-full"
            >
              <path
                d="M0.979454 0.813439C1.15697 0.635928 1.43474 0.61979 1.63048 0.765027L1.68656 0.813439L5.99967 5.12633L10.3128 0.813439C10.4903 0.635928 10.7681 0.61979 10.9638 0.765027L11.0199 0.813439C11.1974 0.99095 11.2135 1.26873 11.0683 1.46447L11.0199 1.52055L6.35323 6.18721C6.17572 6.36472 5.89794 6.38086 5.7022 6.23562L5.64612 6.18721L0.979454 1.52055C0.784192 1.32528 0.784192 1.0087 0.979454 0.813439Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

      </div>
      {/* collapsed content */}
      <div className={`${isCollapsed ? "block" : "hidden"} w-full py-4 bg-[#F8FAFC]`}>
        <Collapse isOpened={isCollapsed}>
          {/* teams wrapper */}
          <div className="flex items-center justify-between w-full">
            <div className="pl-[10px] flex items-center gap-[6px] lg:hidden w-[100%]">
              <div className="overflow-hidden">
                <img
                  className="w-[40px] h-[37px]  object-cover"
                  src={player?.picture}
                  alt=""
                />
              </div>
              <div>
                <Link
                  to={`/player-profile/${player?._id}`}
                  className="text-[16px] flex-col font-medium w-fit block text-blue-500 hover:underline"
                >
                  {player?.auth?.name}
                  <p className="text-[12px] text-[#818181] font-[400]">{player?.height} | {player?.position} | {player?.weight} - {player?.class} - {player?.location}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex relative my-[18px] gap-[25px] w-full ml-[45px]">
          {player?.profile?.socialLinks?.find(u=>u?.social_type=="facebook")?<a href={player?.profile?.socialLinks?.find(u=>u?.social_type=="facebook")?.link}><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.957031" width="34.15" height="34" rx="17" fill="white" />
              <path d="M14.2307 28.957L14.1992 18.957H10.1992V14.957H14.1992V12.457C14.1992 8.74563 16.4975 6.95703 19.8084 6.95703C21.3943 6.95703 22.7573 7.0751 23.1545 7.12788V11.0065L20.8583 11.0076C19.0577 11.0076 18.709 11.8632 18.709 13.1187V14.957H23.9492L21.9492 18.957H18.709V28.957H14.2307Z" fill="#11192E" />
            </svg>
            </a>:``}
           
            {player?.profile?.socialLinks?.find(u=>u?.social_type=="twitter")? <a href={player?.profile?.socialLinks?.find(u=>u?.social_type=="twitter")?.link}><svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.150391" y="0.757812" width="34" height="34.4" rx="17" fill="white" />
              <path d="M29.1504 10.5578C28.2504 10.9578 27.3504 11.2578 26.3504 11.3578C27.3504 10.7578 28.1504 9.75781 28.5504 8.65781C27.5504 9.25781 26.5504 9.65781 25.4504 9.85781C24.5504 8.85781 23.2504 8.25781 21.8504 8.25781C19.1504 8.25781 16.9504 10.4578 16.9504 13.1578C16.9504 13.5578 16.9504 13.9578 17.0504 14.2578C12.8504 14.0578 9.25039 12.0578 6.85039 9.05781C6.35039 9.85781 6.15039 10.6578 6.15039 11.5578C6.15039 13.2578 7.05039 14.7578 8.35039 15.6578C7.55039 15.6578 6.75039 15.4578 6.15039 15.0578C6.15039 15.0578 6.15039 15.0578 6.15039 15.1578C6.15039 17.5578 7.85039 19.5578 10.0504 19.9578C9.65039 20.0578 9.25039 20.1578 8.75039 20.1578C8.45039 20.1578 8.15039 20.1578 7.85039 20.0578C8.45039 22.0578 10.2504 23.4578 12.4504 23.4578C10.7504 24.7578 8.65039 25.5578 6.35039 25.5578C5.95039 25.5578 5.55039 25.5578 5.15039 25.4578C7.35039 26.8578 9.95039 27.6578 12.6504 27.6578C21.7504 27.6578 26.6504 20.1578 26.6504 13.6578C26.6504 13.4578 26.6504 13.2578 26.6504 13.0578C27.6504 12.3578 28.4504 11.4578 29.1504 10.5578Z" fill="#11192E" />
            </svg>
            </a>:``}

            {player?.profile?.socialLinks?.find(u=>u?.social_type=="instagram")?<a href={player?.profile?.socialLinks?.find(u=>u?.social_type=="instagram")?.link}>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.150391" y="0.957031" width="34" height="34" rx="17" fill="white" />
                <path d="M17.1504 8.93903C20.0874 8.93903 20.4354 8.95003 21.5954 9.00303C22.2928 9.01116 22.9835 9.13936 23.6374 9.38203C24.1154 9.55814 24.5477 9.8394 24.9024 10.205C25.268 10.5597 25.5493 10.992 25.7254 11.47C25.9681 12.1239 26.0963 12.8146 26.1044 13.512C26.1574 14.672 26.1684 15.02 26.1684 17.957C26.1684 20.894 26.1574 21.242 26.1044 22.402C26.0963 23.0994 25.9681 23.7902 25.7254 24.444C25.5423 24.9185 25.262 25.3494 24.9024 25.709C24.5428 26.0686 24.1119 26.349 23.6374 26.532C22.9835 26.7747 22.2928 26.9029 21.5954 26.911C20.4354 26.964 20.0874 26.975 17.1504 26.975C14.2134 26.975 13.8654 26.964 12.7054 26.911C12.008 26.9029 11.3172 26.7747 10.6634 26.532C10.1854 26.3559 9.75308 26.0747 9.39839 25.709C9.03276 25.3543 8.7515 24.922 8.57539 24.444C8.33272 23.7902 8.20451 23.0994 8.19639 22.402C8.14339 21.242 8.13239 20.894 8.13239 17.957C8.13239 15.02 8.14339 14.672 8.19639 13.512C8.20451 12.8146 8.33272 12.1239 8.57539 11.47C8.7515 10.992 9.03276 10.5597 9.39839 10.205C9.75308 9.8394 10.1854 9.55814 10.6634 9.38203C11.3172 9.13936 12.008 9.01116 12.7054 9.00303C13.8654 8.95003 14.2134 8.93903 17.1504 8.93903ZM17.1504 6.95703C14.1634 6.95703 13.7884 6.97003 12.6154 7.02303C11.703 7.04189 10.8003 7.21465 9.94539 7.53403C9.21394 7.8172 8.54979 8.25022 7.9956 8.80527C7.44141 9.36032 7.00943 10.0251 6.72739 10.757C6.40801 11.6119 6.23525 12.5146 6.21639 13.427C6.16339 14.595 6.15039 14.97 6.15039 17.957C6.15039 20.944 6.16339 21.319 6.21639 22.492C6.23525 23.4044 6.40801 24.3071 6.72739 25.162C7.01056 25.8935 7.44358 26.5576 7.99863 27.1118C8.55368 27.666 9.2185 28.098 9.95039 28.38C10.8053 28.6994 11.708 28.8722 12.6204 28.891C13.7884 28.944 14.1634 28.957 17.1504 28.957C20.1374 28.957 20.5124 28.944 21.6854 28.891C22.5978 28.8722 23.5005 28.6994 24.3554 28.38C25.0868 28.0969 25.751 27.6638 26.3052 27.1088C26.8594 26.5537 27.2914 25.8889 27.5734 25.157C27.8928 24.3021 28.0655 23.3994 28.0844 22.487C28.1374 21.319 28.1504 20.944 28.1504 17.957C28.1504 14.97 28.1374 14.595 28.0844 13.422C28.0655 12.5096 27.8928 11.6069 27.5734 10.752C27.2902 10.0206 26.8572 9.35643 26.3022 8.80224C25.7471 8.24805 25.0823 7.81607 24.3504 7.53403C23.4955 7.21465 22.5928 7.04189 21.6804 7.02303C20.5124 6.97003 20.1374 6.95703 17.1504 6.95703Z" fill="#11192E" />
                <path d="M17.151 12.3086C16.0337 12.3086 14.9415 12.6399 14.0125 13.2606C13.0836 13.8813 12.3595 14.7636 11.932 15.7958C11.5044 16.828 11.3925 17.9639 11.6105 19.0597C11.8285 20.1555 12.3665 21.162 13.1565 21.952C13.9465 22.7421 14.9531 23.2801 16.0489 23.4981C17.1447 23.716 18.2805 23.6041 19.3127 23.1766C20.345 22.749 21.2272 22.025 21.8479 21.096C22.4686 20.167 22.8 19.0749 22.8 17.9576C22.8 16.4594 22.2048 15.0225 21.1454 13.9631C20.086 12.9038 18.6492 12.3086 17.151 12.3086ZM17.151 21.6246C16.4257 21.6246 15.7167 21.4095 15.1137 21.0066C14.5106 20.6037 14.0406 20.031 13.7631 19.3609C13.4855 18.6908 13.4129 17.9535 13.5544 17.2422C13.6959 16.5309 14.0452 15.8775 14.558 15.3646C15.0708 14.8518 15.7242 14.5025 16.4356 14.3611C17.1469 14.2196 17.8842 14.2922 18.5543 14.5697C19.2243 14.8473 19.797 15.3173 20.2 15.9203C20.6029 16.5234 20.818 17.2323 20.818 17.9576C20.818 18.9301 20.4316 19.8629 19.7439 20.5506C19.0562 21.2382 18.1235 21.6246 17.151 21.6246Z" fill="#11192E" />
                <path d="M23.0231 13.4056C23.7521 13.4056 24.3431 12.8146 24.3431 12.0856C24.3431 11.3566 23.7521 10.7656 23.0231 10.7656C22.2941 10.7656 21.7031 11.3566 21.7031 12.0856C21.7031 12.8146 22.2941 13.4056 23.0231 13.4056Z" fill="#11192E" />
              </svg>

            </a>:``}
           
      
            <span onClick={()=>{
              if(!localStorage.getItem('user')){

                toastr.error("Please login to follow")
              }
              followNow(player?.auth?._id)}
              
              } className="block lg:hidden absolute right-[20%] -top-[20%] text-[#4C8FE1] text-[12px] py-[5px] px-[12px] rounded-[30px] border-[1px] border-[#4C8FE1] hover:cursor-pointer">{player?.followedBy?.includes(JSON.parse(localStorage.getItem('user'))?._id)?'Unfollow':'Follow'}</span>

          </div>
          <div className="w-full lg:ml-[60px]">
            <video src={player?.videos[0]?.video} className="w-full lg:w-[480px] rounded-[8px]" controls />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired,
};

SingleTeam.propTypes = {
  teamIcon: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default PlayerRow;
