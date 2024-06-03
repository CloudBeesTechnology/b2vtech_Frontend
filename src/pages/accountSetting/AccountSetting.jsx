import { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import {
  api,
  internsEditEP,
  internsEditProfile,
} from "../../Component/Baseurl";
import { useLocation } from "react-router-dom";

export const AccountSetting = () => {
  const [loginFN, setLoginFN] = useState("");
  const [loginLN, setLoginLN] = useState("");
  const [loginPN, setLoginPN] = useState("");
  const [edit, setEdit] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);

  useEffect(() => {
    const id = sessionStorage.getItem("userID");
    const internurl = `${api}${internsEditEP}`;
    axios({
      method: "post",
      url: internurl,
      data: { id },
    }).then((res) => {
      // console.log(res.data.firstName);
      const { firstName, lastName, phoneNumber } = res.data;
      setLoginFN(firstName);
      setLoginLN(lastName);
      setLoginPN(phoneNumber);
    });
  }, []);

  const handleEditClick = (inputRef) => {
    inputRef.current.focus();
  };

  const onSumbit = () => {
    const getId = sessionStorage.getItem("userID");
    const internUpdateProfile = `${api}${internsEditProfile}${getId}`;
    axios({
      method: "put",
      url: internUpdateProfile,
      data: {
        firstName: loginFN,
        lastName: loginLN,
        phoneNumber: loginPN,
      },
    })
      .then(() => {
        sessionStorage.setItem("userFN", loginFN);
        // window.location.href = "/intern";
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <section className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 rounded-xl shadow-2xl">
          <h1 className="text-skyBlue text-2xl font-semibold">
            Edit Your Details
          </h1>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="firstName"
            >
              First name
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                ref={firstNameInputRef}
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your First Name"
                name="firstName"
                value={loginFN}
                id="firstName"
               readOnly={!edit}
                onChange={(e) => {
                  setLoginFN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(firstNameInputRef)}
              >
               <button    onClick={() => {
                      setEdit(true);
                    }}>  <FaRegEdit /></button> 
              </p>
            </div>
          </section>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="lastName"
            >
              Last name
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                ref={lastNameInputRef}
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your LastName"
                name="lastName"
                id="lastName"
                value={loginLN}
               readOnly={!edit}
                onChange={(e) => {
                  setLoginLN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(lastNameInputRef)}
              >
            <button    onClick={() => {
                      setEdit(true);
                    }}>  <FaRegEdit /></button> 
              </p>
            </div>
          </section>

          <section className="w-full">
            <label
              className="text-secondary text-lg font-semibold"
              htmlFor="email"
            >
              Phone number
            </label>
            <div className="w-full border border-primary rounded-xl my-2 flex gap-3 items-center">
              <input
                ref={phoneNumberInputRef}
                className="outline-none my-2 py-2 mx-3 w-full"
                type="text"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                value={loginPN}
               readOnly={!edit}
                onChange={(e) => {
                  setLoginPN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(phoneNumberInputRef)}
              >
              <button    onClick={() => {
                      setEdit(true);
                    }}>  <FaRegEdit /></button> 
              </p>
            </div>
          </section>

          <button
            className="px-8 py-2 bg-primary text-white text-xl mt-5 rounded-lg"
            onClick={onSumbit}
          >
            Save
          </button>
        </section>
      </section>
    </>
  );
};
