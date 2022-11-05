import React from "react";

const Contactdetails = () => {
  return (
    <div class="py-8 lg:py-16 px-32 mx-auto max-w-screen-md">
      <h1 class="mb-4 text-4xl tracking-tight font-bold text-left" s>
        Contact Me
      </h1>
      <p>Hi there, contact me to ask about anything you have in mind.</p>
      <div class="md:flex items-center mt-12">
        <div>
          <label>First Name</label>
          <input></input>
        </div>
        <div>
          <label>Last name</label>
          <input></input>
        </div>
      </div>
      <div>
        <label>
        Email
        </label>
        <input></input>
      </div>
      <div>
        <label>Message</label>
        <textarea></textarea>
      </div>
      <button></button>
    </div>
  );
};

export default Contactdetails;
