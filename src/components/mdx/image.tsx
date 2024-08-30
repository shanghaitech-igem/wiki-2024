import React from "react";
import { PhotoProvider, PhotoView } from "../../plugins/image-viewer";

import * as styles from "../../styles/modules/image.module.scss";

interface ImageProps {
  url: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ url, alt }: ImageProps) => {
  return (
    <PhotoProvider className={styles.toppest}>
      <PhotoView src={url}>
        <img src={url} alt={alt ? alt : "Failed to load the picture: " + url} />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Image;
