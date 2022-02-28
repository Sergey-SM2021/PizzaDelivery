import { useCallback, useEffect, useMemo, useState } from "react";

type TMediaQuery = {
    maxWidth?: number;
    minWidth?: number;
};

export function useMediaQuery(query: TMediaQuery): boolean {
    const mediaQuery = useMemo(() => {
        if (query.maxWidth && query.minWidth) {
            return `(max-width: ${query.maxWidth}px) and (min-width: ${query.minWidth}px)`;
        } else if (query.maxWidth) {
            return `(max-width: ${query.maxWidth}px)`;
        } else if (query.minWidth) {
            return `(min-width: ${query.minWidth}px)`;
        }

        return "";
    }, [query]);

    const media = useMemo(() => window.matchMedia(mediaQuery), [mediaQuery]);
    const [matches, setMatches] = useState(media.matches);

    const listener = useCallback(() => {
        setMatches(media.matches);
    }, [media.matches]);

    useEffect(() => {
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [listener, matches, media, query]);

    return matches;
}
