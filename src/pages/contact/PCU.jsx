import oaLogo from "../../assets/contact/oa logo.svg";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

export const PCU = () => {
    const LinkOA = () => {
      window.open("https://oceanacademy.co.in/", "_blank");
    };
    return (
      <section className="flex justify-center items-center ">
        <div className="max-w-screen-2xl w-[95%] my-20 px-10">
          <h3 className="text-4xl font-bold text-primary">Our Academy Partner</h3>
          <div className=" flex justify-center flex-wrap gap-20 items-center my-16">
            <div>
              <img src={oaLogo} alt="not found" />
            </div>
            <div className=" p-5 flex flex-col justify-center gap-5">
              <p className="flex items-center gap-3 text-lg font-semibold text-secondary">
                <span className="text-2xl text-skyBlue">
                  <FaPhone />
                </span>{" "}
                0413-2240580
              </p>
              <p className="flex  gap-3 text-lg font-semibold text-secondary">
                <span className="text-2xl text-skyBlue">
                  <FaLocationDot />
                </span>{" "}
                No. 10, 2nd Floor,
                <br /> 45 Feet Road, Vengateswara Nagar,
                <br /> Near HDFC Bank, Saram,
                <br /> Puducherry-605013.
              </p>
              <button
                className="flex items-center gap-3 text-lg font-semibold text-skyBlue underline"
                onClick={LinkOA}
              >
                <span className="text-2xl text-skyBlue">
                  <AiOutlineGlobal />
                </span>{" "}
                https://oceanacademy.co.in/
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  