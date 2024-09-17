import { graphql, useStaticQuery } from "gatsby";

export default function parseRemoteURL(url: string | undefined): string {
  if (!url) return "";
  const staticServerURL = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          staticServerURL
        }
      }
    }
  `).site.siteMetadata.staticServerURL;
  url = url?.startsWith("http")
    ? url
    : url?.replace("server/", staticServerURL);
  return url;
}
