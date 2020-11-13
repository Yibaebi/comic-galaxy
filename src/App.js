import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import search from "./icons/search-icon.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <form className="search" >
        <img src={search} alt="search bar"/>
        <input className="search-input" type="search" placeholder="Search Comics" />
      </form>
      <Footer />
    </div>
  );
}

export default App;
