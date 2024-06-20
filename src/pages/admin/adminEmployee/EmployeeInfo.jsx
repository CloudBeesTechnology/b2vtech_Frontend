import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { EditED } from "./EditED";
import { api, collectionData} from "../../../Component/Baseurl";
import avatar from "../../../assets/about/profileIcon.png";

export const EmployeeInfo = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showingEmployee, setShowingEmployee] = useState([]);
  useEffect(() => {
    const url = `${api}${collectionData}`;
    try {
      axios({
        method: "Get",
        url: url,
      }).then((res) => {
        // console.log(res.data);
        setShowingEmployee(res.data);
      });
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  }, []);
  const Heading = [
    "EMP Photo",
    "EMP ID",
    "Name",
    "Position",
    "Date of Joining",
    "Role",
    "Contact",
    "Email.ID",
    "",
  ];
  const handleIconClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleClose = () => {
    setSelectedEmployee(null);
  };

  return (
    <section className="flex w-full">
      <section className="h-full ml-52 mr-1 mb-40 flex justify-center items-center w-full gap-5 text-lg">
        <div className="rounded-b-lg shadow-lg flex flex-col gap-3">
          <table className="min-w-full border-collapse bg">
            <thead className="sticky top-[5.2rem] bg-white shadow-md ">
              <tr>
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
              {showingEmployee.map((emp, index) => {
                if (emp.role === "employee") {
                  return (
                    <tr key={index}>
                      <td className="text-secondary text-sm  px-4 py-3">
                        <img
                          src={emp.employeePhotoUrl || avatar}
                          alt={`${emp.firstName} image not found`}
                          className="border w-6 h-6 object-cover rounded-full border-litegrey"
                        />
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.employeeId}
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.firstName}
                      </td>

                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.position}
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.dateOfJoin}
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.role.charAt(0).toUpperCase() +
                          emp.role.slice(1).toLowerCase()}
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.phoneNumber}
                      </td>
                      <td className="text-secondary text-sm  px-4 py-3">
                        {emp.email}
                      </td>
                      <td
                        className="text-secondary text-sm  px-6 py-3 cursor-pointer"
                        onClick={() => handleIconClick(emp)}
                      >
                        <FaRegEdit />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </section>

      {selectedEmployee && (
        <EditED
          selectedEmployee={selectedEmployee}
          handleClose={handleClose}
          // handleUpdate={handleUpdate}
        />
      )}
    </section>
  );
};
