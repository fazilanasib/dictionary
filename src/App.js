import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <smal>Coded by Fazila Nasib</smal>
        </footer>
      </div>
    </div>
  );
}

export default App;
