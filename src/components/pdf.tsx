import React from "react";

import * as styles from "../styles/mdx.module.scss";

interface PDFProps {
  url: string;
  [key: string]: any; // Allows for any additional props
}

const PDF: React.FC<PDFProps> = ({ url, ...props }) => (
    <div className={styles.pdfContainer}>
      <div className={styles.pdf}>
        <iframe
          src={url}
          {...props} // Spread any additional props onto the iframe
        />
      </div>
    </div>
  );
  

export default PDF;
