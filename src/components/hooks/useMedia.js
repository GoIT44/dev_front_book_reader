import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const useMedia = () => {
  const MOB = useMediaQuery("(max-width: 767px)");
  const TABL = useMediaQuery("(min-width: 768px)");
  const DESK = useMediaQuery("(min-width: 1280px)");
  return { MOB, TABL, DESK };
};

export default useMedia;
