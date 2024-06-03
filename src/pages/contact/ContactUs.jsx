import axios from "axios";
import { useState } from "react";
import { api, contactEP } from "../../Component/Baseurl";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
      email: "",
      phone: "",
      message: "",
    });
const [error,setError]=useState("")

    const OnchangeValue = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = () => {
      const contactUrl=`${api}${contactEP}`
      if (formData.email && formData.phone && formData.message) {
        axios({
          method: "post",
          url: contactUrl,
          data: formData,
        }).then(() => {
          setFormData({
            email: "",
            phone: "",
            message: "",
          });
        });
      } else {
        setError('Must fill the field');
      }
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
          {error && <p className="text-[red]">{error}</p>}
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
          {error && <p className="text-[red]">{error}</p>}
        </section>
        {/* Textarea */}
        <div className="">
          <label className="text-secondary text-lg font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            rows="4"
            id="message"
            value={formData.message}
            name="message"
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