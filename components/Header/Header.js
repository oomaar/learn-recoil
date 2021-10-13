import { useRecoilState } from "recoil";
import { darkModeState } from "../../global/GlobalState/GlobalState";
import {
    Nav,
    HeaderTag,
    Logo,
    LogoLine,
    TitleContainer,
    Title,
    DarkButtonContainer,
    DarkButton,
} from "./styledHeader";

export const Header = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <Nav>
            <HeaderTag>
                <Logo>
                    <LogoLine></LogoLine>
                </Logo>

                <TitleContainer>
                    <Title>Recoil Blog</Title>
                </TitleContainer>

                <DarkButtonContainer>
                    <DarkButton onClick={handleDarkMode}>
                        {darkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 
                                5zm-9.184-5.599l-3.594-3.594-1.414
                                1.414 3.594 3.595c.402-.537.878-1.013 1.414-1.415zm4.184-1.401c.34 0 .672.033 
                                1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.594-3.595-1.414-1.414-3.594 
                                .595c.536.402 1.012.878 1.414 1.414zm-12.598 
                                4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 
                                5.598l3.594 3.593 1.415-1.414-3.594-3.594c-.403.537-.879 1.013-1.415 
                                1.415zm-9.784-1.414l-3.593 3.593 1.414 1.414 
                                3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 
                                1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 
                                .08z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 10.999c1.437.438 
                            2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 
                            1.436-1.562 
                            2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 
                            1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 
                            2.562-2.998 
                            3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 
                            2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 
                            3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 
                            7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
                                />
                            </svg>
                        )}
                        {/* SunIcon */}

                        {/* SunIcon */}
                        {/* MoonIcon */}

                        {/* MoonIcon */}
                    </DarkButton>
                </DarkButtonContainer>
            </HeaderTag>
        </Nav>
    );
};