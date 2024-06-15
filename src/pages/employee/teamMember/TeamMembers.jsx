import teams from "../../../assets/employee/Team-Member.png"

export const TeamMembers = () => {
  return (
    <section className=" mt-10 ml-52">
    <div className="max-w-screen-2xl w-[95%] mx-auto px-10 center flex-col gap-10 ml-16">
      <h2 className="text-3xl text-center font-bold mx-3 text-primary">
        Team Members
      </h2>
     <div className="mb-20">
      <img src={teams} alt="team member image not found" />
     </div>
    </div>
  </section>
  )
}
