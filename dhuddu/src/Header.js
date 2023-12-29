import React from "react";

const Header = () => {
  const headerStyleUsingJs = {
    backgroundColor: "mediumblue",
    color: "green",
  };

  return (
    <div>
      Header
      <header style={headerStyleUsingJs}>
        <h1>to do list header</h1>
      </header>
    </div>
  );
};

export default Header;
