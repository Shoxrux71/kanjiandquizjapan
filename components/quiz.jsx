import React from 'react';

const QuizComponent = () => {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100 px-4">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">QUIZ N5</h1>

      {/* Question Box */}
      <div className="bg-white shadow-md rounded-lg px-8 py-4 mb-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700">SAVOLLAR: 15</h2>
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-md">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            className="bg-white shadow-md text-xl font-bold rounded-full w-20 h-20 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 ease-in-out"
          >
            A
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        <span>NEXT</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
// https://www.youtube.com/watch?v=UX5HIrxbRUc
export default QuizComponent;
