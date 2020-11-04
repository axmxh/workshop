import React from "react";

export const Eye = (props) => {
  const color = props.color ? props.color : "#fff";
  const width = props.width ? props.width : 45;
  return (
    <svg
      id="Show_Hide_password"
      data-name="Show/Hide password"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      //   height="45"
      viewBox="0 0 73 45"
    >
      <path
        id="ic_remove_red_eye_24px"
        d="M37.5,4.5C20.909,4.5,6.74,13.83,1,27,6.74,40.17,20.909,49.5,37.5,49.5S68.26,40.17,74,27C68.26,13.83,54.091,4.5,37.5,4.5Zm0,37.5c-9.158,0-16.591-6.72-16.591-15S28.342,12,37.5,12s16.591,6.72,16.591,15S46.658,42,37.5,42Zm0-24c-5.508,0-9.955,4.02-9.955,9s4.446,9,9.955,9,9.955-4.02,9.955-9S43.008,18,37.5,18Z"
        transform="translate(-1 -4.5)"
        fill={color}
      />
    </svg>
  );
};
