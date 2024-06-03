import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { IoPersonSharp, IoHome, IoPerson } from "react-icons/io5";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showbtn, setShowBtn] = useState(false);
  const [accountSetting, setAccountSetting] = useState(true);
  const [accountNavigate, setAccountNavigate] = useState(true);
  const [setting, setSetting] = useState(false);
  function set() {
    return setSetting(!setting);
  }
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const userLogin = sessionStorage.getItem("userID");
    const employee = sessionStorage.getItem("userRole");
    if (userLogin !== null) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
    if (employee != null && employee === "employee" ) {
      setAccountSetting(false);
      setAccountNavigate(false)
    }
  }, []);

  const ClearStorage = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  function aside() {
    return setSidebar(!sidebar);
  }
  return (
    <>
      <Sidebar onclose={aside} check={sidebar} show={showbtn} />
      <section
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
                  {currentPath !== "/login" && (
                  <div  className="flex gap-5 font-semibold">
                     <Link
                    to="/login"
                    className="border-2 border-white px-5 py-2 rounded-md hover:scale-105"
                  >
                    Log In
                  </Link>
                  {currentPath !== "/register" &&   <Link
                      to="/register"
                      className="bg-mediumgrey px-10 py-2 rounded-md hover:scale-105"
                    >
                      Join
                    </Link>}
                  </div>
                  )}
 
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
              {accountNavigate ? <NavLink to="/intern">
                <IoHome />
              </NavLink> : <NavLink to="/employee">
                <IoHome />
              </NavLink>}
           
            </div>
          )}
          {setting && (
            <div className="fixed top-[5.9rem] flex flex-col gap-8 font-semibold p-5 px-8 max-sm:p-5 max-sm:text-lg right-2 text-white text-xl bg-primary">
              {accountSetting ? (
                <>
                  <NavLink
                    to="/account"
                    className="flex items-center gap-3"
                    onClick={set}
                  >
                    <span>
                      <IoPerson />
                    </span>
                    Account Setting
                  </NavLink>{" "}
                  <NavLink
                    to="/"
                    className="flex items-center gap-3 "
                    onClick={() => {
                      set();
                      ClearStorage();
                    }}
                  >
                    <span>
                      <LiaSignOutAltSolid />
                    </span>
                    Sign out
                  </NavLink>
                </>
              ) : (
                <div>
                  {" "}
                  <div className="flex flex-col gap-3">
                    <NavLink
                      to="/employeeProfile"
                      className="flex items-center gap-3"
                      onClick={set}
                    >
                      <span>
                        <IoPerson />
                      </span>
                      Profile
                    </NavLink>{" "}
                    <NavLink
                      to="/"
                      className="flex items-center gap-3 "
                      onClick={() => {
                        set();
                        ClearStorage();
                      }}
                    >
                      <span>
                        <LiaSignOutAltSolid />
                      </span>
                      Sign out
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          )}
    
        </section>
      </section>
    </>
  );
};
