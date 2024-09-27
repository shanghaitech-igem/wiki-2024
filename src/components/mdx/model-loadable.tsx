import React from "react";
import Loadable from "react-loadable";
import * as styles from "src/styles/modules/model.module.scss";
import { StlViewerProps } from "react-stl-viewer";
import parseRemoteURL from "src/utils/remote-url-parser";

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
interface ModelProps {
  src: string;
  title: string;
}

const Model: React.FC<ModelProps> = ({ src, title }) => {
  const caption = title;
  src = parseRemoteURL(src);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.model}>
          <LoadableModel
            orbitControls
            shadows
            url={src}
          />
        </div>
        <div className={styles.caption}>{caption}</div>
      </div>
    </>
  );
};

export default Model;
