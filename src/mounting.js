import React, { useState } from "react";

function Mounting() {
  const [state] = useState("state:false");
  function submit(event) {
    // setState("updated");
    console.log(event);
  }
  return (
    <div>
      <button onClick={(e) => submit(e)}>click here</button>
      {state && <button>show button</button>}
    </div>
  );
}
export default Mounting;
