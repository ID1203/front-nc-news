import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="link" to={`../`}>
        <h1 className="title">NC-News</h1>
      </Link>
    </header>
  );
}
