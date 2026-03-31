import { Stack, VStack, Divider, Text } from '@chakra-ui/react';

import InternalLink from './InternalLink';
import { siteMeta } from '../data/siteContent';

const Footer = () => {
  return (
    <VStack pb={8} as="footer" alignItems="center" w="full">
      <Divider borderColor="brand.border" />
      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
        spacing={2}
      >
        <Text fontSize="sm" color="brand.accentMuted">
          {siteMeta.email}
        </Text>
        <InternalLink href="/" color="brand.accentMuted" fontSize="sm">
          Home
        </InternalLink>
      </Stack>
    </VStack>
  );
};

export default Footer;
