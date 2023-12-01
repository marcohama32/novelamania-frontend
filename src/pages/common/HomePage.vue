<template>
  <div>
    <div class="form-head mb-4">
      <h2 class="text-black font-w600 mb-0">Painel de Controle</h2>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="row">
          <div class="col-xl-8 col-lg-6 col-md-7 col-sm-8">
            <div class="card-bx stacked">
              <img src="/dist/images/card/card.png" alt="" class="mw-100" />
              <div class="card-info text-white">
                <p class="mb-1">Valor Total</p>
                <h2 class="fs-36 text-white mb-sm-4 mb-3">
                  {{ formatCurrency(totalAmountCharges) }}
                </h2>
                <div
                  class="d-flex align-items-center justify-content-between mb-sm-5 mb-3"
                >
                  <img src="images/dual-dot.png" alt="" class="dot-img" />
                  <!-- <h4 class="fs-20 text-white mb-0">**** **** **** 1234</h4> -->
                </div>
                <!-- <div class="d-flex">
                  <div class="me-5">
                    <p class="fs-14 mb-1 op6">VALID THRU</p>
                    <span>08/21</span>
                  </div>
                  <div>
                    <p class="fs-14 mb-1 op6">CARD HOLDER</p>
                    <span>Franklin Jr.</span>
                  </div>
                </div> -->
              </div>
              <!-- <a href="javascript:;"
                ><i class="fa fa-caret-down" aria-hidden="true"></i
              ></a> -->
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-5 col-sm-4">
            <div
              class="card bgl-primary card-body overflow-hidden p-0 d-flex rounded"
            >
              <div class="p-0 text-center mt-3">
                <span class="text-black">Despesas</span>
                <h3 class="text-black fs-20 mb-0 font-w600">
                  {{ formatCurrency(totalAmountExpenses) }}
                </h3>
                <div class="mt-3"><small>mes corrente</small></div>
                <h3 class="text-black fs-20 mb-0 font-w600">
                  {{ formatCurrency(totalCurrentMonthAmountExpenses) }}
                </h3>
              </div>
              <canvas
                id="lineChart"
                height="300"
                class="mt-auto line-chart-demo"
              ></canvas>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="card">
              <div class="card-header d-block d-sm-flex border-0">
                <div class="me-3">
                  <h4 class="fs-20 text-black">Cobranças recentes</h4>
                  <!-- <p class="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur
                  </p> -->
                </div>
                <div class="card-action card-tabs d-inline-block mt-3 mt-sm-0">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <router-link to="/listarcobrancas"
                        class="nav-link active"
                      
                        role="tab"
                        >Ver todas</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body tab-content p-0">
                <div
                  class="tab-pane active show fade"
                  id="monthly"
                  role="tabpanel"
                >
                  <div class="table-responsive">
                    <table
                      class="table table-responsive-md card-table previous-transactions"
                    >
                      <tbody>

<tr v-for="recentCharge in recentCharges" :key="recentCharge._id">
  <td>
    <h6 class="fs-16 font-w600 mb-0">
      <a :href="`transactions-details.html?id=${recentCharge._id}`" class="text-black">
        {{ recentCharge.service.title }}
      </a>
    </h6>
    <span class="fs-14">
      {{ recentCharge.paymentMethod }} -
      {{ recentCharge.customer ? (recentCharge.customer.firstName || 'N/A') + ' ' + (recentCharge.customer.lastName || 'N/A') : 'N/A' }}
    </span>
  </td>
  <td>
    <span class="fs-16 text-black text-end font-w500 d-block">
      {{ formatCurrency(recentCharge.amount) }}
    </span>
  </td>
  <td>
    <h6 class="fs-16 text-black text-end d-block font-w400 mb-0">
      {{ formatDateWithTime(recentCharge.createdAt) }}
    </h6>
  </td>
