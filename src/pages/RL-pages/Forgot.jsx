import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Forgot = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-xl">
          <Outlet />
        </div>
      </section>
    </>
  );
};
