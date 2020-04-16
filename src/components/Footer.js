import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800">
        <div className="text-center">
          <img
            className="inline"
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul>
                  <li className="py-2">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link className="text-white" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link className="text-white" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link className="text-white" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li className="py-2">
                    <a
                      className="text-white"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li className="py-2">
                    <Link className="text-white" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link className="text-white" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="row text-white text-center p-2">
                <a
                  title="facebook"
                  href="https://facebook.com"
                  className="bg-white m-2 p-2 table rounded-full"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="twitter"
                  href="https://twitter.com"
                  className="bg-white m-2 p-2 table rounded-full"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://instagram.com"
                  className="bg-white m-2 p-2 table rounded-full"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="vimeo"
                  href="https://vimeo.com"
                  className="bg-white m-2 p-2 table rounded-full"
                >
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
