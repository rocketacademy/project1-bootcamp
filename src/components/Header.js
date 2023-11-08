import React from "react";

function Header() {
  return (
    <div className="header">
      <nav className="nav-container">
        <a
          className="header-link"
          href="https://schedules.rocketacademy.co/#/ptbc9"
        >
          Home
        </a>
      </nav>

      <nav className="nav-container-2">
        <a
          className="header-link"
          href="https://github.com/ianthehamster/project1-bootcamp"
        >
          Task Management App by Ian
        </a>
      </nav>
    </div>
  );
}

export default Header;
