// custom-plotly.js
import Plotly from 'plotly.js/lib/core';

// Load only the required traces
import Scatter from 'plotly.js/lib/scatter';
import Bar from 'plotly.js/lib/bar';
// Add other traces as needed

Plotly.register([
  Scatter,
  Bar,
  // Add other traces as needed
]);

export default Plotly;
