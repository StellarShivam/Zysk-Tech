import React from "react";

const Trial = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center justify-center px-4 py-24">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Start your free trial
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        <div className="flex flex-col-reverse sm:flex-row justify-center gap-4">
          <button className="px-6 py-4 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Learn more
          </button>

          <button className="px-6 py-4 font-semibold text-white bg-defaultPurple rounded-lg hover:bg-defaultTextPurple transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
