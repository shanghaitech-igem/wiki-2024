import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import SvgImg from "src/components/index/svg-img";
import { main, stems, leaves } from "src/components/index/objects";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";

const { title, container, titlePrompt, titleContainer, titleBanner } = styles;

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    ScrollReveal().reveal(".leaf-reveal", {
      scale: 0.5,
      opacity: 0,
      duration: 1200,
      viewOffset: {
        bottom: 230,
      },
      reset: false, // Ensures the animation happens only one time.
    });

    const interval = 300;
    const startDelay = 300;

    ScrollReveal().reveal(`.${titleBanner}`, {
      delay: startDelay,
      distance: "100px",
      easing: "ease-out",
      reset: false, // Ensures the animation happens only one time.
    });
    ScrollReveal().reveal(`.${title}`, {
      delay: startDelay + interval * 1,
      distance: "100px",
      reset: false,
    });
    ScrollReveal().reveal(`.${titlePrompt}`, {
      delay: startDelay + interval * 2,
      reset: false,
    });
  }, []);

  return (
    <Layout>
      <div className={container} style={{ position: "relative" }}>
        <div className={titleContainer}>
          <div className={`${titleBanner} load-hidden`}>
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
          <p className={`${titlePrompt} load-hidden`}>scroll down ↓</p>
        </div>
        <SvgImg key={`leaf-main`} {...main} />
        {stems.map((stem, index) => (
          <SvgImg key={`stem-${index}`} {...stem} />
        ))}
        {leaves.map((leaf, index) => (
          <SvgImg
            key={`leaf-${index}`}
            {...leaf}
            className="leaf-reveal load-hidden"
          />
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
