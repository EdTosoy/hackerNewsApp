export const get10RandomStories = (topStoryIds: number[]) => {
  let randomStories: number[] = [];

  if (topStoryIds.length) {
    Array.from(Array(10).keys()).forEach(() => {
      randomStories.push(
        topStoryIds[Math.floor(Math.random() * topStoryIds.length)]
      );
    });
  }
  return randomStories;
};
