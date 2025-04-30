import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onCLickEnter = () => {
    setMessage("안녕하세요");
  };
  const onCLickLeave = () => {
    setMessage("안녕히 가세요");
  };

  return (
    <div>
      <button
        onClick={() => {
          onCLickEnter();
        }}
      >
        입장
      </button>
      <button
        onClick={() => {
          onCLickLeave();
        }}
      >
        퇴장
      </button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
