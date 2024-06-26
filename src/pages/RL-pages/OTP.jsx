import axios from "axios";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { VerifyOTP, api } from "../../Component/Baseurl";

export const OTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const SendOtp = async () => {
    const OTP = `${api}${VerifyOTP}`;
    axios({
      method: "post",
      url: OTP,
      data: { otp },
    })
      .then((res) => {
        const { email } = res.data;
        const queryString = `?email=${encodeURIComponent(email)}`;
      sessionStorage.setItem("EmailOtp", otp);
        window.location.href = "/forgot/fpc" + queryString;
      })
      .catch(() => {
        setError("Enter Your Correct OTP");
      });
  };
  return (
    <section>
      <h5 className="text-skyBlue text-2xl font-semibold text-center">
        Verification
      </h5>
      {error && <p className="text-[red] mt-5 text-center">{error}</p>}
      <div className="mt-5 w-full">
        <p className="text-md text-secondary text-center mt-4 mb-2">
          Enter verification code
        </p>
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
          className="border w-[95%] py-3 text-center rounded-full bg-primary text-white font-bold text-xl mt-5"
          onClick={SendOtp}
        >
          Verify
        </Link>
      </div>
    </section>
  );
};
