import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";

import { api, collectionData } from "../../../Component/Baseurl";
import avatar from "../../../assets/about/profileIcon.png";
import { EditIntern } from "./EditIntern";
import { EditED } from "../adminEmployee/EditED";

export const InternsInfo = () => {
  const [selectedInterns, setSelectedInterns] = useState(null);
  const [showingInterns, setShowingInterns] = useState([]);
  useEffect(() => {
    const url = `${api}${collectionData}`;
    try {
      axios({
        method: "Get",
        url: url,
      }).then((res) => {
        // console.log(res.data);

        setShowingInterns(res.data);
      });
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  }, []);
  const Heading = [

    "INT ID",
    "Name",
    "Category",
    "Date of Joining",
    "Role",
    "Contact",
    "Course Content",
    "Email.ID",
    "",
  ];
  const handleIconClick = (interns) => {
    setSelectedInterns(interns);
  };

  const handleClose = () => {
    setSelectedInterns(null);
  };

  return (
    <section className="flex w-full">
      <section className="h-full ml-52 mr-1 mb-40 flex justify-center items-center w-full gap-5">
        <div className="rounded-b-lg shadow-lg flex flex-col gap-3">
          <table className="min-w-full border-collapse bg">
            <thead className="sticky  top-[5.2rem] bg-white shadow-md ">
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
              {showingInterns.map((intern, index) => {
                if (intern.role === "intern") {
                  return (
                    <tr key={index}>
                      
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.internId}
                      </td>
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.firstName}
                      </td>

                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.position}
                      </td>
                      <td className="text-secondary center text-sm px-4 py-3">
                        {intern.dateOfJoin}
                      </td>
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.role.charAt(0).toUpperCase() +
                          intern.role.slice(1).toLowerCase()}
                      </td>
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.phoneNumber}
                      </td>
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.courseCount}
                      </td>
                      <td className="text-secondary text-sm px-4 py-3">
                        {intern.email}
                      </td>
                      <td
                        className="text-secondary text-sm px-6 py-3 cursor-pointer"
                        onClick={() => handleIconClick(intern)}
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

      {selectedInterns && (
        <EditIntern
          selectedInterns={selectedInterns}
          handleClose={handleClose}
          // handleUpdate={handleUpdate}
        />
      )}
    </section>
  );
};
