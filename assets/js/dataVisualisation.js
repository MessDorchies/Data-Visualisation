let content = document.getElementById("toc");
let firstChart = document.createElement("div");
firstChart.id = "chartContainer";

content.parentNode.insertBefore(firstChart, content);

let dataPoint = [];
fetch('https://canvasjs.com/services/data/datapoints.php').then(function(response) {
    response.json().then(json => {
      json.forEach( element => {dataPoint.push({x : element[0], y : element[1]})});
      chart = new CanvasJS.Chart("chartContainer",{
        title:{
            text:"Exo2"
        },
        data: [{
        type: "line",
        dataPoints : dataPoint,
        }]
    });
    chart.render();
    updateChart();
    });
  });
  

function updateChart() {
  fetch("https://canvasjs.com/services/data/datapoints.php", {cache : "reload"}).then(function(reponse) {
    reponse.json().then(json =>
       json.forEach(element => {
         dataPoint.pop()
            dataPoint.push({
               x: element[0],
               y: element[1]
           });
      }));
      chart.render();
      setTimeout(function(){updateChart()}, 1000);
      console.log(dataPoint)
   });
}

function getTableData(id) {
    let tr = document.getElementById(id).querySelectorAll('tbody tr');
    let td = [];
    let x = 1;
    for (let i = 0; i < tr.length; i++) {
        let rd = tr[i].querySelectorAll('td');
        td[x] = [];
        for (let j = 0; j < rd.length; j++) {
            if (rd[j].textContent === ':')
                rd[j].textContent = 0;
            if (j > 0)
                td[x].push(parseFloat(rd[j].textContent));
        }
        x = x + 1;
    }
    console.log(td)
    return td;
}
let data1 = getTableData('table1');
let data2 = getTableData('table2');

function getTablelabels(id) {
    let tr = document.getElementById(id).querySelectorAll('tbody tr');
    let lab = [];
    let x = 1;
    for (let i = 0; i < tr.length; i++) {
        let rd = tr[i].querySelectorAll('td');
        lab[x] = [];
        for (let j = 0; j < rd.length; j++) {
            if (j === 0)
                lab[x].push(rd[j].textContent)
        }
        x = x + 1;
    }
    // console.log(lab)
    return lab;
}
let labels1 = getTablelabels('table1');
let labels2 = getTablelabels('table2');
console.log(data1[2]);
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {

    type: 'bar',
    data: {

        labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        datasets: [{
                label: labels1[2],
                data: data1[2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },



            {
                label: labels1[3],
                data: data1[3],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16), ,
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[4],
                data: data1[4],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16), ,
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16), ,
                ],
                borderWidth: 1
            },
            {
                label: labels1[5],
                data: data1[5],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[6],
                data: data1[6],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[7],
                data: data1[7],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[8],
                data: data1[8],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[9],
                data: data1[9],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[10],
                data: data1[10],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[11],
                data: data1[11],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[12],
                data: data1[12],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[13],
                data: data1[13],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[14],
                data: data1[14],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[15],
                data: data1[15],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[16],
                data: data1[16],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[17],
                data: data1[17],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[18],
                data: data1[18],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[19],
                data: data1[19],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[20],
                data: data1[20],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[21],
                data: data1[21],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[22],
                data: data1[22],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[23],
                data: data1[23],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[24],
                data: data1[24],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[25],
                data: data1[25],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[26],
                data: data1[26],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[27],
                data: data1[27],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[28],
                data: data1[28],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[29],
                data: data1[29],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[30],
                data: data1[30],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[31],
                data: data1[31],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[32],
                data: data1[32],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[33],
                data: data1[33],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[34],
                data: data1[34],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[35],
                data: data1[35],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels1[36],
                data: data1[36],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },

        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


});
const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [20072009, 20102012],
        datasets: [{
                label: labels2[1],
                data: data2[1],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[2],
                data: data2[2],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[3],
                data: data2[3],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[4],
                data: data2[4],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[5],
                data: data2[5],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            }, {
                label: labels2[6],
                data: data2[6],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            }, {
                label: labels2[7],
                data: data2[7],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            }, {
                label: labels2[8],
                data: data2[8],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            }, {
                label: labels2[9],
                data: data2[9],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[10],
                data: data2[10],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[11],
                data: data2[11],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[12],
                data: data2[12],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[13],
                data: data2[13],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[14],
                data: data2[14],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[15],
                data: data2[15],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[16],
                data: data2[16],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            }, {
                label: labels2[17],
                data: data2[17],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[18],
                data: data2[18],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[19],
                data: data2[19],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[20],
                data: data2[20],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[21],
                data: data2[21],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[22],
                data: data2[22],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[23],
                data: data2[23],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[24],
                data: data2[24],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[25],
                data: data2[25],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[26],
                data: data2[26],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[27],
                data: data2[27],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[28],
                data: data2[28],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[29],
                data: data2[29],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
            {
                label: labels2[30],
                data: data2[30],
                backgroundColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderColor: [
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Prison population, average per year, 2007-09 and 2010-12(per 100,000 inhabitants)",
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});