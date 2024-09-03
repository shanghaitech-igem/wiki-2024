import React from "react";
import Loadable from "react-loadable";

const Plot = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <div>Loading... (rendered from the server)</div>
    ),

  timeout: 10000,
});

export default Plot;
