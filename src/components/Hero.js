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
          <Box
            position="absolute"
            inset={{ base: '-16px -8px auto auto', md: '-18px -18px auto auto' }}
            w={{ base: '78vw', md: '340px' }}
            h={{ base: 'calc(78vw * 1.25)', md: '425px' }}
            maxW="340px"
            maxH="425px"
            border="1px solid"
            borderColor="rgba(31, 90, 83, 0.18)"
            borderRadius="32px"
            zIndex={0}
          />
          <Box position="relative" zIndex={1}>
            <HeroImage />
          </Box>
        </Box>
        <VStack
          spacing={6}
          alignItems="flex-start"
          w="full"
          maxW={{ base: '100%', md: '620px' }}
          justifyContent="center"
          order={{ base: 2, md: 1 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3.35rem', md: '5.4rem' }}
            lineHeight={{ base: 0.94, md: 0.92 }}
            maxW="8ch"
          >
            Bea
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }} lineHeight="1.7" maxW="20ch">
            {heroIntro}
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="1.8"
            color="brand.accentMuted"
            maxW="26ch"
          >
            {heroBody}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Hero;
