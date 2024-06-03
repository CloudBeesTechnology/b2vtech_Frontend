import dm from "../../assets/about/dm.svg";
import react from "../../assets/about/react.svg";
import flutter from "../../assets/about/flutter.svg";


export const AboutCard = () => {
    return (
      <section className="grid grid-cols-2 justify-items-center mb-16 items-center w-[90%] max-[870px]:grid-cols-1 max-[870px]:gap-8">
        <div className="w-full ">
          <img className="object-cover w-full" src={dm} alt="not found" />
        </div>
        <div className="text-center px-8 ">
          <h3 className="text-skyBlue text-2xl font-bold my-3">
            Digital Marketing
          </h3>
          <p className="text-mediumgrey text-[16px]">
            Interns will be engaged in real-world projects, collaborating with
            seasoned professionals to develop a deep understanding of online
            advertising, social media dynamics, and data analytics. This
            internship promises not only skill acquisition but also an invaluable
            chance to contribute to impactful marketing campaigns.
          </p>
        </div>
        <div className="text-center px-8 block max-[870px]:hidden">
          <h4 className="text-skyBlue text-2xl font-bold my-3">
            React/React Native
          </h4>
          <p className="text-mediumgrey text-[16px]">
            As a React and React Native intern, you will immerse yourself in the
            principles of component-based architecture, JSX syntax, and the
            virtual DOM for efficient UI rendering. Engage in real-world projects
            that involve state management, routing, and the integration of
            third-party libraries, honing your skills in creating modular and
            scalable user interfaces.
          </p>
        </div>
        <div className="w-full">
          <img className="object-cover w-full" src={react} alt="not found" />
        </div>
        <div className="text-center px-8 hidden max-[870px]:block">
          <h5 className="text-skyBlue text-2xl font-bold my-3">
            React/React Native
          </h5>
          <p className="text-mediumgrey text-[16px]">
            As a React and React Native intern, you will immerse yourself in the
            principles of component-based architecture, JSX syntax, and the
            virtual DOM for efficient UI rendering. Engage in real-world projects
            that involve state management, routing, and the integration of
            third-party libraries, honing your skills in creating modular and
            scalable user interfaces.
          </p>
        </div>
        <div className="w-full">
          <img className="object-cover w-full" src={flutter} alt="not found" />
        </div>
        <div className="text-center px-8">
          <h6 className="text-skyBlue text-2xl font-bold my-3">Flutter</h6>
          <p className="text-mediumgrey text-[16px]">
            As a Flutter intern, you will delve into the intricacies of
            widget-based UI development, state management, and asynchronous
            programming within the Flutter framework. Engage in real-world
            projects that involve optimizing for performance and responsiveness,
            honing your skills in crafting visually appealing and high-performance
            applications.
          </p>
        </div>
      </section>
    );
  };

