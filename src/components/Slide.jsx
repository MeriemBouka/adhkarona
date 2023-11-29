import React from "react";

export default function Slide(props) {
  return (
    <div>
      <div>
        <p>{props.invocations}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
}
