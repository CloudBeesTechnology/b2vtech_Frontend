import axios from "axios";
import { useEffect, useState } from "react";
import { api, employeeEditEP } from "../../Component/Baseurl";
import { FaEdit } from "react-icons/fa";

export const EmployeeCD = ({ employee }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    street: "",
    state: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    employee.map((val) => {
      setFormData({
        email: val.email,
        phoneNumber: val.phoneNumber,
        street: val.address[0].street,
        state: val.address[0].state,
        city: val.address[0].city,
      });
    });
  }, [employee]);

  const onSubmit = () => {
    const id = sessionStorage.getItem("userID");
    const UpdatedDetailsURL = `${api}${employeeEditEP}`;
    const updatedData = {
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      street: formData.street,
      state: formData.state,
      city: formData.city,
      _id: id,
    };

    try {
      axios({
        method: "put",
        url: UpdatedDetailsURL,
        data: updatedData,
      }).then((res) => {
        window.location.href = "/employeeProfile";
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg w-full">
      {/* max-w-sm w-full md:max-w-md lg:max-w-lg */}
      <div className="mt-12 py-7 max-sm:mx-4 shadow sm:px-7 px-4 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between w-full mb-5 ">
          <h3 className="text-3xl max-sm:text-2xl font-semibold">Contact</h3>
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
        <div className="w-full">
          <div className="relative mt-6 mx-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="custom-input-third peer placeholder-transparent custom-input-field"
              readOnly={!edit}
            />
            <label className="custom-input-label">E-mail</label>
          </div>
          <div className="relative mt-6 mx-2">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="custom-input-third peer mb-7 placeholder-transparent custom-input-field"
              readOnly={!edit}
            />
            <label className="custom-input-label">Phone Number</label>
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
    </div>
  );
};
