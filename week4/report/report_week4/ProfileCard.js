// ProfileCard.js
import React from "react";

const ProfileCard = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl text-center transition transform hover:scale-105 duration-300">
      {/* imageUrl을 사용하여 이미지를 표시 */}
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold mt-3 text-gray-800">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default ProfileCard;
