import { useEffect, useState } from "react";

export const EmployeeDashboard = () => {
  const [employeeFN, setEmployeeFN] = useState("");
  useEffect(() => {
    const userName = sessionStorage.getItem("userFN");
    setEmployeeFN(userName);
  }, []);

  return (
    <section className="flex justify-center  w-full ">
      <div className="max-w-screen-2xl w-[95%] my-40">
        <h2 className="text-6xl text-center font-bold text-secondary mx-3 mt-16  max-sm:text-3xl">
          Welcome,{" "}
          <span className="uppercase text-primary max-sm:text-3xl">
            {employeeFN || "Guest"}
          </span>
        </h2>
      </div>
    </section>
  );
};
