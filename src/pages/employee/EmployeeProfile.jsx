import { EmployeeOD } from "./EmployeeOD";
import { EmployeePD } from "./EmployeePD";
import { EmployeeCD } from "./EmployeeCD";
import { api, employeeEP } from "../../Component/Baseurl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const EmployeeProfile = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const employeeurl = `${api}${employeeEP}`;
    const id = sessionStorage.getItem("userID");

    axios({
      method: "post",
      url: employeeurl,
      data: { id },
    })
      .then((response) => {
        setEmployeeDetails([response.data]);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  }, []);
  return (
    <section className="flex justify-around  w-full max-md:flex-col">
     <div className="max-sm:w-[95%] flex justify-center flex-1 px-2">
     <EmployeeOD employee={employeeDetails} />
     </div>
     <div className="max-sm:w-[95%] flex items-center px-2 flex-col flex-1">
     <EmployeePD employee={employeeDetails} />
      <EmployeeCD employee={employeeDetails} />
     </div>
    </section>
  );
};
