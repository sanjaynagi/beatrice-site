import {
  VStack,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  Badge,
} from '@chakra-ui/react';
import ExternalLink from './ExternalLink';

const PublicationCard = ({
  id,
  title,
  authors,
  year,
  journal,
  journalLogo,
  doi,
}) => {
  const doiUrl = doi ? `https://doi.org/${doi}` : null;

  return (
    <LinkBox as="article">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        p={5}
        spacing={{ base: 8, md: 5 }}
        bg="brand.surface"
        border="1px solid"
        borderColor="brand.border"
        rounded="2xl"
        alignItems="center"
        transitionProperty="transform"
        transitionDuration="slow"
        transitionTimingFunction="ease-out"
        _hover={{ transform: 'translateY(-2px)' }}
      >
        {journalLogo && (
          <Image
            src={journalLogo}
            alt={`${journal} logo`}
            w={20}
            h={20}
            objectFit="contain"
          />
        )}

        <VStack spacing={3} flex={1} align="flex-start">
          <VStack w="full" spacing={2} align="flex-start">
            <Stack
              w="full"
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'flex-start', md: 'space-between' }}
              alignItems={{ base: 'flex-start', md: 'center' }}
            >
              <Heading fontSize="1.1rem" fontWeight="semibold">
                {doiUrl ? (
                  <LinkOverlay
                    as={ExternalLink}
                    href={doiUrl}
                    color="brand.text"
                    _hover={{ textDecoration: 'none' }}
                  >
                    {title}
                  </LinkOverlay>
                ) : (
                  title
                )}
              </Heading>
            </Stack>

            <Text fontSize="sm" color="brand.accentMuted" w="full">
              {authors}
            </Text>

            {!journalLogo && journal && (
              <Text fontSize="xs" color="brand.accentMuted" w="full" fontStyle="italic">
                {journal}
              </Text>
            )}

            <Stack
              w="full"
              direction={{ base: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start', sm: 'center' }}
            >
              {doi && (
                <Text fontSize="xs" color="brand.accentMuted">
                  DOI: {doi}
                </Text>
              )}
              <Badge colorScheme="teal" variant="subtle">
                {year}
              </Badge>
            </Stack>
          </VStack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default PublicationCard;
