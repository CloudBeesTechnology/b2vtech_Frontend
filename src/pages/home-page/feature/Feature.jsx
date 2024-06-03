import Slider from "react-slick";
import "./feature.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { FeatureCD } from "./FeatureCD";
import { CourseCounter } from "./CourseCounter";
import { LearnSkills } from "./LearnSkills";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export const Feature = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <main className="flex justify-center">
        <section
          className="max-w-screen-2xl w-full my-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="25"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 className="text-4xl font-bold text-primary text-center mt-48 mb-20">
            Our Features
          </h2>
          <Slider {...settings} className="px-10">
            {FeatureCD.map((value, index) => {
              return (
                <div
                  key={index}
                  className="max-w-md min-w-min bg-white rounded-lg shadow-xl"
                >
                 <div className="h-72">
                 <img className="rounded-t-xl h-full w-full object-cover" src={value.img} alt= {value.title}/>
                 </div>
                  <div className="mt-2 px-3 min-h-[200px]">
                    <h3 className="text-xl text-primary font-bold text-center my-6 h-10">
                      {value.title}
                    </h3>
                    <p className="text-center text-litegrey text-sm">
                      {value.content}
                    </p>
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="text-center border bg-primary text-white font-bold px-7 py-2 rounded-lg text-xl">
                      Find Out More
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>
      </main>
      
    </>
  );
};
