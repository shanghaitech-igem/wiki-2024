import React from "react";
import { Link } from "gatsby";
import * as styles from "src/styles/modules/index.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

interface CardProps {
  number: string;
  subtitle: string;
  title: string;
  imgSrc: string;
  reverse?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  number,
  subtitle,
  title,
  imgSrc: imageSrc,
  reverse = false,
  children,
}) => {
  imageSrc = parseRemoteURL(imageSrc);
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textSection}>
        <div className={styles.number}>{number}</div>
        <div className={styles.subtitleContainer}>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{children}</p>
        <Link className={styles.readmore} to="/read-more">
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
