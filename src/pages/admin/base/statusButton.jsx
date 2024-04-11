import React, { useState } from "react";

const StatusButton = ({ status }) => {
  const [isActive, setIsActive] = useState(status === "1");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`${isActive ? "bg-green-500" : "bg-gray-300"} 
      px-4 py-2 rounded-md text-white font-bold`}
    >
      {isActive ? "Active" : "Unactive"}
    </button>
  );
};

export default StatusButton;
