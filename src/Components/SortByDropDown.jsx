import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function SortByDropDown() {
  const [open, setOpen] = useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = "Sort By";

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Dropdown
      className="sort-by-dropdown"
      options={options}
      onChange={handleOpen}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
}
