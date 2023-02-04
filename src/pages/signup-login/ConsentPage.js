import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Vector } from "../../files/Vector.svg";
import { ReactComponent as Bankit } from "../../files/Bankit.svg";
import { ReactComponent as Folder } from "../../files/Folder.svg";
import { Link } from "react-router-dom";

import Context from "../../store/Context";

const ConsentPage = () => {
  const navigate = useNavigate();

  const { newUserInfo, setNewUserInfo } = useContext(Context);

  const handleSubmit = (data) => {};
  return (
    <div className="bg-white mx-auto my-0 relative overflow-x-hidden sm:p-0 md:p-6 lg:p-8 sm:h-auto sm:w-primary  md:w-full md:h-tertiary lg:w-full lg:h-tertiary">
      <Vector
        className="sm:w-[844px] sm:h-[752px] fixed sm:top-4 sm:left-[-422px] 
      
      md:w-[1100px] md:h-[1000px] md:left-[-370px] md:top-2
      
      lg:w-[1200px] lg:h-[1100px] lg:top-7 lg:left-[-440px] opacity-60 "
      />
      <Bankit className="w-[351px] h-[130px] fixed sm:top-[497px] sm:left-3 md:top-[580px] md:left-48  lg:top-[697px] lg:left-52 " />
      <Folder className="mx-auto mt-[85px] mb-10" />
      <div className="flex flex-col sm:mx-4 sm:top-[210px] sm:w-[352px] md:mx-14 md:w-3/4 md:top-[240px] lg:mx-14 lg:w-9/12 lg:top-[250px]">
        <div className="mb-7">
          <h2 className="mb-4 text-[22px] text-center font-bold">
            Before you Open your Bankit Account
          </h2>
          <p className="mb-4">
            By Opening this Bankit, you agree that the following are true
          </p>
          <p className="mb-4">
            All the information I gave to open this account are mine and
            accurate.
          </p>
          <p className="mb-4">
            I promise not to use this account for any fraudulent, criminal or
            illegal activity.
          </p>
          <p className="mb-4">
            If Bankit finds out or suspects I am using this account for any
            fraudulent, criminal or illegal activity,the bank can restrict or
            close my account.
          </p>
          <p className="">
            Bankit will report any transaction on this account that appears
            suspicious or exceeds regulatory limits to law enforcement agencies
            and regulatory authorities.
          </p>
        </div>
        <div className="bg-white w-full h-12 pl-3 mb-7 text-white rounded flex flex-row items-center border border-primary sm:mt-2 md:mt-28 lg:mt-48">
          <input type="checkbox" className="mr-3 z-20" />
          <p className="text-primary">I agree and wish to continue</p>
        </div>
        <button
          className="bg-primary w-full h-12  text-white rounded flex justify-center items-center sm:mt-2 md:mt-4 lg:mt-4 z-20"
          type="submit"
        >
          Register
        </button>
        <div className="mt-2 mb-4 flex flex-row items-center justify-center">
          <p className=" text-base text-center mr-1 ">
            Already have an account?
          </p>
          <Link className="text-primary">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default ConsentPage;
