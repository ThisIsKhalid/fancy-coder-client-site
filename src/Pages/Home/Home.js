import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import coder from "../../Assets/coder.json";
import Report from "./Report";
import GetUpdate from "./GetUpdate";

const Home = () => {
  return (
    <div>
      <div className="bg-orange-50">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center">
          <div className="pl-5 sm:pl-0">
            <h1 className="text-5xl font-mono font-semibold text-blue-500">
              Learn <span className="text-orange-500">Without</span> Limits
            </h1>
            <h3 className="text-2xl text-gray-700 font-medium">
              Your Career in Web Development Starts Here
            </h3>
            <p className="text-lg">
              Our full stack curriculum is free and supported by a passionate
              open source community.
            </p>
            <div className="my-5 inline-block">
              <Link
                to="/courses"
                className="bg-blue-400 hover:bg-blue-600 px-5 py-3 rounded-md text-white text-lg font-medium flex items-center"
              >
                <span className="mr-3">Courses</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <Lottie className="h-96" animationData={coder} loop={true} />;
          </div>
        </div>
      </div>
      <Report></Report>
      <GetUpdate></GetUpdate>
    </div>
  );
};

export default Home;
