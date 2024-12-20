import React from "react";
import { Link } from "react-router-dom";

const LogoNavBar = ({ className }) => {
  return (
    <div className="rounded-full overflow-hidden w-24 h-24 object-cover border-2 border-[#fed5d5] shadow-lg">
      <Link to="/">
        <img
          src="../../sos-tu-magia.png"
          className={`${className} rounded-full object-cover`}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default LogoNavBar;
