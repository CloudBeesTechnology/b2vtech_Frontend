import { useEffect, useState } from "react";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { PdfDetailsReact } from "./PDF";
import { pdfjs } from "react-pdf";
import { ViewPdf } from "./ViewPdf";
import { Agile_Pdf } from "./Agile_Pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const Intern = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [viewpdf, setViewPdf] = useState(false);
 
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedFN = localStorage.getItem("LoginFN");
    const storedCategory = localStorage.getItem("LoginCategory");
    setName(storedFN);
    setCategory(storedCategory);
  }, [pathname]);

  const ViewingPdfFile = (index) => {
    return () => {
      setViewPdf(!viewpdf);
      setSelectedPdfIndex(index);
    };
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center">
        <div className="max-w-screen-2xl w-[95%] flex flex-col items-center">
          <h1 className="text-6xl font-bold text-secondary mx-3 mt-16  max-sm:text-3xl">
            Welcome,{" "}
            <span className="uppercase text-primary max-sm:text-3xl">
              {name || "Guest"}
            </span>
          </h1>

         <Agile_Pdf />

          <section className=" flex justify-center items-center flex-wrap gap-10 my-20">
            {PdfDetailsReact.map((value, i) => {
              if (category === value.category) {
                return (
                  <div
                    key={i}
                    className=" w-full max-w-xs text-white bg-skyBlue rounded-lg flex justify-center items-center flex-col px-5 py-10 gap-5"
                    onClick={ViewingPdfFile(i)}
                  >
                    <p className="text-5xl ">{value.icon}</p>
                    <h1 className=" text-lg font-semibold text-center">{value.title}</h1>
                  </div>
                );
              } else {
                return null;
              }
            })}

            {PdfDetailsReact.every((value) => category !== value.category) && (
              <div key="weUploadSoon">
                <h1 className="border text-white text-lg bg-primary p-3 rounded-lg">
                  We upload soon
                </h1>
              </div>
            )}
          </section>
          {viewpdf && (
            <ViewPdf
              pdfSelect={selectedPdfIndex}
              onclose={() => setViewPdf(!viewpdf)}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
