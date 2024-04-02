import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  firstName: Yup.string().required("FirstName is Mandatory"),
  lastName: Yup.string().required("LastName is Mandatory"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is Mandatory"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Id is Mandatory"),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .max(12, 'Password must not exceed 12 characters')
  .matches(
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]+$/,
    'Password must contain at least one number, one letter, and one symbol'
  )
  .required('Password is mandatory'),
  Cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Mandatory"),
  role: Yup.string().required(),
  category: Yup.string().required(),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Id is Mandatory"),
  password: Yup.string().required("Password is Required"),
});

export const ForgotSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Id is Mandatory"),
});

export const NPSchema = Yup.object({
  password: Yup.string().min(8).max(12).required("Password is Mandatory"),
  Cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Mandatory"),
});
