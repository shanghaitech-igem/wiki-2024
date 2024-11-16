// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

const trace1 = {
  meta: {columnNames: {
      x: 'A', 
      y: 'B'
    }}, 
  mode: 'lines', 
  name: 'theoretical prediction', 
  type: 'scatter', 
  xsrc: 'eliozeng2005:7:144ff4', 
  x: ['0', '0.023305', '0.04661', '0.069915', '0.09322', '0.209745', '0.326269', '0.442794', '0.559319', '1.141943', '1.724567', '2.307191', '2.889815', '5.802935', '8.716056', '11.62918', '14.5423', '29.1079', '43.6735', '58.2391', '72.8047', '122.8047', '172.8047', '222.8047', '272.8047', '322.8047', '372.8047', '422.8047', '472.8047', '522.8047', '572.8047', '622.8047', '672.8047', '722.8047', '772.8047', '822.8047', '872.8047', '922.8047', '972.8047', '1022.805', '1072.805', '1122.805', '1172.805', '1222.805', '1272.805', '1322.805', '1372.805', '1422.805', '1472.805', '1522.805', '1572.805', '1622.805', '1672.805', '1722.805', '1772.805', '1822.805', '1872.805', '1904.604', '1936.402', '1968.201', '2000'], 
  ysrc: 'eliozeng2005:7:38e127', 
  y: ['0', '6.78E-05', '0.000136', '0.000203', '0.000271', '0.00061', '0.000949', '0.001288', '0.001626', '0.003317', '0.005004', '0.006689', '0.008369', '0.016725', '0.025001', '0.033197', '0.041313', '0.080746', '0.11833', '0.154163', '0.188336', '0.294141', '0.384385', '0.461582', '0.527809', '0.584781', '0.633926', '0.676433', '0.713292', '0.745336', '0.773262', '0.797658', '0.819021', '0.837771', '0.854265', '0.868805', '0.881652', '0.893026', '0.903116', '0.912086', '0.920076', '0.927205', '0.93358', '0.93929', '0.944413', '0.949019', '0.953166', '0.956906', '0.960286', '0.963343', '0.966115', '0.96863', '0.970917', '0.972999', '0.974898', '0.976631', '0.978216', '0.979153', '0.98004', '0.980879', '0.981674']
};
const trace2 = {
  meta: {columnNames: {
      x: 'C', 
      y: 'D'
    }}, 
  mode: 'markers', 
  name: 'experimental result', 
  type: 'scatter', 
  xsrc: 'eliozeng2005:7:0b1606', 
  x: ['95', '155', '240', '360', '410', '458', '534', '588', '662', '731', '1983'], 
  ysrc: 'eliozeng2005:7:46ac12', 
  y: ['0.283748', '0.350602', '0.458273', '0.588547', '0.643989', '0.684999', '0.751726', '0.802523', '0.890416', '0.991313', '1']
};
const data = [trace1, trace2];
const layout = {
  title: {text: 'The Change Of Relative Fluorescence Intensity  With Time'}, 
  xaxis: {
    type: 'linear', 
    range: [-25.99590499590498, 2055.248724333311], 
    title: {text: 'Time'}, 
    autorange: false
  }, 
  yaxis: {
    type: 'linear', 
    range: [-0.056558363417569195, 1.0746089049338148], 
    title: {text: 'Relatove fluorescence intensity'}, 
    autorange: false
  }, 
  autosize: true, 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: '#EBF0F8'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: '#C8D4E3'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: '#C8D4E3', 
            linecolor: '#C8D4E3', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: '#C8D4E3', 
            startlinecolor: '#2a3f5f'
          }, 
          baxis: {
            gridcolor: '#C8D4E3', 
            linecolor: '#C8D4E3', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: '#C8D4E3', 
            startlinecolor: '#2a3f5f'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: 'white', 
        showlakes: true, 
        subunitcolor: '#C8D4E3'
      }, 
      font: {color: '#2a3f5f'}, 
      polar: {
        bgcolor: 'white', 
        radialaxis: {
          ticks: '', 
          gridcolor: '#EBF0F8', 
          linecolor: '#EBF0F8'
        }, 
        angularaxis: {
          ticks: '', 
          gridcolor: '#EBF0F8', 
          linecolor: '#EBF0F8'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          gridwidth: 2, 
          linecolor: '#EBF0F8', 
          zerolinecolor: '#EBF0F8', 
          showbackground: true, 
          backgroundcolor: 'white'
        }, 
        yaxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          gridwidth: 2, 
          linecolor: '#EBF0F8', 
          zerolinecolor: '#EBF0F8', 
          showbackground: true, 
          backgroundcolor: 'white'
        }, 
        zaxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          gridwidth: 2, 
          linecolor: '#EBF0F8', 
          zerolinecolor: '#EBF0F8', 
          showbackground: true, 
          backgroundcolor: 'white'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: '', 
        gridcolor: '#EBF0F8', 
        linecolor: '#EBF0F8', 
        automargin: true, 
        zerolinecolor: '#EBF0F8', 
        zerolinewidth: 2
      }, 
      yaxis: {
        ticks: '', 
        gridcolor: '#EBF0F8', 
        linecolor: '#EBF0F8', 
        automargin: true, 
        zerolinecolor: '#EBF0F8', 
        zerolinewidth: 2
      }, 
      ternary: {
        aaxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          linecolor: '#A2B1C6'
        }, 
        baxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          linecolor: '#A2B1C6'
        }, 
        caxis: {
          ticks: '', 
          gridcolor: '#DFE8F3', 
          linecolor: '#A2B1C6'
        }, 
        bgcolor: 'white'
      }, 
      colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#19d3f3', '#e763fa', '#fecb52', '#ffa15a', '#ff6692', '#b6e880'], 
      hovermode: 'closest', 
      colorscale: {
        diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
        sequential: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']], 
        sequentialminus: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']]
      }, 
      plot_bgcolor: 'white', 
      paper_bgcolor: 'white', 
      shapedefaults: {
        line: {width: 0}, 
        opacity: 0.4, 
        fillcolor: '#506784'
      }, 
      annotationdefaults: {
        arrowhead: 0, 
        arrowcolor: '#506784', 
        arrowwidth: 1
      }
    }, 
    themeRef: 'PLOTLY_WHITE'
  }
};

export default { "data": data, "layout": layout };
