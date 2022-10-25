import React, { useEffect, useState } from "react";
import CoursesList from "./CoursesList";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-orange-500 font-mono my-5 text-center">
        Explore Our Courses
      </h1>
      <div className="flex flex-col gap-5 px-2">
        {courses.map((course) => (
          <CoursesList key={course.id} course={course}></CoursesList>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
