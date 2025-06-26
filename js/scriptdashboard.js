       function goBack() {
            // Simular navegación hacia atrás
            alert('Regresando al menú principal...');
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            // Gráfico de Barras - Tipos de comida
            new Chart(document.getElementById('bar-chart'), {
                type: 'bar',
                data: {
                    labels: ['Pizza', 'Hamburguesas', 'Sushi', 'Pollo', 'Tacos', 'Postres'],
                    datasets: [{
                        label: 'Gasto (S/.)',
                        data: [150, 120, 90, 200, 80, 60],
                        backgroundColor: 'rgba(255, 159, 64, 0.6)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });

            // Gráfico de Líneas - Gastos por mes
            new Chart(document.getElementById('line-chart'), {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Gasto mensual (S/.)',
                        data: [300, 280, 320, 350, 290, 370],
                        borderColor: 'rgb(75, 192, 192)',
                        fill: false,
                        tension: 0.1
                    }]
                }
            });

            // Gráfico de Pastel - Proporción de gastos
            new Chart(document.getElementById('pie-chart'), {
                type: 'pie',
                data: {
                    labels: ['Comida', 'Delivery', 'Propina'],
                    datasets: [{
                        data: [600, 120, 80],
                        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
                        hoverOffset: 4
                    }]
                }
            });

            // Gráfico de Radar - Preferencias
            new Chart(document.getElementById('radar-chart'), {
                type: 'radar',
                data: {
                    labels: ['Rápida', 'Internacional', 'Criolla', 'Vegetariana', 'Marina', 'Postres'],
                    datasets: [{
                        label: 'Frecuencia de Pedido (%)',
                        data: [90, 70, 80, 60, 50, 40],
                        fill: true,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgb(153, 102, 255)',
                        pointBackgroundColor: 'rgb(153, 102, 255)'
                    }]
                },
                options: {
                    elements: {
                        line: { borderWidth: 2 }
                    }
                }
            });
        });

   function goBack() {
  window.history.back();
}
