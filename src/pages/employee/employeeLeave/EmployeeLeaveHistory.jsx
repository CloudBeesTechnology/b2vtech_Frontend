import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, leaveDetails } from "../../../Component/Baseurl";

export const EmployeeLeaveHistory = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [checkLeave, setCheckLeave] = useState(false);
  useEffect(() => {
    const url = `${api}${leaveDetails}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      const store = res.data.data;
      store.map((val, i) => {
        const employeeId = sessionStorage.getItem("employeeID");
        const matchingLeaves = store.filter((val) => val.userId === employeeId);
        setLeaveData(matchingLeaves);
        setCheckLeave(matchingLeaves.length <= 0);
      });
    });
  }, []);
  const ColorCode = (status) => {
    switch (status) {
      case "approved":
        return "text-[green-500]";
      case "pending":
        return "text-secondary";
      case "rejected":
        return "text-[red-500]";
      default:
        return "";
    }
  };

  return (
    <section className="center flex-col gap-20  w-full mt-10 ml-52">
      <div className="max-w-screen-2xl w-[95%] mx-auto px-10">
        <h2 className="text-3xl text-center font-bold mx-3 text-primary">
          Leave History
        </h2>
        <div className="my-5">
          <Link to="/employee/leaveDetails" className="ml-10   text-primary">
            GoBack
          </Link>
        </div>
        {checkLeave ? (
          <h3 className="text-center text-skyBlue text-lg">
            No Leave History Available
          </h3>
        ) : (
          <div className="w-full rounded-lg shadow-lg mx-10 my-10 ">
            <table className="w-full text-left  ">
              <thead>
                <tr className="rounded-lg border-b">
                  <th className=" p-4">S.No</th>
                  <th className=" p-4">Type</th>
                  <th className=" p-4">From</th>
                  <th className=" p-4">To</th>
                  <th className=" p-4">Days</th>
                  <th className=" p-4">Reason</th>
                  <th className=" p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td className=" px-5 py-4">{i + 1}</td>
                      <td className=" px-5 py-4">{val.types}</td>
                      <td className=" px-5 py-4">{val.startDate}</td>
                      <td className=" px-5 py-4">{val.endDate}</td>
                      <td className=" px-5 py-4">{val.totalDays} d</td>
                      <td className=" px-5 py-4">{val.reason}</td>
                      <td
                        className={`px-5 py-4 ${ColorCode(val.leaveApproval)}`}
                      >
                        {val.leaveApproval.charAt(0).toUpperCase() +
                          val.leaveApproval.slice(1).toLowerCase()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
