import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../Component/Validation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api, loginEP } from "../../Component/Baseurl";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const onSubmit = handleSubmit((data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    LoginStore(loginData);
  });

  const LoginStore = (data) => {
    const loginurl = `${api}${loginEP}`;
    try {
      axios({
        method: "post",
        url: loginurl,
        data: data,
      })
        .then((res) => {
          const store = res.data;
          if (
            store.loginUser &&
            (store.loginUser.role === "intern" ||
              store.loginUser.role === "mentor")
          ) {
            const loginUser = store.loginUser.firstName;
            const loginUserID = store.loginUser._id;
            const loginUserCategory = store.loginUser.category;
            const loginUserRole = store.loginUser.role;

            sessionStorage.setItem("userFN", loginUser);
            sessionStorage.setItem("userID", loginUserID);
            sessionStorage.setItem("userCategory", loginUserCategory);
            sessionStorage.setItem("userRole", loginUserRole);
            window.location.href = "/intern";
          }
          if (store.loginUser && store.loginUser.role === "employee") {
            const loginUser = store.loginUser.firstName;
            const loginUserID = store.loginUser._id;
            const loginUserRole = store.loginUser.role;
            const employeeID=store.loginUser.employeeId;

            sessionStorage.setItem("userFN", loginUser);
            sessionStorage.setItem("userID", loginUserID);
            sessionStorage.setItem("userRole", loginUserRole);
            sessionStorage.setItem("employeeID", employeeID);
            window.location.href = "/employee";
          }
        })
        .catch((error) => {
          // console.log(error.response.data.error);
          setError(error.response.data.error)
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <section className="bg-white max-w-[500px] w-full flex items-center flex-col p-10 max-sm:p-3 rounded-xl shadow-2xl">
          <h5 className="text-skyBlue text-2xl font-semibold">
            Log in to Your Account
          </h5>
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
              Forgot Password ?
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
    </>
  );
};
