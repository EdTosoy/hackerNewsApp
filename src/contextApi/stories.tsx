import { createContext, useState } from "react";
import { StoryItemsInterface } from "../types";

type ContextProps = {
  storyItems: StoryItemsInterface[];
  setStoryItems: React.Dispatch<React.SetStateAction<StoryItemsInterface[]>>;
};

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
