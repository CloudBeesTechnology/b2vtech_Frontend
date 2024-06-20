import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { api, employeeEditEP } from "../../Component/Baseurl";
import { FaEdit } from "react-icons/fa";

export const EmployeePD = (props) => {
  const { employee } = props;
  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    motherName: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    street: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    employee.map((val) => {
      console.log(val);
      setFormData({
        firstName: val.firstName,
        motherName: val.motherName || formData.motherName,
        fatherName: val.fatherName || formData.fatherName,
        dateOfBirth: val.dateOfBirth || formData.dateOfBirth,
        gender: val.gender || formData.gender,
        street: val.street || formData.street,
        state: val.state || formData.state,
        city: val.city || formData.city,
      });
    });
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    const id = sessionStorage.getItem("userID");
    const employeeUpdateDetails = `${api}${employeeEditEP}`;
    const updatedFormData = {
      ...formData,
      _id: id,
    };
    try {
      axios({
        method: "put",
        url: employeeUpdateDetails,
        data: updatedFormData,
      }).then((res) => {
        sessionStorage.setItem("userFN", res.data.firstName);
        window.location.href = "/employeeProfile";
      });
    } catch (error) {
      console.error("Error updating employee profile:", error);
    }
  };

  return (
    <div className="max-sm:w-[95%] max-w-lg w-full">
      <div className="mt-12 py-7 max-sm:mx-4 shadow sm:px-7 px-4 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between w-full mb-5 ">
          {" "}
          <h1 className="text-3xl max-sm:text-2xl font-semibold ">
            Personal Data
          </h1>
          {edit ? (
            <button
              className="  text-primary text-xl  "
              onClick={() => {
                onSubmit();
                setEdit(false);
              }}
            >
              save
            </button>
          ) : (
            <p
              className="text-2xl text-primary"
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <FaEdit />
            </p>
          )}
        </div>
        <section className="flex justify-center w-full">
          <div className="sm:px-5 w-full">
            <div className="relative mt-6 ">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                // value={edit ? employeeFN : val.firstName}
                onChange={handleInputChange}
                readOnly={!edit}
                className="custom-input-third peer placeholder-transparent custom-input-field"
              />
              <label htmlFor="firstName" className="custom-input-label">
                FullName
              </label>
            </div>

            <div className="flex gap-8 max-sm:flex-col max-sm:gap-0">
              <div className="relative mt-6">
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  // value={val.dateOfBirth}
                  className="custom-input peer placeholder-transparent custom-input-field"
                  placeholder=""
                  readOnly={!edit}
                />
                <label htmlFor="dateOfBirth" className="custom-input-label">
                  Date of Birth
                </label>
              </div>

              <div className="relative mt-6">
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  // value={val.gender}
                  className="custom-input peer placeholder-transparent custom-input-field"
                  placeholder=""
                  readOnly={!edit}
                />
                <label htmlFor="gender" className="custom-input-label">
                  Gender
                </label>
              </div>
            </div>

            <div className="relative mt-6">
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                // value={val.fatherName}
                className="custom-input-third peer placeholder-transparent custom-input-field"
                placeholder=""
                readOnly={!edit}
              />
              <label htmlFor="fatherName" className="custom-input-label">
                Father Name
              </label>
            </div>

            <div className="relative mt-6">
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                // value={val.motherName}
                className="custom-input-third peer placeholder-transparent custom-input-field"
                placeholder=""
                readOnly={!edit}
              />
              <label htmlFor="motherName" className="custom-input-label">
                Mother Name
              </label>
            </div>

            <div>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  // value={edit ? address[index].street : val.street}
                  onChange={handleInputChange}
                  className="custom-input-third peer placeholder-transparent custom-input-field"
                  placeholder=""
                  readOnly={!edit}
                />
                <label htmlFor="street" className="custom-input-label">
                  Street
                </label>
              </div>

              <div className="relative mt-6">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  // value={edit ? address.city : val.city}
                  onChange={handleInputChange}
                  className="custom-input-third peer placeholder-transparent custom-input-field"
                  placeholder=""
                  readOnly={!edit}
                />
                <label htmlFor="city" className="custom-input-label">
                  City
                </label>
              </div>

              <div className="relative mt-6">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  // value={edit ? address.state : val.state}
                  onChange={handleInputChange}
                  className="custom-input-third peer mb-7 placeholder-transparent custom-input-field"
                  readOnly={!edit}
                  placeholder=""
                />
                <label htmlFor="state" className="custom-input-label">
                  State
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
