import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, employeeLeaves } from "../../../Component/Baseurl";
import avatar from "../../../assets/about/profileIcon.png";

export const ELList = () => {
  //ADE stand for All Details Employee
  const [showingADE, setShowingADE] = useState([]);
  useEffect(() => {
    const url = `${api}${employeeLeaves}`;
    try {
      axios({
        method: "Get",
        url: url,
      }).then((res) => {
        // console.log(res.data.data);
        setShowingADE(res.data.data);
      });
    } catch (error) {
      console.error("Error fetching all employee details:", error);
    }
  }, []);
  return (
    <section className="rounded-b-lg bg-white h-72 shadow-lg w-[320px] flex flex-col gap-3 overflow-hidden">
      <div className="rounded-t-lg text-white flex justify-between items-center bg-primary p-4">
        <p>Employee Leave</p>
        <Link to="#" className="text-litegrey">
          View
        </Link>
      </div>
      <div className="mt-1 flex flex-col justify-between mx-7 my-4 h-full gap-4">
        {showingADE.map((val, index) => {
          return (
            <div className="flex justify-between" key={index}>
              {val.employeeDetails.map((items, i) => {
                return (
                  <div key={i} className="flex gap-6">
                    <img
                        src={items.employeePhotoUrl || avatar}
                        alt={`${items.firstName} image not found`}
                      className="border w-7 h-7 object-cover rounded-full border-litegrey"
                    />
                    <div>
                      <h1 className="text-darkblack text-[10px] font-bold">
                        {items.firstName}
                      </h1>
                      <p className="text-black text-[7px] font-bold">
                        {items.employeeId}
                      </p>
                    </div>
                  </div>
                );
              })}
              <p className="text-black text-[10px] font-bold">{val.reason}</p>
              <p className="text-black text-[10px] font-bold">
                {val.startDate}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
