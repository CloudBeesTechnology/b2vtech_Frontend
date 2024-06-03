import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotSchema} from "../../Component/Validation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ForgetPassword, api } from "../../Component/Baseurl";

export const FP = () => {
    const [error, setError] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(ForgotSchema) });
    const OnSubmit = handleSubmit((data) => {
      console.log(data);
      SendOtp(data);
    });
    const SendOtp = async (data) => {
      const FP=`${api}${ForgetPassword}`
      axios({
        method: "post",
        url:FP,
        data: data,
      })
        .then(() => {
          window.location.href = "/forgot/otp";
        })
        .catch(() => {
          setError("Incorrect email");
        });
    };
  
    return (
      <>
        <h4 className="text-skyBlue text-2xl font-semibold">Forgot Password</h4>
        {error && <p className="text-[red] mt-5">{error}</p>}
        <section className="w-[90%] mt-5">
          <p className="text-md text-secondary ">Enter your email address</p>
          <div className="group  border-litegrey border py-1 px-5 mt-3 rounded-full focus-within:border-2 focus-within:border-primary">
            <input
              className="focus:outline-none w-full p-2 "
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <p className="text-[red] text-sm my-1">{errors.email?.message}</p>
        </section>
        <Link
          className="border w-[90%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-10"
          onClick={OnSubmit}
        >
          Send
        </Link>
      </>
    );
  };