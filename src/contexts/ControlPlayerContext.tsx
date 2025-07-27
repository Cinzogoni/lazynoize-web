import { createContext, ReactNode, useState, useContext } from "react";

interface ControlPlayerContextType {
  playingId: string | null;
  handleControlPlayer: (id: string) => void;
}

const defaultContextValue: ControlPlayerContextType = {
  playingId: null,
  handleControlPlayer: () => {
    console.warn("player was called without the PageTransProvider");
  },
};

export const ControlPlayerContext =
  createContext<ControlPlayerContextType>(defaultContextValue);

interface ControlPlayerProviderProps {
  children: ReactNode;
}

export function ControlPlayerProvider({
  children,
}: ControlPlayerProviderProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handleControlPlayer = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const contextValue: ControlPlayerContextType = {
    playingId,
    handleControlPlayer,
  };

  return (
    <ControlPlayerContext.Provider value={contextValue}>
      {children}
    </ControlPlayerContext.Provider>
  );
}

export function useControlPlayer() {
  return useContext(ControlPlayerContext);
}
