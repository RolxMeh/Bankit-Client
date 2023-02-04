import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Savings } from "../../files/savings.svg";

const StartPage2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white mx-auto my-0 sm:h-primary relative overflow-hidden sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <div className=" onboard-page2-div onboard-page2-div-color"></div>

      <Savings className="z-30 absolute sm:top-[162px] sm:left-3 md:top-[200px] md:left-[190px md:top-[205px] md:left-[199px] lg:top-[285px] lg:left-[270px]" />

      <h1 className="w-[310px] h-[33px] text-primary text-[27px] text-center font-Rubik font-[600] absolute sm:top-[486px] sm:left-8 md:top-[550px] md:left-[215px] lg:top-[650px] lg:left-[250px] ">
        Savings and Security
      </h1>

      <p className="text-center text-[rgba(0,0,0,.8)] font-Rubik absolute sm:top-[526px] sm:left-4 md:top-[63%] md:left-[60px] lg:text-xl lg:top-[700px] lg:left-[100px]">
        Protect your finances and account details with an encrypted system
      </p>

      <div className="w-14 h-3 flex justify-between absolute sm:top-[623px] sm:left-[153px] md:top-[700px] md:left-[350px] lg:top-[800px] lg:left-[380px]">
        <div className="bg-primary w-3 h-3 rounded-full "></div>
        <div className="bg-tertiary w-3 h-3 rounded-full"></div>
        <div className="bg-tertiary w-3 h-3 rounded-full"></div>
      </div>

      <h3 className="text-[#A09C9C] font-Rubik absolute bottom-11 left-[4.27%] cursor-pointer">
        SKIP
      </h3>

      <h3
        className="bg-primary w-24 h-11 text-white font-Rubik flex justify-center items-center rounded-lg absolute bottom-11 right-[4.27%] cursor-pointer"
        onClick={() => navigate("/Startpage3")}
      >
        Next
      </h3>
    </div>
  );
};

export default StartPage2;
