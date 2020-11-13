import React from "react";
import logo from "./images/logo.png";
class NavBar extends React.Component {
  state = {
    showDropdown: "hide",
  };

  handleMouseOver = () => {
    this.setState({
      showDropdown: "show",
    });
  };

  handleMouseLeave = () => {
    this.setState({
      showDropdown: "hide",
    });
  };

  render() {
    return (
      <header className="main-header">
        <div className="logo-container">
          <img src={logo} alt="comic galaxy logo"></img>
        </div>
        <div className="header-links">
          <ul className="link-container">
            <li>
              <a href="/Home"> Home </a>
            </li>
            <li>
              <a href="/Home"> Support </a>
            </li>
            <li>
              <a href="/Home"> Gallery </a>
            </li>
            <li
              id="artists"
              onMouseLeave={this.handleMouseLeave}
            >
              <a href="/Home" id="for-artists" onMouseOver={this.handleMouseOver}>
                For Artists
              </a>
              <div className="dropdown-list" id={this.state.showDropdown}>
                <a href="/Signup" id="sign-up">
                  Sign up
                </a>
                <a href="/Login" id="login">
                  Login
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;
