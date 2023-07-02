// import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import { useForm, Controller } from "react-hook-form";

// export default function Example() {
//   const { control, handleSubmit } = useForm();
//   const [submittedDate, setSubmittedDate] = useState();
//   const [taskTitle, setTaskTitle] = useState();

//   const onSubmit = ({ date}) => {
//     setSubmittedDate(date);
//   };
  

//   return (
//     <>

//       <h1>Add your Tasks</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label htmlFor="title" className="form-label">Event Title</label>
//           <input
//             type="text"
//             placeholder="title"
//             className="form-control"
//             id="title"
//             aria-describedby="title"
//             value={taskTitle} 
//             onChange={(e) => {setTaskTitle(e.value)}}
//             />
//         </div>

//         <div className="mb-4" style={{ zIndex: "100" }}>
//           <label htmlFor="start" className="form-label">Event Date</label>

//           <Controller
//             control={control}
//             name="date"
//             rules={{ required: true }} //optional
//             render={({
//               field: { onChange, name, value },
//               fieldState: { invalid, isDirty }, //optional
//               formState: { errors }, //optional, but necessary if you want to show an error message
//             }) => (
//               <>
//                 <DatePicker
//                   value={value || ""}
//                   onChange={(date) => {
//                     onChange(date?.isValid ? date : "");
//                   }}
//                   format={"DD/MM/YYYY"}
//                 />
//                 {errors && errors[name] && errors[name].type === "required" && (
//                   //if you want to show an error message
//                   <span>your error message !</span>
//                 )}
//               </>
//             )}
//           />
//         </div>
//         <input type="submit" />
//       </form>
//       <p>Task Date:  {submittedDate?.format?.("MMMM D YYYY")}</p>
//     </>
//   )
// }