import React, { useState } from "react";
import format from "date-fns/format";
import { fetchData } from "../utils/fetchData";
import { StoryItemsInterface, UserInterface } from "../types";
import "./Stories.scss";

type StoriesProps = {
  storyId: number;
  profileImage: string;
};

function Stories({ storyId, profileImage }: StoriesProps) {
  const [storyDetails, setStoryDetails] = useState<StoryItemsInterface>();
  const [userDetails, setUserDetails] = useState<UserInterface>();
  if (!storyDetails) {
    fetchData(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    ).then((res) => setStoryDetails(res));
  }
  if (storyDetails) {
    fetchData(
      `https://hacker-news.firebaseio.com/v0/user/${storyDetails?.by}.json`
    ).then((res) => setUserDetails(res));
  }

  return (
    <div className="container">
      <div className="story-title">
        <p>{storyDetails?.title}</p>
      </div>
      <div className="author-info">
        <div>
          <div className="profile">
            <img src={profileImage} alt="profile1" />
          </div>
        </div>
        <div>
          <div className="story-info">
            <div>Score: {storyDetails?.score}</div>
            <div>Timestamp: {format(storyDetails?.time || 0 * 1000, "Pp")}</div>
          </div>
          <div className="view-full">View Full Story: </div>
          <div>
            <div className="story-url">
              <a href={storyDetails?.url} target="_blank" rel="noreferrer">
                {storyDetails?.url}
              </a>
            </div>
          </div>

          <div className="about-author">
            <div>ID: {storyDetails?.id}</div>
            <div>Karma Score: {userDetails?.karma}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
