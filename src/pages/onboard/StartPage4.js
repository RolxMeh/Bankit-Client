import React from "react";

import { ReactComponent as Account } from "../../files/account.svg";

const StartPage4 = () => {
  return (
    <div className="bg-white mx-auto my-0 sm:h-primary relative overflow-hidden sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <div className=" onboard-page2-div onboard-page2-div-color"></div>

      <Account className="z-30 absolute sm:top-[162px] sm:left-3 md:top-[200px] md:left-[190px md:top-[200px] md:left-[190px] lg:top-[285px] lg:left-[270px]" />

      <h1 className="w-[310px] h-[33px] text-primary text-[27px] text-center font-Rubik font-[600] absolute sm:top-[486px] sm:left-8 md:top-[550px] md:left-[220px] lg:top-[650px] lg:left-[250px] ">
        Ease of Use
      </h1>

      <p className="text-center text-[rgba(0,0,0,.8)] font-Rubik absolute sm:top-[526px] sm:w-[233px] sm:h-[38px] sm:left-[63px] md:top-[63%] md:left-[160px] lg:text-xl lg:top-[700px] lg:left-[200px]">
        With just a click access your account in a jiffy
      </p>

      <div className="w-14 h-3 flex justify-between absolute sm:top-[623px] sm:left-[153px] md:top-[700px] md:left-[350px] lg:top-[800px] lg:left-[380px]">
        <div className="bg-tertiary w-3 h-3 rounded-full "></div>
        <div className="bg-tertiary w-3 h-3 rounded-full"></div>
        <div className="bg-primary w-3 h-3 rounded-full"></div>
      </div>
      <div className="flex sm:flex-col absolute sm:top-[672px] sm:left-[19px] md:flex-row lg:flex-row md:top-[820px] md:left-8 lg:top-[970px] lg:left-[58px]">
        <button className="bg-white w-[340px] h-[48px] mb-2 text-primary rounded-md border md:mr-4 lg:mr-4">
          LOGIN
        </button>

        <button className="bg-primary w-[340px] h-[48px] text-white rounded-md">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default StartPage4;
