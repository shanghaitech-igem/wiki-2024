import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";
import parseRemoteURL from "src/utils/remote-url-parser";

import leafMain from "../../server/home/leaf-main.svg";

const { title, container, titlePrompt, loadHidden } = styles;

const IndexPage: React.FC = () => {
  function myCallback(el: HTMLElement) {
    el.classList.add("reveal");
  }

  const svgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (svgRef.current) {
      ScrollReveal().reveal(svgRef.current, {
        beforeReveal: myCallback,
      });
    }
  }, []);

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
          <p className={`${title}`}>PACIFY</p>
          <p className={titlePrompt}>scroll down ↓</p>
        </div>
        <leafMain className={styles.leafMain} />
        <div ref={svgRef}>
          <div className="stem-mask"></div>
          className={styles.stem1}
        </div>
        className={styles.stem1Leaf1}
        className={styles.stem1Leaf2}
        className={styles.stem1Leaf3}
        className={styles.stem1Leaf4}
        className={styles.stem1Leaf5}
        className={styles.stem1Leaf6}
        className={styles.stem2}
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
