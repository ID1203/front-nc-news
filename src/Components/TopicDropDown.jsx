import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";

export default function TopicDropDown() {
  const [open, setOpen] = useState(false);

  const options = [<Link to={"./BrowseAll"}>BrowseAll</Link>, "two", "three"];
  const defaultOption = "Topic";

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Dropdown
      className="topic-dropdown"
      options={options}
      onChange={handleOpen}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
}
