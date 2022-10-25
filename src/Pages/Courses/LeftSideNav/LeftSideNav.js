import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftSideNav = ({course}) => {
    const {id, category, ratings, img} = course;
    return (
      <Link to={`/courses/${id}`} className="rounded-md bg-cyan-300">
        <img className='p-1' src={img} alt="" />
        <div className='flex justify-between items-center pb-2 px-2'>
          <h1 className='text-xl font-bold text-gray-600'>{category}</h1>
          <p className='text-orange-500 font-semibold flex items-center gap-1'><FaStar/> {ratings}</p>
        </div>
      </Link>
    );
};

export default LeftSideNav;