import { Stack, VStack, HStack, Divider, Text, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';

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
        justifyContent="center"
        spacing={2}
        position="relative"
      >
        <Text
          fontSize="sm"
          color="brand.accentMuted"
          display={{ base: 'block', md: 'block' }}
          position={{ md: 'absolute' }}
          left={{ md: 0 }}
        >
          {siteMeta.email}
        </Text>
        <HStack spacing={4}>
          <Link href="https://www.linkedin.com/in/beatrice-egid/" isExternal color="brand.accentMuted" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link href="https://orcid.org/0000-0001-8206-8903" isExternal color="brand.accentMuted" aria-label="ORCID">
            <FontAwesomeIcon icon={faOrcid} />
          </Link>
        </HStack>
        <InternalLink
          href="/"
          color="brand.accentMuted"
          fontSize="sm"
          position={{ md: 'absolute' }}
          right={{ md: 0 }}
        >
          Home
        </InternalLink>
      </Stack>
    </VStack>
  );
};

export default Footer;
