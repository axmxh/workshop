import React from "react";

export const Sort = (props) => {
  const color = props.color ? props.color : "#fff";
  const width = props.width ? props.width : 15;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 17.324 23.099"
    >
      <g id="sort" transform="translate(-14 -8)">
        <path
          id="Path_51534"
          data-name="Path 51534"
          d="M22.38,11.651,19.012,8.282a.962.962,0,0,0-1.361,0l-3.369,3.369a.962.962,0,0,0,1.361,1.361l1.726-1.726v18.85a.962.962,0,1,0,1.925,0V11.286l1.726,1.726a.962.962,0,0,0,1.361-1.361Z"
          transform="translate(0 0)"
          fill={color}
        />
        <path
          id="Path_51535"
          data-name="Path 51535"
          d="M40.38,26.087a.962.962,0,0,0-1.361,0l-1.726,1.726V8.962a.962.962,0,1,0-1.925,0v18.85l-1.726-1.726a.962.962,0,1,0-1.361,1.361l3.369,3.369a.962.962,0,0,0,1.361,0l3.369-3.369A.962.962,0,0,0,40.38,26.087Z"
          transform="translate(-9.338)"
          fill={color}
        />
      </g>
    </svg>
  );
};
