import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Income } from "../../files/income.svg";

const StartPage3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white mx-auto my-0 sm:h-primary relative overflow-hidden sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <div className=" onboard-page2-div onboard-page2-div-color"></div>

      <Income className="z-30 absolute sm:top-[162px] sm:left-3 md:top-[200px] md:left-[190px md:top-[200px] md:left-[190px] lg:top-[285px] lg:left-[270px]" />

      <h1 className="w-[310px] h-[33px] text-primary text-[27px] text-center font-Rubik font-[600] absolute sm:top-[486px] sm:left-8 md:top-[550px] md:left-[220px] lg:top-[650px] lg:left-[250px] ">
        Merge Your Accounts
      </h1>

      <p className="text-center text-[rgba(0,0,0,.8)] font-Rubik absolute sm:top-[526px] sm:left-3 md:top-[63%] md:left-[50px] lg:text-xl lg:top-[700px] lg:left-[80px]">
        Fast and easy to access all your transactions and add all set of
        accounts
      </p>

      <div className="w-14 h-3 flex justify-between absolute sm:top-[623px] sm:left-[153px] md:top-[700px] md:left-[350px] lg:top-[800px] lg:left-[380px]">
        <div className="bg-tertiary w-3 h-3 rounded-full "></div>
        <div className="bg-primary w-3 h-3 rounded-full"></div>
        <div className="bg-tertiary w-3 h-3 rounded-full"></div>
      </div>

      <h3 className="text-[#A09C9C] font-Rubik absolute bottom-11 left-[4.27%] cursor-pointer">
        SKIP
      </h3>

      <h3
        className="bg-primary w-24 h-11 text-white font-Rubik flex justify-center items-center rounded-lg absolute bottom-11 right-[4.27%] cursor-pointer "
        onClick={() => navigate("/Startpage4")}
      >
        Next
      </h3>
    </div>
  );
};

export default StartPage3;
