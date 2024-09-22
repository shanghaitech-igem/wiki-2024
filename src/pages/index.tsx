import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";

const { title } = styles;

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const options = {
        distance: "10px",
      };
      ScrollReveal().reveal(`.${title}`, options);
    }
  }, []);

  return (
    <Layout>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
      <p className={title}>Welcome!</p>
    </Layout>
  );
};

export const Head: React.FC = () => {
  return (
    <>
      <Seo title="Home" />
      <Favicon />
    </>
  );
};

export default IndexPage;
