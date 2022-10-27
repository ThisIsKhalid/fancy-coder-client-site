import React from "react";
import { toast } from "react-toastify";

const GetUpdate = () => {
    
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form =e.target;
    toast.success('Thanks for subscribing!!')
    form.reset();
  };

  return (
    <div className="w-full bg-gray-800">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100 pb-8">
          Get Our Updates
        </h1>
        <form onSubmit={handleSubscribe} className="flex flex-row">
          <input
            required
            type="email"
            name='email'
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-purple-400 text-gray-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetUpdate;
