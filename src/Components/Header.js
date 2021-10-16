import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div>
          <div>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}>
                <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#particle">Home</Link>
            </li>
            <li>
              <Link smooth to="#sign_in">SignIn</Link>
            </li>
            <li>
              <Link smooth to="#about">About</Link>
            </li>
            <li>
              <Link smooth to="#team_par_ja">Team</Link>
            </li>
            <li>
              <Link smooth to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}