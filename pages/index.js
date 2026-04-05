import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Hero, ContactMe, DocumentHead, InternalLink } from '../src/components';
import { focusAreas, servicesIntro, services } from '../src/data/siteContent';

const HomePage = () => {
  return (
    <>
      <DocumentHead pageTitle="Beatrice R Egid" />
      <Hero />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, md: 14 }}
        w="full"
        as="section"
        borderTop="1px solid"
        borderColor="brand.border"
        pt={10}
      >
        <VStack align="flex-start" spacing={4} pr={{ md: 8 }}>
          <Heading size="lg" as="h2">
            Areas of focus
          </Heading>
          <Text lineHeight="1.8">
            Research and consultancy work rooted in equity, community partnership and clear communication.
          </Text>
          <Text lineHeight="1.9" color="brand.accentMuted">
            {focusAreas.join(' • ')}
          </Text>
          <InternalLink href="/about" px={0} fontWeight="600">
            Read more about my work
          </InternalLink>
        </VStack>
        <VStack
          align="flex-start"
          spacing={4}
          pl={{ md: 8 }}
          borderLeft={{ md: '1px solid' }}
          borderColor="brand.border"
        >
          <Heading size="lg" as="h2">
            Services
          </Heading>
          <Text lineHeight="1.8">{servicesIntro}</Text>
          <Text lineHeight="1.9" color="brand.accentMuted">
            {services.slice(0, 4).map(s => typeof s === 'string' ? s : s.label).join(' • ')}
          </Text>
          <InternalLink href="/services" px={0} fontWeight="600">
            View consultancy services
          </InternalLink>
        </VStack>
      </SimpleGrid>
      <ContactMe />
    </>
  );
};

export default HomePage;
