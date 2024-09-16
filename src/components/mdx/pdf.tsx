import React from "react";

import * as styles from "../../styles/modules/pdf.module.scss";

interface PDFProps {
  src: string;
  [key: string]: any; // Allows for any additional props
}
const staticServerURL = "https://static.igem.wiki/teams/5174/";

const PDF: React.FC<PDFProps> = ({ src, ...props }) => {
  src = src?.startsWith("http") ? src : src?.replace("server/", staticServerURL);
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdf}>
        <iframe
          src={src}
          {...props} // Spread any additional props onto the iframe
        />
      </div>
    </div>
  );
};

export default PDF;
