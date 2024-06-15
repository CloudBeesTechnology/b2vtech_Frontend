import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Component/Validation";
import axios from "axios";
import { api, registerEP } from "../../Component/Baseurl";
import { RegisterOTP } from "./RegisterOTP";
import { RegisterDetails } from "./RegisterDetails";

export const Register = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [error, setError] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [data, setData] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
  const InputDetail = [
    {
      label: "FirstName",
      type: "text",
      placeholder: "FirstName",
      valid: "firstName",
    },
    {
      label: "LastName",
      type: "text",
      placeholder: "LastName",
      valid: "lastName",
    },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Phone Number",
      valid: "phoneNumber",
    },
    { label: "Email ID", type: "email", placeholder: "Email", valid: "email" },
    {
      label: "Password",
      type: isvisible ? "text" : "password",
      placeholder: "Password",
      valid: "password",
    },
    {
      label: "ConfirmPassword",
      type: cpEye ? "text" : "password",
      placeholder: "Confirm Password",
      valid: "Cpassword",
    },
  ];

  const onSubmit = handleSubmit((data) => {
    const email = data.email;
    setData(data);
    RegisterStore(email);
  });

  function RegisterStore(email) {
    const registerUrl = `${api}${registerEP}`;
    const requestData = { email };
    axios({
      method: "post",
      url: registerUrl,
      data: requestData,
    })
      .then(() => {
        setOtpScreen(true);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // setError("Invalid request. Please check your input and try again.");
      });
  }
  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 max-sm:p-3 rounded-xl shadow-2xl">
          <h1 className="text-skyBlue text-2xl font-semibold ">Register</h1>
          {error && <p className="text-[red] mt-5 text-center">{error}</p>}
          <section className="w-[90%] mt-3">
            {InputDetail.map((field, index) => (
              <section key={index} className="mt-3">
                <label>
                  {field.label} <span className="text-[red]">*</span>
                </label>
                <div className="group border-litegrey border py-1 px-5 mt-1 rounded-lg flex items-center focus-within:border-2 focus-within:border-primary">
                  <input
                    className="focus:outline-none w-full p-2"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.valid)}
                  />
                  {field.label === "Password" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setIsVisible(!isvisible)}
                    >
                      {isvisible ? <FaEye /> : <PiEyeClosedBold />}
                    </span>
                  )}
                  {field.label === "ConfirmPassword" && (
                    <span
                      className="text-2xl text-secondary"
                      onClick={() => setCPEye(!cpEye)}
                    >
                      {cpEye ? <FaEye /> : <PiEyeClosedBold />}
                    </span>
                  )}
                </div>
                <p className="text-[red] text-sm my-1">
                  {errors[field.valid]?.message}
                </p>
              </section>
            ))}
          </section>

          <fieldset className="w-[90%] mt-3 flex flex-col">
            <legend>
              Choose a role: <span className="text-[red]">*</span>
            </legend>
            <div className="border-litegrey border p-3 mt-1 rounded-lg flex items-center focus-within:border-2 focus-within:border-primary">
              <select
                className="w-full focus:outline-none"
                {...register("role")}
              >
                {[
                  { value: "intern", label: "Intern" },
                  { value: "mentor", label: "Mentor" },
                  { value: "employee", label: "Employee" },
                ].map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-xl"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset className="w-[90%] mt-3 flex flex-col">
            <legend>
              Choose a Category: <span className="text-[red]">*</span>
            </legend>
            <div className="border-litegrey border p-3 mt-1 rounded-lg flex items-center focus-within:border-2 focus-within:border-primary">
              <select
                className="w-full focus:outline-none"
                {...register("category")}
              >
                {RegisterDetails.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-xl"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <Link
            className="border w-[90%] py-3 text-center rounded-full bg-primary mt-8 text-white font-bold text-xl"
            onClick={onSubmit}
          >
            Register
          </Link>
        </div>

        {otpScreen && <RegisterOTP data={data} />}
      </section>
    </>
  );
};
