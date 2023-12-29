import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ContentCheckedList from "./ContentCheckedList";
import HeaderProps from "./HeaderProps";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      name: "practise coding",
    },
    {
      id: 2,
      checked: true,
      name: "eat",
    },
    {
      id: 3,
      checked: false,
      name: "sleep",
    },
    {
      id: 4,
      checked: true,
      name: "meditate",
    },
  ]);

  const handleChange = (id) => {
    console.log(`id: ${id}`);
    const newItems = items
      //   .filter((item) => item.id === id)
      .map(
        (item) => (item.id === id ? { ...item, checked: !item.checked } : item) //***important */ 2hr:54 minutes
      );
    setItem(newItems);
  };

  const handleDelete = (id) => {
    console.log(` delete id: ${id}`);
    const newItems = items.filter((item) => item.id != id).map((item) => item);
    setItem(newItems);
  };

  // ........................

  return (
    // below is jsx code (javascipt and xml)
    <div className="App">
      {/* <Header /> */}
      <HeaderProps title="balachandar university" />
      <ContentCheckedList
        items={items}
        setItem={setItem}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
