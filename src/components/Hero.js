import { Box, Stack, VStack, Heading, Text, HStack } from '@chakra-ui/react';
import useBetterMediaQuery from './BetterMediaQuery';
import HeroImage from "./HeroImage";
import ContactIcons from './ContactIcons';

const Hero = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)');
  return (
    <Box pt={28}>
      <Stack 
        pb={8}
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            alignItems="center"
          >
            {isMobile ? (
              <VStack width="100%" justifyContent={'space-between'}>
                <Heading size="lg" as="h1">
                  Beatrice Rose Egid.
                </Heading>     
                <HeroImage />
              </VStack>  
            ) : (
              <HStack width="100%" justifyContent={'space-between'}>
                <Heading size="lg" as="h1">
                  Beatrice Rose Egid.
                </Heading>     
                <HeroImage />
              </HStack>  
            )}
          </Stack>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m a research consultant specialising in addressing complex questions in global health. 
            My work focuses on health equity, community engagement, social determinants of health, 
            marginalisation, and multi-sectoral collaboration.
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I am passionate about participatory research approaches and centring community voices in health and social research. 
            I&apos;m also the co-founder of the <em>‘Connecting Citizens to Science’</em> podcast, which explores the intersection 
            of science and community engagement.
          </Text>
        </VStack>
      </Stack>
      <ContactIcons />   
    </Box>
  );
};

export default Hero;