import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";

export default function Education() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-medium text-center shadow-lg shadow-green-400 rounded-lg p-3 text-gray-200 my-20">
          EDUCATION
        </h1>
      </div>
      <div className="m-3">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3F826D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #3F826D" }}
            date="2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-semibold text-md">
                  Bachelor of Technology (BTech)
                </span>
                <span className="text-sm">
                  Computer Science and Engineering
                </span>
              </div>
              <div className=" flex justify-between items-center">
                <span>Grade - 8.12 CGPA</span>
              </div>
            </div>
            <h3 className="vertical-timeline-element-title font-bold mt-8">
              JSS Academy of Technical Education, Noida
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Noida, Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#E2725B", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid #E2725B" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-semibold text-md">
                  Senior Secondary Education
                </span>
                {/* <span className="text-sm">Science</span> */}
              </div>
              <div className=" flex justify-between items-center">
                <span>Grade - 96 %</span>
              </div>
            </div>
            <h3 className="vertical-timeline-element-title font-bold mt-8">
              S R Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Orai, Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3F826D", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid #3F826D" }}
            date="2016 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-semibold text-md">
                  Secondary School Education
                </span>
                {/* <span className="text-sm">Science</span> */}
              </div>
              <div className=" flex justify-between items-center">
                <span>Grade - 93 %</span>
              </div>
            </div>
            <h3 className="vertical-timeline-element-title font-bold mt-8">
              S R Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Orai, Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
