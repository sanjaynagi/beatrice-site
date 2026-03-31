import { VStack, Heading, Text } from '@chakra-ui/react';
import EmailLink from './EmailLink';

const ContactMe = () => {
  return (
    <VStack
      spacing={3}
      alignItems="flex-start"
      w="full"
      as="section"
      borderTop="1px solid"
      borderColor="brand.border"
      pt={10}
      pb={2}
    >
      <Heading size="lg" as="h2">
        Contact
      </Heading>
      <Text maxW="2xl">
        Feel free to get in touch by email for consultancy, collaboration or teaching enquiries.
      </Text>
      <EmailLink />
    </VStack>
  );
};

export default ContactMe;
