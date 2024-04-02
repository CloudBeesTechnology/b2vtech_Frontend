import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Forgot = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen">
        <div className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
