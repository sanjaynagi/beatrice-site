import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import HeroImage from './HeroImage';
import { heroIntro, heroBody } from '../data/siteContent';

const Hero = () => {
  return (
    <Box pt={{ base: 24, md: 32 }} w="full">
      <Stack
        pb={14}
        alignItems="stretch"
        spacing={{ base: 10, md: 16 }}
        w="full"
        direction={{ base: 'column', md: 'row' }}
        as="section"
      >
        <Box
          w={{ base: 'full', md: '40%' }}
          display="flex"
          justifyContent={{ base: 'flex-start', md: 'flex-end' }}
          order={{ base: 1, md: 2 }}
          position="relative"
        >
          <Box position="relative" zIndex={1}>
            <HeroImage />
          </Box>
        </Box>
        <VStack
          spacing={6}
          alignItems="flex-start"
          w="full"
          maxW={{ base: '100%', md: '780px' }}
          justifyContent="center"
          order={{ base: 2, md: 1 }}
        >
          <Text fontSize={{ base: 'xl', md: '2xl' }} lineHeight="1.7" maxW="30ch">
            {heroIntro}
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="1.8"
            color="brand.accentMuted"
            maxW="36ch"
          >
            {heroBody}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Hero;
