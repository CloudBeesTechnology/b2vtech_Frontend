import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const SuperAdmin = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (
    <section className="flex flex-wrap justify-around">
      <Outlet/>
    </section>
  )
}
