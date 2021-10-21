// let dataPoint = [];
// fetch('https://canvasjs.com/services/data/datapoints.php').then(function(response) {
//     response.json().then(function(json) {
//       dataPoint.push(json);
//     });
//   });
//   console.log(dataPoint);

const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('https://canvasjs.com/services/data/datapoints.php').then(data => {
  data.forEach(data => {
    dataPoint.push(data);
  });
})
  
let table1 = document.getElementById('table1');
  
let table2 = document.getElementById('table2');