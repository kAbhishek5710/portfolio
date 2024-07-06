import React from "react";
import img1 from "../assets/proj/house_Img.jpg";
import img2 from "../assets/proj/weather.png";
import img3 from "../assets/proj/netflix.png";
import video1 from "../assets/proj/video1.mp4";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <Element name="project" className="element">
        <div className="relative h-auto">
          <div className="flex flex-col items-center h-full w-full ">
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-56 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                My Projects
              </h1>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-300">
                "From Concept to Completion: My Project Journey"
              </h3>
            </div>
            {/* lower */}
            <div className="flex justify-center flex-wrap items-center mt-16 gap-4 text-white">
              <div className="w-[250px] h-[300px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-teal-600 rounded-xl shadow-sm shadow-teal-100 w-full h-full overflow-hidden">
                    <img
                      src={img1}
                      className="h-full w-full overflow-hidden"
                    ></img>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full border-teal-600 rounded-xl shadow-sm shadow-teal-100 bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-16">
                      <h1 className="text-2xl font-bold">MERN PROJECTS</h1>
                      <p className="text-sm text-semibold text-center mt-3">
                        Our MERN (MongoDB, Express.js, React.js, Node.js)
                        projects showcase the power and versatility of the
                        modern web development stack.{" "}
                      </p>
                      <Link
                        to={"#"}
                        className="flex justify-center"
                      >
                        <button className="bg-teal-500 px-6 py-2 mt-4 font-semibold text-white rounded-full absolute -bottom-12 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-105">
                          See All Projects
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[250px] h-[300px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-teal-600 rounded-xl shadow-sm shadow-teal-100 w-full h-full overflow-hidden">
                    <img
                      src={img2}
                      className="h-full w-full overflow-hidden"
                    ></img>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full border-teal-600 rounded-xl shadow-sm shadow-teal-100 bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-16">
                      <h1 className="text-2xl font-bold">REACTJS PROJECTS</h1>
                      <p className="text-sm text-semibold text-center mt-3">
                        Discover our collection of ReactJS projects showcasing
                        modern web development at its finest.
                      </p>
                      <Link
                        to={"/#"}
                        className="flex justify-center"
                      >
                        <button className="bg-teal-500 px-6 py-2 mt-4 font-semibold text-white rounded-full absolute -bottom-12 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-105">
                          See All Projects
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[250px] h-[300px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-teal-600 rounded-xl shadow-sm shadow-teal-100 w-full h-full overflow-hidden">
                    <img
                      src={img3}
                      className="h-full w-full overflow-hidden"
                    ></img>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full border-teal-600 rounded-xl shadow-sm shadow-teal-100 bg-gray-100 overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-16">
                      <h1 className="text-2xl font-bold">
                        HTML CSS JS PROJECTS
                      </h1>
                      <p className="text-sm text-semibold text-center mt-3">
                        Embark on your journey into the world of web design and
                        development with our curated HTML, CSS, and JavaScript
                        projects.
                      </p>
                      <Link
                        to={"/#"}
                        className="flex justify-center"
                      >
                        <button className="bg-teal-500 px-6 py-2 mt-4 font-semibold text-white rounded-full absolute -bottom-12 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-105">
                          See All Projects
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
