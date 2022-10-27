import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = () => {
  const course = useLoaderData();
  const {title, price, img} = course;

  const handleCart = () => {
    toast.success('Thank You for Buying this Course!!')
  }

  return (
    <section className=" text-gray-900 py-10 bg-teal-900">
      <div className="">
        <h1 className="text-center text-3xl font-bold  text-orange-500 mb-5">Premium Version</h1>
      </div>
      <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 text-gray-900 md:w-1/2 mx-auto">
        <div>
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">
            ${price}
          </h1>
        </div>
        <p className="leading-relaxed text-4xl font-bold font-mono">
          {title}
        </p>
        <button
        onClick={handleCart}
          className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-800 text-violet-400"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default CheckOut;
