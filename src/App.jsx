import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer";
import { Home } from "./pages/home-page/Home";
import { Login } from "./pages/RL-pages/Login";
import { Register } from "./pages/RL-pages/Register";
import { Forgot } from "./pages/RL-pages/Forgot";
import { FP } from "./pages/RL-pages/FP";
import { FPC } from "./pages/RL-pages/FPC";
import { OTP } from "./pages/RL-pages/OTP";
import { Intern } from "./pages/RL-pages/internship_page/IP";
import { Internship } from "./pages/internship/Internship";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { AccountSetting } from "./pages/accountSetting/AccountSetting";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Employee } from "./pages/employee/Employee";
import { EmployeeProfile } from "./pages/employee/EmployeeProfile";
import { EmployeeDashboard } from "./pages/employee/employeeHome/EmployeeDashboard";
import { EmployeeLeaveDetails } from "./pages/employee/employeeLeave/EmployeeLeaveDetails";
import { EmployeeLeaveHistory } from "./pages/employee/employeeLeave/EmployeeLeaveHistory";
import { TeamMembers } from "./pages/employee/teamMember/TeamMembers";
import { UpcomingLeaveHistory } from "./pages/employee/upcomingHistory/UpcomingLeaveHistory";

const Tracking_ID = "G-377LCGTX74";
ReactGA.initialize(Tracking_ID);

export const App = () => {
  const [showPages, setShowPages] = useState(false);
  const [role, setRole] = useState("employee");
  const [loginPage, setLoginPage] = useState(false);
  const location = useLocation();
  const hideFooterPaths = [
    "/employee",
    "/employee/leaveDetails",
    "/employee/leaveHistory",
    "/employee/teams",
    "/employee/upcomingHolidays",
  ];
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
    const data = sessionStorage.getItem("userID");
    const userRole = sessionStorage.getItem("userRole");
    if (data !== null) {
      setShowPages(true);
      setRole(userRole);
    } else {
      setShowPages(false);
    }
    if (data === null) {
      setLoginPage(true);
    }
  }, []);
  const isLoggedIn = sessionStorage.getItem("userID") !== null;

  useEffect(() => {
    const handleTabClose = (event) => {
      window.open("https://b2vtech.com/");
    };

    window.addEventListener("beforeunload", handleTabClose);
    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <Routes>
        {!showPages ? (
          <Route path="/" Component={Home} />
        ) : role === "employee" ? (
          <Route path="/" Component={Employee} />
        ) : (
          <Route path="/" Component={Intern} />
        )}
        <Route path="/" Component={Home} />
        {loginPage && <Route path="/login" Component={Login} />}

        <Route path="/register" Component={Register} />
        <Route path="/forgot" Component={Forgot}>
          <Route index element={<FP />} />
          <Route path="otp" element={<OTP />} />
          <Route path="fpc" element={<FPC />} />
        </Route>
        {isLoggedIn && (
          <>
            <Route path="/intern" Component={Intern} />
            <Route path="/employee" Component={Employee}>
              <Route index element={<EmployeeDashboard />} />
              <Route
                path="upcomingHolidays"
                element={<UpcomingLeaveHistory />}
              />
              <Route path="leaveDetails" element={<EmployeeLeaveDetails />} />
              <Route path="leaveHistory" element={<EmployeeLeaveHistory />} />
              <Route path="teams" element={<TeamMembers />} />
            </Route>
            <Route path="/employeeProfile" Component={EmployeeProfile} />
            <Route path="/account" Component={AccountSetting} />
          </>
        )}
        <Route path="/internship" Component={Internship} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </HelmetProvider>
  );
};
