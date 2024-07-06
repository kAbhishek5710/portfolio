import React from "react";

export default function SkillRep({ img, techName }) {
  return (
    <div className="flex flex-col justify-center gap-1 items-center">
      <img
        src={img}
        alt="HTML5"
        className="w-20 h-20 bg-gray-200 border transpa rounded-full p-2 py-1"
      />
      <span className="text-neutral-300 font-semibold text-lg">{techName}</span>
    </div>
  );
}
