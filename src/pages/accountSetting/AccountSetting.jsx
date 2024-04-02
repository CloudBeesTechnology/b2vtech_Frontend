import { useEffect, useRef, useState } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

export const AccountSetting = () => {
  const [loginFN, setLoginFN] = useState("");
  const [loginLN, setLoginLN] = useState("");
  const [loginPN, setLoginPN] = useState("");

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);

  useEffect(() => {
    const getId = localStorage.getItem("LoginId");

    axios({
      method: "get",
      url: `https://app-ednc65xvqq-uc.a.run.app/user/rgd/${getId}`,
    }).then((res) => {
      const { firstName, lastName, phoneNumber } = res.data.RGD;
      setLoginFN(firstName);
      setLoginLN(lastName);
      setLoginPN(phoneNumber);

    });
  }, []);

  const handleEditClick = (inputRef) => {
    inputRef.current.focus();
  };

  const onSumbit = () => {
    const getId = localStorage.getItem("LoginId");
      axios({
        method: "put",
        url: `https://app-ednc65xvqq-uc.a.run.app/edit/editdata/${getId}`,
        data: {
          firstName: loginFN,
          lastName: loginLN,
          phoneNumber: loginPN,
        },
      })
      .then(() => {
        localStorage.setItem("LoginFN", loginFN);
          window.location.href = "/intern";
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen">
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
                onChange={(e) => {
                  setLoginFN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(firstNameInputRef)}
              >
                <FaRegEdit />
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
                onChange={(e) => {
                  setLoginLN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(lastNameInputRef)}
              >
                <FaRegEdit />
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
                onChange={(e) => {
                  setLoginPN(e.target.value);
                }}
              />
              <p
                className="text-2xl mr-3 text-primary"
                onClick={() => handleEditClick(phoneNumberInputRef)}
              >
                <FaRegEdit />
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
      </main>
      <Footer />
    </>
  );
};
