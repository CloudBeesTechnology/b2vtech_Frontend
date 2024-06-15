import { Link } from "react-router-dom";
import bg from "../../assets/home-img/hero_bg.png";
import student from "../../assets/home-img/home_rightImage.png";
import { HomeCD } from "./HomeCD";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomeHeader = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <header
      className="h-screen relative shadow-xl"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="25"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div
        className="relative bg-cover  bg-no-repeat  h-screen w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute h-screen w-full bg-black opacity-40 top-0"></div>
        <section className="flex justify-center items-center">
          <div className="max-w-screen-2xl w-[95%] h-screen grid grid-cols-2 justify-items-center max-[350px]:my-20 max-[350px]:items-start items-center max-[1000px]:grid-cols-1 gap-5 z-10 mx-10">
            <div className="max-[1000px]:text-center">
              <p className="text-[transparent] text-center">B2V Technologies</p>
              <h3 className="text-7xl text-primary  font-bold my-5 max-sm:text-6xl max-[390px]:text-4xl">
                Get An{" "}
              </h3>
              <h3 className="text-7xl text-skyBlue font-semibold mb-5 max-sm:text-4xl max-[390px]:text-2xl">
                Internship{" "}
              </h3>
              <p className="my-5 text-lg text-white font-semibold max-sm:text-base max-[1000px]:text-center max-[1000px]:my-10">
                <i>
                  Access resources and guides to help you excel in your
                  internship and future career. Our platform offers a wealth of
                  knowledge and tools to help you thrive during your internship
                  and chart a course toward a prosperous career.
                </i>
              </p>
              <div className="flex max-[1050px]:justify-center">
                <Link to="/register" className="bg-skyBlue shadow-md px-8 py-4 rounded-md text-white font-bold text-xl flex max-md:text-center">
                  Join For Free
                </Link>
                <p className="text-[transparent]">Technology solutions</p>
              </div>
            </div>
            <div className="w-full flex justify-center mb-16 max-[1000px]:hidden">
              <img
                className="object-cover w-full h-full min-w-[500px] max-[1050px]:w-[500px]"
                src={student}
                alt="not found"
              />
            </div>
          </div>
        </section>

        <div className="absolute -bottom-16 grid grid-cols-3 max-md:justify-items-center gap-3 left-1/2 -translate-x-1/2 max-w-screen-xl w-full px-3 max-md:grid-cols-1 max-md:-bottom-40 max-[300px]:-bottom-44 z-20">
          {HomeCD.map((value, index) => {
            return (
              <div
                key={index}
                className="flex gap-5 items-center p-3 text-white rounded-xl bg-primary shadow-xl max-[900px]:px-2 max-[900px]:py-2"
              >
                <span className="text-5xl max-sm:text-3xl">{value.icon}</span>
                <article>
                  <h6 className="text-xl mb-2 font-semibold max-sm:text-base">
                    {value.h1} <span className="text-[transparent]">Technology</span>
                  </h6>
                  <p className="max-sm:text-sm">{value.p}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
