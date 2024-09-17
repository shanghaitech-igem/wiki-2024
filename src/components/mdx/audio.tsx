import React from "react";
import AudioPlayer from "src/plugins/audio-player";

import "src/plugins/audio-player/src/styles.scss";
import * as styles from "src/styles/modules/audio.module.scss";

interface AudioProps {
  src: string;
  [key: string]: any; // Allows for any additional props
}

const Audio: React.FC<AudioProps> = ({ src, ...props }) => (
  <div className={styles.audioContainer}>
    <div className={styles.audio}>
      <AudioPlayer
        src={src}
        // other props here
        {...props}
      />
    </div>
  </div>
);

export default Audio;
