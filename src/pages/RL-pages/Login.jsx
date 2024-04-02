import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../Component/Validation";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const [isvisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onSubmit = handleSubmit((data) => {
    LoginStore(data);

  });

  const LoginStore = (data) => {
    axios({
      method: "post",
      // url: "http://127.0.0.1:5001/b2vtech-3519c/us-central1/app/user/login",
      url: "https://app-ednc65xvqq-uc.a.run.app/user/login",
      data: data,
    })
      .then((res) => {
        const {_id,firstName,category}= res.data.user;
        console.log(_id,firstName,category);
        localStorage.setItem("LoginFN", firstName);
        localStorage.setItem("LoginId", _id);
        localStorage.setItem("LoginCategory", category);
        window.location.href = "/intern";
      })
      .catch(() => {
        setError("Invalid Username and Password");
      });
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center h-screen">
        <section className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 max-sm:p-3 rounded-xl shadow-2xl">
          <h1 className="text-skyBlue text-2xl font-semibold">
            Log in to Your Account
          </h1>
          {error && <p className="text-[red] mt-5">{error}</p>}
          <section className="w-full">
            <div className="group w-[90%] mx-auto border-litegrey border py-2 px-5 mt-7 rounded-lg focus-within:border-2 focus-within:border-primary">
              <input
                className="focus:outline-none w-full p-2 "
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <p className="text-[red] text-sm my-2 ml-5">
              {errors.email?.message}
            </p>
          </section>
          <section className="w-full">
            <div className="group w-[90%] mx-auto border-litegrey flex items-center border py-2 px-5 mt-4 rounded-lg focus-within:border-2 focus-within:border-primary">
              <input
                className="focus:outline-none w-full p-2"
                type={isvisible ? "text" : "password"}
                placeholder="Password"
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
            <p className="text-[red] text-sm my-2 ml-5">
              {errors.password?.message}
            </p>
          </section>
          <div className="flex w-[90%] justify-between items-center mt-3 mb-10">
            <article className="flex items-center gap-1">
              <input type="checkbox" id="remember" />
              <label className="text-sm" htmlFor="remember">
                Remember me
              </label>
            </article>
            <Link to="/forgot" className="text-mediumgrey text-sm">
              Forget Password ?
            </Link>
          </div>
          <button
            className="border w-[90%] py-3 rounded-full bg-primary text-center text-white font-bold text-xl mb-10"
            onClick={onSubmit}
          >
            Login
          </button>
          <p className="text-mediumgrey">
            You Don't Have An Account?{" "}
            <Link
              to="/register"
              className="text-primary underline hover:cursor-pointer"
            >
              Register Here
            </Link>
          </p>
        </section>
      </section>

      <Footer />
    </>
  );
};
