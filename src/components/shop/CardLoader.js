import React from "react";

function CardLoader() {
  return (
    <div
      className="
      border 
      border-gray-300 
      shadow 
      rounded-md 
      p-4 max-w-sm 
      w-full mx-auto"
    >
      <div className="flex flex-col space-y-2">
        <div className="bg-gray-300 rounded w-full h-60"></div>
        <div className="space-y-2 w-full">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLoader;
