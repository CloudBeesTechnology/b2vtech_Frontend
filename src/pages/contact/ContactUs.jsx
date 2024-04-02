import axios from "axios";
import { useState } from "react";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
      email: "",
      phone: "",
      msg: "",
    });
    const OnchangeValue = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = () => {
      axios({
        method: "post",
        url: "https://app-ednc65xvqq-uc.a.run.app/contact/contactdata",
        data: formData,
      }).then(() => {
        setFormData({
          email: "",
          phone: "",
          msg: "",
        });
      });
    };
  
    return (
      <main className="w-[80%] sm:px-2 ">
        <section>
          <label className="text-secondary text-lg font-semibold" htmlFor="email">
            Email
          </label>
  
          <input
            className="w-full outline-none my-2 py-3 px-3 border border-primary rounded-xl"
            type="email"
            id="email"
            placeholder="Enter your Email ID"
            value={formData.email}
            name="email"
            onChange={OnchangeValue}
          />
        </section>
        <section>
          <label className="text-secondary text-lg font-semibold" htmlFor="tel">
            Phone number
          </label>
  
          <input
            className="w-full outline-none my-2 py-3 px-3 border border-primary rounded-xl"
            type="tel"
            id="tel"
            value={formData.phone}
            name="phone"
            placeholder="Enter your Phone Number"
            onChange={OnchangeValue}
          />
        </section>
        {/* Textarea */}
        <div className="">
          <label className="text-secondary text-lg font-semibold" htmlFor="msg">
            Message
          </label>
          <textarea
            rows="4"
            value={formData.msg}
            name="msg"
            className="w-full resize-none outline-none my-2 py-3 px-3 border border-primary rounded-xl"
            placeholder="Write your message here..."
            onChange={OnchangeValue}
          ></textarea>
        </div>
        {/* Button */}
        <section className="flex justify-center my-5 w-full ">
          <div className="px-8 py-2 bg-primary text-white text-xl rounded-lg hover:ring-2 hover:ring-skyBlue">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>
      </main>
    );
  };