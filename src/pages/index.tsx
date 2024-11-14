import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import SVG from "react-inlinesvg";
import SvgStatic from "src/components/index/svg-static";
import SvgImage from "src/components/index/svg-img";
import {
  main,
  stems,
  leaves as staticLeaves,
} from "src/components/index/objects-static";

import { leaves as imgLeaves } from "src/components/index/objects-img";
import * as styles from "src/styles/modules/index.module.scss";

import Card from "src/components/index/card";
import { cardData } from "src/components/index/objects-card";

import ScrollReveal from "scrollreveal";

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    ScrollReveal().reveal(`.${styles.leaf}`, {
      scale: 0.5,
      opacity: 0,
      duration: 1200,
      viewOffset: {
        bottom: 130,
      },
      reset: false, // Ensures the animation happens only one time.
      afterReveal: (el) => {
        if (el instanceof HTMLElement) {
          el.classList.add(`${styles.leafWaving}`);
        }
      },
    });

    const interval = 300;
    const startDelay = 300;

    ScrollReveal().reveal(`.${styles.titleBanner}`, {
      delay: startDelay,
      distance: "100px",
      easing: "ease-out",
      reset: false, // Ensures the animation happens only one time.
    });

    ScrollReveal().reveal(`.${styles.title}`, {
      delay: startDelay + interval * 1,
      distance: "100px",
      reset: false,
    });

    ScrollReveal().reveal(`.${styles.titlePrompt}`, {
      delay: startDelay + interval * 2,
      reset: false,
    });
  }, []);

  return (
    <Layout>
      <div className={styles.bgContainer} style={{ position: "relative" }}>
        <div className={styles.titleContainer}>
          <p className={`${styles.titleBanner} load-hidden`}>
            2024 SHANGHAITECH CHINA
          </p>
          <p className={`${styles.title} load-hidden`}> Calm skin</p>
          <p className={`${styles.title} load-hidden`}> Elevate life</p>
          <p className={`${styles.titlePrompt} load-hidden`}>scroll down ↓</p>
        </div>
        <SvgStatic key={`leaf-main`} {...main} />
        {stems.map((stem, index) => (
          <SvgStatic key={`stem-${index}`} {...stem} />
        ))}
        {staticLeaves.map((leaf, index) => (
          <SvgStatic
            key={`leaf-${index}`}
            {...leaf}
            className={`${styles.leaf} load-hidden`}
          />
        ))}
        {imgLeaves.map((leaf, index) => (
          <SvgImage
            key={`leaf-${index}`}
            {...leaf}
            className={`${styles.leaf} load-hidden`}
          />
        ))}
      </div>
      <SVG
        src={main.svg}
        style={{ position: "relative", visibility: "hidden" }}
      />
      <div className={styles.contentContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            subtitle={card.subtitle}
            title={card.title}
            imgSrc={card.imgSrc}
            reverse={card.reverse}
          >
            {card.content}
          </Card>
        ))}
      </div>
      <div className={styles.slogan}>Calm your skin, Elevate your life</div>
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
