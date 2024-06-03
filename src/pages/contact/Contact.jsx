import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { ContactUs } from "./ContactUs";
import { PCU } from "./PCU";


export const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
    
      <main id="contact">
        <h1 className="text-center w-full text-4xl text-primary font-semibold mb-16 mt-16">
          Contact Us
        </h1>
        <div className="flex justify-center items-center py-5 bg-gradient-to-r from-skyBlue to-primary ">
          <section className="max-w-screen-2xl w-[95%] gap-5 grid grid-cols-2 overflow-hidden max-[850px]:grid-cols-1 ">
            {/* Map linked */}
            <iframe
              className="w-full h-[600px] touch-none my-5"
              src="https://www.google.com/maps/d/u/1/embed?mid=1FsawGHRjB1fvo1NxuMIdxctm9q8XC3M&ehbc=2E312F"
              sallowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>

            <div className="lg:ml-5 bg-white w-full rounded-xl p-3  flex justify-center items-center flex-col my-5">
              <h2 className="text-3xl text-primary font-semibold text-center sm:mb-5 max-md:mt-6 pl-3">
                Contact
              </h2>

              <ContactUs />
            </div>
          </section>
        </div>
        <PCU />
      </main>
    </>
  );
};

