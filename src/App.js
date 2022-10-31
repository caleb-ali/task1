import React from "react";
import profileimg from "./images/profileimg.jpg";
import slackimg from "./images/Slack_Mark_Web.png";
import footer from "./images/Footerfooter.png";
import share from "./images/buttonshare.png";
import { FaGithub } from "react-icons/fa";
import "./input.css";

const App = () => {
  return (
    <div class="grid place-items-center pt-8 pr-2 pb-2 pl-2 xl:pr-60 xl:pl-60">
     
     <img class="relative top-4 left-64 " src={share} alt=""/>
    
      <div class="pt-4" id="profile__img">
        <img class="h-24 w-24 rounded-full " src={profileimg} alt="" />
      </div>
     
      <p class="mt-8 font-bold">Caleb Ali</p>

      <a
        type="button"
        class=" w-5/6 mt-12 text-center inline-block  py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="https://twitter.com/GodfatherDev"
        target="_blank"
        rel="noreferrer"
        id="twitter"
      >
        Twitter link
      </a>
      <a
        class=" hidden w-5/6 mt-4 text-center inline-block  py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href=""
        target="_blank"
        rel="noreferrer"
        id="slack"
      >
        alicaleb
      </a>
      <a
        class="w-5/6 mt-5 text-center inline-block  py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="https://training.zuri.team/"
        target="_blank"
        rel="noreferrer"
        id="btn__zuri"
      >
        Zuri Team
      </a>
      <a
        class="w-5/6 mt-5 text-center inline-block py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="http://books.zuri.team"
        target="_blank"
        rel="noreferrer"
        id="books"
      >
        Zuri Books
      </a>
      <a
        class="w-5/6 mt-5 text-center inline-block py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="https://books.zuri.team/python-for-beginners?ref_id=<alicaleb>"
        target="_blank"
        rel="noreferrer"
        id="book__python"
      >
        Python Books
      </a>
      <a
        class="w-5/6 mt-5 text-center inline-block py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="https://background.zuri.team"
        target="_blank"
        rel="noreferrer"
        id="pitch"
      >
        Background Check for Coders
      </a>
      <a
        class="  w-5/6 mt-5 text-center inline-block py-5 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out"
        href="https://books.zuri.team/design-rules"
        target="_blank"
        rel="noreferrer"
        id="book__design"
      >
        Design Books
      </a>

      <div class="mt-6 flex space-x-3">
        <img class="w-10 h-10 " src={slackimg} alt="" />
        <FaGithub class=" w-5 h-5 mt-2.5" />
      </div>
     
      <div class=" mt-28 ">
      <img class=" " src={footer} alt="" />
      </div>
    </div>
  );
};

export default App;
