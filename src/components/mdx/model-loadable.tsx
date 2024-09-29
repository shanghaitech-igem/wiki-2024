import React, { Suspense, useState, useEffect } from "react";
import * as styles from "src/styles/modules/model.module.scss";
import { StlViewerProps } from "react-stl-viewer";
import parseRemoteURL from "src/utils/remote-url-parser";

// LoadingSpinner Component
const LoadingSpinner: React.FC = () => (
  <div className={styles.loadingSpinner}>
    <div className={styles.spinner}></div>
    <p>Loading...</p>
  </div>
);

// TimeoutMessage Component
const TimeoutMessage: React.FC = () => (
  <div className={styles.timeoutMessage}>
    <p>Error: Loading Model Timed Out.</p>
  </div>
);

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
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTimedOut(true);
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  const parsedSrc = parseRemoteURL(src);

  return (
    <div className={styles.container}>
      <div className={styles.model}>
        <Suspense fallback={<LoadingSpinner />}>
          {hasTimedOut ? (
            <TimeoutMessage />
          ) : (
            <LazyStlViewer orbitControls shadows url={parsedSrc} />
          )}
        </Suspense>
      </div>
      <div className={styles.caption}>{title}</div>
    </div>
  );
};

export default Model;
