import { Link } from '@chakra-ui/react';
import { siteMeta } from '../data/siteContent';

const EmailLink = () => {
  return (
    <Link
      href={`mailto:${siteMeta.email}`}
      fontSize={{ base: 'md', md: 'lg' }}
      fontWeight="600"
      color="brand.accent"
      _hover={{ color: 'brand.accentMuted', textDecoration: 'none' }}
    >
      {siteMeta.email}
    </Link>
  );
};

export default EmailLink;
