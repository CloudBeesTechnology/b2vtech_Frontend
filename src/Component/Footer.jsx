import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone, FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <main className="bg-primary p-14 max-sm:p-5 mt-10 flex justify-center items-center relative">
      <section className="max-w-screen-2xl w-[95%]">
        <h1 className="text-white text-4xl max-sm:text-2xl mb-5 font-semibold max-[500px]:text-center">
          Bees2Ventures TECHNOLOGY
        </h1>
        <div className="w-full h-1 bg-white mt-2"></div>

        {/* Address details */}

        <section className="text-white font-bold flex justify-around flex-wrap gap-16 mt-8">
          <div className="max-[500px]:text-center">
            <h2 className="mb-2 text-skyBlue text-lg font-bold">CONTACT</h2>
            <article className="flex gap-2 items-center max-[620px]:justify-center">
              <span>
                <MdEmail className="text-skyBlue text-xl" />
              </span>
              <p>hrsupport@b2vtech.com</p>
            </article>
            <article className="flex gap-2 mt-3 max-[620px]:justify-center">
              <p>
                <FaPhone className="text-skyBlue text-lg" />
              </p>
              <article className="flex flex-col gap-1">
                <span>(India) +91 - 7200533357</span>
              </article>
            </article>
          </div>
          <div className="max-[500px]:text-center">
            <h3 className="mb-2 text-skyBlue text-lg font-bold">FOLLOW US</h3>
            <article className="flex gap-3 items-center max-[620px]:justify-center text-3xl text-white">
              <span>
              <Link
               to="https://www.instagram.com/b2vtechnology"
              target="_blank"
            >
                <FaInstagram />
                </Link>
              </span>
              <span>
              <Link
              to="https://www.facebook.com/profile.php?id=61558108075791"
              target="_blank"
            >
                <FaFacebookF />
                </Link>
              </span>
              <span>
              <Link
              to="https://www.linkedin.com/in/b2v-technology-3b65b7290/"
              target="_blank"
            >
                <FaLinkedin />
                </Link>
              </span>
            </article>
          </div>
          <address className="max-[500px]:text-center">
            <h4 className="mb-2 text-skyBlue text-lg font-bold">PUDUCHERRY</h4>
            <p className="flex items-center max-[620px]:justify-center">
              <span className="text-skyBlue text-xl">
                <MdLocationPin />
              </span>
              #1,III Main road,
            </p>
            <p>Kavery Nagar,</p>
            <p>Reddiyarpalayam,</p>
            <p>Puducherry - 605010</p>
          </address>
        </section>
      </section>
    </main>
  );
};