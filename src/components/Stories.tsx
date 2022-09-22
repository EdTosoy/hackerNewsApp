import React, { useState } from "react";
import { StoryItemsInterface } from "../contextApi/stories";
import { UserInterface } from "../types";
import { fetchData } from "../utils/fetchData";

type Props = {
  storyId: number;
};

function Stories({ storyId }: Props) {
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
    <div>
      <div>story title: {storyDetails?.title}</div>
      <div> story url: {storyDetails?.url}</div>
      <div>story timestamp: {storyDetails?.time}</div>
      <div>story score: {storyDetails?.score}</div>
      <div>author id: {storyDetails?.id}</div>
      <div>author karma score: {userDetails?.karma}</div>
    </div>
  );
}

export default Stories;
