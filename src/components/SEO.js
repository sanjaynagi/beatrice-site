import Head from 'next/head';

const siteURL = 'https://beatriceegid.com';
const author = 'Beatrice R Egid';
const shortname = 'beatriceegid';
const description =
  "I'm Beatrice R Egid. Researcher. Welcome to my personal website and blog!";

const DocumentHead = ({ pageTitle, postPath, canonicalUrl }) => {
  let postUrl = `${siteURL}`;

  if (postPath) {
    postUrl = `${siteURL}${postPath}/`;
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#5fb0a1" name="theme-color" />
      <meta content="#5fb0a1" name="msapplication-TileColor" />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta content={description} name="description" />
      <meta name="author" content={author} />
      <meta name="author" content={shortname} />
      <meta name="publisher" content={author} />
      <meta
        name="keywords"
        content="Beatrice R Egid, beatriceegid, genomics, malaria, blog, Next.js, React"
      />

      <meta name="robots" content="index,follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={postPath ? postUrl : siteURL} />
      <meta property="og:type" content={postPath ? 'article' : 'website'} />
      <meta property="og:site_name" content="Sanjay C Nagi's personal site" />

    </Head>
  );
};

export default DocumentHead;
