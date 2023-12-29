import React from "react";
import { useState } from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["earn", "grow", "give"];
    const int = Math.floor(Math.random() * 3);
    console.log(names[int]);

    return names[int];
  }

  function newHandleNameChange() {
    const names = ["earn", "grow", "give"];
    const int = Math.floor(Math.random() * 3);
    console.log(names[int]);

    return setName((oldName) => names[int]);
  }

  const [name, setName] = useState("default"); // default is default value

  function changeName() {
    setName((prevName) => handleNameChange());
  }

  return (
    <main>
      <p>follow the quote {name}</p>
      <button onClick={() => changeName()}> change name</button>
      {/*  this also working */}
      <button onClick={() => newHandleNameChange()}> change name</button>{" "}
      {/*  this also working */}
    </main>
  );
};

export default Content;
