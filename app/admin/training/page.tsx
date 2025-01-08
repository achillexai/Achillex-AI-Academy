import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 text-center mb-4">
        Coming Soon
      </h1>
      <p className="text-3xl md:text-4xl font-semibold text-primary animate-pulse">
        Will be released in v2.0
      </p>
      <div className="mt-8 text-gray-600 text-xl">
        Model Training & Management
      </div>
    </div>
  );
};

export default page;
