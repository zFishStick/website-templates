//Skills, you can modify here your skills
var skill0 = 30;    //30%
var skill1 = 50;
var skill2 = 80;
var skill3 = 10;


// Dati per i grafici a torta
var chartData = [
    { data: [skill0, 100 - skill0], colors: ['#75DB81', '#6BCD76'] },
    { data: [skill1, 100 - skill1], colors: ['#75DB81', '#6BCD76'] },
    { data: [skill2, 100 - skill2], colors: ['#75DB81', '#6BCD76'] },
    { data: [skill3, 100 - skill3], colors: ['#75DB81', '#6BCD76'] }
];

// Ottieni il container per i grafici
var chartsContainer = document.getElementById('charts-container');

// Crea i grafici a torta
for (var i = 0; i < chartData.length; i++) {
    // Crea un elemento canvas per ogni grafico
    var canvasContainer = document.createElement('div');
    canvasContainer.classList.add('chart-container');

    // Crea un elemento h3 per il titolo
    var title = document.createElement('h3');
    title.classList.add('chart-label');
    title.innerText = "Skill " + i;
    canvasContainer.appendChild(title);

    var canvas = document.createElement('canvas');
    canvas.id = 'chart-' + i;
    canvas.width = 200; // Imposta la larghezza fissa
    canvasContainer.appendChild(canvas);

    chartsContainer.appendChild(canvasContainer);

    // Ottieni il contesto del canvas
    var ctx = canvas.getContext('2d');

    // Configurazione del grafico
    var config = {
        type: 'pie',
        data: {
            labels: chartData[i].labels,
            datasets: [{
                data: chartData[i].data,
                backgroundColor: chartData[i].colors,
                borderColor: chartData[i].colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Non responsivo
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            }
        },
    };

    // Crea il grafico
    new Chart(ctx, config);

}




