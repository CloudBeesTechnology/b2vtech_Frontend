import { CheckPdf } from "../../../Component/CheckPdf";
import Agile from "../../../assets/pdf/common_pdf/Agile.pdf";
import resume from "../../../assets/pdf/common_pdf/Resume_writing .pdf";
import agileImg from "../../../assets/intern/Agile.png";
import resumeImg from "../../../assets/intern/resume.png";
import { CgNotes } from "react-icons/cg";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export const Agile_Pdf = (props) => {
  const [agileDoc, setAgileDoc] = useState(false);
  const CommonPdf=[
    {
    title:"Agile Document",
    pdf:Agile,
    img:agileImg,
  },
  //   {
  //   title:"Resume Document",
  //   pdf:resume,
  //   img:resumeImg
  // },
]
  return (
    <section className="flex justify-evenly items-center w-full flex-wrap gap-5 mx-10">
     {CommonPdf.map((value,i)=>{
      return(
        <section key={i} >
         <div  
        className="w-full max-w-xs text-skyBlue bg-white shadow-lg mt-10 rounded-lg  flex justify-center items-center flex-col px-5 py-10 gap-5"
        onClick={() => setAgileDoc(!agileDoc)}
      >
        <div className="">
          <img className="w-full object-cover max-w-[200px]" src={value.img} alt="Agile not found" />
        </div>
        <h1 className="text-lg font-bold">{value.title}</h1>
      </div>
      {agileDoc && (
        <section className="fixed top-0 bg-black left-0 w-full h-screen z-50 flex justify-center items-center">
          <p
            className="absolute right-10 top-10 max-md:right-2 max-md:top-5 text-3xl text-white max-[430px]:text-primary"
            onClick={() => setAgileDoc(!agileDoc)}
          >
            <FaWindowClose />
          </p>
          <div className="bg-white h-[700px] overflow-y-scroll flex items-start justify-center">
            <CheckPdf pdfPath={value.pdf} />
          </div>
        </section>
      )}
        </section>
      )
     })}
    </section>
  );
};
