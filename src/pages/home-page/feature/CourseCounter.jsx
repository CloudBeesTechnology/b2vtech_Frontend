import { PiStudentBold } from "react-icons/pi";
import { BsFillLaptopFill } from "react-icons/bs";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import book from "../../../assets/feature/book.png";
import { useState } from "react";

export const CourseCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
    const increment = [
      { icon: <BsFillLaptopFill />, no: "20", lable: "Internship" },
      { icon: <PiStudentBold />, no: "100", lable: "Student" },
      { icon: <LiaChalkboardTeacherSolid />, no: "10", lable: "Trainers" },
    ];
    return (
      <section className="flex justify-center items-center relative my-200 mt-20">
        <img
          className="h-auto md:h-[22rem] object-cover border w-full"
          src={book} alt="not found"
        />
        <div className="bg-black md:h-[22rem] h-full w-full absolute text-white top-0"></div>
        <section className="absolute max-w-screen-2xl w-full grid grid-cols-3 px-3 max-sm:gap-y-5 justify-items-center gap-y-16 text-white font-extrabold  text-3xl">
          {increment.map((value, index) => {
            return (
              <ScrollTrigger
                key={index}
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <p className="text-7xl text-primary w-full flex justify-center items-center max-sm:text-5xl">
                  {value.icon}
                </p>
                <h1 className="text-5xl text-center max-sm:text-3xl">
                  {counterOn && <CountUp start={0} end={value.no} duration={3} />}
                  +
                </h1>
                <p className="text-lg font-medium text-center mt-2">
                  {value.lable}
                </p>
              </ScrollTrigger>
            );
          })}
        </section>
       
      </section>
    );
  };