import React from "react";

import * as styles from "../styles/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.section}>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="https://www.shanghaitech.edu.cn">ShanghaiTech</a>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Contact</h3>
            <p>
              <a href="mailto:igemshanghaitech@163.com">
                igemshanghaitech@163.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            © 2024 - Content on this site is licensed under a{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </p>
          <p>
            The repository used to create this website is available at{" "}
            <a href="gitlab.igem.org/2024/shanghaitech-china">
              gitlab.igem.org/2024/shanghaitech-china
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
