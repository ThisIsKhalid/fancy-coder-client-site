import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import CourseDetails from './RightSideDetails/CourseDetails';

const Courses = () => {
    const course = useLoaderData();

    return (
      <div className="grid grid-cols-4">
        <LeftSideNav></LeftSideNav>
        <div className="border border-blue-500 col-span-3">
          <CourseDetails key={course.id} course={course}></CourseDetails>
        </div>
      </div>
    );
};

export default Courses;