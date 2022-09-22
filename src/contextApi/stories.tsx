import { createContext, useState } from "react";

type ContextProps = {
  storyItems: StoryItemsInterface[];
  setStoryItems: React.Dispatch<React.SetStateAction<StoryItemsInterface[]>>;
};

export interface StoryItemsInterface {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
export const AppContext = createContext<ContextProps>({
  storyItems: [],
  setStoryItems: () => {},
});

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [storyItems, setStoryItems] = useState<StoryItemsInterface[]>([]);
  return (
    <AppContext.Provider value={{ storyItems, setStoryItems }}>
      {children}
    </AppContext.Provider>
  );
};
