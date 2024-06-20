import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useState, useEffect } from "react";
import axios from "axios";

import { api, collectionData } from "../../../Component/Baseurl";

export const ApprovedEmp = () => {
  const [showingEmployee, setShowingEmployee] = useState([]);
  const [empPosition, setEmpPosition] = useState({
    position: "",
  });
  const [verificationStatus, setVerificationStatus] = useState({});
  const [rejectedItems, setRejectedItems] = useState({});
const [editedData,setEditedData]=useState({})
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
    "EMP ID",
    "Name",
    "Email.ID",
    "Contact",
    "Role",
    "Position",
    "DOJ",
    "Approved",
    "Rejected",
  ];
  const handleRoleChange = (employeeId, e) => {
    const { name, value } = e.target;

    setEmpPosition((prev) => ({
      ...prev,
      [employeeId]: {
        ...prev[employeeId],
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (employeeId, status) => {
    setVerificationStatus((prevState) => ({
      ...prevState,
      [employeeId]: prevState[employeeId] === status ? null : status,
    }));

    if (status === "rejected") {
      setRejectedItems((prevState) => ({
        ...prevState,
        [employeeId]: !prevState[employeeId],
      }));
    }
  };
  const handleRemove = (employeeId) => {
    const updatedEmployees = showingEmployee.filter(
      (emp) => emp.employeeId !== employeeId
    );
    setShowingEmployee(updatedEmployees);
    const { [employeeId]: _, ...updatedRejectedItems } = rejectedItems;
    setRejectedItems(updatedRejectedItems);
    const { [employeeId]: __, ...updatedVerificationStatus } =
      verificationStatus;
    setVerificationStatus(updatedVerificationStatus);
  };

  const handleSubmit = () => {
    const dataToSend = [];
    for (const employeeId in verificationStatus) {
      if (verificationStatus.hasOwnProperty(employeeId)) {
        const status = verificationStatus[employeeId];
        const position = empPosition[employeeId]?.position || "";
        dataToSend.push({ employeeId, position, status });
      }
    }
    dataToSend.map((val) => {
      console.log(val);
      setEditedData((prev)=>({...prev}));
    });
    // console.log("Data to send:", dataToSend);
  };
  console.log(editedData);
  return (
    <section className="h-full ml-52 mr-1 my-28 flex justify-center items-center w-full gap-5">
      <div className="rounded-b-lg shadow-lg flex flex-col gap-3">
        <table className="min-w-full border-collapse bg">
          <thead className="sticky top-[5.2rem] bg-white shadow-md ">
            <tr>
              {Heading.map((header, index) => (
                <th
                  key={index}
                  className="text-black text-[12px] font-bold px-4 py-5"
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
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.employeeId}
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.firstName}
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.email}
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.phoneNumber}
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.role.charAt(0).toUpperCase() +
                        emp.role.slice(1).toLowerCase()}
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      <select
                        name="position"
                        value={empPosition[emp.employeeId]?.position || ""}
                        onChange={(e) => handleRoleChange(emp.employeeId, e)}
                        className="border rounded outline-none text-[10px] font-bold"
                      >
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI Designer">UI Designer</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Flutter">Flutter</option>
                        <option value="Cloud">Cloud</option>
                      </select>
                    </td>
                    <td className="text-black text-[10px] font-bold px-4 py-3">
                      {emp.dateOfJoin}
                    </td>
                    <td className="px-7 py-2">
                      <input
                        type="checkbox"
                        name={`status-${emp.employeeId}`}
                        value="approved"
                        checked={
                          verificationStatus[emp.employeeId] === "approved"
                        }
                        onChange={() =>
                          handleCheckboxChange(emp.employeeId, "approved")
                        }
                        style={{
                          accentColor:
                            verificationStatus[emp.employeeId] === "approved"
                              ? "green"
                              : "blue",
                          border: `2px solid ${
                            verificationStatus[emp.employeeId] === "approved"
                              ? "green"
                              : "blue"
                          }`,
                          width: "13px",
                          height: "13px",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                    <td className="px-7 py-2">
                      <input
                        type="checkbox"
                        name={`status-${emp.employeeId}`}
                        value="rejected"
                        checked={
                          verificationStatus[emp.employeeId] === "rejected"
                        }
                        onChange={() =>
                          handleCheckboxChange(emp.employeeId, "rejected")
                        }
                        style={{
                          accentColor:
                            verificationStatus[emp.employeeId] === "rejected"
                              ? "red"
                              : "red",
                          border: `2px solid ${
                            verificationStatus[emp.employeeId] === "rejected"
                              ? "red"
                              : "red"
                          }`,
                          width: "13px",
                          height: "13px",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                    <td>
                      {rejectedItems[emp.employeeId] && (
                        <button
                          onClick={() => handleRemove(emp.employeeId)}
                          className="bg-red-500 text-black py-1 px-1 rounded ml-1 text-[10px]"
                        >
                          Remove user
                        </button>
                      )}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div className="flex m-5  justify-end">
          <button
            className="bg-primary text-white py-2 px-5 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );

  // // const [details, setDetails] = useState(() => DashboardDetails());
  // const [verificationStatus, setVerificationStatus] = useState({});
  // const [rejectedItems, setRejectedItems] = useState({});

  // const handleCheckboxChange = (index, status) => {
  //   setVerificationStatus(prevState => ({
  //     ...prevState,
  //     [index]: prevState[index] === status ? null : status
  //   }));

  //   if (status === 'reject') {
  //     setRejectedItems(prevState => ({
  //       ...prevState,
  //       [index]: !prevState[index]
  //     }));
  //   }
  // };

  // const handleRoleChange = (index, position) => {
  //   const updatedEmployees = [...details.employeesIM];
  //   updatedEmployees[index].role = position; // Changed 'position' to 'role'
  //   setDetails({ ...details, employeesIM: updatedEmployees });
  // };

  // const handleRemove = (index) => {
  //   const updatedEmployees = details.employeesIM.filter((_, i) => i !== index);
  //   setDetails({ ...details, employeesIM: updatedEmployees });
  //   const { [index]: _, ...updatedRejectedItems } = rejectedItems;
  //   setRejectedItems(updatedRejectedItems);
  //   const { [index]: __, ...updatedVerificationStatus } = verificationStatus;
  //   setVerificationStatus(updatedVerificationStatus);
  // };

  // const handleSubmit = () => {
  //   console.log('Verification Status:', verificationStatus);
  // };

  // return (
  //   <section className="h-full ml-52 mr-1 mb-40 flex justify-center items-center w-full gap-5">
  //       <div className="rounded-b-lg shadow-lg flex flex-col gap-3">
  //       <Link
  //         to="#"
  //         className="text-litegrey w-full flex justify-center items-center gap-2"
  //         onClick={() => setActiveMenu(1)} // Changed setActiveMenu(1) to setActiveMenu(2)
  //       >
  //         <MdOutlineKeyboardBackspace /> Employees
  //       </Link>
  //     </div>
  //     <div className="relative rounded-b-lg max-h-[250px] overflow-auto scrollbar-hide shadow-lg flex flex-col gap-3 py-4">
  //       <table className="min-w-full border-collapse">
  //         <thead className='sticky z-20 -top-4 bg-white shadow-md'>
  //           <tr>
  //             {/* {details.approvedIM.map((val, index) => (
  //               <th key={index} className="text-black text-[12px] font-bold px-4 py-2">{val}</th>
  //             ))} */}
  //           </tr>
  //         </thead>
  //         {/* <tbody className="">
  //           {details.employeesIM.map((val, index) => (
  //             <tr key={index}>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.id}</td>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.name}</td>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.email}</td>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.contact}</td>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.role}</td>
  //               <td className="px-4 py-2">
  //                 <select
  //                   value={val.role}
  //                   onChange={(e) => handleRoleChange(index, e.target.value)} // Changed 'position' to 'role'
  //                   className="border rounded outline-none text-[10px] font-bold"
  //                 >
  //                   <option value="Web Developer">Web Developer</option>
  //                   <option value="UI Designer">UI Designer</option>
  //                   <option value="Digital Marketing">Digital Marketing</option>
  //                   <option value="Flutter">Flutter</option>
  //                   <option value="Cloud">Cloud</option>
  //                 </select>
  //               </td>
  //               <td className="text-black text-[10px] font-bold px-4 py-2">{val.date}</td>
  //               <td className="px-7 py-2">
  //                 <input
  //                   type="checkbox"
  //                   name={`status-${index}`}
  //                   value="approved"
  //                   checked={verificationStatus[index] === 'verify'}
  //                   onChange={() => handleCheckboxChange(index, 'verify')}
  //                   style={{
  //                     accentColor: verificationStatus[index] === 'verify' ? 'green' : 'blue',
  //                     border: `2px solid ${verificationStatus[index] === 'verify' ? 'green' : 'blue'}`,
  //                     width: '13px',
  //                     height: '13px',
  //                     cursor: 'pointer',
  //                   }}
  //                 />
  //               </td>
  //               <td className="px-7 py-2">
  //                 <input
  //                   type="checkbox"
  //                   name={`status-${index}`}
  //                   value="reject"
  //                   checked={verificationStatus[index] === 'reject'}
  //                   onChange={() => handleCheckboxChange(index, 'reject')}
  //                   style={{
  //                     accentColor: verificationStatus[index] === 'reject' ? 'red' : 'red',
  //                     border: `2px solid ${verificationStatus[index] === 'reject' ? 'red' : 'red'}`,
  //                     width: '13px',
  //                     height: '13px',
  //                     cursor: 'pointer',
  //                   }}
  //                 />
  //               </td>
  //               <td>
  //                 {rejectedItems[index] && (
  //                   <button
  //                     onClick={() => handleRemove(index)}
  //                     className="bg-red-500 text-black py-1 px-1 rounded ml-1 text-[10px]"
  //                   >
  //                     Remove user
  //                   </button>
  //                 )}
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody> */}
  //       </table>
  //     </div>
  //     <div className="fixed bottom-7 right-36">
  //       <button
  //         onClick={handleSubmit}
  //         className="bg-primary text-white py-1 px-4 rounded"
  //       >
  //         Submit
  //       </button>
  //     </div>
  //   </section>
  // );
};
