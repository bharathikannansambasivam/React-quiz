import React, { useState } from "react";
import htmlques from "../htmlques";
import { useNavigate } from "react-router-dom";

const HtmlQues = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  const currques = htmlques[quesIndex];
  const [score, setscore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const nextques = (i) => {
    if (currques.answerIndex === i) {
      setscore(score + 1);
    }
    const nextQ = quesIndex + 1;
    if (nextQ < htmlques.length) {
      setQuesIndex(quesIndex + 1);
    } else {
      setShowScore(true);
    }
  };
  const navigate = useNavigate();
  const reset = () => {
    navigate("/");
  };
  return (
    <>
      {showScore ? (
        <div class="flex flex-col justify-center items-center h-screen gap-5">
          <h1 class="text-3xl mt-10">Your Score: {score}</h1>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={reset}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto mt-10 bg-gray-500 p-4 rounded-md shadow-md">
            <p className="bg-gray-200 p-4 text-gray-800 font-semibold mb-4 rounded-t-md">
              {currques.question}
            </p>
            <ul className="bg-gray-300 p-4 rounded-b-md">
              {currques.options.map((x, i) => (
                <li
                  key={i}
                  onClick={() => nextques(i)}
                  className="p-2 border border-gray-400 cursor-pointer hover:bg-gray-400 rounded-md mb-2"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HtmlQues;
