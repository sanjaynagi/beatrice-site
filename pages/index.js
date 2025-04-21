import {
  Hero,
  ContactMe,
  LatestPostsSection,
  DocumentHead
} from '../src/components';
import { getAllBlogPosts } from './blog';

export const getRecentBlogPosts = async () => {
  const posts = await getAllBlogPosts();

  const recentPosts = posts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 5);

  return recentPosts;
};

export const getStaticProps = async () => {
  const posts = await getRecentBlogPosts();

  const props = {
    posts
  };

  return {
    props
  };
};

const HomePage = ({ posts }) => {
  return (
    <>
      <DocumentHead pageTitle="Beatrice Egid" />
      <Hero />
      {/* Latest Blog Posts */}
      <LatestPostsSection posts={posts} />
      <ContactMe />
    </>
  );
};

export default HomePage;
