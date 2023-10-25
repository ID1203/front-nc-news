import React from "react";
import { Link } from "react-router-dom";
import TopicDropDown from "./TopicDropDown";
import SortByDropDown from "./SortByDropDown";

export default function NavBar() {
  return (
    <nav className="article-nav">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="./BrowseAll">Browse</Link>
      </div>
      <div className="dropdowns">
        <TopicDropDown />
        <SortByDropDown />
      </div>
    </nav>
  );
}
