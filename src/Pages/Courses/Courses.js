import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import CourseDetails from './RightSideDetails/CourseDetails';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
      <div className="grid grid-cols-4">
        <div className="border border-red-500">
          <h1 className="text-2xl font-semibold text-orange-500 font-mono">
            What you want to learn?
          </h1>
          <div className='flex flex-col gap-5 px-2'>
            {courses.map((course) => (
              <LeftSideNav key={course.id} course={course}></LeftSideNav>
            ))}
          </div>
        </div>
        <div className="border border-blue-500 col-span-3">
          <CourseDetails></CourseDetails>
        </div>
      </div>
    );
};

export default Courses;