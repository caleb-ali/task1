import React from "react";
import profileimg from "./images/profileimg.jpg";
import "./input.css";

const App = () => {
  return (
    <div class="grid place-items-center pt-8 pr-2 pb-2 pl-2 ">
      <div class="pt-4" id= "profile__img">
        <img class="h-24 w-24 rounded-full " src={profileimg} alt="" />
      </div>
      <p class="pt-4">Caleb Ali</p>
      
      <a class="" href="https://twitter.com/GodfatherDev" target="_blank" rel="noreferrer">Twitter link</a>
      <a class="" href="" target="_blank" rel="noreferrer">hidden slack</a>
      <a class="" href="" target="_blank" rel="noreferrer">Zuri Team</a>
      <a class="" href="" target="_blank" rel="noreferrer">Zuri Books</a>
      <a class="" href="" target="_blank" rel="noreferrer">Python Books</a>
      <a class="" href="" target="_blank" rel="noreferrer">Background Check for Coders</a>
      <a class="" href="" target="_blank" rel="noreferrer">Design Books</a>
      
    </div>
  );
};

export default App;
