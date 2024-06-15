import { Link } from "react-router-dom";
import bg2 from "../../assets/intern/intern_bg_1.svg";
import { InternCD } from "./InternCD";

export const InternProvide = () => {
    return (
      <main>
        <div
          className="w-full relative bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <section className=" flex justify-center items-center ">
            <div className="max-w-screen-2xl relative w-full px-8">
              <h1 className="text-5xl text-white font-bold my-16 px-3 max-sm:text-4xl ">
                INTERNSHIP <br /> Provide
              </h1>
              <section className="flex flex-wrap justify-center items-center gap-10 my-4 max-xl:my-8">
                {InternCD.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-xs w-full bg-white rounded-lg flex flex-col justify-center items-center border-skyBlue shadow-xl border-2 py-5 px-2"
                    >
                      <img
                        className="max-w-[150px] object-cover w-full max-[400px]:max-w-[100px]"
                        src={value.icon}
                        alt="not found"
                      />
                      <h2 className="text-2xl text-center my-5 text-primary font-semibold max-[400px]:text-2xl">
                        {value.title}
                      </h2>
                      <p className="text-center text-sm mb-5 px-[9px] text-mediumgrey line-clamp-3">
                        {value.p}
                      </p>
                      <Link
                        to="/register"
                        className="text-xl text-white bg-primary px-5 py-2 rounded-xl my-2 font-semibold "
                      >
                        Enroll Now
                      </Link>
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        </div>
        <p className="text-[transparent]">b2b tech solutions</p>
      </main>
    );
  };