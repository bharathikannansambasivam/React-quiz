import React, { useState } from "react";
import { Link } from "react-router-dom";
import quiz from "./quiz.png";
function Navbar() {
  const [tog, settog] = useState(true);

  const toggleMenu = () => {
    settog(!tog);
  };
  return (
    <div className=" flex justify-between p-3 cursor-pointer   text-lg font-abc">
      <div>
        <Link to="/" className=" ">
          <img src={quiz} className="h-20" />
        </Link>
      </div>
      <div
        onClick={toggleMenu}
        className=" absolute top-10 right-10 smm:hidden "
      >
        <svg
          className="w-8 h-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div
        className={`flex ${
          tog ? "hidden " : "block"
        } items-center flex-col  smm:flex smm:flex-row p-5 absolute right-0 bg-gray-200 rounded-lg top-20 smm:block smm:bg-slate-300 smm:top-2 smm:gap-3  `}
      >
        {" "}
        <Link to="/html" className=" ">
          HTML
        </Link>
        <Link to="/js" className=" ">
          JAVASCRIPT
        </Link>
        <Link to="/css" className=" ">
          CSS
        </Link>
        <Link to="/react" className=" ">
          REACT
        </Link>
        <Link to="/answer" className=" ">
          Answers🤫
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
