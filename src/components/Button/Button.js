import React, { useState } from "react";
import "./button.css";

const Button = ({
  accion,
  label,
  background,
  fontColor,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  width,
}) => {
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
          borderTopLeftRadius: topLeft,
          borderTopRightRadius: topRight,
          borderBottomLeftRadius: bottomLeft,
          borderBottomRightRadius: bottomRight,
          width: width,
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
