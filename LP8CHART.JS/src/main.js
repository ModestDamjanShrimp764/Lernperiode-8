const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C'],
    datasets: [{
      label: 'Beispieldaten',
      data: [5, 3, 8]
    }]
  }
});
