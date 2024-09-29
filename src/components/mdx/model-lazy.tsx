import React, { Suspense } from "react";
import * as styles from "src/styles/modules/model.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";

// Lazy-load StlViewer component
const LazyStlViewer = React.lazy(() =>
  import("react-stl-viewer").then((module) => ({ default: module.StlViewer }))
);

// Model Component
interface ModelProps {
  src: string;
  title: string;
}

const Model: React.FC<ModelProps> = ({ src, title }) => {
  const parsedSrc = parseRemoteURL(src);

  return (
    <div className={styles.container}>
      <div className={styles.model}>
        <LazyStlViewer orbitControls shadows url={parsedSrc} />
      </div>
      <div className={styles.caption}>{title}</div>
    </div>
  );
};

export default Model;
