import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";

export default function SortByDropDown() {
  const [selectedOption, setSelectedOption] = useState("date");
  const [order, setOrder] = useState("desc");
  const options = ["date", "comment_count", "votes"];
  const orderOptions = ["asc", "desc"];
  const defaultOption = "Sort By";
  const navigate = useNavigate();

  const handleSortChange = (selected) => {
    setSelectedOption(selected.value);
    navigate(`?sort_by=${selected.value}&order=${order}`);
  };

  const handleOrderChange = (selected) => {
    setOrder(selected.value);
    navigate(`?sort_by=${selectedOption}&order=${selected.value}`);
  };
  return (
    <div className="dropdown-container">
      <Dropdown
        className="sortby-dropdown"
        options={options}
        onChange={handleSortChange}
        value={selectedOption}
        placeholder="Sort By"
      />
      <Dropdown
        className="order-dropdown"
        options={orderOptions}
        onChange={handleOrderChange}
        value={order}
        placeholder="Order"
      />
    </div>
  );
}
