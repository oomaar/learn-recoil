import { GlobalStyle } from "..";
import { Header } from "../../components";
import {
    LayoutContainer,
} from "./styledLayout";

export const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <GlobalStyle />
            <Header />
            {children}
        </LayoutContainer>
    );
};