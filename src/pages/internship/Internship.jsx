import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import internBG from "../../assets/intern/intern_bg.svg";

import boy from "../../assets/intern/intern_boy.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { InternProvide } from "./InternProvide";

export const Internship = () => {
   const { pathname } = useLocation();
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full relative  h-screen shadow-xl">
          <div className="w-full -z-10 absolute  h-full">
            <img
              className="object-cover w-full h-full"
              src={internBG}
              alt="not found"
            />
          </div>
          <section className=" flex justify-center items-center ">
            <div className="max-w-screen-2xl relative w-full h-screen flex justify-center items-center px-8 flex-wrap">
              <div className="flex-1 max-[500px]:text-center ">
                <h1 className="text-7xl text-primary font-bold my-5 px-3 max-sm:text-6xl max-[390px]:text-3xl">
                  INTERNSHIP{" "}
                </h1>
                <h3 className="text-5xl text-skyBlue font-semibold mb-5 px-3 max-sm:text-4xl max-[390px]:text-2xl">
                  OPPORTUNITY JOB{" "}
                </h3>
                <p className="text-lg text-black w-[80%] max-sm:w-full px-3 font-semibold">
                  <em>
                    Join our internship program to accelerate your professional
                    growth through meaningful projects, mentorship, and a
                    supportive learning environment. Develop practical skills
                    while making a valuable impact on our innovative team
                  </em>
                </p>
                <button className="text-4xl text-white bg-primary px-10 py-3 rounded-xl my-10 font-semibold max-[390px]:text-xl">
                  Read more
                </button>
              </div>
              <div className="w-full h-full flex flex-1 justify-center items-center  max-[860px]:hidden">
                <img
                  className="object-cover w-full"
                  src={boy}
                  alt="not found"
                />
              </div>
              <div className="absolute bottom-16 left-0 text-2xl text-skyBlue font-bold m-5 max-[600px]:left-[20%] max-[600px]:text-white">
                <p>
                  Work Together to
                  <br />
                  Great ideas
                </p>
              </div>
            </div>
          </section>
        </div>
        <InternProvide />
      </main>
      <Footer />
    </>
  );
};



