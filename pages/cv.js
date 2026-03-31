import React from 'react';
import PdfViewer from '../src/components/PdfViewer';
import { VStack, Heading, Button, Text } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { DocumentHead } from '../src/components';

const CvPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Curriculum Vitae" postPath="/cv" />
      <VStack spacing={4} alignItems="center" w="full" as="section" pt={{ base: 24, md: 32 }}>
        <Heading size="lg">
          Curriculum Vitae
        </Heading>
        <Text color="brand.accentMuted">Download the latest CV below.</Text>
        <Button leftIcon={<FaDownload />} colorScheme="teal" size="lg" variant="ghost">
          <Link href="/CV_Beatrice_Egid_26.pdf">Download CV</Link>
        </Button>
        <PdfViewer />
      </VStack>
    </>
  );
};

export default CvPage;
