import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { IoPersonSharp, IoHome, IoPerson } from "react-icons/io5";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showbtn, setShowBtn] = useState(false);
  const [setting, setSetting] = useState(false);
  function set() {
    return setSetting(!setting);
  }
  useEffect(() => {
    const data = localStorage.getItem("LoginId");
    if (data !== null) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, []);

  const ClearStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  function aside() {
    return setSidebar(!sidebar);
  }
  return (
    <>
      <Sidebar
        onclose={aside}
        check={sidebar}
        show={showbtn}
        
      />

      <main
        style={{ transitionDelay: "2s" }}
        className="sticky top-0 z-40 items-center bg-gradient-to-r from-primary from-50% to-skyBlue flex justify-center"
      >
        <section className="max-w-screen-2xl w-full flex items-center justify-between px-5 py-2 mx-2">
          <div className="py-2">
            <img className="max-w-[100px] w-full" src={logo} alt="not found" />
          </div>

          {!showbtn ? (
            <div>
              <section className="flex items-center justify-between gap-12 text-white text-xl max-[1000px]:hidden">
                <div className="flex gap-8 font-semibold ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-skyBlue underline font-bold" : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/internship"
                    className={({ isActive }) =>
                      isActive ? "text-skyBlue underline font-bold" : ""
                    }
                  >
                    Internship
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-skyBlue underline font-bold" : ""
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-skyBlue underline font-bold" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="flex gap-5 font-semibold">
                  <Link
                    to="/login"
                    className="border-2 border-white px-5 py-2 rounded-md hover:scale-105"
                  >
                    Log In
                  </Link>
                  <Link to="/register" className="bg-mediumgrey px-10 py-2 rounded-md hover:scale-105">
                    Join
                  </Link>
                </div>
              </section>
              <div
                className="text-white font-semibold text-3xl max-[1000px]:block hidden mr-4"
                onClick={aside}
              >
                <AiOutlineMenu />
              </div>
            </div>
          ) : (
            <div className="flex items-center text-white text-3xl max-sm:text-2xl max-sm:gap-4 gap-7 md:mr-10">
              <button onClick={set}>
                <IoPersonSharp />
              </button>
              <NavLink to="/intern"><IoHome /></NavLink>
            </div>
            
          )}
          {setting && (
            <div className="fixed top-24 flex flex-col gap-8 font-semibold p-10 max-sm:p-5 max-sm:text-lg right-0 text-white text-xl border bg-primary">
              <NavLink to="/account" className="flex items-center gap-3">
                <span>
                  <IoPerson />
                </span>
                Account Setting
              </NavLink>
              <NavLink
                to="/"
                className="flex items-center gap-3"
                onClick={ClearStorage}
              >
                <span>
                  <LiaSignOutAltSolid />
                </span>
                Sign out
              </NavLink>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
