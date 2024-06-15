import { IoPersonSharp, IoHome } from "react-icons/io5";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdSendToMobile,
  MdOutlineHolidayVillage,
} from "react-icons/md";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { useEffect, useState } from "react";
import { EmployeeDashboard } from "../../pages/employee/employeeHome/EmployeeDashboard";
import { EmployeeLeaveDetails } from "../../pages/employee/employeeLeave/EmployeeLeaveDetails";

export const Aside = ({ set, accountNavigate }) => {
  const location = useLocation();

  // Function to determine if a NavLink is active
  const isActive = (path) => {
    return matchPath({ path, end: true }, location.pathname) !== null;
  };

  const activePath=["/employee/leaveDetails","/employee/leaveHistory"]
  const isAnyActive = (paths) => {
    return paths.includes(location.pathname);
  };

  return (
    <div className="flex items-center text-white text-3xl max-sm:text-2xl max-sm:gap-4 gap-7 md:mr-10 ">
      <button onClick={set}>
        <IoPersonSharp />
      </button>
      {accountNavigate ? (
        <NavLink to="/intern">
          <IoHome />
        </NavLink>
      ) : (
        <NavLink to="/employee">
          <IoHome />
        </NavLink>
      )}

      <aside className=" bg-gradient-to-b from-primary from-50% to-skyBlue text-xl pt-20 h-full fixed left-0 top-[5.2rem] ">
        <div className="flex flex-col gap-8 mt-10 pr-10 text-white">
          <NavLink
            to="/employee"
            className={`flex items-center gap-2 p-2 pl-5 rounded-r-full ${
              isActive("/employee") ? "text-secondary bg-white" : "text-white"
            }`}
          >
            <span>
              <MdOutlineDashboard className="text-2xl " />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            to="/employee/upcomingHolidays "
            className={`flex items-center gap-2 p-2 pl-5 rounded-r-full ${
              isActive("/employee/upcomingHolidays") ? "text-secondary bg-white" : "text-white"
            }`}          
          >
            <span>
              <MdOutlineHolidayVillage className="text-2xl" />
            </span>
            Upcoming Holidays
          </NavLink>

          <NavLink
            to="/employee/leaveDetails "
            className={`flex items-center gap-2 p-2 pl-5 rounded-r-full rounded-lg ${
              isAnyActive(activePath) ? "text-secondary bg-white" : "text-white"
            }`}
          >
            <span>
              <MdSendToMobile className="text-2xl " />
            </span>
            Leave Details
          </NavLink>
          <NavLink
            to="/employee/teams"
            className={`flex items-center gap-2 p-2 pl-5 rounded-r-full rounded-lg ${
              isActive("/employee/teams") ? "text-secondary bg-white" : "text-white"
            }`}
          >
            <span>
              <PiMicrosoftTeamsLogo className="text-2xl" />
            </span>
            Team Member
          </NavLink>
        </div>
      </aside>
    </div>
  );
};
