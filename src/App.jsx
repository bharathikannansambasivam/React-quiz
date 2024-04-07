import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import components for each quiz
import HtmlQues from "./components/HtmlQues";
import JsQues from "./components/JsQues";
import CssQues from "./components/CssQues";
import IntroPage from "./components/Intro";
import Navbar from "./components/Navbar";

<IntroPage />;

// App component
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/html" element={<HtmlQues />} />
          <Route path="/js" element={<JsQues />} />
          <Route path="/css" element={<CssQues />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
