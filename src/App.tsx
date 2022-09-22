import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { topStoriesURL } from "./constants";
import { fetchData } from "./utils/fetchData";
import { get10RandomStories } from "./utils/get10RandomStories";

function App() {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const selectedRandomStoryIds = get10RandomStories(topStoryIds);

  useEffect(() => {
    fetchData(topStoriesURL).then((res) => {
      setTopStoryIds(res);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        {selectedRandomStoryIds.map((id) => (
          <Stories storyId={id} key={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
