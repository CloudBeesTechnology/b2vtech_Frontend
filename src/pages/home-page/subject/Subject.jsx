import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SubjectView } from "./SubjectView";
import { Learner } from "./Learner";
import { Video } from "./Video";
import { NextStep } from "./NextStep";
import { Link } from "react-router-dom";

export const Subject = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="max-w-screen-2xl w-full flex flex-col justify-center my-20 gap-5">
          <h4 className="text-4xl font-bold  text-primary text-center  my-20">
            Explore Top Empowering Careers
          </h4>
          <section className="flex flex-wrap gap-5 justify-center items-center">
          {/* grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 max-lg:gap-x-20 max-lg:px-10 justify-items-center gap-y-7 p-5 gap-x-5 */}
            {SubjectView.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative  overflow-hidden rounded-lg group"
                >
                  <div className="h-[150px] w-[280px] rounded-lg">
                    <img
                      className="object-cover w-full h-full rounded-lg"
                      src={value.img}
                      alt="not found"
                    />
                  </div>
                  <h5 className="text-white font-bold text-xl absolute z-20 left-1/2 top-2/4 -translate-x-2/4 -translate-y-2/4 transition-all hover:underline hidden group-hover:block group-hover:duration-700">
                    PROGRAMMING
                  </h5>
                  <div className="h-[150px] w-full bg-primary absolute top-0 rounded-lg opacity-50 -left-full group-hover:-left-0 group-hover:duration-700"></div>
                </div>
              );
            })}
          </section>
          <div className="flex justify-center mt-10 ">
            <Link to="/internship" className="border px-8 py-5 border-primary hover:text-white hover:bg-primary hover:duration-700 text-primary font-semibold text-xl rounded-xl">
              View More Intern
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
};
