import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/image.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  src = parseRemoteURL(src);
  return (
    <PhotoProvider className={styles.container}>
      <PhotoView src={src}>
        <img
          src={src}
          alt={alt ? alt : "Failed to load the picture: " + src}
          className={styles.img}
          {...props}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Image;
