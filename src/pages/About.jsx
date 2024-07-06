import React from "react";
import image from "../assets/Abhishek.png";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div className="pt-4 pb-44">
      <div className="flex md:flex-row md:mx-4 mx-4 flex-col-reverse items-center justify-around gap-8 mt-12 md:mt-28">
        <div className="flex flex-col items-start gap-1">
          <span className="text-xl font-semibold text-slate-300">Hello,</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-600">
            <span className="text-slate-300">I'm</span> Abhishek Kushwaha
          </h1>
          <p className="flex gap-3 items-center text-slate-300 text-xl md:text-3xl lg:text-3xl font-semibold">
            I am a
            <div className="text-green-500 text-2xl md:text-3xl lg:text-4xl">
              <Typewriter
                options={{
                  strings: ["Programmer.", "MERN Stack Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </p>
          <p className="text-sm text-white opacity-65 font-medium mt-1">
            Hello there! I'm thrilled to welcome you to my corner of the
            internet. With a focus on <br /> Java programming and expertise in
            React development alongside backend Node.js <br /> and MongoDB, I
            thrive on building robust, efficient, and user-friendly
            applications.
          </p>
          <button className="border-slate-500 shadow-md bg-red-600 text-gray-300 border p-1 rounded-lg mt-5 px-5 font-semibold">
            Contact
          </button>
        </div>
        <div>
          <div className="bg-green-200 w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[400px] lg:h-[400px] rounded-full flex justify-center items-center shadow-lg shadow-red-200">
            <img
              src={image}
              alt="Abhishek"
              className="h-[237px] md:h-[285px] lg:h-[380px] mt-4 md:mt-4 lg:mt-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
