import React from "react";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";

import "./style.scss";
function index() {
  return (
    <footer>
      <div className="container footer">
        <div className="row mx-0">
          <div className="col-lg-2 col-12 ">
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/news">Events</a>
            </li>
            <li>
              <a href="/news">About</a>
            </li>
            <li>
              <a href="/news">FAQs</a>
            </li>
          </div>
          <div className="col-lg-2 col-12 ">
            <li>
              <a href="/news">Privacy Policy</a>
            </li>
            <li>
              <a href="/news">Contact Us</a>
            </li>
            <li>
              <a href="/news">Complains</a>
            </li>
          </div>
          <div className="col-lg-4 col-12 footer__news">
            <p>Subscribe to Newsletter</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 offset-lg-1 social">
            <p>Follow Us On</p>
            <div className="">
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
                <img src={facebook} alt="facebook icon" />
              </a>
              <a href="https://www.twitter.com">
                <img src={twitter} alt="twitter icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        All rights reserved - Link Development Company © 2020
      </div>
    </footer>
  );
}

export default index;
