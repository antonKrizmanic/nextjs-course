import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

// const DUMMY_POSTS = [
//     {
//         slug: 'getting-started-with-nextjs',
//         title: 'Getting started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next js is React framework for production.',
//         date: '2022-02-10'
//     },
//     {
//         slug: 'getting-started-with-nextjs-1',
//         title: 'Getting started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next js is React framework for production.',
//         date: '2022-02-10'
//     },
//     {
//         slug: 'getting-started-with-nextjs-2',
//         title: 'Getting started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next js is React framework for production.',
//         date: '2022-02-10'
//     },
//     {
//         slug: 'getting-started-with-nextjs-3',
//         title: 'Getting started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt: 'Next js is React framework for production.',
//         date: '2022-02-10'
//     }
// ];

function AllPostsPage(props) {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    );
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
}

export default AllPostsPage;