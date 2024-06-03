import { useLocation } from "react-router-dom";
import { EmployeeDashboard } from "./EmployeeDashboard";
import { useEffect } from "react";

export const Employee = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (
    <section className="flex flex-wrap justify-around">
      <EmployeeDashboard/>
    </section>
  );
};
