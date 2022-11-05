import React from "react";

const Contactdetails = () => {
  return (
    <div class="py-4 lg:py-16 px-32 mx-auto max-w-screen-md">
      <h1 class="mb-4 text-4xl tracking-tight font-bold text-left" s>
        Contact Me
      </h1>
      <p class="text-gray-700">Hi there, contact me to ask about anything you have in mind.</p>
      <div class="md:flex items-center gap-4 mt-12">
        <div class="">
          <label class="font-semibold  text-gray-700">First name</label>
          <input
            id="first_name"
            class=" w-full  text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            placeholder="Enter your first name"
          />
        </div>
        <div class="">
          <label class="font-semibold text-gray-700">Last name</label>
          <input
            id="last_name"
            class=" w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div class=" mt-4">
        <label class="font-semibold  text-gray-700">Email</label>
        <input
          id="email"
          class="  w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
          placeholder="yourname@email.com"
          required
        />
      </div>
      <div>
        <div className="w-full flex flex-col mt-4">
          <label class="font-semibold  text-gray-700">Message</label>
          <textarea
            id="message"
            className="h-36 leading-none text-gray-900 p-3  focus:border-sky-300 mt-4  bg-white border rounded border-gray-300 placeholder-gray-500"
            placeholder="Send me a message and I'll reply as soon as possible..."
          />
        </div>
      </div>
      <div class="mt-4">
        <label class="inline-flex items-center">
          <input type="checkbox" class="w-4 h-4 rounded text-gray-900" />
          <span class="ml-2 text-gray-500">
            You agree to providing your data to caleb who may contact you{" "}
          </span>
        </label>
      </div>
      <button
        type="submit"
        id="btn__submit"
        class=" w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-8  py-3 px-4  rounded"
      >
        <span class="">Send message </span>
      </button>
    </div>
  );
};

export default Contactdetails;
