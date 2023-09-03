import React, { useEffect } from "react";
import { useApp } from "../../context/app";

const Logout = () => {
  const [, setdata] = useApp();
  useEffect(setdata, []);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 w-100 h-100 flex flex-col justify-center items-center">
      <span className="text-2xl font-semibold text-gray-900 dark:text-white">
        Logged out successfully
      </span>
      <a
        href={`${window.location.origin}${window.location.pathname}`}
        className="py-4"
      >
        <span className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Login Here
        </span>
      </a>
    </div>
  );
};

export default Logout;
