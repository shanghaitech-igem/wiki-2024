import React from "react";
import { PhotoProvider, PhotoView } from "../../plugins/image-viewer";

import * as styles from  "../../styles/image.module.scss";

interface ImageProps {
  url: string;
  alt?: string;
}

export default function Image({ url, alt }: ImageProps) {
  return (
    <PhotoProvider className={styles.toppest}>
      <PhotoView src={url}>
        <img src={url} alt={alt ? alt : "Failed to load the picture: " + url} />
      </PhotoView>
    </PhotoProvider>
  );
}
