import {
  VStack,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { DocumentHead, ContactMe } from '../src/components';
import { aboutParagraphs, focusAreas } from '../src/data/siteContent';

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About" postPath="/about" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={{ base: 24, md: 32 }}>
        <Heading size="lg" as="h1">
          About
        </Heading>
        {aboutParagraphs.slice(0, 4).map((paragraph) => (
          <Text key={paragraph} lineHeight="1.9" maxW="3xl">
            {paragraph}
          </Text>
        ))}
        <Text lineHeight="1.9" maxW="3xl">
          I am also the co-founder of the{' '}
          <Link href="https://connectingcitizenstoscience.podbean.com/" color="brand.accent">
            Connecting Citizens to Science
          </Link>{' '}
          podcast, which explores the intersection of science and community engagement.
        </Text>
        <Text lineHeight="1.9">Key thematic areas include:</Text>
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
