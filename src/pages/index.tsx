import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import SvgImg from "src/components/index/svg-img";
import { main, stems, leaves } from "src/components/index/objects";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";

const { title, container, titlePrompt } = styles;

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    ScrollReveal().reveal('.leaf-reveal', {
      scale: 0.5,
      delay: 100,
      opacity: 0,
      duration: 1200,
      reset: false, // Ensures the animation happens only one time.
    });
  }, []);

  return (
    <Layout>
      <div className={container} style={{ position: "relative" }}>
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
        <SvgImg key={`leaf-main`} {...main} />
        {stems.map((stem, index) => (
          <SvgImg key={`stem-${index}`} {...stem} />
        ))}
        {leaves.map((leaf, index) => (
          <SvgImg key={`leaf-${index}`} {...leaf} className="leaf-reveal" />
        ))}
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
