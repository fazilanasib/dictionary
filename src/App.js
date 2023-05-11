import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded and{" "}
            <a href="https://github.com/fazilanasib/dictionary">
              open-sourced by Fazila Nasib
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
