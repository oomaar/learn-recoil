import { atom } from "recoil";

export const darkModeState = atom({
    // The key has to be unique and the default is the initial state
    key: "darkModeState",
    default: false
});