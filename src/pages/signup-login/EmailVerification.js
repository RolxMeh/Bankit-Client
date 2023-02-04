import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Vector } from "../../files/Vector.svg";
import { ReactComponent as Bankit } from "../../files/Bankit.svg";
import { Link } from "react-router-dom";

import Context from "../../store/Context";

const EmailVerification = () => {
  const navigate = useNavigate();

  const { newUserInfo } = useContext(Context);

  const handleSubmit = (data) => {};
  return (
    <div className="bg-white mx-auto my-0 relative overflow-x-hidden sm:p-0 md:p-6 lg:p-8 sm:h-primary sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <Vector
        className="sm:w-[844px] sm:h-[752px] fixed sm:top-4 sm:left-[-422px] 
      
      md:w-[1100px] md:h-[1000px] md:left-[-370px] md:top-2
      
      lg:w-[1200px] lg:h-[1100px] lg:top-7 lg:left-[-440px] opacity-60 "
      />
      <Bankit className="w-[351px] h-[130px] fixed sm:top-[497px] sm:left-3 md:top-[580px] md:left-48  lg:top-[697px] lg:left-52 " />
      <h1 className="mt-24 mx-4 text-primary text-[27px] font-bold ">
        Confirm email address
      </h1>
      <h3 className="m-4 text-[#4E4E4E]">
        We will send a code to your email address to confirm you own it
      </h3>
      <div className="flex flex-col absolute sm:mx-4 sm:top-[210px] sm:w-[352px] md:mx-14 md:w-3/4 md:top-[240px] lg:mx-14 lg:w-9/12 lg:top-[250px]">
        <h2 className="my-12   text-primary text-xl text-center font-bold">
          {newUserInfo.email}
        </h2>

        <label className="mb-2 text-[18px]">Verification Code</label>
        <input className="w-full h-12 mb-4 p-2 rounded border outline-none input" />
        <h2 className="my-2   text-primary text-xl text-center font-bold cursor-pointer">
          Resend Code
        </h2>
        <button
          className="bg-primary w-full h-12  text-white rounded flex justify-center items-center sm:mt-56 md:mt-80 lg:mt-[450px] z-20"
          type="submit"
        >
          Proceed
        </button>
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

export default EmailVerification;
