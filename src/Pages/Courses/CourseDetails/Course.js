import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import LeftSideDetails from "./LeftSideDetails/LeftSideDetails";

const Course = () => {
  const course = useLoaderData();

  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-4 my-5 gap-5">
      <div className="hidden sm:block">
        <LeftSideDetails></LeftSideDetails>
      </div>
      <div className="border-gray-300 border-l-4 lg:col-span-4 sm:col-span-3">
        <CourseDetails key={course.id} course={course}></CourseDetails>
      </div>
    </div>
    // <div className="my-5">
    //   <CourseDetails key={course.id} course={course}></CourseDetails>
    // </div>
  );
};

export default Course;
