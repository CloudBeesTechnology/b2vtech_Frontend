import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, holidayList } from "./Baseurl";

export const Holidays = () => {
  const [holidaysList, setHolidaysList] = useState([]);
  useEffect(() => {
    const url = `${api}${holidayList}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      const holidays = res.data;
      holidays.map((val) => {
        setHolidaysList(val.holidays);
      });
    });
  }, []);

  const filteredHolidays = (holiday) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const holidayDate = new Date(holiday);
    const holidayMonth = holidayDate.getMonth() + 1;
    if (holidayMonth >= currentMonth) {
      return holiday;
    }
  };
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const monthName = dateObj.toLocaleString("default", { month: "long" });
    const dateNumber = dateObj.getDate();
    const abbreviatedMonth = monthName.slice(0, 3);
    return `${dateNumber} ${abbreviatedMonth}`;
  };

  return (
    <section className="rounded-b-lg bg-white h-72 shadow-lg w-[320px] flex flex-col gap-3 overflow-hidden">
      <div className="rounded-t-lg text-white flex justify-between items-center bg-primary p-4">
        <p>Upcoming Holidays</p>
        <Link to="/employee/upcomingHolidays" className="text-litegrey">
          View
        </Link>
      </div>
      <div className="mt-1 flex flex-col px-5 justify-between h-full gap-5 my-10">
        {holidaysList.map((val, index) => {
          const filteredHoliday = filteredHolidays(val.date);
          if (filteredHoliday) {
            return (
              <div className="flex justify-between " key={index}>
                <h3 className="text-darkblack text-md font-semibold">
                  {val.name}
                </h3>
                <p className="text-black text-[10px] font-semibold">
                  {val.day.slice(0, 3)}, {formatDate(val.date)}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
