import learn from "../../../assets/feature/learn.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";

export const LearnSkills = () => {  
    useEffect(() => {
      AOS.init({
        disable: "mobile",
      });
      AOS.refresh();
    }, []);
    return (
      <section
        className="flex justify-center  mt-40"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="50"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="max-w-screen-2xl w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
          <section className="flex flex-col  py-5 px-5">
            <h3 className="text-3xl font-bold text-primary">
              Exploring Exciting Internship Pathways
            </h3>
            <p className="my-3 text-mediumgrey">
              <i>
                Embark on a journey of self-discovery and professional growth as
                you delve into the realm of 'Exploring Exciting Internship
                Pathways.
              </i>
            </p>
            <div className="flex flex-col gap-3 mt-5">
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  Dive into the dynamic landscape of internships, where each
                  opportunity is a door to learning, skill development, and
                  networking.
                </p>
              </article>
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  Our guide provides you with the tools to make informed decisions
                  as you step into the world of internships.
                </p>
              </article>
              <article className="flex gap-3">
                <span className="text-skyBlue text-2xl">
                  <TiTick />
                </span>
                <p className="text-mediumgrey">
                  Let's embark on this journey together, and unlock the thrilling
                  world of internship opportunities.
                </p>
              </article>
            </div>
          </section>
          <section className="flex max-md:justify-center">
            <img
              className="h-full w-full object-cover"
              src={learn}
              alt="not found"
            />
          </section>
        </div>
      </section>
    );
  };