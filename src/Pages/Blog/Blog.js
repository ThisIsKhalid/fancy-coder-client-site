import React from "react";

const BlogDetails = ({ blog }) => {
  const { title, description } = blog;
  return (
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-800  mb-10">
      <div className="mt-3">
        <h1 className="text-2xl font-bold hover:underline">{title} ?</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
