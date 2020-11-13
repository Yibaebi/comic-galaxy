import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./Login";
import search from "./icons/search-icon.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <form className="search" >
        <img src={search} alt="search bar" id="search-icon"/>
        <input className="search-input" type="search" placeholder="Search Comics" />
      </form>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
