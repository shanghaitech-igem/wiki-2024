import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import parseRemoteURL from "src/utils/remote-url-parser";
import * as styles from "src/styles/modules/profile.module.scss";

interface ProfileProps {
  portrait: string;
  intro: string;
  name: string;
  job: string;
  reverse?: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  portrait,
  intro,
  name,
  job,
  reverse = false,
}) => {
  portrait = parseRemoteURL(portrait);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spring = useSpring({
    from: { width: windowWidth * 0.2 },
    to: { width: isOpen ? bounds.width : windowWidth * 0.2 },
  });

  const springText = useSpring({
    from: {
      marginLeft: 0,
      width: windowWidth * 0.25,
      opacity: 0,
      height: bounds.height,
    },
    to: {
      marginLeft: isOpen
        ? reverse
          ? windowWidth * 0.05
          : windowWidth * 0.21
        : 0,
      width: isOpen ? windowWidth * 0.25 : 0,
      opacity: isOpen ? 1 : 0,
      height: isOpen ? bounds.height : 0,
    },
  });

  return (
    <div
      className={`${styles.primaryContainer} ${
        reverse ? styles.alignRight : ""
      }`}
      ref={ref}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.portrait}
        style={{ backgroundImage: `url(${portrait})` }}
      />
      <animated.div style={{ ...spring }} className={styles.secondaryContainer}>
        <animated.div style={{ ...springText }} className={styles.intro}>
          {intro}
        </animated.div>
      </animated.div>
      <animated.div style={{ ...spring }} className={styles.thirdContainer}>
        <div className={styles.nameJob}>
          <div className={styles.name}>{name}</div>
          <div className={styles.job}>{job}</div>
        </div>
      </animated.div>
    </div>
  );
};

export default Profile;
