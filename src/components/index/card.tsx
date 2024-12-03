import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import * as styles from "src/styles/modules/card.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";
import ScrollReveal from "scrollreveal";

interface CardProps {
  number: string;
  subtitle: string;
  title: string;
  imgSrc: string;
  reverse?: boolean;
  readmoreURL?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  number,
  subtitle,
  title,
  imgSrc: imageSrc,
  reverse = false,
  readmoreURL,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      ScrollReveal().reveal(cardRef.current, {
        distance: "100px",
        viewFactor: 0.5,
        duration: 1000,
        easing: "ease-in-out",
        origin: "bottom",
        reset: false,
      });
    }
  }, []);

  imageSrc = parseRemoteURL(imageSrc);

  return (
    <div
      className={`${styles.card} ${reverse ? styles.reverse : ""}`}
      ref={cardRef}
    >
      <div className={styles.textSection}>
        <div className={styles.number}>{number}</div>
        <div className={styles.subtitleContainer}>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{children}</div>
        <Link
          className={styles.readmore}
          to={readmoreURL ? readmoreURL : "/description"}
        >
          READ MORE
        </Link>
      </div>
      <div className={styles.imageSection}>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default Card;
