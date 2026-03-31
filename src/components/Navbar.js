import {
  Container,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';

import InternalLink from './InternalLink';

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#f7f4ede6"
      borderBottom="1px solid"
      borderColor="brand.border"
      css={{ backdropFilter: 'blur(14px)' }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        py={{ base: 3, md: 4 }}
        maxW="container.xl"
        px={{ base: 6, md: 12, lg: 16 }}
        wrap="wrap"
        as="nav"
        align={{ base: 'flex-start', md: 'center' }}
        justify="space-between"
        minH={{ md: '72px' }}
      >
        <Box
          display="flex"
          alignItems="center"
          minH={{ md: '44px' }}
          mr={{ md: 12, lg: 16 }}
        >
          <InternalLink href="/" px={0}>
            <Text
              fontSize={{ base: '2xl', md: '1.35rem' }}
              fontWeight="600"
              color="brand.text"
              lineHeight="1"
              letterSpacing="-0.02em"
            >
              Beatrice R Egid
            </Text>
          </InternalLink>
        </Box>
        <Stack
          direction="row"
          spacing={{ base: 1, md: 0 }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent={{ base: 'flex-start', md: 'flex-end' }}
          flexWrap="wrap"
          mt={{ base: 3, md: 0 }}
          pt={{ base: 2, md: 0 }}
          borderTop={{ base: '1px solid', md: 'none' }}
          borderColor="brand.border"
          fontSize={{ base: 'sm', md: '0.96rem' }}
          lineHeight="1"
        >
          <InternalLink href="/about" py={2} px={{ base: 0, md: 3 }}>
            About
          </InternalLink>
          <InternalLink href="/services" py={2} px={{ base: 0, md: 3 }}>
            Services
          </InternalLink>
          <InternalLink href="/publications" py={2} px={{ base: 0, md: 3 }}>
            Publications
          </InternalLink>
          <InternalLink href="/cv" py={2} px={{ base: 0, md: 3 }}>
            CV
          </InternalLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
