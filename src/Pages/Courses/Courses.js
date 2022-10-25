import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesList from './LeftSideNav/CoursesList';

const Courses = () => {
    const courses = useLoaderData();
    return (
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10 container mx-auto'>
        {courses.map((course) => (
          <CoursesList key={course.id} course={course}></CoursesList>
        ))}
      </div>
    );
};

export default Courses;