import React from "react";

function Card({ title, price, image }) {
  return (
    <div className="flex flex-col rounded shadow-md py-5 space-y-2 bg-white">
      <div className="bg-white rounded-t-xl h-auto w-full flex justify-center">
        <img className="w-1/2" src={image} alt="" />
      </div>
      <div className="w-full px-5 space-y-1">
        <div className="w-full">
          <p className="text-2xl font-extralight">{title}</p>
        </div>
        <div className="inline-flex bg-yellow-200 rounded">
          <p className="text-3xl font-thin">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
