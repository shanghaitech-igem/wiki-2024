import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import SvgStatic from "src/components/index/svg-static";
import Card from "src/components/index/card";
import { main, stems, leaves } from "src/components/index/objects-static";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";

const IndexPage: React.FC = () => {
  // React.useEffect(() => {
  //   ScrollReveal().reveal(".leaf-reveal", {
  //     scale: 0.5,
  //     opacity: 0,
  //     duration: 1200,
  //     viewOffset: {
  //       bottom: 130,
  //     },
  //     reset: false, // Ensures the animation happens only one time.
  //   });

  //   const interval = 300;
  //   const startDelay = 300;

  //   ScrollReveal().reveal(`.${styles.titleBanner}`, {
  //     delay: startDelay,
  //     distance: "100px",
  //     easing: "ease-out",
  //     reset: false, // Ensures the animation happens only one time.
  //   });

  //   ScrollReveal().reveal(`.${styles.title}`, {
  //     delay: startDelay + interval * 1,
  //     distance: "100px",
  //     reset: false,
  //   });

  //   ScrollReveal().reveal(`.${styles.titlePrompt}`, {
  //     delay: startDelay + interval * 2,
  //     reset: false,
  //   });
  // }, []);

  return (
    <Layout>
      <div className={styles.bgContainer} style={{ position: "relative" }}>
        <div className={styles.titleContainer}>
          <div className={`${styles.titleBanner} load-hidden`}>
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
          <p className={`${styles.title} load-hidden`}>PACIFY</p>
          <p className={`${styles.titlePrompt} load-hidden`}>scroll down ↓</p>
        </div>
        <SvgStatic key={`leaf-main`} {...main} />
        {stems.map((stem, index) => (
          <SvgStatic key={`stem-${index}`} {...stem} />
        ))}
        {leaves.map((leaf, index) => (
          <SvgStatic
            key={`leaf-${index}`}
            {...leaf}
            className="leaf-reveal load-hidden"
          />
        ))}
      </div>
      <div className={styles.contentContainer}>
        <Card
          number="01"
          subtitle="GET STARTED"
          title="What level of hiker are you?"
          imgSrc="server/test/cash-macanaya-x9cemmq4yjm-unsplash.jpg"
        >
          Determining what level of hiker you are can be an important tool when
          planning future hikes. This hiking level guide will help you plan
          hikes according to different hike ratings set by various websites like
          All Trails and Modern Hiker. What type of hiker are you – novice,
          moderate, advanced moderate, expert, or expert backpacker?
        </Card>
        <Card
          reverse={true}
          number="02"
          subtitle="EXPLORE"
          title="Find new trails"
          imgSrc="server/test/cash-macanaya-x9cemmq4yjm-unsplash.jpg"
        >
          Explore new trails and discover hidden gems in your area. Whether
          you're looking for a challenging hike or a leisurely walk, there's
          something for everyone.
        </Card>
        <Card
          number="03"
          subtitle="GEAR UP"
          title="Essential hiking gear"
          imgSrc="server/test/cash-macanaya-x9cemmq4yjm-unsplash.jpg"
        >
          Make sure you're prepared for your next adventure with the right gear.
          From boots to backpacks, we've got you covered with our gear guides.
        </Card>
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
