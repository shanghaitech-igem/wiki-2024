import React, { Suspense, useState, useEffect } from "react";
import { PlotParams } from "react-plotly.js";
import * as styles from "src/styles/modules/plot.module.scss";

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
    <p>Error: Loading Plotly Timed Out.</p>
  </div>
);

// Loadable Plotly Component using React.lazy
const PlotlyComponent = React.lazy(() => import("./plot"));

// Plot Component
const Plot: React.FC<PlotParams> = ({ data, layout }) => {
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTimedOut(true);
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.plot}>
      <Suspense fallback={<LoadingSpinner />}>
        {hasTimedOut ? (
          <TimeoutMessage />
        ) : (
          <PlotlyComponent
            data={data}
            layout={layout}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Plot;
