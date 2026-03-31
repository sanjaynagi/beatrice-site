import { Box, AspectRatio, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Flex position="relative" pb={4} justifyContent="center" w="full">
      <AspectRatio
        flexShrink={0}
        ratio={4 / 5}
        w={{ base: '78vw', md: 340 }}
        maxW="340px"
        as="figure"
      >
        <Box
          overflow="hidden"
          borderRadius="32px"
          bg="brand.surface"
          border="1px solid"
          borderColor="rgba(31, 90, 83, 0.14)"
          boxShadow="0 32px 60px rgba(31, 90, 83, 0.12)"
        >
          <Image
            src="/hero-img.jpg"
            width={640}
            height={800}
            alt="Portrait of Beatrice Egid"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
