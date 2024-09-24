import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";

import Draw from "src/components/draw";

const { title, container, titlePrompt, loadHidden } = styles;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={styles.titleContainer}>
          <div className={styles.titleBanner}>
            <svg
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="72" height="2" fill="#c0b2a6" />
            </svg>
            <p>2024 SHANGHAITECH CHINA</p>
          </div>
          <p className={`${title} load-hidden`}>PACIFY</p>
          <p className={titlePrompt}>scroll down ↓</p>
        </div>
        <Draw />
      </div>
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
