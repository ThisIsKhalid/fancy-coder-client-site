import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import CourseDetails from "./RightSideDetails/CourseDetails";

const CoursesDetails = () => {
  const course = useLoaderData();

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 mt-5 gap-5">
      <LeftSideNav></LeftSideNav>
      <div className="border-gray-300 border-l-4 lg:col-span-3 sm:col-span-2">
        <CourseDetails key={course.id} course={course}></CourseDetails>
      </div>
    </div>
  );
};

export default CoursesDetails;
