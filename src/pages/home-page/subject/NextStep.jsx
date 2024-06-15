import nextstep from "../../../assets/subjects/next-step.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const NextStep = () => {
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
        data-aos-offset="75"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
           <p className="text-[transparent]">b2b</p>
        <div className="max-w-screen-2xl my-20 w-full grid grid-cols-2 max-md:grid-cols-1 broder px-5 gap-x-5 max-md:gap-y-5">
          <section className="px-3 mb-10">
            <h4 className="text-3xl font-bold text-primary ">
              Take the next step toward your personal and professional goals with
              us.
            </h4>
            <p className="text-mediumgrey my-5">
              It acknowledges that individuals have personal aspirations and
              ambitions. Taking the next step is about moving closer to achieving
              those goals, whether they are related to personal growth, career
              advancement, education, or any other aspect of life.
            </p>
            <button className="border bg-primary text-white px-5 py-2 font-bold rounded-lg text-xl">
              Read More
            </button>
          </section>
          <section>
            <img
              className="w-full rounded-lg object-cover h-full"
              src={nextstep}
              alt="not found"
            />
          </section>
        </div>
      </section>
    );
  };