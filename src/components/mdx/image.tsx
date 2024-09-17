import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/image.module.scss";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const staticServerURL = "https://static.igem.wiki/teams/5174/";

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  src = src?.startsWith("http") ? src : src?.replace("server/", staticServerURL);
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
