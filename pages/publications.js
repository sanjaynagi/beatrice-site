import React from 'react';
import Link from 'next/link';
import { DocumentHead } from '../src/components/';
import PublicationCard from '../src/components/PublicationCard';
import {
  VStack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider,
  SimpleGrid,
  Box
} from '@chakra-ui/react';
import { FaGoogle, FaOrcid } from 'react-icons/fa';
import { PublicationsList } from '../src/data/publications';

const PublicationsPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Publications" postPath="/publications" />
      <VStack spacing={10} as="section" pt={{ base: 24, md: 32 }} alignItems="stretch" w="full">
        <VStack spacing={4} alignItems="center" textAlign="center" maxW="2xl" mx="auto">
          <Heading size="lg">Publications</Heading>
          <Text lineHeight="1.8" color="brand.accentMuted">
            Selected publications, reports and research outputs. If you need access to any of the work below, please get in touch.
          </Text>
          <ButtonGroup spacing={4} flexWrap="wrap" justifyContent="center">
            <Button
              as={Link}
              href="https://scholar.google.com/citations?user=kIRUwekAAAAJ&hl=en&oi=ao"
              leftIcon={<FaGoogle />}
              colorScheme="teal"
              size="lg"
              variant="ghost"
            >
              Google Scholar
            </Button>
            <Button
              as={Link}
              href="https://orcid.org/0000-0001-8206-8903"
              leftIcon={<FaOrcid />}
              colorScheme="teal"
              size="lg"
              variant="ghost"
            >
              Orcid
            </Button>
          </ButtonGroup>
        </VStack>

        <Divider borderColor="brand.border" />

        <Box>
          <Heading size="md" pb={6}>
            Selected Publications
          </Heading>
          <SimpleGrid columns={{ base: 1 }} spacing={6} w="full">
            {PublicationsList.map((publication) => (
              <PublicationCard key={publication.id} {...publication} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
};

export default PublicationsPage;
