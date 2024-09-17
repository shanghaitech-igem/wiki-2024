import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parseRemoteURL from "src/utils/remote-url-parser";
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

  const favicon = parseRemoteURL(pageFavicon || data.site.siteMetadata.favicon);

  return (
    <>
      <link key="favicon-shortcut" rel="shortcut icon" href={favicon} />
      <link key="favicon" rel="icon" href={favicon} />;
    </>
  );
};

export default Favicon;
