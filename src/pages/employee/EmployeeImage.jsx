import { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import Modal from "react-modal";
import avatar from "../../assets/about/profileIcon.png";
import { IoMdCamera } from "react-icons/io";
import { api, employeeImageEP } from "../../Component/Baseurl";
import axios from "axios";
import { FaFolder, FaCamera } from "react-icons/fa";

export const EmployeeImage = (props) => {
  const { ImageURL } = props;
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [file, setFile] = useState(null);

  const [isWebcamEnabled, setIsWebcamEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [employeeID, setEmployeeID] = useState("");
  const webcamRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
      setIsModalOpen(false);
      event.target.value = "";
      console.log("Selected image from device:", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const enableWebcam = () => {
    setIsWebcamEnabled(true);
    setIsModalOpen(false);
  };
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFile(imageSrc);
    setIsWebcamEnabled(false);
  };
  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsFileSelected(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsWebcamEnabled(false);
  };
  useEffect(() => {
    const employeeId = sessionStorage.getItem("userID");
    setEmployeeID(employeeId);
  }, []);
  const handleImageUpload = async () => {
    if (file) {
      const blob = base64ToBlob(file);
      const formData = new FormData();
      formData.append("profilePic", blob, "profile.jpg");
      formData.append("_id", employeeID);
      try {
        const employeeImageurl = `${api}${employeeImageEP}`;
        const response = await axios.post(employeeImageurl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(
          "Image uploaded successfully:",
          response.data.employeePhotoUrl
        );
        setFile(response.data.employeePhotoUrl);
        setIsFileSelected(false);
        window.location.href = "/employeeProfile";
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const base64ToBlob = (base64, contentType = "image/jpeg") => {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length)
      .fill()
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  };
  return (
    <div >
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Choose Image Source"
        ariaHideApp={false}
        className="max-w-[260px] sm:max-w-xl  w-full bg-secondary text-white center flex-col gap-5 py-10 px-10 absolute rounded-lg left-1/2 -translate-x-1/2 top-40"
      >
        <h2 className="mb-10 text-xl font-medium text-center">Choose Image Source</h2>
        <div className="flex py-5 gap-5 mb-5 w-full justify-evenly">
          <article className="center flex-col gap-2">
            {" "}
            <p className="text-2xl" onClick={openFileDialog}>
              <FaFolder />
            </p>
            <button onClick={openFileDialog}>Choose from Device</button>
          </article>
          <article className="center flex-col gap-2">
            {" "}
            <p className="text-2xl" onClick={enableWebcam}>
              <FaCamera />
            </p>
            <button onClick={enableWebcam}>Capture Photo</button>
          </article>

        </div>
          <button className="bg-primary px-5 py-2 rounded-lg" onClick={closeModal}>Cancel</button>
      </Modal>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      {isWebcamEnabled && (
        <div className="fixed h-full z-40 bg-black w-full left-1/2 -translate-x-1/2 top-0 center flex-col gap-5 px-5">
         
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <button className="bg-primary px-5 py-2 rounded-lg text-white" onClick={capture}>
              Capture Photo
            </button>
            <button className="bg-primary px-5 py-2 rounded-lg text-white" onClick={closeModal}>Cancel</button>
        </div>
      )}

      <div className="py-2 flex flex-col items-center">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="h-40 w-40 relative rounded-full border-2 border-litegrey flex justify-center items-center">
          {file ? (
            <img
              src={file}
              id="previewImg"
              alt="Employee"
              className="object-cover w-full h-full  rounded-full"
            />
          ) : (
            <img
              src={ImageURL || avatar}
              id="previewImg"
              alt="Avatar"
              className="object-cover w-full h-full rounded-full"
            />
          )}

          <p
            className="absolute right-0 bg-litegrey rounded-full p-2 text-primary text-xl bottom-5"
            onClick={openModal}
          >
            <IoMdCamera />
          </p>
        </div>
      </div>
      {isFileSelected && (
        <div className="center">
          <button
            className="px-4 py-2 bg-primary text-white text-xl mt-2 rounded-lg mx-auto "
            onClick={handleImageUpload}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
