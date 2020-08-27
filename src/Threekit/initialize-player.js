import { useCallback, useState } from "react";

export function usePlayer(initParams, callback) {
  const [isLoaded, setIsLoaded] = useState(false);

  const playerRef = useCallback(
    async (el) => {
      if (!el || isLoaded) return;
      setIsLoaded(true);

      const player = await window.threekitPlayer({ ...initParams, el });
      window.player = player;
      if (callback) callback(player);
    },
    [callback, initParams, isLoaded]
  );

  return playerRef;
}
