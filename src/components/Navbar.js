import {
  Container,
  Box,
  Stack,
  Flex,
  Divider,
  useColorModeValue,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import InternalLink from './InternalLink';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = props => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#5c5e5b')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        as="nav"
        align="center"
        justify="space-between"
      >
        {/* Adjust Flex alignment and add margin */}
        <Flex align="center" ml={{ base: 2, md: 8 }}>
          <InternalLink href="/" height="%50">
            <Text
              fontSize={{ base: '0px', md: '22px' }}
              fontWeight={{ base: '0', md: '600' }}
              sx={{
                background:
                  'linear-gradient(45deg, #124a28, #bcd3b1ff 30%, #ffffff 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '800%',
              }}
            >
              Beatrice R Egid
            </Text>
          </InternalLink>
        </Flex>

        {isMobile ? (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <InternalLink href="/about" fontSize="md">
              About
            </InternalLink>
            <InternalLink href="/blog" fontSize="md">
              Blog
            </InternalLink>
            <InternalLink href="/publications" fontSize="md">
              Publications
            </InternalLink>
          </Stack>
        ) : (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <Divider orientation="vertical" ml="3" />
            <InternalLink href="/about">About</InternalLink>
            <InternalLink href="/blog">Blog</InternalLink>
            <InternalLink href="/cv">CV</InternalLink>
            <InternalLink href="/publications">Publications</InternalLink>
          </Stack>
        )}
        {/* Adjust Box alignment */}
        <Box flex={1} align="right" mr={{ base: 2, md: 4 }}>
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;