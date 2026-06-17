import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component — place at the top of every page component.
 * Props:
 *  - title: string (page title, will be appended with " | Nexasoft Solutions")
 *  - description: string (meta description, ideally 120-160 chars)
 *  - canonical: string (full canonical URL, e.g. "https://thenexasoftsolutions.com/about-us")
 *  - ogImage: string (absolute URL for og:image)
 *  - noIndex: boolean (set true for pages you want to hide from Google)
 *  - schema: object or array (JSON-LD structured data)
 */
const SEO = ({
  title,
  description,
  canonical,
  ogImage = "https://cdn.shopify.com/s/files/1/0676/1155/7936/files/20260228_1200_Image_Generation_simple_compose_01kjjxd1yge5p9bd1xhb63nv84.png?v=1772309488",
  noIndex = false,
  schema = null,
}) => {
  const fullTitle = title
    ? `${title} | Nexasoft Solutions`
    : "Nexasoft Solutions — Custom Software, Web Design & Digital Marketing Agency";

  const siteUrl = "https://thenexasoftsolutions.com";

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nexasoft Solutions" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
