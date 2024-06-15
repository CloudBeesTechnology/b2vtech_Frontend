import { IoPersonSharp, IoHome } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  MdArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineDashboard,
  MdSendToMobile
} from "react-icons/md";


import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { Aside } from "./Aside";



export const MainMenu = ({
  aside,
  showbtn,
  dropDown,
  dropdown,
  dropDownIcon,
  dropDownsIcons,
  currentPath,
  set,
  accountNavigate,
}) => {
  
  return (
    <>
      {!showbtn ? (
        <div>
          <section className="flex items-center justify-between gap-12 text-white text-xl  max-xl:hidden">
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
              <div>
                <NavLink
                  to="/tech"
                  className={({ isActive }) =>
                    isActive
                      ? "text-skyBlue underline flex items-center font-bold relative"
                      : "relative flex items-center"
                  }
                  onClick={dropDownsIcons}
                >
                  Tech solution
                  {dropDownIcon ? (
                    <span className="text-2xl">
                      <MdOutlineArrowDropUp />
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <MdArrowDropDown />
                    </span>
                  )}
                  {dropdown && (
                    <div className="absolute top-10 w-full bg-white text-black rounded-md shadow-liteblack z-20 shadow-md  py-2 flex flex-col gap-2 px-2">
                      {" "}
                      <p className="border-b border-litegrey text-start pb-1">
                        Mobile
                      </p>
                      <p className="border-b border-litegrey text-start pb-1">
                        Web
                      </p>
                      <p className="border-b border-litegrey text-start pb-1">
                        Cloud
                      </p>
                      <p className="border-b border-litegrey text-start pb-1">
                        Security
                      </p>
                      <p className=" text-start pb-1">Devops</p>
                    </div>
                  )}
                </NavLink>
              </div>
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
            {currentPath !== "/login" && (
              <div className="flex gap-5 font-semibold">
                <Link
                  to="/login"
                  className="border-2 border-white px-5 py-2 rounded-md hover:scale-105"
                >
                  Log In
                </Link>
                {currentPath !== "/register" && (
                  <Link
                    to="/register"
                    className="bg-mediumgrey px-10 py-2 rounded-md hover:scale-105"
                  >
                    Join
                  </Link>
                )}
              </div>
            )}
          </section>

          <div
            className="text-white font-semibold text-3xl max-xl:block hidden mr-4"
            onClick={aside}
          >
            <AiOutlineMenu />
          </div>
        </div>
      ) : (
    <Aside 
    set={set}
    accountNavigate={accountNavigate}
   />
      )}
   
    </>
  );
};
