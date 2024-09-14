import React from "react";
import { PhotoProvider, PhotoView } from "../../plugins/image-viewer";
import * as styles from "../../styles/modules/image.module.scss";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const staticRemote = "https://static.igem.wiki/teams/5174/";

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  src = src?.startsWith("http") ? src : src?.replace("static/", staticRemote);
  return (
    <PhotoProvider className={styles.toppest}>
      <PhotoView src={src}>
        <img
          src={src}
          alt={alt ? alt : "Failed to load the picture: " + src}
          {...props}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Image;
