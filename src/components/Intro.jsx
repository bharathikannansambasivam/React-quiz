import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="mx-auto max-w-lg p-4 flex flex-col h-screen justify-center items-center">
      <div className="text-center mb-8 ">
        <h1 className="text-3xl font-bold">
          Welcome to the{" "}
          <span className="font-bold text-blue-600">Frontend Quiz!</span>
        </h1>
        <p className="mt-2 text-gray-800 text-lg">
          Pick a subject to get started.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/html" className=" mb-4">
          <div className="flex  bg-gray-900 items-center p-2 min-w-64 rounded-lg gap-5 text-white hover:bg-slate-500  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
              className="rounded bg-orange-100"
            >
              <path
                fill="#FF7E35"
                d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z"
              />
            </svg>{" "}
            <p> HTML </p>{" "}
          </div>
        </Link>
        <Link to="/js" className=" mb-4">
          <div
            className="flex 
          bg-gray-900 items-center p-2 min-w-64 rounded-lg  text-white hover:bg-slate-500  gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
              className="bg-blue-100 rounded"
            >
              <path
                fill="#306AFF"
                d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z"
              />
            </svg>
            <p> JAVASCRIPT </p>{" "}
          </div>
        </Link>
        <Link to="/css" className=" mb-4">
          <div className="flex  bg-gray-900 items-center p-2 min-w-64 rounded-lg gap-5 text-white hover:bg-slate-500  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
              className="rounded bg-green-100"
            >
              <path
                fill="#2FD887"
                d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z"
              />
            </svg>
            <p> CSS </p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
