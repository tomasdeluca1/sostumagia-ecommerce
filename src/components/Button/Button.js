import React, { useState } from "react";
import "./button.css";

const Button = ({ accion, label, background, fontColor }) => {
  // console.log(accion);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <button
        onClick={accion}
        className="defaultButton"
        style={{
          backgroundColor: isHovering ? background : "",
          color: isHovering ? fontColor : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
