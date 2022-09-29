import React, { useState } from "react";
import Data from "./data";
import Accordion from "./Accordion";

const App = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <h1>React Accordion</h1>
      <div className="container">
        <div className="accordionBlock">
          {Data.map((val) => {
            return (
              <>
                <Accordion {...val} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
