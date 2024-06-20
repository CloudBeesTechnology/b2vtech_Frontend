import axios from "axios";
import React, { useState, useEffect } from "react";
import { api, employeeImageEP } from "../../Component/Baseurl";
import avatar from "../../assets/about/profileIcon.png";
import { IoMdCamera } from "react-icons/io";
import { EmployeeImage } from "./EmployeeImage";

export const EmployeeOD = (props) => {
  const { employee } = props;
  return (
    <>
      <div className="max-sm:w-[95%] max-w-lg w-full">
        {/* max-w-sm w-full md:max-w-md lg:max-w-sm  */}
        <div className="ml-2 mt-12 py-7 sm:px-7 px-3 max-sm:mx-4 shadow flex flex-col justify-center items-center">
          <h1 className="text-3xl max-sm:text-2xl mb-5 font-semibold text-center">
            Employee details
          </h1>
          {employee.map((val, i) => {
       
            return (
              <div key={i} className="w-full ">
                <div className="py-2 flex flex-col items-center">

                <EmployeeImage ImageURL={val.employeePhotoUrl} />
                </div>
               
                <div className="relative mt-6 mx-2">
                  <input
                    type="text"
                    name="employeeId"
                    value={val.employeeId}
                    className="custom-input-first peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label className="custom-input-label">Employee Id</label>
                </div>
                <div className="relative mt-6 mx-2">
                  <input
                    type="text"
                    name="dateOfJoin"
                    value={val.dateOfJoin}
                    className="custom-input-first peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label className="custom-input-label">Date of Join</label>
                </div>
                <div className="relative mt-6 mx-2">
                  <input
                    type="text"
                    name="position"
                    value={val.position}
                    className="custom-input-first peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label className="custom-input-label">Position</label>
                </div>
                <div className="relative mt-6 mx-2">
                  <input
                    type="text"
                    name="category"
                    value={val.role.charAt(0).toUpperCase() + val.role.slice(1)}
                    className="custom-input-first peer placeholder-transparent custom-input-field"
                    readOnly
                  />
                  <label className="custom-input-label">Category</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
