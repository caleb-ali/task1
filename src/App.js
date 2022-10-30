import React from "react";
import profileimg from "./images/profileimg.jpg";
import "./input.css";

const App = () => {
  return (
    <div class="grid place-items-center pt-8 pr-2 pb-2 pl-2 ">
      <div class="pt-4" id= "profile__img">
        <img class="h-24 w-24 rounded-full " src={profileimg} alt="" />
      </div>
      <p class="mt-8 font-bold">Caleb Ali</p>
      
      <a type="button" class=" w-5/6 mt-12 text-center inline-block  py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="https://twitter.com/GodfatherDev" 
       target="_blank" rel="noreferrer" id="twitter">Twitter link</a>
      <a class="w-5/6 mt-4 text-center inline-block  py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="" target="_blank" rel="noreferrer" id="slack" style={{ display: "none" }}>alicaleb</a>
      <a class="w-5/6 mt-4 text-center inline-block  py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri">Zuri Team</a>
      <a class="w-5/6 mt-4 text-center inline-block py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="http://books.zuri.team" target="_blank" rel="noreferrer" id="books">Zuri Books</a>
      <a class="w-5/6 mt-4 text-center inline-block py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="https://books.zuri.team/python-for-beginners?ref_id=<alicaleb>" target="_blank" rel="noreferrer" id="book__python">Python Books</a>
      <a class="w-5/6 mt-4 text-center inline-block py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="https://background.zuri.team" target="_blank" rel="noreferrer" id="pitch">Background Check for Coders</a>
      <a class="w-5/6 mt-4 text-center inline-block py-4 bg-gray-200 text-gray-700 font-medium text-xs 
      leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition
       duration-150 ease-in-out" href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design">Design Books</a>
      
    </div>
  );
};

export default App;
