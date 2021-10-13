import {
    Container,
    Title,
    Date,
    SubTitle,
    Description,
    PostFooter,
} from "./styledPost";

const data = [
    {
        id: 1,
        title: "Amazing blog post",
        date: "1/5/2020",
        subTitle: "A really fance subtitle to catch your attention",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam voluptatem delectus vitae officia, nemo nobis nam quia iure atque perferendis reiciendis veritatis vero dolore esse? Ipsum voluptatibus sint impedit, nobis dolore repellendus praesentium soluta commodi eos! Consequuntur reprehenderit repudiandae nemo molestias quas quaerat voluptate, porro, dicta suscipit vel nam totam, facilis soluta itaque qui deserunt et pariatur quod? Pariatur praesentium aliquam illo dolorem voluptatum dolorum ipsam nihil? Molestias autem aspernatur illum iure exercitationem qui eum mollitia sed debitis deserunt sequi voluptas, excepturi at deleniti blanditiis molestiae sit distinctio, nesciunt, fugiat impedit dolorem! Dicta quos laborum suscipit voluptatem quam. Nulla.`,
        number: 38
    },
    {
        id: 2,
        title: "Normal blog post",
        date: "30/6/2020",
        subTitle: "A really fance subtitle to catch your attention",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam voluptatem delectus vitae officia, nemo nobis nam quia iure atque perferendis reiciendis veritatis vero dolore esse? Ipsum voluptatibus sint impedit, nobis dolore repellendus praesentium soluta commodi eos! Consequuntur reprehenderit repudiandae nemo molestias quas quaerat voluptate, porro, dicta suscipit vel nam totam, facilis soluta itaque qui deserunt et pariatur quod? Pariatur praesentium aliquam illo dolorem voluptatum dolorum ipsam nihil? Molestias autem aspernatur illum iure exercitationem qui eum mollitia sed debitis deserunt sequi voluptas, excepturi at deleniti blanditiis molestiae sit distinctio, nesciunt, fugiat impedit dolorem! Dicta quos laborum suscipit voluptatem quam. Nulla.",
        number: 6
    },
    {
        id: 3,
        title: "Not so amazing blog post",
        date: "10/10/2020",
        subTitle: "A decent subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam voluptatem delectus vitae officia, nemo nobis nam quia iure atque perferendis reiciendis veritatis vero dolore esse? Ipsum voluptatibus sint impedit, nobis dolore repellendus praesentium soluta commodi eos! Consequuntur reprehenderit repudiandae nemo molestias quas quaerat voluptate, porro, dicta suscipit vel nam totam, facilis soluta itaque qui deserunt et pariatur quod? Pariatur praesentium aliquam illo dolorem voluptatum dolorum ipsam nihil? Molestias autem aspernatur illum iure exercitationem qui eum mollitia sed debitis deserunt sequi voluptas, excepturi at deleniti blanditiis molestiae sit distinctio, nesciunt, fugiat impedit dolorem! Dicta quos laborum suscipit voluptatem quam. Nulla.",
        number: 8
    }
];

export const Post = () => {
    return (
        <Container>
            {data.map(post => (
                <div key={post.id}>
                    <Title>{post.title}</Title>
                    <Date>{post.date}</Date>
                    <SubTitle>{post.subTitle}</SubTitle>
                    <Description>{post.description}</Description>

                    <PostFooter>
                        + {post.number}
                    </PostFooter>
                </div>
            ))}
        </Container>
    );
};