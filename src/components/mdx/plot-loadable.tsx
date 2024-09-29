import React from "react";
import Loadable from "react-loadable";
import { PlotParams } from "react-plotly.js";
import * as styles from "src/styles/modules/plot.module.scss";

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

// Loadable Plotly Component
const LoadablePlot = Loadable({
  loader: () => import("./plot"),
  loading: ({ timedOut }) =>
    timedOut ? <TimeoutMessage /> : <LoadingSpinner />,
  timeout: 10000,
});

// Plot Component
const Plot: React.FC<PlotParams> = ({ data, layout }) => {
  return (
    <div className={styles.plot}>
      <LoadablePlot
        data={data}
        layout={layout}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Plot;
