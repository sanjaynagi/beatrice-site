import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const InternalLink = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        p={2}
        _hover={{
          textDecoration: 'none',
          color: 'brand.accentMuted'
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default InternalLink;
