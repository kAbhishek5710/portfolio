import React from "react";
import { useRef } from "react";
import gif1 from "../assets/proj/gif1.gif";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, Element } from "react-scroll";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_61ad6ex", "template_sjkpmoj", form.current, {
        publicKey: "ZiMuY9NtNszoGAfsh",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <>
      <Element name="contact" className="element">
        <div className="mt-20 mb-20 flex items-center justify-center w-full h-auto">
          <div className="flex flex-col items-center w-5/6 backdrop-brightness-75 shadow-xl shadow-gray-600">
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-66 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                Contact Details
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full md:flex-row items-center sm:flex-col xs lg:gap-2 p-4 mt-10">
              {/* left */}
              {/* <Rotate> */}
              <div className="relative lg:w-3/6 md:w-3/6 sm:w-full flex items-center justify-center">
                <div className="flex flex-col lg:flex-col md:flex-col sm:flex-col items-center justify-center p-2">
                  <div className="flex gap-2 items-center mb-2">
                    <h6 className=" text-xl font-semibold text-orange-400">
                      Contact with -
                    </h6>
                    <a
                      href="https://www.instagram.com/its_me.abhishek_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        color="white"
                        size={20}
                        className="text-white hover:scale-125 cursor-pointer"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kabhishek5710/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        color="white"
                        size={20}
                        className="text-white hover:scale-125 cursor-pointer"
                      />
                    </a>
                    <a
                      href="https://github.com/kAbhishek5710"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        color="white"
                        size={20}
                        className="text-white  hover:scale-125 cursor-pointer"
                      />
                    </a>
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="border-1 border-white w-16 h-0 " />
                    <small className="text-lg font-semibold text-yellow-300 ">
                      OR
                    </small>
                    <div className="border-1 border-white w-16 h-0 shadow-xl" />
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex justify-center items-center flex-col w-82">
                      <div className="p-2">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="h-8 p-2 lg:w-80 md:w-56 sm:w-56 rounded-lg outline-none"
                          required
                        ></input>
                      </div>

                      <div className="p-2">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter your Email"
                          className="lg:w-80 md:w-56 sm:w-56 h-8 p-2 rounded-lg outline-none"
                          required
                        ></input>
                      </div>

                      <div className="p-2">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="lg:w-80 md:w-56 sm:w-56 h-28 p-2 rounded-lg outline-none"
                          required
                        ></textarea>
                      </div>

                      {/* <div className=" flex items-center mt-2 mb-10 justify-center bg-blue-500 w-36 p-2 rounded-lg"> */}
                      <button
                        className="relative text-md font-semibold border text-blue-500 w-40 p-2 rounded-md bg-transparent uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border-0 before:hover:scale-x-100"
                        type="submit"
                        value="Send"
                      >
                        Send Message
                      </button>
                      {/* </div> */}
                    </div>
                  </form>
                </div>
              </div>
              {/* </Rotate> */}
              {/* right */}
              <div className="flex">
                <img
                  src={gif1}
                  alt="Your GIF"
                  className="relative lg:w-[350px] md:w-[330px] sm:w-[300px] w-[300px] lg:-mt-10 md:-mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
      <ToastContainer />
    </>
  );
}
