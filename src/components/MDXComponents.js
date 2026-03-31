import { Alert, Box, chakra, Kbd } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Highlight } from 'prism-react-renderer';
import HTMLPlot from './HTMLPlot';

const Pre = props => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Table = props => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = props => (
  <chakra.th
    bg="brand.surface"
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = props => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="brand.border"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const codeTheme = {
  plain: {
    backgroundColor: '#17322f',
    color: '#f7f4ed'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: '#8fa8a2' }
    },
    {
      types: ['string', 'attr-value'],
      style: { color: '#c7e5de' }
    },
    {
      types: ['number', 'boolean', 'variable', 'constant', 'property'],
      style: { color: '#f7cf9a' }
    },
    {
      types: ['keyword', 'selector', 'attr-name'],
      style: { color: '#c0f0de' }
    },
    {
      types: ['function', 'tag'],
      style: { color: '#9dd2cb' }
    }
  ]
};

const CodeHighlight = ({ children, className }) => {
  const code = String(children || '').trimEnd();
  const language = className ? className.replace('language-', '') : 'text';
  const showLineNumbers = !['shell', 'text'].includes(language);

  return (
    <Highlight code={code} language={language} theme={codeTheme}>
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.pre
          className={highlightClassName}
          sx={{ ...style }}
          overflowX="auto"
          borderRadius="xl"
          p={4}
          fontSize="sm"
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <chakra.div {...lineProps} key={index} display="table-row">
                {showLineNumbers && (
                  <chakra.span
                    display="table-cell"
                    pr={4}
                    color="#8fa8a2"
                    userSelect="none"
                  >
                    {index + 1}
                  </chakra.span>
                )}
                {line.map((token, tokenIndex) => (
                  <chakra.span
                    {...getTokenProps({ token, key: tokenIndex })}
                    key={`${index}.${tokenIndex}`}
                  />
                ))}
              </chakra.div>
            );
          })}
        </chakra.pre>
      )}
    </Highlight>
  );
};

const InlineCode = props => (
  <chakra.code
    color="brand.accent"
    bg="brand.surface"
    px={1}
    py={0.5}
    rounded="md"
    {...props}
  />
);

const Image = props => {
  if (!props.blurDataURL) {
    return <img src={props.src} alt={props.alt || ''} width={props.width || 300} height={props.height || 300} />;
  }

  return (
    <NextImage
      {...props}
      width={props.width}
      height={props.height}
      loading="lazy"
      quality={100}
    />
  );
};

const Anchor = props => (
  <chakra.a
    color="brand.accent"
    _hover={{ textDecoration: 'underline', color: 'brand.accentMuted' }}
    {...props}
  />
);

const MDXComponents = {
  code: CodeHighlight,
  inlineCode: InlineCode,
  h1: props => <chakra.h1 fontSize="3xl" fontWeight="600" mb={4} {...props} />,
  h2: props => <chakra.h2 fontSize="2xl" fontWeight="600" mb={4} {...props} />,
  h3: props => <chakra.h3 fontSize="xl" fontWeight="600" mb={3} {...props} />,
  h4: props => <chakra.h4 fontSize="lg" fontWeight="600" mb={3} {...props} />,
  hr: props => <chakra.hr borderColor="brand.border" my={8} {...props} />,
  strong: props => <Box as="strong" fontWeight="semibold" {...props} />,
  pre: Pre,
  kbd: Kbd,
  img: Image,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: props => <chakra.p fontSize="lg" lineHeight="1.9" mb={4} {...props} />,
  ul: props => <chakra.ul px={{ base: 4, md: 8 }} mb={4} {...props} />,
  ol: props => <chakra.ol px={{ base: 4, md: 8 }} mb={4} {...props} />,
  li: props => <chakra.li pb="4px" fontSize="lg" lineHeight="1.8" {...props} />,
  blockquote: props => (
    <Box>
      <Alert
        role="none"
        status="info"
        variant="left-accent"
        as="blockquote"
        rounded="4px"
        {...props}
        mx={-4}
        w="unset"
      />
    </Box>
  ),
  HTMLPlot
};

export default MDXComponents;
