import React from "react";
import Loadable from "react-loadable";
import * as styles from "src/styles/modules/plot.module.scss";
import { StlViewerProps } from "react-stl-viewer";

// LoadingSpinner Component
const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

// TimeoutMessage Component
const TimeoutMessage: React.FC = () => {
  return (
    <div className={styles.timeoutMessage}>
      <p>Error: Loading Plotly Timed Out.</p>
    </div>
  );
};

// Loadable 3D Model Component
const LoadableModel = Loadable<StlViewerProps, any>({
  loader: () => import("react-stl-viewer"),
  loading: ({ timedOut }) =>
    timedOut ? <TimeoutMessage /> : <LoadingSpinner />,
  timeout: 10000,
  render(loaded, props) {
    const StlViewer = loaded.StlViewer;
    return <StlViewer {...props} />;
  },
});

// Model Component
const Model: React.FC = () => {
  return (
    <div className={styles.plot}>
      <LoadableModel
        orbitControls
        shadows
        url="https://static.igem.wiki/teams/5174/test/test-stl-model.stl"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Model;
