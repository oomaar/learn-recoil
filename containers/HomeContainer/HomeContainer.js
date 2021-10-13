import {
    Container,
    Nav,
    BlogLink,
} from "./styledHomeContainer";

export const HomeContainer = () => {
    return (
        <Container>
            <Nav>
                <BlogLink>Blog</BlogLink>
                <span>/</span>
                <BlogLink>New</BlogLink>
                <span>/</span>
                <BlogLink>Popular</BlogLink>
            </Nav>
            Posts
        </Container>
    );
};