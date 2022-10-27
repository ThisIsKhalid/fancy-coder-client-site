import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import RightSideCard from "./RightSideCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="bg-cyan-50 py-10">
      <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-2">
        <div className=" flex sm:flex-col flex-wrap gap-3">
          {courses.map((course) => (
            <LeftSideNav key={course.id} course={course}></LeftSideNav>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 sm:col-span-3 lg:col-span-4 mt-10 sm:mt-0">
          {courses.map((course) => (
            <RightSideCard key={course.id} course={course}></RightSideCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
