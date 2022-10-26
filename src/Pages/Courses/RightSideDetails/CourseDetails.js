import React from "react";
import {
  FaBook,
  FaBuromobelexperte,
  FaCertificate,
  FaHourglassStart,
  FaPrint,
  FaSignal,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { img, title, ratings, enrolled, views, description, time, level } =
    course;

  return (
    <div className="sm:pl-5">
      <img src={img} alt="" />
      <div className="flex items-center">
        <h1 className="text-5xl text-cyan-500 font-bold mr-5">{title}</h1>
        <button>
          <FaPrint />
        </button>
      </div>
      <div className="flex items-center gap-5 text-lg">
        <p className="flex text-orange-400">
          <span>
            <FaStar></FaStar>
          </span>
          <span>
            <FaStar></FaStar>
          </span>
          <span>
            <FaStar></FaStar>
          </span>
          <span>
            <FaStarHalfAlt></FaStarHalfAlt>
          </span>
        </p>
        <p className="text-purple-500">{ratings}</p>
        <p className="text-gray-700">{enrolled} alreadey enrolled.</p>
      </div>
      <div className="mt-10 text-gray-700">
        <h2 className="text-2xl">About this Course</h2>
        <p>
          <small>{views} recent views</small>
        </p>
        <p className="my-3">{description}</p>
      </div>
      <div className="w-3/4 text-gray-700 my-5">
        <div className="h-14 flex items-center ">
          <p className="border p-2 rounded-full border-gray-400 mr-2 text-orange-400">
            <FaBuromobelexperte />
          </p>
          <p>Flexible deadlines</p>
        </div>
        <div className="h-14 flex items-center ">
          <p className="border p-2 rounded-full border-gray-400 mr-2 text-orange-400">
            <FaCertificate />
          </p>
          <p>Shareable Certificate</p>
        </div>
        <div className="h-14 flex items-center ">
          <p className="border p-2 rounded-full border-gray-400 mr-2 text-orange-400">
            <FaSignal />
          </p>
          <p>{level} Level</p>
        </div>
        <div className="h-14 flex items-center ">
          <p className="border p-2 rounded-full border-gray-400 mr-2 text-orange-400">
            <FaHourglassStart />
          </p>
          <p>Approx. {time} hours to complete</p>
        </div>
        <div className="h-14 flex items-center ">
          <p className="border p-2 rounded-full border-gray-400 mr-2 text-orange-400">
            <FaBook />
          </p>
          <p>English</p>
        </div>
      </div>
      <button className="bg-yellow-400 hover:bg-yellow-600 px-2 py-2 rounded-lg text-gray-100 mr-3">
        Enroll Now ( free )
      </button>
      <Link to='/checkout' className="bg-blue-400 hover:bg-blue-600 px-2 py-2 rounded-lg text-gray-100">
        Get premium access
      </Link>
    </div>
  );
};

export default CourseDetails;
