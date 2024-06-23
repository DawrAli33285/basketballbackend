import { useState } from "react";

export default function AvailablePlayersRow({ player }) {
    const [Collapsed, setCollapsed] = useState(true)
   console.log("PLAYER")
   console.log(player)
    return (
        <div className="mt-[18px] border-b-[2px] border-b-[#DBDBDB] flex flex-col gap-[20px] pb-[20px]">
            <div className="flex justify-between items-center mobile">
                <span className="flex gap-[18px] items-center w-[100%] lg:w-[35%]">
                    <img src={player?.picture}className="w-[80px]" alt="avatar" />
                    <p className=" font-sfPro text-[18px]">{player?.auth?.name}</p>
                </span>
                <span className="w-[100%] lg:w-[35%]">
                    <p>{player?.institute?.universityName}</p>
                </span>
                <span className="w-[100%] lg:w-[30%] flex gap-[20px] items-center">
                    <p>{player?.position}</p>
                    <button
                        onClick={() => setCollapsed(!Collapsed)}
                        className={`cursor-pointer ease-in-out duration-300 w-4 h-4 ${!Collapsed ? "rotate-180" : ""
                            } `}
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
                </span>
            </div>
            <div className={`${Collapsed ? "opacity-0 h-0" : "opacity-100 h-auto"}  flex flex-col gap-[20px] transition-all duration-500 ease-out`}>
                <div className="flex items-center justify-between">
                    <span className="flex flex-col justify-center items-center">
                        <h2 className="text-[22px] font-bold font-sfPro flex items-center">{player.name}                        <svg width="12" height="7" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame">
<g id="Group">
<g id="Layer 2">
<path id="Vector" d="M15.8905 7.5036C15.647 7.36199 15.4281 7.18163 15.2425 6.9696C15.2613 6.67441 15.3316 6.38479 15.4503 6.11385C15.6685 5.4981 15.9153 4.8006 15.5193 4.25835C15.1233 3.7161 14.3755 3.73335 13.7193 3.74835C13.4293 3.77819 13.1364 3.7584 12.853 3.68985C12.7021 3.44423 12.5943 3.17459 12.5343 2.8926C12.3483 2.25885 12.136 1.5426 11.4843 1.3281C10.8558 1.1256 10.2738 1.5711 9.7593 1.9626C9.53729 2.16534 9.28005 2.32573 9.0003 2.43585C8.71762 2.32663 8.45752 2.1662 8.23305 1.9626C7.72005 1.57335 7.1403 1.12335 6.5088 1.32885C5.85855 1.54035 5.6463 2.25885 5.4588 2.8926C5.3989 3.17368 5.29216 3.44268 5.14305 3.68835C4.85918 3.75672 4.56587 3.777 4.2753 3.74835C3.6168 3.73035 2.87505 3.71085 2.4753 4.25835C2.07555 4.80585 2.3253 5.4981 2.5443 6.1131C2.66463 6.38363 2.73599 6.67338 2.75505 6.96885C2.56986 7.18116 2.35123 7.36179 2.1078 7.5036C1.5588 7.8786 0.935547 8.30535 0.935547 8.99835C0.935547 9.69135 1.5588 10.1166 2.1078 10.4931C2.35117 10.6347 2.5698 10.8151 2.75505 11.0271C2.73799 11.3225 2.66866 11.6125 2.5503 11.8836C2.3328 12.4986 2.0868 13.1961 2.48205 13.7384C2.8773 14.2806 3.6228 14.2634 4.28205 14.2484C4.57227 14.2185 4.86546 14.2383 5.14905 14.3069C5.29933 14.5527 5.40686 14.8223 5.46705 15.1041C5.65305 15.7379 5.8653 16.4541 6.51705 16.6686C6.62154 16.7021 6.73057 16.7193 6.8403 16.7196C7.3677 16.6439 7.85789 16.4041 8.2413 16.0341C8.4633 15.8314 8.72054 15.671 9.0003 15.5609C9.28298 15.6701 9.54308 15.8305 9.76755 16.0341C10.2813 16.4264 10.8633 16.8741 11.4925 16.6679C12.1428 16.4564 12.355 15.7379 12.5425 15.1049C12.6027 14.8233 12.7102 14.5539 12.8605 14.3084C13.1433 14.2395 13.4357 14.2192 13.7253 14.2484C14.3838 14.2641 15.1255 14.2859 15.5253 13.7384C15.925 13.1909 15.6753 12.4986 15.4563 11.8829C15.3368 11.6126 15.2655 11.3235 15.2455 11.0286C15.4308 10.8161 15.6498 10.6355 15.8935 10.4939C16.4425 10.1189 17.0658 9.69135 17.0658 8.99835C17.0658 8.30535 16.4403 7.87935 15.8905 7.5036Z" fill="#49ADF4"/>
<path id="Vector_2" d="M8.25062 11.0625C8.17674 11.0626 8.10357 11.0481 8.03534 11.0198C7.96711 10.9915 7.90518 10.9499 7.85312 10.8975L6.35312 9.3975C6.25376 9.29087 6.19966 9.14984 6.20224 9.00411C6.20481 8.85838 6.26384 8.71935 6.3669 8.61629C6.46996 8.51323 6.609 8.45419 6.75473 8.45162C6.90045 8.44905 7.04149 8.50314 7.14812 8.6025L8.30312 9.7575L10.9131 7.8C11.0325 7.71049 11.1825 7.67206 11.3302 7.69316C11.4779 7.71425 11.6111 7.79316 11.7006 7.9125C11.7901 8.03185 11.8286 8.18187 11.8075 8.32955C11.7864 8.47724 11.7075 8.61049 11.5881 8.7L8.58812 10.95C8.49073 11.023 8.37232 11.0624 8.25062 11.0625Z" fill="white"/>
</g>
</g>
</g>
</svg></h2>
                        <p className="text-[16px] font-sfPro">{player.school}</p>
                    </span>
                    <span>
                        <p className="font-sfPro text-[14px]">{player?.class}</p>
                    </span>
                    <span>
                        <p className="font-sfPro text-[14px]">{player?.height}</p>
                    </span>
                    <span>
                        <p className="font-sfPro text-[14px]">{player?.position?.toUpperCase()}</p>
                    </span>
                    <span>
                        <p className="font-sfPro text-[14px] flex items-center gap-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_4139_861)">
                                    <path d="M17.5 8.33301C17.5 14.1663 10 19.1663 10 19.1663C10 19.1663 2.5 14.1663 2.5 8.33301C2.5 6.34388 3.29018 4.43623 4.6967 3.02971C6.10322 1.62318 8.01088 0.833008 10 0.833008C11.9891 0.833008 13.8968 1.62318 15.3033 3.02971C16.7098 4.43623 17.5 6.34388 17.5 8.33301Z" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10.833C11.3807 10.833 12.5 9.71372 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61929 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.71372 8.61929 10.833 10 10.833Z" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4139_861">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {player?.location}
                        </p>
                    </span>
                </div>
                <p className="text-[16px] font-sfPro">
                    {player?.remarks}
                </p>
            </div>
        </div>
    )
}