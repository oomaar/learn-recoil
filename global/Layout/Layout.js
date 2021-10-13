import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "..";
import { Header } from "../../components";
import { darkModeState } from "../GlobalState/GlobalState";
import { darkTheme, lightTheme, Theme } from "../styles/GlobalStyle";
import {
    LayoutContainer,
} from "./styledLayout";

export const Layout = ({ children }) => {
    const darkMode = useRecoilValue(darkModeState);

    return (
        <ThemeProvider theme={Theme}>
            <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
                <LayoutContainer>
                    <GlobalStyle />
                    <Header />
                    {children}
                </LayoutContainer>
            </ThemeProvider>
        </ThemeProvider>
    );
};