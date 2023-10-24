import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BrowseAll from "./Components/BrowseAll";
import { Route, Routes } from "react-router-dom";
import SingleArtical from "./Components/SingleArticalPage";

function App() {
  const [artciles, setArtciles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/BrowseAll" element={<BrowseAll />} />
        <Route path="/articles/:article_id" element={<SingleArtical />} />
      </Routes>
    </div>
  );
}

export default App;
