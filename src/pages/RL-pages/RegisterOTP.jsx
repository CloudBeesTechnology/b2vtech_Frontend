import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { Registering, api } from "../../Component/Baseurl";
import axios from "axios";

export const RegisterOTP = (props) => {
  const { data } = props;
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const onSubmit=()=>{
    
    if (!otp || !data) {
      console.error("Enter Your Correct OTP");
      setError("Enter Your Correct OTP");
      return;
  }
    const registerData={
        otp:otp,
       firstName: data.firstName,
       lastName: data.lastName,
        phoneNumber: data. phoneNumber,
        email: data. email,
        password: data. password,
       role: data.role,
        category: data. category,
    }
    // console.log(registerData);
    registering(registerData)
  }
  function registering(data){
    const registerUrl = `${api}${Registering}`;
    axios({
      method: "post",
      url: registerUrl,
      data: data,
    })
      .then((response) => {
        // console.log(response.data);
        // window.location.href = "/login";
        navigate('/login');
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setError(" Email already in use");
      });
  }
  return (
    <div className="fixed h-screen w-full bg-liteblack top-0 z-50">
      {" "}
      <div className="w-full h-full  flex justify-center items-center ">
        <section className="bg-white py-5 px-10 rounded-xl">
          <h5 className="text-skyBlue text-2xl font-semibold text-center">
            Email Verification
          </h5>
          {error && <p className="text-[red] mt-5 text-center">{error}</p>}
          <div className="mt-5 w-full ">
           
            <OtpInput
              className="w-[90%]"
              inputStyle={{
                height: "50px",
                width: "47px",
                margin: "5px",
                border: "2px solid #9ca3af",
              }}
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="text-litegrey">-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <p className="cursor-pointer float-right text-sm text-primary text-center mt-2">
            Resend OTP
          </p>

          <div className="w-full flex justify-center">
            <Link
            // to="/login"
              className="border w-[95%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-5"
              onClick={onSubmit}
            >
              Verify
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
