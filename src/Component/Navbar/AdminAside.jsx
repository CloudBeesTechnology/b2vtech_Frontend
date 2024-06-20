import React, { useState, useEffect } from "react";
// import { Dashboard } from "../../pages/admin/AdminDashboard";
// import { Employeess } from "../../pages/admin/adminEmployee/EmployeeInfo";
// import { InternshipD } from "../../pages/admin/InternshipD";
// import { ApprovedEmp } from "../../pages/admin/ApprovedEmp";
// import { ApprovedInt } from "../../pages/admin/ApprovedInt";
// import { ApprovedLeave } from "../../pages/admin/ApprovedLeave";
import { FaChevronDown } from "react-icons/fa";
import employee from "../../assets/employee/employeeDB/employee.png";
import internship from "../../assets/employee/employeeDB/internship.png";
import leave from "../../assets/employee/employeeDB/leave.png";
// import dashboard from "../../assets/employee/employeeDB/dashboard.png";
import approved from "../../assets/employee/employeeDB/approved.png";
import { IoPersonSharp, IoHome } from "react-icons/io5";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdSendToMobile,
  MdOutlineHolidayVillage,
} from "react-icons/md";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

export const AdminAside = ({ set, accountNavigate }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [rotateDropdown1, setRotateDropdown1] = useState(false);
  const [rotateDropdown2, setRotateDropdown2] = useState(false);

  const location = useLocation();

  // Function to determine if a NavLink is active
  const isActive = (path) => {
    return matchPath({ path, end: true }, location.pathname) !== null;
  };
  const activePath = [
    "/superAdmin/employeeInfo",
    "/superAdmin/employeeApproved",
  ];
  const isAnyActive = (paths) => {
    return paths.includes(location.pathname);
  };
  const activedPath=["/superAdmin/internship","/superAdmin/internApproved"]
  useEffect(() => {
    setActiveMenu(0);
  }, []);
const isAnyActived=(paths) => {
  return paths.includes(location.pathname);
};
  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
    setRotateDropdown1(!rotateDropdown1); // Toggle rotate state
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
    setRotateDropdown2(!rotateDropdown2); // Toggle rotate state
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
        <div className="flex flex-col  gap-8 mt-10 pr-5 ">
          <NavLink
            to="/superAdmin"
            className={`flex items-center gap-2 p-2 pl-5 rounded-r-full ${
              isActive("/superAdmin") ? "text-secondary bg-white" : "text-white"
            }`}
          >
            <span>
              <MdOutlineDashboard className="text-2xl " />
            </span>
            <span>Dashboard</span>
          </NavLink>

          <div className="flex flex-col">
            <NavLink
              to="/superAdmin/employeeInfo"
              className={`flex items-center gap-2 p-2 pl-5 rounded-r-full ${
                isAnyActive(activePath)
                  ? "text-secondary bg-white"
                  : "text-white"
              }`}
            >
              <img
                className={`w-[20px] m-1 ${
                  isAnyActive(activePath) ? "filter invert" : ""
                }`}
                src={employee}
                alt="Employees"
              />
              <span>Employees</span>
              <FaChevronDown
                className="ml-5 cursor-pointer "
                onClick={toggleDropdown1}
              />
            </NavLink>
            {isDropdownVisible1 && (
              <NavLink
                to="/superAdmin/employeeApproved"
                className={`flex items-center gap-2 px-4 py-1 pl-8 rounded-r-xl ml-5 mt-3 text-[10px] text-white cursor-pointer`}
              >
                <img
                  className={`w-[15px] m-1`}
                  src={approved}
                  alt="Internship"
                />
                <span>
                  Approved <br /> Employees
                </span>
              </NavLink>
            )}
          </div>

          <div className="flex flex-col">
            <NavLink
              to="/superAdmin/internship"
              className={`flex items-center gap-2 p-2 pl-5 rounded-r-full ${
                isAnyActived(activedPath)
                  ? "text-secondary bg-white"
                  : "text-white"
              }`}
            >
              <img
                className={`w-[20px] m-1 ${
                  isAnyActived(activedPath) ? "filter invert" : ""
                }`}
                src={internship}
                alt="Internship"
              />
              <span>Internship</span>
              <FaChevronDown
                className={`ml-5 cursor-pointer ${
                  rotateDropdown2 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown2}
              />
            </NavLink>

            {isDropdownVisible2 && (
              <NavLink
                to="/superAdmin/internApproved"
                className={`flex items-center gap-2 px-4 py-1 pl-8 rounded-r-xl ml-5 mt-3 text-[10px] ${"text-white"} cursor-pointer`}
              >
                <img
                  className={`w-[15px] m-1`}
                  src={approved}
                  alt="Internship"
                />
                <span>
                  Approved <br /> Internship
                </span>
              </NavLink>
            )}
          </div>

          <NavLink
            to="/superAdmin/leaveApproved"
            className={`flex items-center gap-2 p-2 pl-5  rounded-r-full ${
              isActive("/superAdmin/leaveApproved")
                ? "text-secondary bg-white"
                : "text-white"
            }`}
          >
            <img
              className={`w-[20px] m-1 ${
                isActive("/superAdmin/leaveApproved") ? "filter invert" : ""
              }`}
              src={leave}
              alt="Approved Leave"
            />
            <span className="pr-2">Approved Leave</span>
          </NavLink>
        </div>
      </aside>
    </div>
  );
};
