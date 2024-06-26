import { AiFillCloseCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = (props) => {
  const { onclose, show, check } = props;

  return (
    <main
      className={`bg-gradient-to-t from-primary from-50% to-skyBlue shadow-md z-50 h-screen ${
        check
          ? "right-0 transition-all duration-700 ease-out"
          : "-right-56 transition-all duration-700 ease-out"
      } fixed max-[1000px]:block hidden  px-4 top-0 py-2`}
    >
      <AiFillCloseCircle
        className="text-3xl my-3 text-white"
        onClick={onclose}
      />
      <section className="text-white text-xl px-5 flex flex-col justify-center">
        {!show && (
          <div className="flex flex-col gap-8 my-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/internship">Internship</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/login"
              className="border-2 border-white px-3 py-2 rounded-md hover:scale-105"
            >
              Log In
            </Link>
            <button className="bg-skyBlue px-8 py-2 rounded-md hover:scale-105">
              Join
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
