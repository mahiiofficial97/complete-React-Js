import React from "react";

function Card({ username, btnText = "visit me" }) {
  console.log(username);
  return (
    <div className="max-w-xs bg-black text-white rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-56 object-cover"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" // Replace with your image
        alt="Delba"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{username || "naman"}</h2>
        <p className="text-sm text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600 inline-flex items-center">
          {btnText || "submiit"}
          <span className="ml-2">→</span> {/* Arrow for extra styling */}
        </button>
      </div>
    </div>
  );
}

export default Card;
