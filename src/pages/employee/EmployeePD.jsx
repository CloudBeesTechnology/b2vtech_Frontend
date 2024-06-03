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
      setFormData({
        firstName: val.firstName,
        motherName: val.motherName || formData.motherName,
        fatherName: val.fatherName || formData.fatherName,
        dateOfBirth: val.dateOfBirth || formData.dateOfBirth,
        gender: val.gender || formData.gender,
        street: val.address[0].street || formData.street,
        state: val.address[0].state || formData.state,
        city: val.address[0].city || formData.city,
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

            {/* <div className=" md:mx-14 rounded-lg text-center ">
              {edit ? (
                <div className="mx-auto">
                  {" "}
                  <button
                    className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg "
                    onClick={() => {
                      onSubmit();
                      setEdit(false);
                    }}
                  >
                    Update Profile
                  </button>
                </div>
              ) : (
                <div className="mx-auto">
                  <button
                    className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg "
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div> */}
          </div>

          {/* {employee.map((val, index) => {
            return (
              <div key={index} className="sm:px-5 w-full">
                <div className="relative mt-6 ">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={edit ? employeeFN : val.firstName}
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
                      value={val.dateOfBirth}
                      className="custom-input peer placeholder-transparent custom-input-field"
                      readOnly
                    />
                    <label htmlFor="dateOfBirth" className="custom-input-label">
                      Date of Birth
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <input
                      type="text"
                      name="gender"
                      value={val.gender}
                      className="custom-input peer placeholder-transparent custom-input-field"
                      readOnly
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
                    value={val.fatherName}
                    className="custom-input-third peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label htmlFor="fatherName" className="custom-input-label">
                    Father Name
                  </label>
                </div>

                <div className="relative mt-6">
                  <input
                    type="text"
                    name="motherName"
                    value={val.motherName}
                    className="custom-input-third peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label htmlFor="motherName" className="custom-input-label">
                    Mother Name
                  </label>
                </div>

                {employeeAddress.map((val, index) => {
                  return (
                    <div key={index}>
                      <div className="relative mt-6">
                        <input
                          type="text"
                          name="street"
                          value={edit ? address[index].street : val.street}
                          onChange={(e) => handleInputChange(e, index)}
                          readOnly={!edit}
                          className="custom-input-third peer placeholder-transparent custom-input-field"
                         
                        />
                        <label htmlFor="street" className="custom-input-label">
                          Street
                        </label>
                      </div>

                      <div className="relative mt-6">
                        <input
                          type="text"
                          name="city"
                          value={edit ? address.city : val.city}
                          onChange={(e) => handleInputChange(e, index)}
                          readOnly={!edit}
                          className="custom-input-third peer placeholder-transparent custom-input-field"
                        />
                        <label htmlFor="city" className="custom-input-label">
                          City
                        </label>
                      </div>

                      <div className="relative mt-6">
                        <input
                          type="text"
                          name="state"
                          value={edit ? address.state : val.state}
                          onChange={(e) => handleInputChange(e, index)}
                          readOnly={!edit}
                          className="custom-input-third peer placeholder-transparent custom-input-field"
                        />
                        <label htmlFor="state" className="custom-input-label">
                          State
                        </label>
                      </div>
                    </div>
                  );
                })}

                <div className=" md:mx-14 rounded-lg text-center ">
                  {edit ? (
                    <div className="mx-auto">
                      {" "}
                      <button
                        className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg "
                        onClick={() => {
                          onSubmit();
                          setEdit(false);
                        }}
                      >
                        Update Profile
                      </button>
                    </div>
                  ) : (
                    <div className="mx-auto">
                      <button
                        className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg "
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })} */}
        </section>
      </div>
    </div>
  );
};

// const [employeeAddress, setEmployeeAddress] = useState([]);
// const [employeeData, setEmployeeData] = useState([]);
// const [edit, setEdit] = useState(false);
// const [editedFullName, setEditedFullName] = useState("");
// const [address, setAddress] = useState([
//   {
//     state: "",
//     city: "",
//     street: "",
//   },
// ]);

// const handleInputChange = (e, index) => {
//   const { name, value } = e.target;
//   if (name === "fullName") {
//     setEditedFullName(value); // Update editedFullName state
//   } else {
//     const newAddress = [...address];
//     newAddress[index] = { ...newAddress[index], [name]: value };
//     setAddress(newAddress); // Update address state
//   }
// };
