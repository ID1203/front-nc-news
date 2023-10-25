import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BrowseAll from "./Components/BrowseAll";
import { Route, Routes } from "react-router-dom";
import SingleArtical from "./Components/SingleArticalPage";
import HomePage from "./HomaePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/BrowseAll" element={<BrowseAll />} />
        <Route path="/articles/:article_id" element={<SingleArtical />} />
      </Routes>
    </div>
  );
}

export default App;
