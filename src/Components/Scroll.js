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
      <nav className="navbar1">
        <div>
          <div>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#sign_in">\\//</Link>
            </li>
          </ul>
          
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <h3>Click</h3>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}