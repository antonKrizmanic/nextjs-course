import Head from 'next/head';
import Hero from "../components/home-page/Hero"
import FeaturedPosts from "../components/home-page/Featured-posts"
import { getFeaturedPosts } from '../lib/posts-util';


export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
