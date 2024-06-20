import { Holidays } from "../../../Component/Holidays";
import { LeaveDetails } from "./LeaveDetails";
import { LeaveHistory } from "./LeaveHistory";

export const EmployeeHome = () => {
  return (
    <section className="flex mt-20 flex-wrap gap-10 justify-center items-center w-full">
      <Holidays />
      <LeaveDetails />
      <LeaveHistory/>
    </section>
  );
};

