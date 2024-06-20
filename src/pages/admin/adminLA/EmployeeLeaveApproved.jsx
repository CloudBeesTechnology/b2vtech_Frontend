import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, leaveDetails } from "../../../Component/Baseurl";
import avatar from "../../../assets/about/profileIcon.png";

export const EmployeeLeaveApproved = () => {
  const [leaveData, setLeaveData] = useState([]);
  useEffect(() => {
    const url = `${api}${leaveDetails}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      const store = res.data.data;
      setLeaveData(store);
    });
  }, []);
  const Heading = [
    "S.No",
    "EMP Photo",
    "EMP ID",
    "Name",
    "Type",
    "From",
    "To",
    "Days",
    "Reason",
    "Approved",
    "Rejected",
  ];
  return (
    <section className="center flex-col gap-20  w-full mt-10 ml-52">
      <div className="rounded-b-lg shadow-lg flex flex-col gap-3">
          <table className="w-full text-left  ">
            <thead className="sticky top-[5.2rem] bg-white shadow-md">
              <tr className="rounded-lg border-b">
                {Heading.map((header, index) => (
                  <th
                    key={index}
                    className="text-secondary text-md px-4 py-5"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leaveData.map((val, i) => {
                return (
                  <tr key={i}>
                    <td className="text-secondary text-sm px-4 py-3">{i + 1}</td>
                    {val.employeeDetails.map((emp) => {
                      return (
                        <>
                          <td  className="px-7 py-3">
                            <img
                              src={emp.employeePhotoUrl || avatar}
                              alt={`${emp.firstName} image not found`}
                              className="border w-6 h-6 object-cover rounded-full border-litegrey"
                            />
                          </td>
                          <td className="text-secondary text-sm px-4 py-3">
                            {emp.employeeId}
                          </td>
                          <td className="text-secondary text-sm px-4 py-3">
                            {emp.firstName}
                          </td>
                        </>
                      );
                    })}

                    <td className="text-secondary text-sm px-4 py-3">
                      {val.types}
                    </td>
                    <td className="text-secondary text-sm px-4 py-3">
                      {val.startDate}
                    </td>
                    <td className="text-secondary text-sm px-4 py-3">
                      {val.endDate}
                    </td>
                    <td className="text-secondary text-sm px-4 py-3">
                      {val.totalDays} d
                    </td>
                    <td className="text-secondary text-sm px-4 py-3">
                      {val.reason}
                    </td>
                    <td className="text-secondary text-sm px-4 py-3">
                      <div className="flex items-center  justify-center h-full">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td className="px-5 py-4 w-2">
                      <div className="flex items-center justify-center h-full">
                        <input type="checkbox" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        <div className="flex m-5 justify-end">
          <button
            className="bg-primary text-white py-2 px-5 rounded"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
     
      </div>
    </section>
  );
};
