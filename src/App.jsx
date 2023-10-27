import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BrowseAll from "./Components/BrowseAll";
import { Route, Routes } from "react-router-dom";
import SingleArtical from "./Components/SingleArticalPage";
import HomePage from "./HomaePage";
import NavBar from "./Components/NavBar";
import SingleTopicPage from "./Components/SingleTopicPage";

function App() {
  const [topic, setTopic] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  return (
    <div className="App">
      <header>
        <Header />
        <NavBar setTopic={setTopic} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/BrowseAll"
          element={
            <BrowseAll
              allArticles={allArticles}
              setAllArticles={setAllArticles}
            />
          }
        />
        <Route path="/articles/:article_id" element={<SingleArtical />} />
        <Route
          path={`/${topic}`}
          element={<SingleTopicPage topic={topic} allArticles={allArticles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
