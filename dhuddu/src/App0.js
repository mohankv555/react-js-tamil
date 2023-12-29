import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "mohan";
  return (
    // below is jsx code (javascipt and xml)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>KUMMARA VENUGOPAL MOHAN</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{"testing java scipt"}</p>
        <p>{[1, 5, 9]}</p>
        <p>{name}</p>
        {/*  <p>{"ooooo"}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
