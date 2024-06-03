import bg from "../../assets/about/about.svg";
import aboutEndBg from "../../assets/about/about_end_bg.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AboutCard } from "./AboutCard";

export const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (   
      <section>
        <div className="w-full  h-[500px] overflow-hidden shadow-xl relative flex justify-center items-center">
          <img
            className="object-cover w-full h-full absolute"
            src={bg}
            alt="not found"
          />
          <h1 className="z-10 text-6xl text-primary font-bold mt-5 px-5 max-[400px]:text-4xl">
            ABOUT <span className="text-white ml-0 min-[350px]:ml-5">US</span>
          </h1>
        </div>

        <section className="flex justify-center items-center">
          <div className="max-w-screen-2xl w-[95%] flex flex-col justify-center items-center">
            <article className="flex flex-col justify-center items-center my-16">
              <h2 className="text-skyBlue text-3xl font-bold">About Our B2V</h2>
              <p className="w-[80%] text-lg text-mediumgrey my-10">
                Embarking on a transformative journey in the realms of digital
                innovation, our organization is delighted to open its doors to
                passionate individuals seeking an immersive internship
                experience. This unparalleled opportunity spans across the
                dynamic domains of digital marketing, React/React Native
                development, and Flutter application design, offering a
                comprehensive and enriching experience.
              </p>
            </article>

            <AboutCard />
          </div>
        </section>

        <div className="w-full my-20 relative h-96 ">
          <img
            className="object-cover w-full h-full "
            src={aboutEndBg}
            alt="not found"
          />
          <p className="absolute px-3 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-xl text-center font-semibold w-[90%] max-[500px]:text-[15px] max-[500px]:leading-tight">
            Join us on this exhilarating internship journey, where you'll not
            only refine your skills in digital marketing, React development,
            React Native, and Flutter development but also forge meaningful
            connections and lay the foundation for a promising future in the
            ever-evolving world of digital innovation. Unleash your potential,
            seize this opportunity, and become part of a community dedicated to
            pushing the boundaries of what's possible in the digital landscape.
          </p>
        </div>
      </section>
   
  );
};


