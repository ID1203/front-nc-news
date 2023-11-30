import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import * as api from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function TopicDropDown({ setTopic }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [allTopics, setAllTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getTopics()
      .then((topics) => {
        setAllTopics(topics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  const options = ["All", ...allTopics.map((topic) => topic.slug)];

  const handleDropdownChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    setTopic(selectedOption.value);
    if (selectedOption.value === "All") {
      navigate("/BrowseAll");
    } else {
      navigate(`/${selectedOption.value}`);
    }
  };

  return (
    <Dropdown
      className="topic-dropdown"
      options={options}
      onChange={(selectedOption) => handleDropdownChange(selectedOption)}
      value={selectedOption ? selectedOption.value : "Topic"}
      placeholder="Select an option"
    />
  );
}
