import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HtmlQues from "./components/HtmlQues";
import JsQues from "./components/JsQues";
import CssQues from "./components/CssQues";

const App = () => {
  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Welcome to the{" "}
          <span className="font-bold text-blue-600">Frontend Quiz!</span>
        </h1>
        <p className="mt-2 text-gray-600">Pick a subject to get started.</p>
      </div>
      <div>
        <BrowserRouter>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/html" className="text-blue-600 hover:underline">
                HTML
              </Link>
            </li>
            <li>
              <Link to="/js" className="text-blue-600 hover:underline">
                JavaScript
              </Link>
            </li>
            <li>
              <Link to="/css" className="text-blue-600 hover:underline">
                CSS
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/js" element={<JsQues />} />
            <Route path="/css" element={<CssQues />} />
            <Route path="/html" element={<HtmlQues />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
