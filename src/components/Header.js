import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a href="https://schedules.rocketacademy.co/#/ptbc9">Home</a>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <a href="https://github.com/ianthehamster/project1-bootcamp">
              Task Management App by Ian
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
