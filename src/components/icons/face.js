import React from "react";

export const Face = (props) => {
  const color = props.color ? props.color : "#fff";
  const width = props.width ? props.width : 45;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      //   height="96.42"
      viewBox="0 0 88.434 96.42"
    >
      <g
        id="arrow_2_"
        data-name="arrow (2)"
        transform="translate(224.44 -289.374)"
      >
        <g id="Group_8403" data-name="Group 8403" transform="translate(6 -11)">
          <path
            id="Path_51782"
            data-name="Path 51782"
            d="M261.025,230.132a3.9,3.9,0,1,0-3.9-3.9A3.912,3.912,0,0,0,261.025,230.132Z"
            transform="translate(-432 118.332)"
            fill={color}
          />
          <path
            id="Path_51783"
            data-name="Path 51783"
            d="M214.577,230.132a3.9,3.9,0,1,0-3.9-3.9A3.912,3.912,0,0,0,214.577,230.132Z"
            transform="translate(-415.66 118.332)"
            fill={color}
          />
          <path
            id="Path_51784"
            data-name="Path 51784"
            d="M224.888,265.9a1.686,1.686,0,0,0-.4,2.647c2.609,2.865,8.2,4.644,14.58,4.644s11.978-1.78,14.577-4.647a1.687,1.687,0,0,0-.406-2.648,3.847,3.847,0,0,0-3.7-.236,29.8,29.8,0,0,1-20.95,0A3.845,3.845,0,0,0,224.888,265.9Z"
            transform="translate(-425 100.072)"
            fill={color}
          />
          <path
            id="Path_51785"
            data-name="Path 51785"
            d="M199.022,245.678A43.2,43.2,0,0,0,182.933,257.4h69.69a43.191,43.191,0,0,0-17.154-12.144A44.2,44.2,0,1,0,190,170.04a14.117,14.117,0,0,1-6.8-5.275,12.955,12.955,0,0,0,3.984,7.609c-.346.312-.681.636-1.018.96a14.382,14.382,0,0,1-7.046-3.694,12.776,12.776,0,0,0,4.688,6.134,44.163,44.163,0,0,0,15.215,69.9ZM188.43,181.649c4.787,4.408,15.675,7.488,28.347,7.488s23.56-3.08,28.349-7.488a36.872,36.872,0,1,1-56.7,0Z"
            transform="translate(-403 139.396)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};
