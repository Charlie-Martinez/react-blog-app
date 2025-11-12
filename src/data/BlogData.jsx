const blogPosts = [
    {
        id: 1,
        title: 'First Blog Post',
        content: 'This is the first blog post. This blog post contains plenty of fantastic information. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio.',
        author: 'John Doe',
        date: '2020-01-08',
    },

    {
        id: 2,
        title: 'Second Blog Post',
        content: 'This is the second blog post. This blog post contains plenty of good information. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio.',
        author: 'Jane Doe',
        date: '2021-02-07',
    },

    {
        id: 3,
        title: 'Third Blog Post',
        content: 'This is the third blog post. This blog post contains plenty of okay information. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt, temporibus laudantium accusantium optio excepturi, iusto maxime recusandae sit ipsa ut labore aspernatur sunt qui iste ipsam fugit incidunt odio.',
        author: 'Johnny Smith',
        date: '2022-03-06',
    }];

const comments = [
    {
        id: 1,
        postId: 1,
        author: 'Jackie Chan',
        content: 'What a great post! Has some fantastic content.',
        date: '2020-04-05'
    },

    {
        id: 2,
        postId: 1,
        author: 'Harvey',
        content: 'I also think this is a great post that has some fantastic content.',
        date: '2020-05-04'
    },

    {
        id: 5,
        postId: 3,
        author: 'Mr Crow',
        content: 'This post is not as good and only contains okay content.',
        date: '2025-08-01'
    },

    {
        id: 6,
        postId: 3,
        author: 'Sarah White',
        content: 'This post has some okay content.',
        date: '2025-08-08'
    }
];

export { blogPosts, comments };