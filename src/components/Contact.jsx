import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1b202d] text-[#edefef] flex justify-center items-center p-4 "
    >
      <form
        action="https://getform.io/f/0a436d71-5a8c-475e-8196-c7bbbed434a6"
        method="POST"
        className="flex flex-col max-w-[600px] w-full text-[#333] h-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl text-[#edefef] font-bold my-3 inline border-b-4 border-[#39b2ad] ">
            Contact
          </p>
          <p className="text-[#708097] text-xl py-4">
            Submit the form below or shoot me an email -
            lamichhane.aayush.al@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 focus:outline-none rounded-md text-xl"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] focus:outline-none rounded-md text-xl"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Enter your message here"
          className="bg-[#ccd6f6] p-2 focus:outline-none rounded-md text-xl"
        ></textarea>
        <button className="text-[#edefef] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#39b2ad] hover:border-[#39b2ad] ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
