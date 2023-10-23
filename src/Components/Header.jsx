import React from "react";
import TopicDropDown from "./TopicDropDown";
import SortByDropDown from "./SortByDropDown";

export default function Header() {
  return (
    <header className="header">
      <h1>NC-News</h1>
      <nav className="nav-bar">
        <TopicDropDown />
        <SortByDropDown />
      </nav>
    </header>
  );
}
