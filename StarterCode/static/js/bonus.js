// BONUS Part (Guage Chart)

function buildGauge(dataValue) {

	
    var level = dataValue;
  
    // Trig to calc meter point
    var degrees = 9 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 9;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
  
    // Path: may have to change to create a better triangle
    var mainPath = "M -.0 -0.05 L .0 0.05 L ";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
  
    var data = [
      {
        type: "scatter",
        marker: { size: 15, color: "730000" },
        x: [0], y: [0],
        name: "Washing Frequency",
        text: level,
        showlegend: false,   //Off the legend for whasing frequency marker 
        hoverinfo: "text+name"
      },
      {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {colors: ['rgba(10, 84, 0, .5)', 'rgba(12, 97, 0, .5)', 'rgba(13, 113, 0, .5)', 'rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)', 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)', 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)', 'rgba(255, 255, 255, 0)']},
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        hole: .5,
        type: "pie",
        showlegend: false  //Off the legend for different slabs 
      }
    ];
    var layout = {
      shapes: [
        {
          type: "path",
          path: path,
          fillcolor: "730000",
          line: { color: "730000" }
        }
      ],
      title: "Belly Button Washing Frequency",
      height: 550,
      width: 550,
      xaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1]},
      yaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1]}
    };
  
  	//Plotting the chart
    var eleGuage = document.getElementById("gauge");
    Plotly.newPlot(eleGuage, data, layout);
  }

