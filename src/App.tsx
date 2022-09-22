import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { fetchData } from "./utils/fetchData";
import { get10RandomStories } from "./utils/get10RandomStories";
import Profile1 from "../src/assets/profile1.png";
import Profile2 from "../src/assets/profile2.png";
import Profile3 from "../src/assets/profile3.png";
import Profile4 from "../src/assets/profile4.png";
import Profile5 from "../src/assets/profile5.png";
import Profile6 from "../src/assets/profile6.png";
import Profile7 from "../src/assets/profile7.png";
import Profile8 from "../src/assets/profile8.png";
import Profile9 from "../src/assets/profile9.png";
import Profile10 from "../src/assets/profile10.png";
import { topStoriesURL } from "./constants";

function App() {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const selectedRandomStoryIds = get10RandomStories(topStoryIds);
  const profileImages = [
    Profile1,
    Profile2,
    Profile3,
    Profile4,
    Profile5,
    Profile6,
    Profile7,
    Profile8,
    Profile9,
    Profile10,
  ];

  useEffect(() => {
    fetchData(topStoriesURL).then((res) => {
      setTopStoryIds(res);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="story-wrapper">
        {selectedRandomStoryIds.map((id, index) => (
          <Stories storyId={id} key={id} profileImage={profileImages[index]} />
        ))}
      </div>
    </div>
  );
}

export default App;
