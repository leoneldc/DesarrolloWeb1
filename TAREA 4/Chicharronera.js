var x1, x2, v1, v2, rangos = [], ejeX = [];

const masMenos = (a, b, c, simbolo) => {
  return simbolo == "+"
    ? -b + Math.sqrt(b * b - 4 * a * c)
    : -b - Math.sqrt(b * b - 4 * a * c);
};
const chicharroneraFf = (a, b, c) => {
  x1 = masMenos(a, b, c, "+") / (2 * a);
  x2 = masMenos(a, b, c, "-") / (2 * a);
  v1 = -b / (2 * a);
  v2 = (4 * a * c - b * b) / (4 * a);
};
const generarGrafica = () => {
  var minimo = x1 <= x2 ? x1 : x2;
  var maximo = x1 >= x2 ? x1 : x2;
  for (let i = minimo; i < maximo + 0.5; i = i + 0.5) {
    ejeX.push(i);
  }
  new Chart(grafica, {
    type: "line",
    data: {
      labels: ejeX,
      datasets: [
        {
          label: "FORMULA CUADRATICA",
          fill: true,
          pointRadius: 5,
          pointBorderColor: "rgb(255, 165, 165)",
          pointBackgroundColor: "rgb(255, 165, 165)",
          borderColor: "rgb(199, 165, 255)", // Color del borde
          borderWidth: 2, // Ancho del borde
          data: [
            {
              x: x1,
              y: 0,
            },
            {
              x: v1,
              y: v2,
            },
            {
              x: x2,
              y: 0,
            },
          ],
          backgroundColor: ["rgb(251, 255, 166)"],
          fill: "start",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

chicharroneraFf(1, 3, -4);
generarGrafica();