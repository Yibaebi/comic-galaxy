import React from "react";
import NavBar from "./NavBar";
import search from "./icons/search-icon.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <form className="search" >
        <img src={search} alt="search bar" id="search-icon"/>
        <input className="search-input" type="search" placeholder="Search Comics" />
      </form>
    </div>
  );
}

export default App;
