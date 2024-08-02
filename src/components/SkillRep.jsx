import React from "react";

export default function SkillRep({ obj }) {
  return (
    <div className="flex flex-col justify-center gap-1 items-center">
      <img
        src={obj.img}
        alt="HTML5"
        className="h-12 w-12 md:w-16 lg:w-20 lg:h-20 md:h-16 bg-gray-200 border transpa rounded-full p-2 py-1"
      />
      <span className="text-neutral-300 font-semibold text-base md:text-lg">
        {obj.name}
      </span>
    </div>
  );
}
