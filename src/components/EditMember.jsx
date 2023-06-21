/* eslint-disable react-hooks/exhaustive-deps */

import { Typography, Button, TextField } from "@mui/material";
import "./AddMember.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  username: yup.string("Enter your name").required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your name")
    .max(10, "Enter valid number")
    .required("Mobile number is required"),
});

export const EditMember = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);
  console.log(state.row);
  useEffect(() => {
    if (state.row) {
      setSelectedMember({ ...state.row });
    } else {
      setSelectedMember();
      navigate("/");
    }
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: selectedMember?.name,
      username: selectedMember?.username,
      phone: selectedMember?.phone,
      email: selectedMember?.email,
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      {selectedMember && (
        <div style={{ maxWidth: "50%", margin: "32px auto" }}>
          <Typography variant="h6" component="div">
            Edit Member Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className="controls"
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              className="controls"
              fullWidth
              id="username"
              name="username"
              label="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              className="controls"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className="controls"
              fullWidth
              id="phone"
              name="phone"
              label="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Button
              className="controls"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Update
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

// import {
//   FormControl,
//   Input,
//   Typography,
//   InputLabel,
//   Button,
// } from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
// import "./AddMember.css";
// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export const EditMember = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [selectedMember, setSelectedMember] = useState(null);
//   console.log(state.row);
//   useEffect(() => {
//     if (state.row) {
//       setSelectedMember({ ...state.row });
//     } else {
//       setSelectedMember();
//       navigate("/");
//     }
//   }, []);

//   return (
//     <>
//       {console.log(selectedMember)}
//       {selectedMember && (
//         <FormGroup style={{ maxWidth: "50%", margin: "32px auto" }}>
//           <Typography variant="h6" component="div">
//             Update Member Form
//           </Typography>
//           <FormControl className="controls">
//             <InputLabel>Name</InputLabel>
//             <Input defaultValue={selectedMember.name} variant="outlined" type="text" />
//           </FormControl>
//           <FormControl className="controls">
//             <InputLabel>Username</InputLabel>
//             <Input defaultValue={selectedMember.username}  type="text" />
//           </FormControl>
//           <FormControl className="controls">
//             <InputLabel>Email</InputLabel>
//             <Input  defaultValue={selectedMember.email} type="email" />
//           </FormControl>
//           <FormControl className="controls">
//             <InputLabel>Phone</InputLabel>
//             <Input defaultValue={selectedMember.phone}  type="number" />
//           </FormControl>
//           <Button className="controls" variant="contained">
//             Update
//           </Button>
//         </FormGroup>
//       )}
//     </>
//   );
// };
