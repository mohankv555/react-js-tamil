import React from "react";
import { useState } from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["earn", "grow", "give"];
    const int = Math.floor(Math.random() * 3);

    return names[int];
  }

  const [count, setCount] = useState(99); // 99 is default value

  function oldIncrementFunction() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  function incrementFunction() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function decrementFunction() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main>
      <button onClick={() => decrementFunction()}>-</button>
      <span>{count}</span>
      <button onClick={() => incrementFunction()}>+</button>
    </main>
  );
};

export default Content;
