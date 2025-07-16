import { createContext, ReactNode, useState } from "react";

interface TransitionContextType {
  currentPageId: string;
  setCurrentPageId: (id: string) => void;
  handleTransitionPage: (id: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

interface PageTransProviderProps {
  children: ReactNode;
}

function PageTransProvider({ children }: PageTransProviderProps) {
  const [currentPageId, setCurrentPageId] = useState<string>("");

  const handleTransitionPage = (id: string) => {
    setCurrentPageId(id);
  };

  const contextValue: TransitionContextType = {
    currentPageId,
    setCurrentPageId,
    handleTransitionPage,
  };

  return (
    <TransitionContext.Provider value={contextValue}>
      {children}
    </TransitionContext.Provider>
  );
}

export { TransitionContext, PageTransProvider };
