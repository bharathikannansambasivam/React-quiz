import React, { useState } from "react";
import reactques from "../reactques";
import { useNavigate } from "react-router-dom";

function ReactQues() {
  const [quesIndex, setQuesIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currques = reactques[quesIndex];

  const nextques = (idx) => {
    if (currques.answerIndex == idx) {
      setscore(score + 1);
    }

    const nextques = quesIndex + 1;
    if (nextques < reactques.length) {
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
    <div>
      <div className="h-screen flex items-center justify-center">
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
          <div className="max-w-md mx-auto mt-10 bg-gray-500 p-4 rounded-md shadow-md">
            <p className="bg-gray-200 p-4 text-gray-800 font-semibold mb-4 rounded-t-md">
              {currques.question}
            </p>
            <ul className="bg-gray-300 p-4 rounded-b-md ">
              {currques.options.map((x, i) => {
                return (
                  <li
                    className="p-2 border border-gray-400 cursor-pointer hover:bg-gray-400 rounded-md mb-2"
                    onClick={() => nextques(i)}
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactQues;
