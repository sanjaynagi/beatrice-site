import { Box, Container, VStack } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <Box
      as="main"
      pb={8}
      bg="brand.background"
      backgroundImage="
        radial-gradient(circle at top left, rgba(176, 199, 193, 0.26), transparent 34%),
        radial-gradient(circle at top right, rgba(223, 212, 195, 0.34), transparent 30%),
        linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0))
      "
    >
      <Navbar />
      <Container
        maxW="container.xl"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 6, md: 12, lg: 16 }}
      >
        <VStack spacing={16} flex={1} w="full" as="main" mb={16}>
          {children}
        </VStack>
        <Analytics />
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
