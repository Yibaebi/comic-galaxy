import React from "react";
import NavBar from "./NavBar";
import search from "./icons/search-icon.png";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <form className="search" >
        <img src={search} alt="search bar"/>
        <input className="search-input" type="search" placeholder="Search Comics" />
      </form> */}

      <SignUp/>
    </div>
  );
}

export default App;
