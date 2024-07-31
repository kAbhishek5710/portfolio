import React from "react";
import SkillRep from "../components/SkillRep";
import java from "../assets/skills/java.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/java-script.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import react from "../assets/skills/react.png";
import mongodb from "../assets/skills/mongodb.jpg";
import tailwind from "../assets/skills/tailwind-css.jpg";
import bootstrap from "../assets/skills/bootstrap.jpg";
import C from "../assets/skills/C.jpg";
import sql from "../assets/skills/database.png";

export default function Skills() {
  return (
    <div className="mt-20 backdrop-brightness-75 mx-8 md:mx-20 shadow-lg shadow-red-200 ">
      <div className="flex justify-center font-3xl">
        <h1 className="text-4xl font-medium text-center shadow-lg shadow-green-400 rounded-lg p-3 text-gray-200 mt-20">
          Skills
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10 lg:gap-20 items-center m-20 max-w-sm md:max-w-xl lg:max-w-6xl backdrop-brightness-75 pb-12 md:px-18 md:pb-16 lg:px-32 lg:pb-20  mx-auto">
        <SkillRep img={C} techName={"C"} />
        <SkillRep img={java} techName={"JAVA"} />
        <SkillRep img={html} techName={"HTML"} />
        <SkillRep img={css} techName={"CSS"} />
        <SkillRep img={javascript} techName={"JavaScript"} />
        <SkillRep img={react} techName={"ReactJS"} />
        <SkillRep img={nodejs} techName={"NodeJS"} />
        <SkillRep img={express} techName={"ExpressJS"} />
        <SkillRep img={mongodb} techName={"MongoDB"} />
        <SkillRep img={sql} techName={"SQL"} />
        <SkillRep img={tailwind} techName={"Tailwind CSS"} />
        <SkillRep img={bootstrap} techName={"Bootstrap"} />
      </div>
    </div>
  );
}
