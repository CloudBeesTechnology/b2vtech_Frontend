import { useEffect, useState } from "react";
import { api, leaveApply } from "../../../Component/Baseurl";
import axios from "axios";

export const EmployeeLeaveForm = ({ leaveSubmit }) => {
  const [formData, setFormData] = useState({
    types: "Casual",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const { types, fromDate, toDate, reason } = formData;
    if (!types || !fromDate || !toDate || !reason) {
      setError("All fields are required.");
      return false;
    }
    if (new Date(fromDate) > new Date(toDate)) {
      setError("From date cannot be after to date.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    const url = `${api}${leaveApply}`;
    if (!validateForm()) {
      return;
    }
    const employeeId = sessionStorage.getItem("employeeID");
    if (!employeeId) {
      setError("Employee ID not found in session storage.");
      return;
    }

    try {
      axios({
        method: "Post",
        url: url,
        data: {
          employeeId,
          types: formData.types,
          fromDate: formData.fromDate,
          toDate: formData.toDate,
          reason: formData.reason,
        },
      })
        .then((res) => {
          leaveSubmit();
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
    } catch (error) {
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="px-10 ">
      <div className="w-full rounded-lg shadow-lg mx-10 my-5">
        {error && <p className="text-[red] my-3 text-center">{error}</p>}
        <table className="w-full text-left table-fixed">
          <thead>
            <tr className="rounded-lg border-b">
              <th className="p-4 w-1/4">Leave Type</th>
              <th className="p-4 w-1/4">From</th>
              <th className="p-4 w-1/4">To</th>
              <th className="p-4 w-1/4">Leave Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-5 py-10 w-1/4">
                <select
                  className="w-[90%] p-2 shadow rounded"
                  name="types"
                  value={formData.types}
                  onChange={handleChange}
                >
                  <option value="casual">Casual</option>
                  <option value="sick">Sick</option>
                </select>
              </td>
              <td className="py-10 px-5 w-1/4">
                <input
                  className="outline-none w-[95%] shadow p-2 rounded-md"
                  type="date"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                />
              </td>
              <td className="px-5 py-10 w-1/4">
                <input
                  className="outline-none w-[95%] shadow p-2 rounded-md"
                  type="date"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                />
              </td>
              <td className="px-5 py-10 w-1/4">
                <input
                  className="outline-none w-[95%] shadow p-2 rounded-md"
                  type="text"
                  placeholder="Reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex w-full justify-end pb-5">
          {" "}
          <button
            className="px-10 py-3 rounded-md  text-primary border-2 border-primary"
            onClick={leaveSubmit}
          >
            Cancel
          </button>
          <button
            className="mx-10 px-10 py-3 rounded-md  text-primary border-2 border-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
