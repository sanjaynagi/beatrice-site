import React, { useState } from 'react';
import { Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import { BlogPostCard, DocumentHead } from '../../src/components';

// Fetch all posts - only called in getStaticProps (server-side)
export const getAllBlogPosts = async () => {
  // Only import fs in server-side code
  const fs = await import('fs').then(mod => mod.promises);
  
  const result = [];
  const dir = path.join(process.cwd(), './content/posts');
  const blogPosts = await fs.readdir(dir);

  await Promise.all(
    blogPosts.map(async post => {
      const postPath = path.join(dir, post);
      const slug = post.replace(/\.(md|mdx)$/, '');
      const fileContent = await fs.readFile(postPath, 'utf8');

      const { text: timeToRead } = readingTime(fileContent);

      const {
        data: { title, shorttitle, date, thumbnail, tag }
      } = matter(fileContent);

      result.push({
        title,
        shorttitle,
        date,
        slug,
        thumbnail,
        timeToRead,
        tag,
        fileContent
      });
    })
  );

  return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

// This function only runs on the server at build time
export const getStaticProps = async () => {
  const posts = await getAllBlogPosts();
  
  return {
    props: {
      posts
    }
  };
};

// This component runs on the client
const Blog = ({ posts }) => {
  const [displayPosts, setDisplayPosts] = useState(posts);

  return (
    <>
      <DocumentHead pageTitle="Blog" postPath="/blog" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="xl" as="h1">
          Blog
        </Heading>
        <Text fontSize="xl">
          Recent blog posts. I write about vector control, genomic surveillance and bioinformatics, and sometimes 
          my favourite food, paranthas. 
        </Text>
      </VStack>
      <List spacing={1} w="full">
        {displayPosts.map(post => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && (
        <Text fontSize="xl" fontWeight="600">
          No articles for that query
        </Text>
      )}
    </>
  );
};

export default Blog;
