import { Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { ContactMe, DocumentHead } from '../src/components';
import { servicesIntro, services } from '../src/data/siteContent';

const ServicesPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Services" postPath="/services" />
      <VStack spacing={5} alignItems="flex-start" w="full" as="section" pt={{ base: 24, md: 32 }}>
        <Heading size="lg" as="h1">
          Services
        </Heading>
        <Text lineHeight="1.9" maxW="3xl">
          {servicesIntro}
        </Text>
        <UnorderedList pl={6} spacing={3} maxW="3xl">
          {services.map((service) => (
            <ListItem key={service}>{service}</ListItem>
          ))}
        </UnorderedList>
        <ContactMe />
      </VStack>
    </>
  );
};

export default ServicesPage;
