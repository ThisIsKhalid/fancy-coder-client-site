import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogDetails from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  
  return (
    <div className="bg-teal-900 text-gray-100 py-20">
      <div className="">
        {blogs.map((blog) => (
          <BlogDetails key={blog.id} blog={blog}></BlogDetails>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
