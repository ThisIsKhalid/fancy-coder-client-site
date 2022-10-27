import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({course}) => {
    const { id, category, } = course;

    return (
      <Link
        to={`/course/${id}`}
        className="shadow-md bg-gray-200 hover:bg-cyan-400 md:my-2 md:mx-4 rounded-md p-2"
      >
        <h1 className="text-xl font-mono font-bold text-gray-700">
          {category}
        </h1>
      </Link>
    );
};

export default LeftSideNav;