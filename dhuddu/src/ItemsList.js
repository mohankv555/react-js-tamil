import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./LineItem";

const ItemsList = ({ items, setItem, handleChange, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.key}
          item={item}
          setItem={setItem}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
