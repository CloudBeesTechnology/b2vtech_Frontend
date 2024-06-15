import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, leaveDetails } from "../../../Component/Baseurl";
import axios from "axios";

export const LeaveDetails = () => {
  const [leaveData, setLeaveData] = useState({
    pending: "",
    approved: "",
    rejected: "",
    remaining: "",
    total: "",
  });

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
        let pendingCount = 0;
        let approvedCount = 0;
        let rejectedCount = 0;

        matchingLeaves.map((val) => {
          if (val.leaveApproval === "pending") {
            pendingCount++;
          } else if (val.leaveApproval === "approved") {
            approvedCount++;
          } else if (val.leaveApproval === "rejected") {
            rejectedCount++;
          }
        });
        const totalLeave = 12;
        const remainingLeave = totalLeave - approvedCount;
        setLeaveData({
          pending: pendingCount,
          approved: approvedCount,
          rejected: rejectedCount,
          remaining: remainingLeave,
          total: totalLeave,
        });
      });
    });
  }, []);

  return (
    <section className="rounded-b-lg shadow-lg bg-white h-72 max-w-xs w-full flex flex-col gap-3">
      <div className="rounded-t-lg text-white flex justify-between items-center bg-primary p-4">
        <p>Leave Details</p>
        <Link
          to="/employee/leaveDetails"
          className="text-litegrey"
          // onClick={() => setActiveMenu(1)} // Set activeMenu to 1 on click
        >
          View
        </Link>
      </div>
      <div className="mt-5 my-10 flex  flex-col justify-between px-3 h-full gap-6">
        <div className="flex justify-between gap-10">
          <article className="flex items-center gap-3">
            <span className="text-primary font-semibold text-2xl">
              {leaveData.remaining}
            </span>
            <p className="text-sm text-litegrey">Avaliable leaves</p>
          </article>
          <article className="flex items-center gap-3">
            <span className="text-primary font-semibold text-2xl">
              {leaveData.approved}
            </span>
            <p className="text-sm text-litegrey">Pervious Unused leaves</p>
          </article>
        </div>
        <div className="flex justify-between gap-10">
          <article className="flex items-center gap-3">
            <span className="text-[red] font-semibold text-2xl">
              {leaveData.rejected}
            </span>
            <p className="text-sm text-litegrey">Rejected leaves</p>
          </article>
          <article className="flex items-center gap-3">
            <span className="text-[orange] font-semibold text-2xl">
              {leaveData.pending}
            </span>
            <p className="text-sm text-litegrey">Pending leaves requests</p>
          </article>
        </div>
      </div>
    </section>
  );
};
