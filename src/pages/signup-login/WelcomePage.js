import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Vector } from "../../files/Vector.svg";
import { ReactComponent as Bankit } from "../../files/Bankit.svg";
import { ReactComponent as Check } from "../../files/Check.svg";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white mx-auto my-0 relative overflow-x-hidden sm:p-0 md:p-6 lg:p-8 sm:h-auto sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <Vector
        className="sm:w-[944px] sm:h-[800px] fixed sm:top-5 sm:left-[-280px] 
      
      md:w-[1100px] md:h-[1000px] md:left-[-170px] md:top-2
      
      lg:w-[1200px] lg:h-[1100px] lg:top-7 lg:left-[-190px] opacity-60 "
      />
      <Bankit className="w-[351px] h-[130px] fixed sm:top-[497px] sm:left-3 md:top-[580px] md:left-48  lg:top-[697px] lg:left-52 " />
      <div className="sm:mt-60 mx-auto w-[290px] h-[260px] flex flex-col justify-between items-center md:mt-72 lg:mt-80">
        <h2 className="text-black text-xl font-bold">Welcome to Bankit!</h2>
        <Check />
        <p className="text-[#575757] text-center">
          You have successfully created an account.
        </p>
      </div>

      <div className="sm:mt-44 flex justify-center md:mt-60 lg:mt-80">
        <button
          className="bg-primary w-[90%] h-12  text-white rounded flex justify-center items-center sm:mt-2 md:mt-4 lg:mt-4 z-20"
          type="submit"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
