import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, collectionData } from "../../../Component/Baseurl";
import axios from "axios";
import avatar from "../../../assets/about/profileIcon.png";

export const EmployeeList = () => {

  const [showingEmployee, setShowingEmployee] = useState([]);
  useEffect(() => {
    const url = `${api}${collectionData}`;
    try {
      axios({
        method: "Get",
        url: url,
      }).then((res) => {
        console.log(res.data);
        setShowingEmployee(res.data);
      });
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  }, []);

  return (
    <section className="rounded-b-lg bg-white h-72 shadow-lg w-[320px] flex flex-col gap-3 overflow-hidden">
      <div className="rounded-t-lg text-white flex justify-between items-center bg-primary p-4">
        <p>Employees</p>
        <Link to="#" className="text-litegrey">
          View
        </Link>
      </div>
      <div className="mt-1 flex flex-col px-5 h-full gap-4 my-10">
        {showingEmployee.map((val, index) => {
         if(val.role==="employee"){
          return (
            <div className="flex justify-between" key={index}>
              <div className="flex gap-6">
                <img
                  src={val.employeePhotoUrl || avatar}
                  alt={`${val.firstName} image not found`}
                  className="border w-7 h-7 object-cover border-litegrey rounded-full"
                />
                <div>
                  <h1 className="text-darkblack text-[10px] font-bold">
                    {val.firstName}
                  </h1>
                  <p className="text-black text-[7px] font-bold">
                    {val.employeeId}
                  </p>
                </div>
              </div>
              <p className="text-black text-[10px] font-bold">{val.position}</p>
            </div>
          );
         }
        })}
      </div>
    </section>
  );
};
