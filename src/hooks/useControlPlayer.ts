import { useState } from "react";

const useControlPlayer = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const player = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };
  return {
    playingId,
    player,
  };
};

export default useControlPlayer;
