import React from "react";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";
import {
  BsPerson,
  BsExclamationDiamond,
  BsHeart,
  BsCalendarCheck,
} from "react-icons/bs";
import { CgPill } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex drop-shadow-xl mt-5 justify-evenly w-screen">
      <div className="text-dark-pink text-5xl grid justify-center bg-gradient-to-br bg-white rounded-xl w-1/6 p-1 hover:bg-slate-400">
        <Link to="/profile">
          <BsPerson />
          <div className="text-xs">Profile</div>
        </Link>
      </div>
      <div className="text-dark-pink text-5xl grid justify-center bg-gradient-to-br bg-white rounded-xl w-1/6 p-1 hover:bg-slate-400">
        <Link to="/alert">
          <BsExclamationDiamond />
          <div className="text-xs">Alert</div>
        </Link>
      </div>
      <div className="text-dark-pink text-5xl grid justify-center bg-gradient-to-br bg-white rounded-xl w-1/6 p-1 hover:bg-slate-400">
        <Link to="/medicine">
          <CgPill />
          <div className="text-xs">Medicine</div>
        </Link>
      </div>
      <div className="text-dark-pink text-5xl grid justify-center bg-gradient-to-br bg-white rounded-xl w-1/6 p-1 hover:bg-slate-400">
        <Link to="/mood">
          <BsHeart />
          <div className="text-xs">Mood</div>
        </Link>
      </div>
      <div className="text-dark-pink text-5xl grid justify-center bg-gradient-to-br bg-white rounded-xl w-1/6 p-1 hover:bg-slate-400">
        <Link to="/log">
          <BsCalendarCheck />
          <div className="text-xs">Log</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
