import { CheckPdf } from "../../../Component/CheckPdf";
import { PdfDetailsReact } from "./PDF";
import { FaWindowClose } from "react-icons/fa";

export const ViewPdf = (props) => {
  const { pdfSelect, onclose } = props;

  return (
    <section className="fixed top-0 bg-black w-full h-screen z-50 flex justify-center items-center">
      <p
        className="absolute right-10 top-10 max-md:right-2 max-md:top-5 text-3xl text-white max-[430px]:text-primary"
        onClick={onclose}
      >
        <FaWindowClose />
      </p>

      {pdfSelect !== null && PdfDetailsReact[pdfSelect].pdf !== "" ? (
        <div className="bg-white h-[700px] overflow-y-scroll flex items-start justify-center">
          <CheckPdf key={pdfSelect} pdfPath={PdfDetailsReact[pdfSelect].pdf} />
        </div>
      ) : (
        <div className="p-10 text-xl text-primary font-semibold bg-white rounded-lg">
          <p>We Update Soon</p>
        </div>
      )}
    </section>
  );
};
