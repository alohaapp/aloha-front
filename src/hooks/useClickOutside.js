import { useEffect } from "react";

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        return handler(event);
      }
    };

    document.addEventListener("mousedown", listener);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);
}
