import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { api, employeeEdit } from "../../../Component/Baseurl";
import axios from "axios";

//EditED stand for edit employee details

export const EditED = ({ handleClose, selectedEmployee }) => {
  const [editedEmployee, setEditedEmployee] = useState({
    employeeId: selectedEmployee.employeeId,
    dateOfJoin: selectedEmployee.dateOfJoin,
    role: selectedEmployee.role,
    position: selectedEmployee.position,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // handleUpdate(editedEmployee);
  //   // handleClose();
  //   console.log(editedEmployee);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `${api}${employeeEdit}`;
    axios({
      method: "Put",
      url: url,
      data: editedEmployee,
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/superAdmin/employeeInfo";
      })
      .catch((error) => setError(error.response.data.error));
  };

  return (
    <section className="absolute  h-full ml-52 mb-40 bg-white flex flex-col justify-center z-40 items-center w-full gap-5">
      <form
        onSubmit={onSubmit}
        className="relative rounded-b-lg shadow-lg flex  flex-col gap-4 py-14 px-14 mr-52 text-[12px]"
      >
        <div
          onClick={handleClose}
          className="cursor-pointer absolute right-5 top-7 text-[23px] mb-12 text-litegrey"
        >
          <ImCancelCircle />
        </div>

        <div className="flex justify-between items-center gap-7">
          <div>
            <label htmlFor="fname">First name</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              value={selectedEmployee.firstName}
              name="name"
              disabled
            />
          </div>
          <div>
            <label htmlFor="lname">Last name</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              name="lname"
              value={selectedEmployee.lastName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              name="dob"
              value={selectedEmployee.dateOfBirth}
              disabled
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-16">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="email"
              name="email"
              value={selectedEmployee.email}
              disabled
            />
          </div>
          <div>
            <label htmlFor="phone">Contact</label>
            <br />
            <input
              type="tel"
              name="phoneNumber"
              value={selectedEmployee.phoneNumber}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              disabled
            />
          </div>
          <div className="flex gap-2">
            <div>
              <label htmlFor="id">Employee ID</label>
              <br />
              <input
                type="text"
                name="employeeId"
                value={selectedEmployee.employeeId}
                className="mb-6 mt-2 p-2 max-w-[80px] border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
                disabled
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <br />
              <input
                type="text"
                name="gender"
                value={selectedEmployee.gender}
                // onChange={handleChange}
                className="mb-6 mt-2 p-2 max-w-[80px] border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
                disabled
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <div>
            <label htmlFor="role">Role</label>
            <br />
            <input
              type="text"
              id="role"
              name="role"
              value={
                editedEmployee.role ||
                selectedEmployee.role.charAt(0).toUpperCase() +
                  selectedEmployee.role.slice(1).toLowerCase()
              }
              onChange={handleChange}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <br />
            <select
              className="mb-6 mt-2 px-5 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              name="position"
              value={editedEmployee.position || selectedEmployee.position}
              onChange={handleChange}
            >
              <option value="Web Developer">Web Developer</option>
              <option value="UIUX Designer">UIUX Designer</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Flutter">Flutter</option>
              <option value="Cloud">Cloud</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateofjoin">Date Of Join</label>
            <br />
            <input
              type="text"
              id="dateofjoin"
              name="dateOfJoin"
              value={editedEmployee.dateOfJoin || selectedEmployee.dateOfJoin}
              onChange={handleChange}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end p-2 mr-10">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-5 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
