import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home-page/Home";
import { Login } from "./pages/RL-pages/Login";
import { Register } from "./pages/RL-pages/Register";
import {  Forgot } from "./pages/RL-pages/Forgot";
import {  FP } from "./pages/RL-pages/FP";
import {  FPC } from "./pages/RL-pages/FPC";
import {  OTP } from "./pages/RL-pages/OTP";
import { Intern } from "./pages/RL-pages/internship_page/IP";
import { Internship } from "./pages/internship/Internship";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { AccountSetting } from "./pages/accountSetting/AccountSetting";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const Tracking_ID="G-377LCGTX74"
ReactGA.initialize(Tracking_ID);


export const App = () => {
  const [showpages,setShowPages]=useState(false)
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search});
    const data = localStorage.getItem("LoginId");
    if (data !== null) {
      setShowPages(true);
    } else {
      setShowPages(false);
    }
  }, []);
  
  return (
    <>
      <Routes>
        {!showpages ? <Route path="/" Component={Home} />: <Route path="/" Component={Intern} /> }
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/forgot" Component={Forgot}>
          <Route index element={<FP />} />
          <Route path="otp" element={<OTP />} />
          <Route path="fpc" element={<FPC />} />
        </Route>
        <Route path="/intern" Component={Intern} />
        <Route path="/internship" Component={Internship} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/account" Component={AccountSetting} />
      </Routes>
    </>
  );
};
