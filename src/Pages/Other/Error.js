import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnime from '../../Assets/error.json';

const Error = () => {
    const error = useRouteError();
    console.log(error); 
  return (
    <section className="flex items-center h-full sm:p-16 text-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-8 text-center sm:max-w-md">
        <Lottie className="h-72" animationData={errorAnime} loop={true} />;
        <p className="text-3xl font-bold text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