</tr>



                      </tbody>

                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="row">
          <div class="col-xl-6 col-sm-6">
            <div class="card">
              <div class="card-header flex-wrap border-0 pb-0">
                <div class="me-3 mb-2">
                  <p class="fs-14 mb-1">Cobranças mes corrente</p>
                  <span class="fs-24 text-black font-w600">{{
                    formatCurrency(totalAmountChargesCurrentMonth)
                  }}</span>
                </div>
                <!-- <span class="fs-12 mb-2">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                      stroke="#2BC155"
                      stroke-width="2"
                    />
                    <path
                      d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="10.2499"
                        y1="3"
                        x2="10.9999"
                        y2="13.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#2BC155"
                          stop-opacity="0.73"
                        />
                        <stop
                          offset="1"
                          stop-color="#2BC155"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  4% (30 dias)</span 
                >-->
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart1" height="80"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-sm-6">
            <div class="card">
              <div class="card-header flex-wrap border-0 pb-0">
                <div class="me-3 mb-2">
                  <p class="fs-14 mb-1">Previsao mes corrente</p>
                  <span class="fs-24 text-black font-w600">{{
                    formatCurrency(forecastAmountCurrentMonth)
                  }}</span>
                </div>
                <!-- <span class="fs-12 mb-2">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3514 7.5C15.9974 9.37169 19.0572 12.8253 20 14H1V1L8.18919 10.75L14.3514 7.5Z"
                      fill="url(#paint0_linear1)"
                    />
                    <path
                      d="M19.5 13.5C18.582 12.4157 15.6027 9.22772 14 7.5L8 10.5L1 1.5"
                      stroke="#FF2E2E"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear1"
                        x1="10.5"
                        y1="2.625"
                        x2="9.64345"
                        y2="13.9935"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#FF2E2E" />
                        <stop
                          offset="1"
                          stop-color="#FF2E2E"
                          stop-opacity="0.03"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  4% (30 dias)</span
                > -->
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart2" height="80"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card overflow-hidden">
              <div class="card-header d-sm-flex d-block border-0 pb-0">
                <div class="mb-sm-0 mb-2">
                  <p class="fs-14 mb-3">Analise semanal</p>
                  <div class="row">
                    <div
                      v-for="weeklyAnalysisCharge in weeklyAnalysisCharges"
                      :key="weeklyAnalysisCharge"
                      class="mb-1 col-12"
                    >
                      <strong class="fs-20 text-black ms-2 me-3">{{
                        formatCurrency(weeklyAnalysisCharge.totalAmount)
                      }}</strong>
                      {{ weeklyAnalysisCharge.weekStartDate }} a
                      {{ weeklyAnalysisCharge.weekEndDate }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart3" height="20"></canvas>
              </div>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="card">
              <div class="card-body pb-1">
                <div class="row align-items-center">
                  <div class="col-xl-12 col-xxl-12 col-md-12">
                    <div
                      class="mycard-header card-header d-block d-sm-flex border-0"
                    >
                      <div class="me-3">
                        <h4 class="fs-20 text-black">Ultimas despesas</h4>
                      </div>
                      <div
                        class="card-action card-tabs d-inline-block mt-3 mt-sm-0"
                      >
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <router-link
                              to="/listardespesas"
                              class="nav-link active"
                              >Ver todas</router-link
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4"
                        v-for="recentExpense in recentExpenses"
                        :key="recentExpense"
                      >
                        <svg
                          class="me-3"
                          width="14"
                          height="54"
                          viewBox="0 0 14 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="-6.10352e-05"
                            width="14"
                            height="54"
                            rx="7"
                            fill="#40D4A8"
                          />
                        </svg>
                        <div>
                          <p class="fs-14 mb-2">{{ recentExpense.title }}</p>
                          <span class="fs-18 font-w500"
                            ><span class="text-black me-2">{{
                              formatCurrency(recentExpense.amount)
                            }}</span
                            >/ {{ recentExpense.paymentMethod }}

                            <span class="me-1"
                              >/
                              {{
                                formatTimestamp(recentExpense.createdAt)
                              }}</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      response: null,
      userID: "",
      firstName: "",
      totalAmountCharges: "",
      totalAmountChargesCurrentMonth: "",
      totalAmountChargesPreviousMonth: "",
      forecastAmountCurrentMonth: "",
      totalAmountExpenses: "",
      recentCharges: [],
      totalCurrentMonthAmountExpenses: "",
      recentExpenses: [],
      weeklyAnalysisCharges: [],

      chartInstance: null, // Add a chart instance property
      chartInstance2: null, // Add a chart instance property
      canvasExists: false,
    };
  },
  created() {
    this.getDashboardData();

    setInterval(() => {
      this.getDashboardData();
    }, 2 * 60 * 1000); // 5 minutes in milliseconds
  },
  methods: {
    formatDateWithTime(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return formatter.format(value);
    },
    getStatusClass(status) {
      if (status === "Done") {
        return "text-success";
      } else if (status === "Pending") {
        return "text-pending";
      } else if (status === "canceled") {
        return "text-danger";
      } else if (status === "Under_approval") {
        return "text-warning";
      } else if (status === "Under_assessment") {
        return "text-muted";
      } else if (status === "Received") {
        return "text-primary";
      }
      {
        return ""; // Default class if no match
      }
    },
    formatTimestamp(timestamp) {
      const currentTime = new Date();
      const messageTime = new Date(timestamp);

      const timeDifference = currentTime - messageTime;
      const seconds = Math.floor(timeDifference / 1000);

      if (seconds < 60) {
        return `${seconds} segundos atrás`;
      }

      const minutes = Math.floor(seconds / 60);

      if (minutes < 60) {
        return `${minutes} minutos atrás`;
      }

      const hours = Math.floor(minutes / 60);

      if (hours < 24) {
        return `${hours} horas atrás`;
      }

      const days = Math.floor(hours / 24);

      return `${days} dias atrás`;
    },
    async getDashboardData() {
      const token = Cookies.get("token");
      await axios
        .get("/api/admindashboard", {
          headers: {
            token: token,
          },
        })
        .then((response) => {
          const dashboardData = response.data;

          this.totalAmountCharges = dashboardData.totalAmountCharges;
          this.totalAmountChargesCurrentMonth =
            dashboardData.totalAmountChargesCurrentMonth;
          this.totalAmountChargesPreviousMonth =
            dashboardData.totalAmountChargesPreviousMonth;
          this.forecastAmountCurrentMonth =
            dashboardData.forecastAmountCurrentMonth;
          this.totalAmountExpenses = dashboardData.totalAmountExpenses;
          this.recentCharges = dashboardData.recentCharges;
          this.totalCurrentMonthAmountExpenses =
            dashboardData.totalCurrentMonthAmountExpenses;
          this.recentExpenses = dashboardData.recentExpenses;
          this.weeklyAnalysisCharges = dashboardData.weeklyAnalysisCharges;
        })
        .catch((error) => {
          this.errorMessage =
            "Erro ao carregar a pagina inicial. Por favor, tente novamente.";
          console.error("Error retrieving profile:", error);
        });
    },
  },

  mounted() {
    // this.fetchChatMessages()
    this.$nextTick(() => {
      this.getDashboardData(); // Move your chart initialization code here
    });
    // this.getDashboardData();
  },
};
</script>
<style>
.mycard-header {
  margin-top: 0 !important; /* Use !important to ensure this style takes precedence */
}
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
