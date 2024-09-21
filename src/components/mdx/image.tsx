import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/image.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  src = parseRemoteURL(src);

  // If props.title is null or undefined, use alt as the caption
  const caption = props.title ?? alt;

  return (
    <div className={styles.container}>
      <PhotoProvider className={styles.viewer}>
        <PhotoView src={src}>
          <img
            src={src}
            alt={alt ? alt : "Failed to load the picture: " + src}
            className={styles.img}
            title={caption}
            {...props}
          />
        </PhotoView>
      </PhotoProvider>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};

export default Image;
