import React from "react";

const Toogle = () => {
  return (
    <label
      htmlFor="Toggle1"
      className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
    >
      <span>Dark</span>
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" />
        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
      </span>
      <span>Light</span>
    </label>
  );
};

export default Toogle;
