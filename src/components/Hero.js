import { Box, Stack, VStack, Heading, Text, HStack } from '@chakra-ui/react';
import useBetterMediaQuery from './BetterMediaQuery';
import HeroImage from "./HeroImage"
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
                Guten Tag!, I&apos;m Beatrice
              </Heading>     
              <HeroImage />
            </VStack>  
          ) : (
            <HStack width="100%" justifyContent={'space-between'}>
              <Heading size="lg" as="h1">
               Guten Tag!, I&apos;m Beatrice
              </Heading>     
              <HeroImage />
             </HStack>  
            )
          }
          </Stack>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m a cool dude, but Sanjay is the best! 
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
          Curabitur consequat venenatis iaculis. Vestibulum ornare erat in venenatis eleifend. Donec dignissim ex sit amet neque dictum luctus.
          Nullam non lacus pretium, ornare ligula scelerisque, iaculis est. Integer nec sollicitudin dolor. Mauris eget sapien quam. Nunc porta 
          justo sit amet nulla sodales lobortis a eu sem. Sed tristique, ligula nec vulputate pellentesque, tortor augue porta ante, finibus hendrerit
          quam tortor vitae sapien. Fusce non aliquam diam. In quis varius metus. Proin accumsan ullamcorper lectus, a ullamcorper nisl ullamcorper quis.
          </Text>
        </VStack>
      </Stack>
      <ContactIcons />   

    </Box>
  );
};

export default Hero;
