import React from "react";

import * as styles from "../../styles/modules/video.module.scss";

interface VideoProps {
  src: string;
  [key: string]: any; // Allows for any additional props
}

const Video: React.FC<VideoProps> = ({ src, ...props }) => (
    <div className={styles.videoContainer}>
      <div className={styles.video}>
        <iframe
          src={src}
          allowFullScreen
          {...props} // Spread any additional props onto the iframe
        />
      </div>
    </div>
  );
  

export default Video;
