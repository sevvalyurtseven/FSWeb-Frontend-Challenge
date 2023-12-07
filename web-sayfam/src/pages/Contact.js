import React from "react";

export default function Contact() {
  return (
    <div>
    <div className="dark:bg-[#141414] md:p-[5.5rem] p-8 bg-[#F9F9F9] flex flex-col gap-6">
      <h1 className="dark:text-[#AEBCCF] md:font-semibold font-medium text-[#1F2937] md:text-5xl text-3xl pb-6 mb-6 md:w-[500px] text-center md:text-left">
        Let’s work together on your next product.
      </h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0">
        <a
          href="mailto:almilasucode@gmail.com"
          target="_blank"
          className="dark:text-[#BAB2E7] text-[#AF0C48] font-medium text-xl"
        >
          👉 almilasucode@gmail.com.com
        </a>
        <div className="flex mt-6 md:mt-0 justify-between gap-6">
          <a
            href="http://localhost:3000/"
            className="dark:text-[#E1E1FF] text-[#0A0A14] font-medium text-2xl"
          >
            Personal Blog
          </a>
          <a
            href="https://github.com/"
            className="text-[#17D18B] font-medium text-2xl"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-[#0BA6F6] font-medium text-2xl"
            target="_blank"
          >
            Linkedin
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}