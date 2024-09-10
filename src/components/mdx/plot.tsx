import createPlotlyComponent from "react-plotly.js/factory";

// Import the custom Plotly bundle
import PlotlyFinace from "plotly.js-finance-dist";

// Create the Plotly component with the custom bundle
export default createPlotlyComponent(PlotlyFinace);
