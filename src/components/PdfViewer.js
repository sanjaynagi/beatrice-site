import { Box, Link, Text, VStack } from '@chakra-ui/react';

const PdfViewer = () => {
  const url = '/CV_Beatrice_Egid_26.pdf';

  return (
    <VStack w="full" spacing={4} alignItems="stretch">
      <Box
        as="iframe"
        src={url}
        title="Beatrice Egid CV"
        w="full"
        minH={{ base: '70vh', md: '1100px' }}
        border="1px solid"
        borderColor="brand.border"
        borderRadius="24px"
        bg="brand.surface"
      />
      <Text fontSize="sm" color="brand.accentMuted" textAlign="center">
        If the PDF preview does not appear in your browser,{' '}
        <Link href={url} isExternal>
          open the CV directly
        </Link>
        .
      </Text>
    </VStack>
  );
};

export default PdfViewer;
