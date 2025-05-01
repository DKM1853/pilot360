// "use client";
// import { useEffect, useState, useRef } from "react";

// const videos = [
//   { id: "video1", videoId: "/shorts/pouF1qkDuyE" },
//   { id: "video2", videoId: "CjTNUT9y9Jg" },
//   { id: "video3", videoId: "I8G0W21CNe4" },
// ];

// const VideoSection = () => (
//   <section className="py-16 bg-[#181818] px-4 text-center rounded-[20px] w-full max-w-[100%] mx-auto md:w-[100%] lg:w-[80%]">
//     <div className="mb-8">
//       <p className="inline-block px-4 py-2 text-sm bg-[#FFFFFF1A] text-[#FFBB00] font-bold rounded-full border border-[#171717]">
//         Life as a Pilot
//       </p>
//       <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
//         The Life as a Pilot In Flying Pilot 360
//       </h2>
//     </div>

//     <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-[100%] mx-auto">
//       {videos.map((video) => (
//         <VideoPlayer key={video.id} videoId={video.videoId} />
//       ))}
//     </div>
//   </section>
// );

// const VideoPlayer = ({ videoId }) => {
//   const playerRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showLoading, setShowLoading] = useState(true);

//   useEffect(() => {
//     let ytScript = document.getElementById("youtube-api");
//     if (!ytScript) {
//       ytScript = document.createElement("script");
//       ytScript.id = "youtube-api";
//       ytScript.src = "https://www.youtube.com/iframe_api";
//       ytScript.async = true;
//       document.body.appendChild(ytScript);
//     }

//     window.onYouTubeIframeAPIReady = () => {
//       const player = new window.YT.Player(`player-${videoId}`, {
//         videoId,
//         playerVars: {
//           modestbranding: 1,
//           rel: 0,
//           controls: 0,
//           iv_load_policy: 3,
//           playsinline: 1,
//         },
//         events: {
//           onReady: (event) => {
//             playerRef.current = event.target;
//             setShowLoading(false);
//           },
//         },
//       });
//     };

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }
//     };
//   }, [videoId]);

//   const togglePlayPause = () => {
//     if (playerRef.current) {
//       if (isPlaying) {
//         playerRef.current.pauseVideo();
//       } else {
//         playerRef.current.playVideo();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="relative bg-[#4A3E3E] rounded-lg overflow-hidden h-[350px]">
//       <div id={`player-${videoId}`} className="w-full h-full"></div>

//       {showLoading && (
//         <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
//           <div className="text-white text-lg font-bold">Loading...</div>
//         </div>
//       )}

//       <button
//         onClick={togglePlayPause}
//         className={`absolute inset-0 flex items-center justify-center bg-black/50 text-white w-14 h-14 rounded-full z-20 hover:bg-black/70 transition-all ${
//           showLoading ? "hidden" : ""
//         }`}
//         style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
//       >
//         {isPlaying ? "⏸" : "▶"}
//       </button>
//     </div>
//   );
// };

// export default VideoSection;

"use client";
import { useRef, useState } from "react";

const videos = [
  { id: "video1", src: "/videos/life-as-pilot.mp4" },
  { id: "video2", src: "/videos/life-as-pilot-2.mp4" },
  { id: "video3", src: "/videos/life-as-pilot-3.mp4" },
];

const VideoSection = () => (
  <section className="py-16 bg-[#181818] px-4 text-center rounded-[20px] w-full max-w-[100%] mx-auto md:w-[100%] lg:w-[80%]">
    <div className="mb-8">
      <p className="inline-block px-4 py-2 text-sm bg-[#FFFFFF1A] text-[#FFBB00] font-bold rounded-full border border-[#171717]">
        Life as a Pilot
      </p>
      <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
        Experience Life as a Pilot with Pilot 360
      </h2>
    </div>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-[100%] mx-auto">
      {videos.map((video) => (
        <VideoPlayer key={video.id} src={video.src} />
      ))}
    </div>
  </section>
);

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-[#4A3E3E] rounded-lg overflow-hidden h-[350px]">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        controls={false}
        onClick={togglePlayPause}
      />
      <button
        onClick={togglePlayPause}
        className={`absolute inset-0 flex items-center justify-center bg-black/50 text-white w-14 h-14 rounded-full z-20 hover:bg-black/70 transition-all`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
};

export default VideoSection;
