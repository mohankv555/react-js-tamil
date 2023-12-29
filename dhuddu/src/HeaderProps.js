import React from "react";

const HeaderOtherWay = (props) => {
  const headerStyleUsingJs = {
    backgroundColor: "mediumblue",
    color: "green",
  };

  return (
    <div>
      Header
      <header style={headerStyleUsingJs}>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
};

// ......................
const Header = ({ title }) => {
  const headerStyleUsingJs = {
    backgroundColor: "mediumblue",
    color: "green",
  };

  return (
    <div>
      Header
      <header style={headerStyleUsingJs}>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

Header.defaultProps = { title: "to do list default" };
export default Header;
