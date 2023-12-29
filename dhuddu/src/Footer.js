import React from "react";

const Footer = ({ length }) => {
  const year = new Date();

  return (
    <footer>
      {length === 1 ? "Item" : "Items"} length is {length} copyright &copy;{" "}
      {year.getFullYear()}
    </footer>
  );
};

export default Footer;
