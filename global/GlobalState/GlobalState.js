import { atom, selector } from "recoil";

export const darkModeState = atom({
    // The key has to be unique and the default is the initial state
    key: "darkModeState",
    default: false
});

export const handleDarkMode = selector({
    key: "darkModeToogle",
    set: ({ get, set }) => {
        const currentValue = get(darkModeState);
        set(darkModeState, !currentValue);
    }
});