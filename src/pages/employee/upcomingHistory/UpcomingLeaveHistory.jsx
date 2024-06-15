
import { useEffect, useState } from "react";
import axios from "axios";
import { api, holidayList } from "../../../Component/Baseurl";

export const UpcomingLeaveHistory = () => {
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

  return (
    <section className=" mt-10 ml-52">
      <div className="max-w-screen-2xl w-[95%] mx-auto px-10 center flex-col gap-10 ml-16">
        <h2 className="text-3xl text-center font-bold mx-3 text-primary">
          Holidays
        </h2>

        <div className="w-full rounded-lg shadow-lg mx-10 my-10 ">
          <table className="w-full text-left  ">
            <thead>
              <tr className="rounded-lg border-b">
                <th className="p-4">HOLIDAYS</th>
                <th className="p-4">DAY</th>
                <th className="p-4">DATE</th>
              </tr>
            </thead>
            <tbody className="table-gap ">
              {holidaysList.map((val, i) => {
                const filteredHoliday = filteredHolidays(val.date);
                if (filteredHoliday) {
                  return (
                    <tr key={i}>
                      <td className="px-5 py-4">{val.name}</td>
                      <td className="px-5 py-4">{val.day}</td>
                      <td className="px-5 py-4">{val.date}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
