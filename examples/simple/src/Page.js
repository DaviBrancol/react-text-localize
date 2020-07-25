import React from "react";
import { useTextLocalize } from "react-text-localize";

export function Page() {
  const { localize } = useTextLocalize();
  return (
    <div className="page-container">
      <div className="header">
        <div className="container">
          <h1>React Text Localize</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="hero container">
        <div>
          <h2>More than a simple module</h2>
          <h4>
            React Text Localize is your solution for localizing your pages and
            matching your customers languages
          </h4>
          <p></p>
          <div>
            <button>Know more</button>
            <button>Github</button>
          </div>
        </div>
        <img src="/img/home-image.svg" alt="Home Icon" />
      </div>
    </div>
  );
}
