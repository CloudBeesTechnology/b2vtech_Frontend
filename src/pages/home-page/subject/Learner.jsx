import { TiTick } from "react-icons/ti";
import intern from "../../../assets/subjects/Internship.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Learner = () => {
    useEffect(() => {
      AOS.init({
        disable: "mobile",
      });
      AOS.refresh();
    }, []);
    return (
      <section
        className="flex justify-center"
        data-aos="fade-up-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="50"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
           <p className="text-[transparent]">b2b</p>
        <div className="max-w-screen-2xl w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
          <section>
            <img
              className="w-full rounded-lg object-cover h-full"
              src={intern}
              alt="not found"
            />
          </section>
          <section>
            <h4 className="text-3xl font-bold text-primary pl-3 max-md:mt-10">
              Nurturing Talent Through Internships
            </h4>
            <div className="flex flex-col gap-3 mt-10 px-5">
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  Internships are not just about gaining work experience; they are
                  opportunities to nurture and cultivate your talent.
                </p>
              </article>
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  We believe in empowering individuals to become the best versions
                  of themselves, and internships are an integral part of that
                  journey.
                </p>
              </article>
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  It's not just an internship; it's a chance to bloom and flourish
                  as a future leader in your industry.
                </p>
              </article>
            </div>
            <button className="bg-primary text-white font-semibold px-5 py-2 rounded-lg my-10 ml-5 hover:scale-105">
              Explore more
            </button>
          </section>
        </div>
      </section>
    );
  };