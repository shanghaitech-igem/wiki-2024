import React, { Suspense } from "react";
import { PlotParams } from "react-plotly.js";
import * as styles from "src/styles/modules/plot.module.scss";

// Loadable Plotly Component using React.lazy
const PlotlyComponent = React.lazy(async () => {
  const Plotly = await import("plotly.js-finance-dist");
  const { default: createPlotlyComponent } = await import(
    "react-plotly.js/factory"
  );
  return { default: createPlotlyComponent(Plotly) };
});

// Plot Component
const Plot: React.FC<PlotParams> = ({ data, layout }) => {
  return (
    <div className={styles.plot}>
      <Suspense fallback={null}>
        <PlotlyComponent
          data={data}
          layout={layout}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
};

export default Plot;
