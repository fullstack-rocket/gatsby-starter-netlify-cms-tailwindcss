import React from "react";
import { Link } from "gatsby";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const items = [
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/contact/examples", label: "Form Examples" },
];

export default class extends React.Component {
  state = { open: false };

  toogleMenu = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white  px-5 py-3 container">
        <a href="/" className="mx-3 pr-5">
          <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
        </a>

        <div className="block lg:hidden">
          <button
            onClick={this.toogleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-700 hover:text-gray-900 hover:border-gray-800"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  ${
            open ? "" : "hidden"
          }`}
        >
          <div className="lg:flex-grow text-center lg:text-left">
            {items.map((item) => (
              <Link
                className="block lg:inline-block mr-4 py-2 lg:mt-0  lg:py-0 text-gray-800 text-2xl lg:text-left text-sm  lg:text-lg"
                to={item.path}
                key={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <a
              className="flex justify-center items-center text-center block mr-4 py-2 lg:mt-0  lg:py-0 text-gray-800 text-2xl lg:text-left text-sm lg:text-lg"
              href="https://github.com/fullstack-rocket/gatsby-starter-netlify-cms-tailwindcss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lg:hidden">Git hub repository</span>
              <span className="pl-3">
                <img src={github} alt="Github" style={{ width: "1.5rem" }} />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
