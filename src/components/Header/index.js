import React, { useState } from "react";
import { Link } from "@reach/router";

import "./style.scss";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";
import close from "../../images/close.png";
import settings from "../../images/settings.png";
import notification from "../../images/notification.png";
import search from "../../images/search.png";
import avatar from "../../images/avatar.png";
import leftArrow from "../../images/left-arrow.png";

import instagram from "../../images/menu/instagram.png";
import facebook from "../../images/menu/facebook.png";
import linkedin from "../../images/menu/linkedin.png";
import youtube from "../../images/menu/youtube.png";
import twitter from "../../images/menu/twitter.png";

import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";

function Header() {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleSearch = () => {
    if (isSearchOpened) {
      // search then
      setIsSearchOpened(false);
    } else {
      setIsSearchOpened(true);
    }
  };
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" className="container header__body">
        <div className={`menu mr-5 ${isMenuOpened ? "open" : ""}`}>
          <img
            src={isMenuOpened ? close : menu}
            alt="menu icon"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
          <div className="menu__body row">
            <div className="menu__body-left col-3">
              <a href="https://www.instagram.com">
                <img src={instagram} alt="instagram icon" />
              </a>
              <a href="https://www.youtube.com">
                <img src={youtube} alt="youtube icon" />
              </a>
              <a href="https://www.linkedin.com">
                <img src={linkedin} alt="linkedin icon" />
              </a>
              <a href="https://www.facebook.com">
                <img
                  src={facebook}
                  alt="facebook icon"
                  style={{ width: "10px" }}
                />
              </a>
              <a href="https://www.twitter.com">
                <img src={twitter} alt="twitter icon" />
              </a>
            </div>
            <div className="menu__body-right pl-3 col-9">
              <div className="top mt-5">
                <Link to="/">
                  <h4 className="item">Home</h4>
                </Link>

                <div className="item my-4">
                  <h4>About Us</h4>
                  <a href="/">Who are us</a>
                  <a href="/">Why us?</a>
                </div>
                <div className="item my-4">
                  <h4>News</h4>
                  <a href="/">News</a>
                  <a href="/">Events</a>
                </div>
                <div className="item my-4">
                  <h4>Careers</h4>
                  <a href="/">Opportunities</a>
                </div>
              </div>
              <div className="bottom mb-5">
                <a href="/">
                  <h4 className="item">Contact us</h4>
                </a>
                <a href="/">
                  <h4 className="item">Site map</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="mr-auto"></Nav>
        <div
          className={`search mr-3 d-none d-sm-none d-md-none d-lg-flex ${
            isSearchOpened ? "open" : ""
          }`}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button onClick={handleSearch} className="btn" type="button">
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
        </div>
        <Nav>
          <Dropdown className="notification mr-3">
            <Dropdown.Toggle>
              {/* <img src={menu} alt="config icon" /> */}
              <img src={notification} alt="notification icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <label>Recent Notifications</label>
              <Dropdown.Item href="#">
                You have an upcoming appointment today!
                <a href="/">Check-in Now</a>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                Rate your last service appointment
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                Your payment request has been approved
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="all py-2">
                <b>
                  All Notifications{" "}
                  <img src={leftArrow} alt="left arrow icon" />
                </b>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <div
          className="user d-none d-sm-none d-md-flex
"
        >
          <div className="user__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="user__name">User Name</div>
        </div>
        <Nav>
          <Dropdown className="settings">
            <Dropdown.Toggle>
              {/* <img src={menu} alt="config icon" /> */}
              <img src={settings} alt="settings icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <label>language</label>
              <Dropdown.Item href="#">Arabic</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
              <Dropdown.Divider />
              <label>Font Size</label>
              <div className="fontsize">
                <Dropdown.Item href="#">A</Dropdown.Item>
                <Dropdown.Item href="#">A</Dropdown.Item>
                <Dropdown.Item href="#">A</Dropdown.Item>
              </div>
              <Dropdown.Divider />
              <label>Account</label>
              <Dropdown.Item href="#">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </header>
  );
}

export default Header;
