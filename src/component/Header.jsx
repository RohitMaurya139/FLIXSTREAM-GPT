import React from "react";
import { SVG_D } from "../utils/Constants";
const Header = () => {
  return (
    <div className="absolute top-4 left-4 z-50 px-6 py-2">
      <svg
        viewBox="0 0 111 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="w-36 h-auto"
      >
        <g fill="#E50914">
          <path
            d={SVG_D}
            fill="rgb(229, 9, 20)"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Header;
