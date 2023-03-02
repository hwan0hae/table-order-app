import { atom } from "recoil";

export const basketVisibleAtom = atom<boolean>({
  key: "basketVisible",
  default: false,
});
