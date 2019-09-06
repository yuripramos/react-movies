import React from "react";
/*eslint-disable*/

function Star({ width, height, color }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      width={width}
      height={height}
    >
      <g>
        <g opacity="0.3">
          <polygon
            className="ls-Rating-fill1"
            fill="#231F20"
            points="19.4,31 7.9,37 10.1,24.2 0.8,15.1 13.7,13.3 19.4,1.6 25.1,13.3 38,15.1 28.7,24.2 30.9,37        "
          />
        </g>
        <g>
          <polygon
            className="ls-Rating-fill"
            fill={color ? color : "#D0D2D3"}
            points="20.4,32 8.9,38 11.1,25.2 1.8,16.1 14.7,14.3 20.4,2.6 26.1,14.3 39,16.1 29.7,25.2 31.9,38        "
          />
        </g>
      </g>
    </svg>
  );
}

export default Star;
