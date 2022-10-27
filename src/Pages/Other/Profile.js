import React, { useContext } from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="bg-teal-900 py-20">
      <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100 mx-auto rounded-md">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <span className="text-sm text-gray-400">Wev Developer</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <span><BsFillEnvelopeFill></BsFillEnvelopeFill></span>
              <span className="text-gray-400">{user?.email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaPhone/>
              <span className="text-gray-400">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
