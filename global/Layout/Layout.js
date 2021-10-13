import { GlobalStyle } from "..";
import {
    LayoutContainer,
} from "./styledLayout";

export const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <GlobalStyle />
            {children}
        </LayoutContainer>
    );
};