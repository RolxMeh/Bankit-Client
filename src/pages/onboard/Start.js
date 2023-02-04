import React from "react";

import { ReactComponent as Vector } from "../../files/Vector.svg";

const Start = () => {
  return (
    <div className="bg-white mx-auto my-0 h-primary flex justify-center items-center relative overflow-hidden sm:h-primary sm:w-primary  md:w-full md:h-[1020px] lg:w-full lg:h-[1200px]">
      <Vector className="w-sm:[1017px] sm:h-[1017px] absolute sm:top[-103px] sm:left-[-564px] md:w-[1200px] md:h-[1200px] md:left-[-450px] lg:w-[1300px] lg:h-[1300px] lg:left-[-480px]" />

      <div className="w-[151px] h=[223px]">
        <div className="w-full h-[153px] relative">
          <div className="absolute top-0 left-0 onboard-home-div div-1"></div>
          <div className="bg-white w-[55px] h-[53px] rounded-tr-xl rounded-bl-xl absolute top-[50px] left-12 z-20"></div>
          <div className="absolute bottom-0 right-0 sha onboard-home-div div-2"></div>
        </div>
        <div className="mt-2 text-[44px] font-Rubik font-bold onboard-text">
          Bankit
        </div>
      </div>
    </div>
  );
};

export default Start;
