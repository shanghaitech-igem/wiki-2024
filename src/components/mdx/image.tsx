import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/image.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  src = parseRemoteURL(src);

  // If props.title is null or undefined, use alt as the caption
  const caption = props.title ?? alt;

  return (
    <div className={styles.container}>
      <PhotoProvider className={styles.viewer} maskOpacity={0.8} >
        <PhotoView src={src}>
          <img
            src={src}
            alt={alt ? alt : "Failed to load the picture: " + src}
            className={styles.img}
            title={caption}
            style={{ width: `${width}px`, height: `${height}px` }}
            {...props}
          />
        </PhotoView>
      </PhotoProvider>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};

export default Image;
