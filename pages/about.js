import {
  VStack,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Image
} from '@chakra-ui/react';
import { InternalLink, DocumentHead, ContactMe } from '../src/components';

const InterestsList = () => {
  return (
    <UnorderedList pl={6} spacing={2}>
      <ListItem>Music</ListItem>
      <ListItem>Piano</ListItem>
      <ListItem>Art</ListItem>
      <ListItem>Horticulture</ListItem>
      <ListItem>Meditation</ListItem>
      <ListItem>The Outdoors (walking, exploring nature)</ListItem>
      <ListItem>History</ListItem>
    </UnorderedList>
  );
};

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About" postPath="/about" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <Text>
          Hello! I&apos;m Beatrice Rose Egid, a research consultant specialising in addressing complex questions in global health. 
          My work focuses on themes of health equity, community engagement, social determinants of health, marginalisation, 
          and multi-sectoral collaboration.
        </Text>
        <Text>
          I am passionate about participatory research approaches and centring community voices in health and social research. 
          I am also the co-founder of the <Link href="https://connectingcitizenstoscience.podbean.com/" color="green.800">
          ‘Connecting Citizens to Science’ podcast</Link>, which explores the intersection of science and community engagement.
        </Text>
        <Text>
          My research uses both qualitative and quantitative methods, and I have experience working across diverse geographic 
          contexts, including West Africa, South Asia, the Western Pacific, and the UK.
        </Text>
        {/* <Text>In no particular order, here are some of the things I enjoy:</Text>

        <InterestsList /> */}

        {/* <Text>
          Feel free to explore some of the <InternalLink href="/projects" color="green" p="0">projects</InternalLink> I&apos;ve worked on, 
          or <InternalLink href="/publications" color="green" p="0">publications</InternalLink> I&apos;ve contributed to.
        </Text> */}
        {/* <Image 
          src="/beatrice-outdoors.png" 
          alt="Beatrice enjoying the outdoors." 
        /> */}
        <ContactMe />
      </VStack>
    </>
  );
};

export default AboutPage;