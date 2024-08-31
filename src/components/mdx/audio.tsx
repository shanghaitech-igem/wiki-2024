import React from "react";
import AudioPlayer from "../../plugins/audio-player";

import "../../plugins/audio-player/src/styles.scss";
import * as styles from "../../styles/modules/audio.module.scss";

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
