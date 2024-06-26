import { AiFillCloseCircle } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";


export const Sidebar = (props) => {
  const { onclose, show, check ,dropdown,dropDownsIcons,setDropDownIcon,dropDownIcon,dropDown} = props;
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <main
      className={`bg-gradient-to-t from-primary from-50% to-skyBlue shadow-md z-50 h-screen ${
        check
          ? "right-0 transition-all duration-700 ease-out"
          : "-right-56 transition-all duration-700 ease-out"
      } fixed max-xl:block hidden  px-4 top-0 py-2`}
    >
      <AiFillCloseCircle
        className="text-3xl my-3 text-white"
        onClick={onclose}
      />
      <section className="text-white text-xl px-5 flex flex-col justify-center">
        {!show && (
          <div className="flex flex-col gap-8 my-10">
            <NavLink to="/"  onClick={onclose}>Home</NavLink>
            <NavLink to="/internship"  onClick={onclose}>Internship</NavLink>
            <div>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "under-border flex items-center" : "flex items-center"
            }
            onClick={
              dropDownsIcons
            }
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
          </NavLink>
          {dropdown && (
            <div
              className="shadow-sm flex flex-col gap-3 px-2  mt-5"
              onClick={() => {
                onclose();
                dropDown()
                setDropDownIcon(false);
              }}
            >
              <NavLink className="border-b border-litegrey text-start pb-1">
              Mobile
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
              Web
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
                Cloud
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
              Security
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
              Devops
              </NavLink>
            </div>
          )}
        </div>
            <NavLink to="/about"  onClick={onclose}>About</NavLink>
            <NavLink to="/contact"  onClick={onclose}>Contact</NavLink>

            {currentPath !== "/login" && (
              <>
                <Link
                  to="/login"
                  className="border-2 border-white px-3 py-2 rounded-md hover:scale-105"  onClick={onclose}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-skyBlue px-8 py-2 rounded-md hover:scale-105"  onClick={onclose}
                >
                  Join
                </Link>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
};
