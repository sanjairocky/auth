import React, { useEffect } from "react";
import { useApp } from "../../context/app";

const Applications = ({ apps, client_id }) => {
  const [data] = useApp();

  useEffect(() => {
    console.log(data?.apps, client_id, data?.apps?.[client_id]);
    if (data?.id_token && data?.apps?.[client_id]) {
      window.location.href =
        data?.apps?.[client_id] + "?id_token=" + data?.id_token;
    }
  }, [data, client_id]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-100 h-100 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/external-Login-web-hosting-smashingstocks-circular-smashing-stocks.png"
            alt="logo"
          />
          SSO Apps
        </a>
        <ul className="m-4 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {Object.entries(apps).map(([client_id, redirect]) => (
            <li key={client_id} className="p-3">
              <a
                href={redirect + "?id_token=" + data?.id_token}
                target="_blank"
                rel="noopener noreferrer"
              >
                {client_id}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`${window.location.origin}${window.location.pathname}?logout=true`}
        >
          <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Logout
          </button>
        </a>
      </div>
    </section>
  );
};

export default Applications;
