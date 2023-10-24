import React from "react";
import TopicDropDown from "./TopicDropDown";
import SortByDropDown from "./SortByDropDown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to={`../`}>
        <h1>NC-News</h1>
      </Link>
      <nav className="nav-bar">
        <TopicDropDown />
        <SortByDropDown />
      </nav>
    </header>
  );
}
