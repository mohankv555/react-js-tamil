import React from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["earn", "grow", "give"];
    const int = Math.floor(Math.random() * 3);

    return names[int];
  }

  const handleClick = () => {
    console.log("success double click");
  };

  const handleClick2 = (name) => {
    console.log(`success click ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target); //<button>event button</button>
    console.log(e.target.innerText); //event button
  };

  return (
    <main>
      <p>lets {handleNameChange()}</p>
      {/* calling using 'anonymous function' then only it works  *************/}
      <button onClick={() => handleClick2("mohan")}>button</button>
      {/* ................................. */}
      <div />
      {/*  e stands for event */}
      <button onClick={(e) => handleClick3(e)}>event button</button> <div />
      <button onDoubleClick={() => handleClick()}> double click</button>
    </main>
  );
};

export default Content;
