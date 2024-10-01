import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import parseRemoteURL from "src/utils/remote-url-parser";
import * as styles from "src/styles/modules/profile.module.scss";

interface ProfileProps {
  portrait: string;
  brief: string;
  name: string;
  role: string;
  reverse?: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  portrait,
  brief,
  name,
  role,
  reverse = false,
}) => {
  portrait = parseRemoteURL(portrait);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const spring = useSpring({
    from: { width: bounds.width * 0.4 },
    to: { width: isOpen ? bounds.width : bounds.width * 0.4 },
  });

  const springText = useSpring({
    from: {
      marginLeft: 0,
      width: bounds.width * 0.4,
      opacity: 0,
      height: bounds.height * 0.4,
    },
    to: {
      marginLeft: isOpen
        ? reverse
          ? bounds.width * 0.15
          : bounds.width * 0.45
        : 0,
      width: isOpen ? bounds.width * 0.4 : 0,
      opacity: isOpen ? 1 : 0,
      height: isOpen ? bounds.height * 0.4 : 0,
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
          {brief}
        </animated.div>
      </animated.div>
      <animated.div style={{ ...spring }} className={styles.thirdContainer}>
        <div className={styles.nameJob}>
          <div className={styles.name}>{name}</div>
          <div className={styles.job}>{role}</div>
        </div>
      </animated.div>
    </div>
  );
};

export default Profile;
