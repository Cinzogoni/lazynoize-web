import { createContext, ReactNode, useState, useContext } from "react";

interface TransitionContextType {
  currentPageId: string;
  handleTransitionPage: (id: string) => void;
}

const defaultContextValue: TransitionContextType = {
  currentPageId: "int-page",
  handleTransitionPage: () => {
    console.warn(
      "handleTransitionPage was called without the PageTransProvider"
    );
  },
};

export const TransitionContext =
  createContext<TransitionContextType>(defaultContextValue);

interface PageTransProviderProps {
  children: ReactNode;
}

export function PageTransProvider({ children }: PageTransProviderProps) {
  const [currentPageId, setCurrentPageId] = useState<string>("int-page");

  const handleTransitionPage = (id: string) => {
    setCurrentPageId(id);
  };

  const contextValue: TransitionContextType = {
    currentPageId,
    handleTransitionPage,
  };

  //   console.log("Check currentPageID: ", currentPageId);

  return (
    <TransitionContext.Provider value={contextValue}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransPage() {
  return useContext(TransitionContext);
}
