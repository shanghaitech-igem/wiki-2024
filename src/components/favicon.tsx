import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface FaviconProps {
  pageFavicon?: string;
}

const Favicon: React.FC<FaviconProps> = ({ pageFavicon }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          favicon
        }
      }
    }
  `);

  const favicon = pageFavicon || data.site.siteMetadata.favicon;

  return (
    <>
      <link key="favicon-shortcut" rel="shortcut icon" href={favicon} />
      <link key="favicon" rel="icon" href={favicon} />;
    </>
  );
};

export default Favicon;
