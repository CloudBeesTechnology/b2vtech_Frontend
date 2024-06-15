import { Link } from "react-router-dom";
import { EmployeeLeaveForm } from "./EmployeeLeaveForm";
import { useEffect, useState } from "react";
import { api, leaveDetails } from "../../../Component/Baseurl";
import axios from "axios";

export const EmployeeLeaveDetails = () => {
  const [leaveForm, setLeaveForm] = useState(false);
  const leaveSubmit = () => {
    setLeaveForm(false);
  };

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
    <section className="center flex-col gap-20  w-full mt-10 ml-52">
      <div className="max-w-screen-2xl w-[95%] mx-auto ">
        <div className="flex justify-center md:justify-evenly flex-wrap gap-5 mx-10  my-10">
          <article className="flex items-center gap-5 max-md:w-full max-md:px-10">
            <p className="text-primary font-semibold text-3xl"> {leaveData.remaining}</p>
            <p className="text-lg text-secondary">Available leaves</p>
          </article>
          <article className="flex items-center gap-5  max-md:w-full max-md:px-10">
            <p className="text-primary font-semibold text-3xl">{leaveData.approved}</p>
            <p className="text-lg text-secondary ">Previous Unused leaves</p>
          </article>
          <article className="flex items-center gap-5  max-md:w-full max-md:px-10">
            <p className="text-primary font-semibold text-3xl"> {leaveData.rejected}</p>
            <p className="text-lg text-secondary">Pending leaves requests</p>
          </article>
          <article className="flex items-center gap-5  max-md:w-full max-md:px-10">
            <p className="text-primary font-semibold text-3xl">{leaveData.pending}</p>
            <p className="text-lg text-secondary">Rejected Leaves</p>
          </article>
        </div>
        <div className="flex  flex-wrap gap-5 mx-10  my-16">
          <button
            className={`ml-14 border-2 border-primary px-5 py-3 rounded-lg ${
              leaveForm ? "bg-primary text-white" : ""
            }`}
            onClick={() => setLeaveForm(true)}
          >
            Apply Leave
          </button>
          <Link
            to="/employee/leaveHistory"
            className=" border-2 border-primary px-5 py-3 rounded-lg active:bg-primary active:text-white"
          >
            Leave History
          </Link>
        </div>
        <div>
          {leaveForm && <EmployeeLeaveForm leaveSubmit={leaveSubmit} />}
        </div>
      </div>
    </section>
  );
};
