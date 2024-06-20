import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { api, internsEdit } from "../../../Component/Baseurl";
import axios from "axios";

export const EditIntern = ({ selectedInterns, handleClose, handleUpdate }) => {
  const [editedInterns, setEditedInterns] = useState({
    internId: selectedInterns.internId,
    dateOfJoin: selectedInterns.dateOfJoin,
    role: selectedInterns.role,
    position: selectedInterns.position,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInterns((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    const url = `${api}${internsEdit}`;
    axios({
      method: "Put",
      url: url,
      data: editedInterns,
    })
      .then((res) => {
        // console.log(res.data);
        window.location.href = "/superAdmin/internship";
      })
      .catch((error) => setError(error.response.data.error));
  };

  return (
    <section className="absolute  h-full ml-52 mb-40 bg-white flex flex-col justify-center z-40 items-center w-full gap-5">
      <form
        onSubmit={onSubmit}
        className="relative rounded-b-lg shadow-lg flex  flex-col gap-4 py-14 px-14 mr-52 text-[12px]"
      >
        <div
          onClick={handleClose}
          className="cursor-pointer absolute right-5 top-7 text-[23px] mb-12 text-litegrey"
        >
          <ImCancelCircle />
        </div>

        <div className="flex justify-between items-center gap-7">
          <div>
            <label htmlFor="fname">First name</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              value={selectedInterns.firstName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="lname">Last name</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              value={selectedInterns.lastName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="text"
              value={selectedInterns.dateOfBirth}
              disabled
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-16">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              type="email"
              value={selectedInterns.email}
              disabled
            />
          </div>
          <div>
            <label htmlFor="phone">Contact</label>
            <br />
            <input
              type="tel"
              value={selectedInterns.phoneNumber}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              disabled
            />
          </div>
          <div className="flex gap-2">
            <div >
              <label htmlFor="id">INT ID</label>
              <br />
              <input
                type="text"
                value={selectedInterns.internId}
                className="mb-6 mt-2 p-2 max-w-[80px] border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
                disabled
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <br />
              <input
                type="text"
                value={selectedInterns.gender}
                className="mb-6 mt-2 p-2 max-w-[80px] border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <div>
            <label htmlFor="role">Role</label>
            <br />
            <input
              type="text"
              id="role"
              name="role"
              value={
                editedInterns.role ||
                selectedInterns.role.charAt(0).toUpperCase() +
                  selectedInterns.role.slice(1).toLowerCase()
              }
              onChange={handleChange}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="position">Category</label>
            <br />
            <select
              className="mb-6 mt-2 px-5 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
              name="position"
              value={editedInterns.position || selectedInterns.position}
              onChange={handleChange}
            >
              <option value="Web Developer">Web Developer</option>
              <option value="UIUX Designer">UIUX Designer</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Flutter">Flutter</option>
              <option value="Flutter">Quality assurance</option>
              <option value="Flutter">Project Management</option>
              <option value="Cloud">Cloud</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateofjoin">Date Of Join</label>
            <br />
            <input
              type="text"
              id="dateofjoin"
              name="dateOfJoin"
              value={editedInterns.dateOfJoin || selectedInterns.dateOfJoin}
              onChange={handleChange}
              className="mb-6 mt-2 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end p-2 mr-10">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-5 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

// import React, { useState, useEffect } from 'react';
// import { ImCancelCircle } from "react-icons/im";

// export const EditIntern = ({ selectedInterns, handleClose }) => {
//   const [editedIntern, setEditedIntern] = useState(selectedIntern);

//   useEffect(() => {
//     setEditedIntern(selectedIntern);
//   }, [selectedIntern]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedIntern((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(editedIntern); // Log the edited intern object
//     // You can perform further actions like sending the edited intern data to the server here
//   };

//   if (!selectedIntern) return null;

//   return (
//     <section className="absolute h-full mr-1 bg-white flex flex-col justify-center items-center w-full gap-5">
//       <form onSubmit={handleSubmit} className="relative rounded-b-lg shadow-lg flex flex-col gap-4 py-14 px-14 text-[12px]">
//         <div onClick={handleClose} className="cursor-pointer absolute right-5 top-7 text-[23px] mb-12 text-litegrey">
//           <ImCancelCircle />
//         </div>
//         <div className="flex justify-between items-center gap-7">
//           <div>
//             <label htmlFor="fname">First name</label><br />
//             <input
//               type="text"
//               value={selectedIntern.name || ''}
//               id="fname"
//               name="name"
//               onChange={handleChange}
//               className="mb-6 p-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//           <div>
//             <label htmlFor="lname">Last name</label><br />
//             <input
//               type="text"
//               id="lname"
//               name="lname"
//               value={selectedIntern.lname || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//           <div>
//             <label htmlFor="dob">Date Of Birth</label><br />
//             <input
//               type="text"
//               id="dob"
//               name="dob"
//               value={selectedIntern.dob || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center gap-16">
//           <div>
//             <label htmlFor="email">Email</label><br />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={selectedIntern.email || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//           <div>
//             <label htmlFor="phone">Contact</label><br />
//             <input
//               type="tel"
//               id="phone"
//               name="contact"
//               value={selectedIntern.contact || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//           <div className="flex gap-2">
//             <div>
//               <label htmlFor="id">Employee ID</label><br />
//               <input
//                 type="text"
//                 id="id"
//                 name="id"
//                 value={selectedIntern.id || ''}
//                 onChange={handleChange}
//                 className="mb-6 px-2 max-w-[80px] py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//                 disabled
//               />
//             </div>
//             <div>
//               <label htmlFor="gender">Gender</label><br />
//               <select
//                 className="mb-6 max-w-[100px] px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//                 name="gender"
//                 value={selectedIntern.gender || ''}
//                 onChange={handleChange}
//               >
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center gap-7">
//           <div>
//             <label htmlFor="role">Role</label><br />
//             <input
//               type="text"
//               id="role"
//               name="role"
//               value={selectedIntern.role || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//           <div>
//             <label htmlFor="position">Position</label><br />
//             <select
//               className="mb-6 px-5 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//               name="position"
//               value={selectedIntern.position || ''}
//               onChange={handleChange}
//             >
//               <option value="Web Developer">Web Developer</option>
//               <option value="UIUX Designer">UIUX Designer</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//               <option value="Flutter">Flutter</option>
//               <option value="Cloud">Cloud</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="dateofjoin">Date Of Join</label><br />
//             <input
//               type="text"
//               id="dateofjoin"
//               name="date"
//               value={selectedIntern.date || ''}
//               onChange={handleChange}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//             />
//           </div>
//         </div>
//         <div className="flex justify-end p-2 mr-10">
//           <button type="submit" className="bg-primary text-white py-2 px-5 rounded">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// import React from 'react';
// import { ImCancelCircle } from "react-icons/im";

// export const EditIntern = ({ selectedIntern, handleClose }) => {
//   if (!selectedIntern) return null;

//   return (
//     <section className="absolute h-full mr-1 bg-white flex flex-col justify-center items-center w-full gap-5">
//       <div className="relative rounded-b-lg shadow-lg flex flex-col gap-4 py-14 px-14 text-[12px]">
//         <div onClick={handleClose} className="cursor-pointer absolute right-5 top-7 text-[23px] mb-12 text-litegrey">
//           <ImCancelCircle/>
//         </div>
//         <div className="flex justify-between items-center gap-7">
//           <div>
//             <label htmlFor="fname">First name</label><br />
//             <input
//               type="text"
//               value={selectedIntern.name}
//               id="fname"
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//               disabled
//             />
//           </div>
//           <div>
//             <label htmlFor="lname">Last name:</label><br />
//             <input
//               type="text"
//               id="lname"
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//               disabled
//             />
//           </div>
//           <div>
//             <label htmlFor="dob">Date Of Birth:</label><br />
//             <input
//               type="text"
//               id="dob"
//               name="DateOfBirth"
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//               disabled
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center gap-16">
//           <div>
//             <label htmlFor="email">Email:</label><br />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={selectedIntern.email}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"

//             />
//           </div>
//           <div>
//             <label htmlFor="phone">Contact:</label><br />
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={selectedIntern.contact}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"

//             />
//           </div>
//           <div className="flex gap-2">
//             <div>
//               <label htmlFor="id">Employee ID</label><br />
//               <input
//                 type="text"
//                 id="id"
//                 name="id"
//                 value={selectedIntern.id}
//                 className="mb-6 px-2 max-w-[80px] py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//                 disabled
//               />
//             </div>
//             <div>
//               <label htmlFor="gender">Gender</label><br />
//               <select
//                 className="mb-6 max-w-[100px] px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//                 value={selectedIntern.gender}

//               >
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center gap-7">
//           <div>
//             <label htmlFor="role">Role</label><br />
//             <input
//               type="text"
//               id="role"
//               name="role"
//               value={selectedIntern.role}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"

//             />
//           </div>
//           <div>
//             <label htmlFor="position">Position</label><br />
//             <select
//               className="mb-6 px-5 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"
//               value={selectedIntern.position}
//             >
//               <option value="Web Developer">Web Developer</option>
//               <option value="UIUX Designer">UIUX Designer</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//               <option value="Flutter">Flutter</option>
//               <option value="Cloud">Cloud</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="dateofjoin">Date Of Join</label><br />
//             <input
//               type="text"
//               id="dateofjoin"
//               name="DateOfJoin"
//               value={selectedIntern.date}
//               className="mb-6 px-2 py-2 border border-litegrey text-mediumgrey text-sm rounded-lg outline-none"

//             />
//           </div>
//         </div>
//         <div className="flex justify-end p-2 mr-10">
//           <button className="bg-primary text-white py-2 px-5 rounded">Submit</button>
//         </div>
//       </div>
//     </section>
//   );
// };
