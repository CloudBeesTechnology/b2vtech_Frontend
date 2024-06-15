import learning from "../../../assets/feature/learning.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

export const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="25"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-once="false"
    >
         <p className="text-[transparent]">b2b</p>
      <h5 className="text-4xl font-bold  text-primary text-center  my-20">
        Explore Your Skills
      </h5>
      <div className="flex justify-center my-20 px-5 relative">
        {/* <video className="rounded-lg" ref={videoRef} width="70%" height="300">
            <source src={learning} type="video/mp4" />
          </video> */}
        <video
          className="rounded-lg"
          ref={videoRef}
          width="70%"
          height="300"
        
        >
          <source src={learning} type="video/mp4" />
          <track
            kind="captions"
            src="path/to/captions.vtt"
            srcLang="en"
            label="English"
          />
        </video>
        <div
          className="absolute bg-white text-primary p-3 rounded-[50px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          onClick={toggleVideo}
        >
          {isPlaying ? (
            <GiPauseButton className="text-5xl max-sm:text-3xl" />
          ) : (
            <GiPlayButton className="text-5xl max-sm:text-3xl" />
          )}
        </div>
      </div>
    </section>
  );
};
