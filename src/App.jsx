import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BrowseAll from "./Components/BrowseAll";

function App() {
  const [artciles, setArtciles] = useState([]);

  return (
    <div className="App">
      <Header />
      <BrowseAll />
    </div>
  );
}

export default App;
