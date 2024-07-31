import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex justify-center items-center gap-5 my-7 text-white text-2xl">
      <a
        href="https://www.linkedin.com/in/kabhishek5710/"
        target="_blank"
        className="hover:opacity-85 hover:text-xl"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/kAbhishek5710"
        target="_blank"
        className="hover:opacity-85 hover:text-xl"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:kabhishek5710@gmail.com"
        className="hover:opacity-85 hover:text-xl"
      >
        <IoMdMail />
      </a>
      <a
        href="https://www.instagram.com/its_me.abhishek_/"
        target="_blank"
        className="hover:opacity-85 hover:text-xl"
      >
        <FaInstagram className="" />
      </a>
      <a
        href="https://x.com/Mr_Abhishek001"
        target="_blank"
        className="hover:opacity-85 hover:text-xl"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100010292419502"
        target="_blank"
        className="hover:opacity-85 hover:text-xl"
      >
        <FaFacebook />
      </a>
    </div>
  );
}
