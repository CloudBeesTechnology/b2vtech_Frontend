import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, leaveDetails } from "../../../Component/Baseurl";

export const LeaveHistory = () => {
  const [leaveData, setLeaveData] = useState([]);
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
        if (matchingLeaves.length > 0) {
          setLeaveData([matchingLeaves[matchingLeaves.length - 1]]);
        }
      });
    });
  }, []);

  return (
    <section className="rounded-b-lg bg-white h-72 shadow-lg max-w-xs w-full flex flex-col gap-3">
      <div className="rounded-t-lg text-white flex justify-between items-center bg-primary p-4">
        <p>Leave History</p>
        <Link to="/employee/leaveHistory" className="text-litegrey">
          View
        </Link>
      </div>

      {leaveData.map((val, i) => {
        return (
          <section
            key={i}
            className="mt-5 my-10 flex  flex-col justify-between px-3 h-full gap-6"
          >
            <div className="flex justify-between gap-10">
              <article className="flex flex-col items-center gap-1">
                <span className="text-md">Type</span>
                <p className="text-sm text-litegrey">
                  {val.types.charAt(0).toUpperCase() +
                    val.types.slice(1).toLowerCase()}
                </p>
              </article>
              <article className="flex flex-col items-center gap-2">
                <span className="text-md">From</span>
                <p className="text-sm text-litegrey">{val.startDate}</p>
              </article>
              <article className="flex flex-col items-center gap-2">
                <span className="text-md">To</span>
                <p className="text-sm text-litegrey">{val.endDate}</p>
              </article>
            </div>
            <div className="flex justify-between gap-10">
              <article className="flex flex-col  items-center gap-1">
                <span className="text-md">Days</span>
                <p className="text-sm text-litegrey">{val.totalDays} d</p>
              </article>
              <article className="flex flex-col  items-center gap-2">
                <span className=" text-md">Reason</span>
                <p className="text-sm text-litegrey">
                  {val.reason.charAt(0).toUpperCase() +
                    val.reason.slice(1).toLowerCase()}
                </p>
              </article>
              <article className="flex flex-col  items-center gap-2">
                <span className=" text-md">Status</span>
                <p className="text-sm text-litegrey">
                  {val.leaveApproval.charAt(0).toUpperCase() +
                    val.leaveApproval.slice(1).toLowerCase()}
                </p>
              </article>
            </div>
          </section>
        );
      })}
    </section>
  );
};
