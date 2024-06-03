import { yupResolver } from "@hookform/resolvers/yup";
import { NPSchema } from "../../Component/Validation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { VerifyNP, api } from "../../Component/Baseurl";

export const FPC = () => {
  const [isvisible, setIsVisible] = useState(false);
  const [cpEye, setCPEye] = useState(false);
  const [otp, setOtp] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(NPSchema) });
  useEffect(() => {
    const GetOtp = sessionStorage.getItem("EmailOtp");
    setOtp(GetOtp);
  });
  const SumbitData = handleSubmit((data) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const emailId = {
      email: email,
    };
    console.log(emailId);
    console.log(email);
    console.log(data);
    NPData({ ...data, ...emailId, otp });
  });

  const NPData = async (data) => {
    const NP = `${api}${VerifyNP}`;
    axios({
      method: "post",
      url: NP,
      data: data,
    })
      .then(() => {
        window.location.href = "/login";
        sessionStorage.removeItem("EmailOtp");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  return (
    <>
      <h4 className="text-skyBlue text-2xl font-semibold text-center">
        New Password
      </h4>

      <section className="w-[90%] mt-3">
        <label>
          Enter New Password <span className="text-[red]">*</span>
        </label>
        <div className="group border-litegrey flex items-center border py-1 px-5 mt-1 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2"
            type={isvisible ? "text" : "password"}
            placeholder="New Password"
            {...register("password")}
          />
          {isvisible && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
          {!isvisible && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setIsVisible(!isvisible)}
            />
          )}
        </div>
        <p className="text-[red] text-sm my-1">{errors.password?.message}</p>
      </section>
      <section className="w-[90%] mt-3">
        <label>
          Confirm Password <span className="text-[red]">*</span>
        </label>
        <div className="group border-litegrey flex items-center border py-1 px-5 mt-1 rounded-full focus-within:border-2 focus-within:border-primary">
          <input
            className="focus:outline-none w-full p-2"
            type={cpEye ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("Cpassword")}
          />
          {cpEye && (
            <FaEye
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
          {!cpEye && (
            <PiEyeClosedBold
              className="text-2xl text-secondary"
              onClick={() => setCPEye(!cpEye)}
            />
          )}
        </div>
        <p className="text-[red] text-sm my-1">{errors.Cpassword?.message}</p>
      </section>

      <Link
        to="/login"
        className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
        onClick={SumbitData}
      >
        Save
      </Link>
    </>
  );
};
