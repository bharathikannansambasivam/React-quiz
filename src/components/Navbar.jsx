import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-100 flex justify-between p-3">
      <div>
        <Link to="/" className=" ">
          QUIZ
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to="/html" className=" ">
          HTML
        </Link>
        <Link to="/js" className=" mb-4">
          JAVASCRIPT
        </Link>
        <Link to="/css" className=" mb-4">
          CSS
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
