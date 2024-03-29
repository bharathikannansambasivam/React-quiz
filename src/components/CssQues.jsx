import React, { useState } from "react";
import cssques from "../cssques";

const CssQues = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  const currques = cssques[quesIndex];
  const [score, setscore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const nextques = (i) => {
    if (currques.answerIndex === i) {
      setscore(score + 1);
    }
    const nextQ = quesIndex + 1;
    if (nextQ < cssques.length) {
      setQuesIndex(quesIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <h1 className="text-3xl text-center mt-10">Your Score: {score}</h1>
      ) : (
        <div className="max-w-md mx-auto mt-10 bg-gray-100 p-4 rounded-md shadow-md">
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
      )}
    </>
  );
};

export default CssQues;
