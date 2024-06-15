import logo from "../../assets/contact/Logo.png";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

export const PCU = () => {
  const LinkOA = () => {
    window.open("https://cloudbeestech.com/", "_blank");
  };
  return (
    <section className="flex justify-center items-center ">
      <div className="max-w-screen-2xl w-[95%] sm:my-20 sm:px-10">
      <span className="text-[transparent]">b2b b2v tech solutions </span>
        <h3 className="text-4xl font-bold text-primary max-sm:text-center">Tech Partner CBT</h3>
      <span className="text-[transparent]">technology traning marketing </span>
        <div className="flex justify-evenly flex-wrap sm:gap-20 gap-10 items-center my-16">
          <div>
            <img className="object-cover w-full max-w-[500px] min-w-[250px]" src={logo} alt="not found" />
          </div>
          <div className=" sm:p-5 flex flex-col justify-center gap-5">
            <p className="flex items-center gap-3 text-lg font-semibold text-secondary">
              <span className="text-2xl text-[#F5C01C]">
                <FaPhone />
              </span>{" "}
              +91 -7200533357
            </p>
            <p className="flex  gap-3 text-lg font-semibold text-secondary">
              <span className="text-2xl text-[#F5C01C]">
                <FaLocationDot />
              </span>{" "}
              #1, III Main road,
              <br /> Kavery Nagar,
              <br /> Reddiyarpalayam,
              <br /> Puducherry - 605010.
            </p>
            <button
              className="flex items-center gap-3 text-lg font-semibold text-skyBlue underline"
              onClick={LinkOA}
            >
              <span className="text-2xl text-[#F5C01C]">
                <AiOutlineGlobal />
              </span>{" "}
              https://cloudbeestech.com/
            </button>
            <span className="text-[transparent]">technology traning marketing </span>
          </div>
        </div>
      </div>
      
    </section>
  );
};
