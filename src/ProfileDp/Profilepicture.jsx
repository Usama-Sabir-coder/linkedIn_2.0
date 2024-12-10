import React from "react";

const Profilepicture = ({ src }) => {
  return (
    <div>
      <div className="cursor-pointer">
        <img
          src={src}
          alt="profile"
          className="rounded-full w-16 h-16 object-cover"
        />
      </div>
    </div>
  );
};

export default Profilepicture;
