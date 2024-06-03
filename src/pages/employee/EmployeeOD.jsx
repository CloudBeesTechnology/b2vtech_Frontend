import axios from "axios";
import React, { useState, useEffect } from "react";
import { api, employeeImageEP } from "../../Component/Baseurl";
import avatar from "../../assets/about/profileIcon.png";
import { IoMdCamera } from "react-icons/io";
import { EmployeeImage } from "./EmployeeImage";

export const EmployeeOD = (props) => {
  const { employee } = props;
  const [file, setFile] = useState(null);
  const [employeeID, setEmployeeID] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);

  useEffect(() => {
    const employeeId = sessionStorage.getItem("userID");
    setEmployeeID(employeeId);
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setIsFileSelected(true);
  };

  const handleImageError = (e) => {
    e.target.src = "/default-avatar.jpg";
  };

  const handleImageUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("profilePic", file);
      formData.append("_id", employeeID);
      try {
        const employeeImageurl = `${api}${employeeImageEP}`;
        const response = await axios.post(employeeImageurl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log("Image uploaded successfully:", response.data.employeePhotoUrl);
        setIsFileSelected(false);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
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
                {/* <div className="py-2 flex flex-col items-center">
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="h-40 w-40 relative rounded-full border-2 border-litegrey flex justify-center items-center">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : val.employeePhotoUrl || avatar
                      }
                      id="previewImg"
                      alt="Employee"
                      className="object-cover w-full h-full"
                      onError={handleImageError}
                    />
                    <p
                      className="absolute right-0 bg-litegrey rounded-full p-2 text-primary text-xl bottom-5"
                      onClick={() =>
                        document.querySelector("input[type='file']").click()
                      }
                    >
                      <IoMdCamera />
                    </p>
                  </div>
                  <div className="p-4 rounded-lg w-64 text-center">
                    {isFileSelected ? (
                      <button
                        className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg"
                        onClick={handleImageUpload}
                      >
                        Save Image
                      </button>
                    ) : (
                      <button
                        className="px-4 py-2 bg-primary text-white text-xl mt-2 rounded-lg"
                        onClick={() =>
                          document.querySelector("input[type='file']").click()
                        }
                      >
                        Choose Image
                      </button>
                    )}
                  </div>
                </div> */}

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
