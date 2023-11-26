<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-xl-12">
        <div v-if="loading" class="spinner" style="font-size: 18px"></div>
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Analise mensal</h4>
              </div>
              <div class="card-body">
                <canvas id="morris_bar" class="morris_chart_height"></canvas>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Analise diaria</h4>
              </div>
              <div class="card-body">
                <canvas id="dailyChart" class="morris_chart_height"></canvas>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Metodos de pagamento</h4>
              </div>
              <div class="card-body">
                <canvas id="pie_chart" width="300" height="300"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Totais</h4>
              </div>
              <div class="card-body">
                <div>
                  <div class="check-point-area">
                    <canvas
                      id="doughnut_chart"
                      width="300"
                      height="300"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--**********************************
            Content body end
        ***********************************-->
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";
import Chart from "chart.js/auto";
export default {
  data() {
    return {
      response: null,
      chartInstance: null, // Add a chart instance property
      chartInstance2: null, // Add a chart instance property
      canvasExists: false,
      loading: false,
    };
  },
  created() {

    this.getDashboardData();

    setInterval(() => {
      this.getDashboardData();
    }, 2 * 60 * 1000); // 5 minutes in milliseconds
  },
  methods: {
    async getDashboardData() {
      this.loading = true;
      try {
        const token = Cookies.get("token");
        const response = await axios.get("api/analisyreport", {
          headers: {
            token: token,
          },
        });
        const dashboardData = response.data;
        if (dashboardData) {
          this.loading = false;
        }

        const monthlyChartData = dashboardData.monthlyChartData;
        const dailyChartData = dashboardData.dailyChartData;

        const monthlyLabels = monthlyChartData.map((data) => data.month);
        const dailyLabels = dailyChartData.map((data) => data.day);

        // Extracting data for each metric
        const monthlyTransactionCounts = monthlyChartData.map(
          (data) => data.transactionCount
        );
        const monthlyUniqueCustomers = monthlyChartData.map(
          (data) => data.uniqueCustomers
        );
        const monthlyTotalAmounts = monthlyChartData.map(
          (data) => data.totalAmount
        );
        const monthlyTotalCustomers = monthlyChartData.map(
          (data) => data.totalCustomers
        );

        const dailyTransactionCounts = dailyChartData.map(
          (data) => data.transactionCount
        );
        const dailyUniqueCustomers = dailyChartData.map(
          (data) => data.uniqueCustomers
        );
        const dailyTotalAmounts = dailyChartData.map(
          (data) => data.totalAmount
        );
        const dailyTotalCustomers = dailyChartData.map(
          (data) => data.totalCustomers
        );

        // Check if a previous monthly chart instance exists and destroy it
        if (window.myMonthlyChart) {
          window.myMonthlyChart.destroy();
        }

        // Setup for Monthly Chart
        const ctxMonthly = document
          .getElementById("morris_bar")
          .getContext("2d");
        window.myMonthlyChart = new Chart(ctxMonthly, {
          type: "bar",
          data: {
            labels: monthlyLabels,
            datasets: [
              {
                label: "Cobrancas",
                data: monthlyTransactionCounts,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Clientes",
                data: monthlyUniqueCustomers,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Valor",
                data: monthlyTotalAmounts,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Clientes totais",
                data: monthlyTotalCustomers,
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            hideHover: "auto",
            gridLineColor: "transparent",
            resize: true,
            barSizeRatio: 0.25,
            scales: {
              x: {
                type: "category",
                position: "bottom", // Place x-axis labels at the bottom
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Check if a previous daily chart instance exists and destroy it
        if (window.myDailyChart) {
          window.myDailyChart.destroy();
        }

        // Setup for Daily Chart
        const ctxDaily = document.getElementById("dailyChart").getContext("2d");
        window.myDailyChart = new Chart(ctxDaily, {
          type: "bar",
          data: {
            labels: dailyLabels,
            datasets: [
              {
                label: "Cobrancas",
                data: dailyTransactionCounts,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Clientes",
                data: dailyUniqueCustomers,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Valor",
                data: dailyTotalAmounts,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Clientes totais",
                data: dailyTotalCustomers,
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: "x",
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Access the total statistics for use in your application
        const totalTransactions = dashboardData.totalTransactions;
        const totalCustomers = dashboardData.totalCustomers;
        const totalExpenses = dashboardData.totalExpenses;
        const totalServices = dashboardData.totalServices;
        const paymentMethodCounts = dashboardData.paymentMethodCounts;

        // Prepare data and labels for the pie chart
        const pieData = [
          totalTransactions,
          totalCustomers,
          totalExpenses,
          totalServices,
        ];
        const pieLabels = ["Cobrancas", "Clientes", "Despesas", "Servicos"];

        // Check if a previous daily chart instance exists and destroy it
        if (window.methodos) {
          window.methodos.destroy();
        }
        // Get the canvas element
        const ctxPie = document
          .getElementById("doughnut_chart")
          .getContext("2d");

        // Create the pie chart
        window.methodos = new Chart(ctxPie, {
          type: "pie",
          data: {
            labels: pieLabels,
            datasets: [
              {
                label: "Statistics",
                data: pieData,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });

        // Extract labels and counts from paymentMethodCounts
        const pieLabels2 = Object.keys(paymentMethodCounts);
        const pieData2 = Object.values(paymentMethodCounts);

        // Check if a previous daily chart instance exists and destroy it
        // if (window.totais) {
        //   window.totais.destroy();
        // }
        // Get the canvas element for the pie chart
        const ctxPie2 = document.getElementById("pie_chart").getContext("2d");

        // Create the pie chart for payment method counts
        window.totais = new Chart(ctxPie2, {
          type: "pie",
          data: {
            labels: pieLabels2,
            datasets: [
              {
                label: "Payment Methods",
                data: pieData2,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  // Add more colors for additional payment methods
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            // Other options for customization
          },
        });
      } catch (error) {
        console.error("Error retrieving dashboard data:", error);
        this.loading = false;
      }
    },
  },

  mounted() {
    // console.log("myChart:", this.$refs.morris_bar);
    // console.log("myChart2:", this.$refs.morris_bar_stalked);
    // this.fetchChatMessages()
    this.$nextTick(() => {
      this.getDashboardData(); // Move your chart initialization code here
    });
    // this.getDashboardData();
  },
  beforeUnmount() {
    // Ensure that you destroy the charts when the component is about to be destroyed
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    if (this.chartInstance2) {
      this.chartInstance2.destroy();
    }
  },
};
</script>
<style>
.spinner {
  width: 2em;
  height: 2em;
  border-top: 1em solid #99a0ac;
  border-right: 1em solid transparent;
  border-radius: 100%;
  margin: auto;
  animation: spinner 0.9s linear infinite;
}

@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
