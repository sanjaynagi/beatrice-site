import {
  VStack,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { DocumentHead, ContactMe } from '../src/components';
import { aboutParagraphs, focusAreas, podcastUrl } from '../src/data/siteContent';

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About" postPath="/about" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={{ base: 24, md: 32 }}>
        <Heading size="lg" as="h1">
          About
        </Heading>
        {aboutParagraphs.slice(0, 2).map((paragraph) => (
          <Text key={paragraph} lineHeight="1.9" maxW="3xl">
            {paragraph}
          </Text>
        ))}
        <Text lineHeight="1.9" maxW="3xl">
          Communicating complex ideas to different audiences is one of my greatest passions, and I
          have worked on research, evaluation and policy projects across a diverse range of settings
          in West Africa, South Asia, the Western Pacific and the UK. I am the co-founder of{' '}
          <Link href={podcastUrl} color="brand.accent" isExternal>
            &ldquo;Connecting Citizens to Science&rdquo;
          </Link>
          , a podcast exploring community engagement in health and social research.
        </Text>
        {aboutParagraphs.slice(3, 4).map((paragraph) => (
          <Text key={paragraph} lineHeight="1.9" maxW="3xl">
            {paragraph}
          </Text>
        ))}
        <Text lineHeight="1.9">My key areas of interest and experience include:</Text>
        <UnorderedList pl={6} spacing={2}>
          {focusAreas.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Text lineHeight="1.9" maxW="3xl">
          {aboutParagraphs[4]}
        </Text>
        <ContactMe />
      </VStack>
    </>
  );
};

export default AboutPage;
