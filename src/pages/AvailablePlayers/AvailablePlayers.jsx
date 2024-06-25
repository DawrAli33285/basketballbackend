import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AvailablePlayers.css';
import AvailablePlayersRow from './AvailablePlayersRow';
import axios from 'axios'
import { BASE_URL } from '../../baseurl/baseurl';
export default function AvailablePlayers() {
    const navigate = useNavigate()
    const [currentVideo, setCurrentVideo] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [players,setPlayer]=useState([])
    const [videos,setVideos]=useState([])


    const handleVideoClick = (src) => {
        setCurrentVideo(src);
    };
    const togglePlayPause = () => {
        const videoElement = document.getElementById('videoPlayer');
        if (videoElement.paused) {
            videoElement.play();
            setIsPlaying(true);
        } else {
            videoElement.pause();
            setIsPlaying(false);
        }
    };
useEffect(()=>{
    getAvailabilityPlayer();
},[])

const getAvailabilityPlayer=async()=>{
    let response=await axios.get(`${BASE_URL}/getAvalabilityPlayers`)
console.log(response.data)
setPlayer(response.data.players)
setVideos(response.data.videos)
setCurrentVideo(response.data.videos[0]?.video)
}


    return (
        <div className="mainContainer">
            <div className='flex flex-col gap-[10px]'>
                <div className='flex justify-between'>
                    <div className='w-[24px] h-[24px]' onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none" class="w-full h-full"><path d="M1.25 7.27441L16.25 7.27441" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.2998 13.299L1.2498 7.275L7.2998 1.25" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <h2 className=' text-lg font-sfPro lg:w-[200px]'>PlayerList</h2>
                </div>
                <div className=" pt-12 lg:pt-[60px] mb-8 lg:mb-[115px]  w-full  ">

                    <div>

                        <div className=" border-b-[#DBDBDB] border-b-[2px] flex items-center text-base text-[#0E0E0E] leading-6 font-semibold pb-3 ">
                            <p className=" w-[100%] lg:w-[35%]">Player </p>
                            <p className=" w-[100%] lg:w-[35%]">School</p>
                            <p className=" w-[100%] lg:w-[30%]">Position</p>
                        </div>

                        <div>
                     {players?.map((player,index)=>{
                        return  <AvailablePlayersRow key={index.toString()} player={player} />
                     })}
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-[18px] mb-[20px]'>Draft Videos</h1>
                <div className="video-container mb-8 relative">
                    <video
                        controls
                        id="videoPlayer"
                        src={currentVideo}
                        className="rounded-[10px] bg-[rgba(255,255,255,0.40)] w-full h-auto"
                    />
                    <div
                        className="video-overlay absolute inset-0 flex items-center justify-center"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 2H1C0.447715 2 0 2.44772 0 3V15C0 15.5523 0.447715 16 1 16H4C4.55228 16 5 15.5523 5 15V3C5 2.44772 4.55228 2 4 2ZM14 2H11C10.4477 2 10 2.44772 10 3V15C10 15.5523 10.4477 16 11 16H14C14.5523 16 15 15.5523 15 15V3C15 2.44772 14.5523 2 14 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 8.78738C14 6.67844 3.19057 -0.0682953 1.96437 1.14481C0.73817 2.35792 0.620266 15.1025 1.96437 16.4299C3.30848 17.762 14 10.8963 14 8.78738Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="video-list">
                    {videos?.map((video, index) => (
                        <div key={index} className="video-item flex items-center gap-4 mb-4 cursor-pointer" onClick={() => handleVideoClick(video?.video)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666992 9.00515C0.666992 4.40554 4.40734 0.666992 9.00033 0.666992C13.5933 0.666992 17.3337 4.40554 17.3337 9.00515C17.3337 13.5951 13.5933 17.3337 9.00033 17.3337C4.40734 17.3337 0.666992 13.5951 0.666992 9.00515ZM12.057 9.84853C12.1454 9.76009 12.258 9.62342 12.2822 9.59126C12.4109 9.42242 12.4752 9.21338 12.4752 9.00515C12.4752 8.77119 12.4028 8.55411 12.2661 8.37724C12.2549 8.36603 12.2329 8.34215 12.2043 8.31102C12.1508 8.25278 12.074 8.16919 12.0006 8.09584C11.3411 7.38833 9.61969 6.23059 8.71879 5.87683C8.58205 5.82136 8.23617 5.69996 8.05116 5.69192C7.8742 5.69192 7.70528 5.73212 7.54441 5.81251C7.34331 5.92507 7.18244 6.10195 7.09396 6.31099C7.03765 6.4557 6.94917 6.88986 6.94917 6.8979C6.86069 7.37225 6.81242 8.14408 6.81242 8.99631C6.81242 9.80914 6.86069 10.548 6.93308 11.0304C6.93507 11.0324 6.94199 11.0669 6.95274 11.1205C6.98542 11.2834 7.0535 11.6229 7.12613 11.762C7.30309 12.0997 7.64897 12.3087 8.01899 12.3087H8.05116C8.29248 12.3007 8.79923 12.0917 8.79923 12.0836C9.65187 11.7299 11.333 10.6284 12.0087 9.89677L12.057 9.84853Z" fill="#130F26" />
                            </svg>
                            <div className="video-details">
                                <p className="video-title font-semibold text-[14px]">{video?.title}</p>
                                <p className="video-duration text-gray-500 text-[12px]">{video?.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}