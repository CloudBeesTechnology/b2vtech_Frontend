import { useEffect, useState } from "react";
import { EmployeeHome } from "./EmployeeHome";

export const EmployeeDashboard = () => {
  const [employeeFN, setEmployeeFN] = useState("");
  useEffect(() => {
    const userName = sessionStorage.getItem("userFN");
    setEmployeeFN(userName);
  }, []);

  return (
    <section className="center flex-col gap-20  w-full mt-10 ml-52">
      <div className="max-w-screen-2xl w-[95%] mx-auto">
        <h2 className="text-6xl text-center font-bold text-secondary mx-3 mt-16  max-sm:text-3xl">
          Welcome,{" "}
          <span className="uppercase text-primary max-sm:text-3xl">
            {employeeFN || "Guest"}
          </span>
        </h2>
      <EmployeeHome/>
      </div>
    </section>
  );
};
