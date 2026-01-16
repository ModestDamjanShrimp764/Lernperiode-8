const canvas = document.getElementById('chart');
const toggleBtn = document.getElementById('toggleBtn');

const labels = [
  'Donald Trump',
  'Joe Biden',
  'Bill Clinton',
  'Grover Cleveland',
  'Barack Obama',
  'Kamala Harris'
];

const values = [12200, 19800, 30000, 50000, 20000, 3000];

const barColorsBg = [
  'rgba(255, 99, 132, 0.5)',  
  'rgba(54, 162, 235, 0.5)',  
  'rgba(255, 206, 86, 0.5)',  
  'rgba(75, 192, 192, 0.5)',  
  'rgba(153, 102, 255, 0.5)', 
  'rgba(255, 159, 64, 0.5)'   
];

const barColorsBorder = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
];

const segmentColors = ['red', 'yellow', 'blue', 'green', 'orange'];

let mode = 'line'; 
let chart = null;

function buildConfigLine() {
  return {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Votes of USA President',
        data: values,
        fill: false,
        borderWidth: 3,
        tension: 0.2,

        segment: {
          borderColor: (ctx) => {
            const i = ctx.p0DataIndex;
            return segmentColors[i] || 'black';
          }
        },

        pointRadius: 4,
        pointBackgroundColor: 'black'
      }]
    },
    options: {
      responsive: true
    }
  };
}

function buildConfigBar() {
  return {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Votes of USA President',
        data: values,
        backgroundColor: barColorsBg,
        borderColor: barColorsBorder,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true
    }
  };
}

function render() {
  if (chart) chart.destroy();

  chart = new Chart(canvas, mode === 'line' ? buildConfigLine() : buildConfigBar());

  toggleBtn.textContent =
    mode === 'line' ? 'Wechsel zu Balkendiagramm' : 'Wechsel zu Liniendiagramm';
}

toggleBtn.addEventListener('click', () => {
  mode = (mode === 'line') ? 'bar' : 'line';
  render();
});

render();



