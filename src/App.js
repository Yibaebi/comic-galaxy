import React from "react";
import NavBar from "./NavBar";
import search from "./icons/search-icon.png";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
sign-up
     <form className="search" >
        <img src={search} alt="search bar"/
      <form className="search" >
        <img src={search} alt="search bar" id="search-icon"/>
    <input className="search-input" type="search" placeholder="Search Comics" />
      </form>

      <SignUp/>
    </div>
  );
}

export default App;
