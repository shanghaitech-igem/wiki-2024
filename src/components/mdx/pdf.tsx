import React from "react";

import * as styles from "src/styles/modules/pdf.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

interface PDFProps {
  src: string;
  [key: string]: any; // Allows for any additional props
}

const PDF: React.FC<PDFProps> = ({ src, ...props }) => {
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdf}>
        <iframe
          src={parseRemoteURL(src)}
          {...props} // Spread any additional props onto the iframe
        />
      </div>
    </div>
  );
};

export default PDF;
