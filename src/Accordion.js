import React, { useState } from "react";

const Accordion = ({ quastion, answer }) => {
  const [text, setText] = useState(false);

  const displaed = () => {
    setText(!text);
  };
  return (
    <>
      <div className="quastion">
        <h2>{quastion}</h2>
        <p onClick={displaed}>+ </p>
      </div>
      <div className="answers">{text && <p>{answer}</p>}</div>
    </>
  );
};
export default Accordion;
