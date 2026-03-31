import Head from 'next/head';
import { siteMeta } from '../data/siteContent';

const DocumentHead = ({ pageTitle, postPath, canonicalUrl }) => {
  let postUrl = siteMeta.siteUrl;

  if (postPath) {
    postUrl = `${siteMeta.siteUrl}${postPath}/`;
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#1f5a53" name="theme-color" />
      <meta content="#1f5a53" name="msapplication-TileColor" />
      <link rel="canonical" href={canonicalUrl || postUrl} />

      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta content={siteMeta.description} name="description" />
      <meta name="author" content={siteMeta.name} />
      <meta name="author" content="beatriceegid" />
      <meta name="publisher" content={siteMeta.name} />
      <meta
        name="keywords"
        content="Beatrice R Egid, beatriceegid, global health, community engagement, health systems, research ethics"
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
      <meta property="og:description" content={siteMeta.description} />
      <meta property="og:url" content={postPath ? postUrl : siteMeta.siteUrl} />
      <meta property="og:type" content={postPath ? 'article' : 'website'} />
      <meta property="og:site_name" content="Beatrice R Egid" />

    </Head>
  );
};

export default DocumentHead;
