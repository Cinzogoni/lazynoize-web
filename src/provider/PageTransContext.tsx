import { createContext, ReactNode, useState, useContext } from "react";

interface TransitionContextType {
  currentPageId: string;
  visible: boolean;
  handleTransitionPage: (id: string) => void;
}

const defaultContextValue: TransitionContextType = {
  currentPageId: "int-page",
  visible: false,
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
  const [visible, setVisible] = useState<boolean>(false);

  const handleTransitionPage = (id: string) => {
    setCurrentPageId(id);
    setVisible(true);
  };

  const contextValue: TransitionContextType = {
    currentPageId,
    handleTransitionPage,
    visible,
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
