import FeaturedBox from "../../components/Home/FeaturedBox/FeaturedBox";
import LaunchEvent from "../../components/Home/LaunchEvent/LaunchEvent";
import player from "../../assets/images/player-cover.png";
import coach from "../../assets/images/coach-cover.png";
import VideoArea from "../../components/Home/VideoArea/VideoArea";
import PlayersArea from "../../components/Home/PlayersArea/PlayersArea";
import AllNewsArea from "../../components/Home/AllNewsArea/AllNewsArea";
import ClassPlayerArea from "../../components/Home/ClassPlayerArea/ClassPlayerArea";
import ReviewArea from "../../components/Home/ReviewArea/ReviewArea";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import axios from "axios";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import React,{useState} from "react";
import { BASE_URL } from "../../baseurl/baseurl";
const Home = () => {
  const [state,setState]=useState([])
  const [email,setEmail]=useState("")
  React.useEffect(()=>{
    getHomeData();
  },[])
  const getHomeData=async()=>{
let response=await axios.get(`${BASE_URL}/getHomeData`)
console.log(response.data)
setState({
  newsFeedData:response?.data?.newsFeedData,
  playersData:response?.data?.playersData,
  videosData:response?.data?.videosData,
  classPlayers:response?.data?.classPlayers,
  testimonial:response?.data?.testimonial
  
})
  }

const subscribeMail=async(e)=>{
  e.preventDefault();
try{
  let response=await axios.post(`${BASE_URL}/subscribeMail`,{email})

  toastr.success("Subscribed successfully")
  setEmail("")
}catch(error){
  if(error?.response && error?.response?.data){
    toastr.error(error?.response?.data?.error)
    setEmail("")
    }else{
    toastr.error("Server error please try again")
    
    }
}

}

  return (
    <div>
      <LaunchEvent />

      {/* get notification */}
      <form className="flex items-center mt-[40px] gap-4 flex-col lg:flex-row ">
        <div className=" w-full lg:w-[315px]">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="w-full py-4 pl-6 rounded-[30px] bg-[#F8FAFC] focus:outline-none text-base placeholder:text-[#818181] text-[#000] "
            type="email"
            placeholder="Subscribe to get Notification"
            required
          />
        </div>
        <button onClick={subscribeMail} className=" px-6 py-3 lg:py-4 bg-primaryColor rounded-[30px] text-base font-medium text-[#fff] ">
          Subscribe
        </button>
      </form>

      {/* featured area */}
      <div className="flex items-center gap-4 lg:gap-7 mt-5 lg:mt-[60px] flex-col lg:flex-row">
        <FeaturedBox
          text={"COACHES"}
          subtext={"Coaches Find and recruit players"}
          bgImg={coach}
          type="coach"
        />
        <FeaturedBox
          text={"PLAYERS"}
          subtext={"Players - Find your team"}
          bgImg={player}
          type="player"
        />
      </div>

      {/* how it works area */}
      <HowItWorks />

      {/* videos area */}
      <VideoArea setState={setState} videos={state?.videosData} />
      {/* Players area */}
      <PlayersArea setState={setState} state={state} players={state?.playersData}/>

      {/* All news area */}
      <AllNewsArea news={state?.newsFeedData} />

      {/* class of players area */}
      <ClassPlayerArea classPlayers={state?.classPlayers} />

      {/* review area */}
      <ReviewArea  reviews={state?.testimonial}/>
    </div>
  );
};

export default Home;
