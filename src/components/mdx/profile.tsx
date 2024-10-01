import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

import "./profile.scss";

interface ProfileProps {
  portrait: string;
  intro: string;
  name: string;
  job: string;
}

const Profile: React.FC<ProfileProps> = ({ portrait, intro, name, job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spring = useSpring({
    from: { width: windowWidth * 0.2 }, // Start with 20% of the container width
    to: { width: isOpen ? bounds.width : windowWidth * 0.2 }, // Toggle between 20% and 50%
  });

  const springText = useSpring({
    from: {
      marginLeft: 0,
      width: windowWidth * 0.25,
      opacity: 0,
      height: bounds.height,
    },
    to: {
      marginLeft: isOpen ? windowWidth * 0.21 : 0,
      width: isOpen ? windowWidth * 0.25 : 0,
      opacity: isOpen ? 1 : 0,
      height: isOpen ? bounds.height : 0,
    },
  });

  return (
    <div className="primary-container" ref={ref}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="portrait"
        style={{ backgroundImage: `url(${portrait})` }}
      />
      <animated.div style={{ ...spring }} className="secondary-container">
        <animated.div style={{ ...springText }} className="intro">
          {intro}
        </animated.div>
      </animated.div>
      <animated.div style={{ ...spring }} className="third-container">
        <div className="name-job">
          <div className="name">{name}</div>
          <div className="job">{job}</div>
        </div>
      </animated.div>
    </div>
  );
};

export default Profile;
