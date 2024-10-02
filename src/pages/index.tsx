import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import SvgStatic from "src/components/index/svg-static";
import Card from "src/components/index/card";
import {
  main,
  stems,
  leaves as staticLeaves,
} from "src/components/index/objects-static";

import { leaves as imgLeaves } from "src/components/index/objects-img";
import * as styles from "src/styles/modules/index.module.scss";
import ScrollReveal from "scrollreveal";
import SVG from "react-inlinesvg";
import SvgImage from "src/components/index/svg-img";

const IndexPage: React.FC = () => {
  // React.useEffect(() => {
  //   ScrollReveal().reveal(`.${styles.leaf}`, {
  //     scale: 0.5,
  //     opacity: 0,
  //     duration: 1200,
  //     viewOffset: {
  //       // bottom: 130,
  //     },
  //     reset: false, // Ensures the animation happens only one time.
  //     afterReveal: (el) => {
  //       if (el instanceof HTMLElement) {
  //         el.classList.add(`${styles.leafWaving}`);
  //       }
  //     },
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
        <Card
          number="01"
          subtitle="FROM LAB TO DAILY CARE"
          title="Pioneering a New Era in Personal Care"
          imgSrc="server/home/scrath-1.png"
        >
          Itching, though often perceived as a minor issue, can have a
          significant impact on people’s quality of life. Persistent itching not
          only causes intense discomfort but also leads to involuntary
          scratching.
        </Card>
        <Card
          reverse
          number="02"
          subtitle="NAUGHTY SCRATCHING"
          title="Scratching is a Natural Response to Itching"
          imgSrc="server/home/scrath-1.png"
        >
          Scratching not only worsens skin damage but can also result in
          infections, inflammation, and even scarring, which can severely affect
          both the appearance and mental well-being of the patient.
        </Card>
        <Card
          number="03"
          subtitle="ITCHING AND HEALTH"
          title="Itching Can Be a Sign of Serious Conditions"
          imgSrc="server/home/scrath-1.png"
        >
          For certain vulnerable groups, such as individuals with weakened
          immune systems or the elderly, itching can be a sign of more serious
          underlying health conditions, such as skin disorders or complications
          from diabetes.
        </Card>
        <Card
          reverse
          number="04"
          subtitle="THE IMPORTANCE OF ITCHING"
          title="Addressing Itching Is Crucial for Overall Health"
          imgSrc="server/home/scrath-1.png"
        >
          Thus, addressing itching in a timely and effective manner is not only
          crucial for improving patients’ quality of life but also vital for
          ensuring their overall health.
        </Card>
        <Card
          number="05"
          subtitle="LIMITATIONS OF CURRENT TREATMENTS"
          title="Challenges with Existing Anti-Itch Products"
          imgSrc="server/home/scrath-1.png"
        >
          Although a wide range of anti-itch products are available, most focus
          on using antibiotics and other medications to directly target
          pathogens. While effective in treating the underlying causes, these
          treatments often do not provide immediate or substantial relief from
          the itching, leaving patients to endure discomfort during the healing
          process.
        </Card>
        <Card
          reverse
          number="06"
          subtitle="SIDE EFFECTS OF TREATMENTS"
          title="Hormonal Treatments and Their Risks"
          imgSrc="server/home/scrath-1.png"
        >
          Additionally, some products that claim to relieve itching contain
          hormones, which can lead to side effects such as skin thinning and
          hyperpigmentation with prolonged use, while offering limited relief.
        </Card>
        <Card
          number="07"
          subtitle="OUR INNOVATIVE APPROACH"
          title="Developing Green, Safe Inhibitors"
          imgSrc="server/home/scrath-1.png"
        >
          Our project recognizes the critical importance of addressing itching
          and is dedicated to developing green, safe inhibitors that
          scientifically address persistent itching caused by Staphylococcus
          aureus. This is achieved through an in-depth understanding of the V8
          protease mechanism.
        </Card>
        <Card
          reverse
          number="08"
          subtitle="IMPROVING QUALITY OF LIFE"
          title="Innovative Solutions for Personal Care"
          imgSrc="server/home/scrath-1.png"
        >
          Our solution not only alleviates patient discomfort and improves their
          quality of life but also introduces an innovative approach to personal
          care product development, breathing new life into the skin health
          industry.
        </Card>
        <Card
          number="09"
          subtitle="OUR PHILOSOPHY"
          title="Managing Bacteria for Better Health"
          imgSrc="server/home/scrath-1.png"
        >
          <p>
            Blind sterilization of bacteria isn't always ideal, as it can lead
            to antibiotic overuse. Staphylococcus aureus is common and can't be
            completely eradicated. We view bacteria as part of the human
            ecosystem and focus on reducing their harmful effects to prevent
            severe diseases.
          </p>
          <p>
            Our products aim to manage itching from Staphylococcus aureus,
            stopping issues from escalating.
          </p>
        </Card>

        <Card
          reverse
          number="10"
          subtitle="APPLICATION"
          title="Creating Specialized Cosmeceuticals"
          imgSrc="server/home/scrath-1.png"
        >
          We aim to develop a safe product that specifically targets persistent
          itching caused by Staphylococcus aureus. By combining our screened
          effective compounds with existing skincare products, we strive to
          create specialized cosmeceuticals that suppress itching early on,
          thereby reducing the harm caused by scratching.
        </Card>
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
