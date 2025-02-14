import { atom } from "jotai";

export const headerRefAtom = atom<React.RefObject<HTMLElement> | null>(null);
