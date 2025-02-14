import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { headerRefAtom } from "@/state/header";

function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLElement>(null);
  const [headerRef] = useAtom(headerRefAtom);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        headerRef?.current &&
        !headerRef.current.contains(target)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback, headerRef]);

  return ref;
}

export default useOutsideClick;
