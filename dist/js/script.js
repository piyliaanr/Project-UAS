const pengunjung = {
  labels: [
    "1 Januari",
    "2 Januari",
    "3 Januari",
    "4 Januari",
    "5 Januari",
    "6 Januari",
    "7 Januari",
    "8 Januari",
    "9 Januari",
    "10 Januari",
  ],
  datasets: [
    {
      label: "Total Pengunjung",
      data: [12, 19, 3, 5, 2, 3, 20, 33, 23, 14],
      backgroundColor: "rgba(60,141,188,0.9)",
      borderColor: "rgba(60,141,188,0.8)",
      pointColor: "#fff",
      pointStrokeColor: "rgba(60,141,188,1)",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(60,141,188,1)",
    },
  ],
};
var PengunjungOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};
const ctx = document.getElementById("pengunjung").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: pengunjung,
  options: PengunjungOptions,
});

var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
var pieData = {
  labels: ["Cash", "Bank", "E-Wallet"],
  datasets: [
    {
      data: [5000000, 3000000, 4000000],
      backgroundColor: [
        "#f56954",
        "#00a65a",
        "#f39c12",
      ],
    },
  ],
};
var pieOptions = {
  legend: {
    display: false,
  },
};
// Create pie or douhnut chart
// You can switch between pie and douhnut using the method below.
// eslint-disable-next-line no-unused-vars
var pieChart = new Chart(pieChartCanvas, {
  type: "doughnut",
  data: pieData,
  options: pieOptions,
});
function Login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "admin@admin.com"&& password=="admin1234"){
      window.alert("anda berasil login")
      window.location.replace("beranda.html")
  }else{
      window.alert("email atau password salah")
      window.location.replace("index.html")
  }
}