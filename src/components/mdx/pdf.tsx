import React from "react";

import * as styles from "src/styles/modules/pdf.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

interface PDFProps {
  src: string;
  title?: string;
  width?: string;
  height?: string;
  [key: string]: any; // Allows for any additional props
}

const PDF: React.FC<PDFProps> = ({ src, title, width, height, ...props }) => {
  src = parseRemoteURL(src);
  const caption = title;
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdf} style={{width: width, height: height}}>
        <iframe
          src={src}
          {...props} // Spread any additional props onto the iframe
        />
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};

export default PDF;
