import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ItemsList from "./ItemsList";

const Content = ({ items, setItem, handleChange, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          setItem={setItem}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p> your list is empty</p>
      )}
    </main>
  );
};

export default Content;
