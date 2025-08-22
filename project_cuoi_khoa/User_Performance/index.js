
const ctxDonut = document.getElementById('donutChart').getContext('2d');
new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
      labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
      datasets: [{
        data: [20, 15, 25, 10, 30],
        backgroundColor: ['#e74c3c','#f39c12','#3498db','#2ecc71','#9b59b6']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'right' },
      }
    }
  });

