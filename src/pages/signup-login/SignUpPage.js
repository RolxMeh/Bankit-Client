import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Vector } from "../../files/Vector.svg";
import { ReactComponent as Bankit } from "../../files/Bankit.svg";
import { Link } from "react-router-dom";

import Context from "../../store/Context";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const SignUpPage = () => {
  const { newUserInfo, setNewUserInfo } = useContext(Context);

  const navigate = useNavigate();

  console.log(newUserInfo);
  const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const formValidation = Yup.object().shape({
    fullName: Yup.string()
      .minWords(2, "Name must contain at least 2 words")
      .required("Please input your Name"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Please input your Email"),
    phoneNumber: Yup.string()
      .minNumbers(10, "Invalid Phone Number")
      .max(10, "Invalid Phone Number")
      .required("Please input your Phone Number"),
    password: Yup.string()
      .password()
      .minLowercase(1, "Password must contain at least 1 lower case letter")
      .minUppercase(1, "Password must contain at least 1 upper case letter")
      .min(6, "Password must contain at least 6 characters")
      .minNumbers(1, "Password must contain at least 1 number")
      .minSymbols(1, "Password must contain at least 1 Special Character")
      .max(15, "Password must not be more than 15 characters")
      .required("Please input your Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Please confirm Your Password"),
  });

  const handleSubmit = (data) => {
    setNewUserInfo(data);
    navigate("/emailverification");
  };
  return (
    <div className="bg-white mx-auto my-0 relative overflow-x-hidden sm:p-0 md:p-6 lg:p-8 sm:h-primary sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <Vector
        className="sm:w-[844px] sm:h-[752px] fixed sm:top-4 sm:left-[-422px] 
      
      md:w-[1100px] md:h-[1000px] md:left-[-370px] md:top-2
      
      lg:w-[1200px] lg:h-[1100px] lg:top-7 lg:left-[-440px] opacity-60 "
      />
      <Bankit className="w-[351px] h-[130px] fixed sm:top-[497px] sm:left-3 md:top-[580px] md:left-48  lg:top-[697px] lg:left-52 " />
      <h1 className="mt-24 mx-4 text-primary text-[27px] font-bold ">
        Create a Bankit Account
      </h1>
      <h3 className="m-4 text-[#4E4E4E]">
        Ensure you Register so we can serve you better
      </h3>
      <div className="mx-4 flex flex-col absolute sm:top-[210px] sm:w-[352px] md:w-3/4 md:top-[240px] lg:w-9/12 lg:top-[250px]">
        <Formik
          initialValues={initialValue}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form>
            <label className="mb-2 text-[18px]">Full Name</label>
            <ErrorMessage
              name="fullName"
              component="p"
              className=" text-[#f51423]"
            />
            <Field
              name="fullName"
              className="w-full h-12 mb-4 p-2 rounded border outline-none input"
            />
            <label className="mb-2 text-[18px]">Email Address</label>{" "}
            <ErrorMessage
              name="email"
              component="p"
              className="text-[#f51423]"
            />
            <Field
              type="email"
              name="email"
              className="w-full h-12 mb-4 p-2 rounded border outline-none input"
            />
            <label className="mb-2 text-[18px]">Phone Number</label>
            <ErrorMessage
              name="phoneNumber"
              component="p"
              className=" text-[#f51423]"
            />
            <Field
              type="number"
              name="phoneNumber"
              className="w-full h-12 mb-4 p-2 rounded border outline-none input"
            />
            <label className="mb-2 text-[18px]">Password</label>
            <ErrorMessage
              name="password"
              component="p"
              className=" text-[#f51423]"
            />
            <Field
              type="password"
              name="password"
              className="w-full h-12 mb-4 p-2 rounded border outline-none input"
            />
            <label className="mb-2 text-[18px]">Confirm Password</label>
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className=" text-[#f51423]"
            />
            <Field
              type="password"
              name="confirmPassword"
              className="w-full h-12 mb-4 p-2 rounded border outline-none input"
            />
            <button
              className="bg-primary w-full h-12 mt-12 text-white rounded flex justify-center items-center z-20"
              type="submit"
            >
              Proceed
            </button>
          </Form>
        </Formik>
        <div className="mt-2 flex flex-row items-center justify-center">
          <p className=" text-base text-center mr-1 ">
            Already have an account?
          </p>
          <Link className="text-primary">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
