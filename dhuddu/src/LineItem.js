import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ key, item, setItem, handleChange, handleDelete }) => {
  return (
    <li className="item" key={key}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleChange(item.id)}
      >
        {item.name}
      </label>
      <button>delete</button>
      <FaTrashAlt
        role="button"
        tabIndex={0}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
