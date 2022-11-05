import React from "react";
import iconleft from "../images/Iconleft.png";

import {useNavigate } from "react-router-dom";
  





const Errorpage = () => {


    const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');
  };

    
  return (
    <div class="pt-40 pr-4 pb-32 pl-2 xl:pr-60 xl:pl-28">
      <h4 class="text-blue-600 text-base">404 error</h4>
      <h1 class="text-gray-900 font-semibold text-6xl mt-4">
        We cant find that page{" "}
      </h1>
      <p class="text-gray-600 text-xl mt-6">
        {" "}
        Sorry, the page you are looking for doesn't exist.
      </p>
      <div class="mt-12 ">
        <button
          type="submit"
          class=" bg-white hover:bg-gray-100 text-gray-700 border-gray-400 font-semibold py-3 px-4  border border-gray-400  rounded inline-flex  space-x-4 items-center" onClick={handleClick}
        >
         
          <img class="w-4 h-4 " src={iconleft} alt="" />
          <span>Go back</span>
        </button>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold  ml-6 py-3 px-4  rounded" onClick={handleClick}
        >
         <span class="">take me home </span>
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
