<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa">Anular Pagamento {{ paymentMethod }}</div>
            <div class="tools">
              <a href="javascript:void(0);" class="expand SlideToolHeader"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
        </div>

        <div v-if="loading" class="spinner mb-6" style="font-size: 18px"></div>
        <form @submit.prevent="onAnularCobranca">
          <div class="tab-pane"></div>

          <div class="profile-personal-info">
            <!-- <h4 class="text-primary mb-4">Personal Information</h4> -->
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Nome <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ firstName }} {{ lastName }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Servico <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ service }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Valor <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ amount }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">
                  Contacto <span class="pull-end">:</span>
                </h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ msisdn }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Data <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ createdAt }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Estado <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ status }}</span>
              </div>
            </div>
            <div v-if="paymentMethod == 'mpesa'">
              <div class="row mb-2">
                <div class="col-sm-3 col-5">
                  <h5 class="f-w-500">
                    ResponseDesc <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ output_ResponseDesc }}</span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-3 col-5">
                  <h5 class="f-w-500">
                    TransactionID <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ output_TransactionID }}</span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-3 col-5">
                  <h5 class="f-w-500">
                    ConversationID <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ output_ConversationID }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row mt-4">
            <div class="mb-3 col-md-4">
              <label class="form-label">Cliente</label>
              <select
                class="form-control default-select wide"
                id="inputState"
                v-model="customerId"
              >
                <option selected disabled>Selecione um servico...</option>
                <option
                  v-for="customer in customers"
                  :key="customer._id"
                  :value="customer._id"
                >
                  {{ customer.firstName }} {{ customer.lastName }}
                </option>
              </select>
            </div>
          </div> -->
          <!-- <div class="row mt-4">
            <div class="mb-3 col-md-4">
              <label class="form-label">Servico</label>
              <select
                class="form-control default-select wide"
                id="inputState"
                v-model="serviceId"
              >
                <option selected disabled>Selecione um servico...</option> 
                <option
                  v-for="service in services"
                  :key="service._id"
                  :value="service._id"
                >
                  {{ service.title }} - {{ formatCurrency(service.amount) }}
                </option>
              </select>
            </div>
          </div> -->
          <div class="mb-3"></div>

          <span v-if="status !== 'Anulada'">
            <button
              type="submit"
              class="btn btn-primary me-2"
              :disabled="btnloading"
            >
              <div
                v-if="btnloading"
                class="spinner-border spinner-border-sm"
              ></div>
              <span v-if="btnloading">Anular</span>
              <span v-else>Anular</span>
            </button>
          </span>

          <!-- <button
                type="submit"
                class="btn btn-primary me-2"
                :disabled="btnloading"
              >
                Gravar
              </button> -->

          <button type="button" class="btn btn-light ml-6" @click="goBack">
            Cancelar
          </button>
        </form>
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
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

export default {
  data() {
    return {
      customers: [],
      customerId: "",
      service: "",
      services: [],
      selectedService: [],
      transactionFiles: [], // Initialize as an empty array
      contact1: "",
      firstName: "",
      createdAt: "",
      customerName: "",
      serviceTitle: "",
      serviceId: "",
      status: "",
      msisdn: "",
      amount:"",
      activities: "",
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10,
      firtName: "",
      lastName: "",
      idType: "",
      paymentMethod: "",
      output_ConversationID: "",
      output_TransactionID: "",
      output_ResponseDesc: "",
      loading: false,
      btnloading: false,
      pageSize: 10,
      count: 0,
      firstEntryIndex: 0,
      lastEntryIndex: 0,
    };
  },
  computed: {
    datePickerConfig() {
      return {
        // mode: "range", // Enables range selection mode
        dateFormat: "Y-m-d", // Customize the date format
      };
    },
    formattedAverageApprovalTime() {
      const totalMilliseconds = this.averageApprovalTime;
      const totalSeconds = Math.floor((totalMilliseconds / 1000) % 60);
      const totalMinutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
      const totalHours = Math.floor(
        (totalMilliseconds / (1000 * 60 * 60)) % 24
      );
      const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

      let formattedTime = "";
      if (totalDays > 0) {
        formattedTime += `${totalDays} days `;
      }
      if (totalHours > 0) {
        formattedTime += `${totalHours} hours `;
      }
      if (totalMinutes > 0) {
        formattedTime += `${totalMinutes} minutes `;
      }
      if (totalSeconds > 0 || formattedTime === "") {
        formattedTime += `${totalSeconds} seconds`;
      }

      return formattedTime;
    },
    hasPreviousPage() {
      return this.currentPage > 1;
    },
    hasNextPage() {
      return this.currentPage < this.totalPages;
    },
  },
  watch: {
    currentPage: "fetchData",
    pageSize: "fetchData",
    searchTerm: "fetchData",
  },
  methods: {
    selectedCustomerText(customer) {
      return `ID: ${customer._id}, Email: ${customer.email}`;
      // Add more fields as needed to display in the option text
    },

    selectedServiceText(service) {
      return `${service.title} - ${this.formatCurrency(service.amount)}`;
      // Add more fields as needed to display in the option text
    },
    goBack() {
      this.$router.go(-1);
    },
    refresh() {
      (this.startDate = null),
        (this.endDate = null),
        (this.searchTerm = null),
        this.fetchData();
    },
    applyFilterDate() {
      // Check if both start and end dates are selected
      if (this.startDate && this.endDate) {
        // Convert the selected dates to ISO format
        const isoStartDate = new Date(this.startDate).toISOString();
        const isoEndDate = new Date(this.endDate).toISOString();

        // Process the selected date range (e.g., make an API request)
        console.log("Selected Date Range:");
        console.log("Start Date:", isoStartDate);
        console.log("End Date:", isoEndDate);

        // Reset currentPage to 1 when applying a new filter
        this.currentPage = 1;

        this.fetchData();
      } else {
        // Handle the case where one or both dates are not selected
        // console.log("Please select both start and end dates.");
        Swal.fire({
          icon: "warning",
          title: "Warning!",
          toast: true,
          text: "Selecione as datas de início e término.",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
        });
      }
    },

    formatDateWithTime(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      // const hours = String(date.getHours()).padStart(2, "0");
      // const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return formatter.format(value);
    },
    formatDate(dateString) {
      const date = new Date(dateString); // Create a Date object from the ISO 8601 date string
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1 and pad with '0' if needed
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`; // Return the formatted date as a string
    },

    async onAnularCobranca() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      const requiredFields = ["status"];
      const token = Cookies.get("token");
      for (const field of requiredFields) {
        if (this[field] === "") {
          Swal.fire({
            icon: "warning",
            title: "Aviso!",
            toast: true,
            text: `Campos não podem estar vazio`,
            timer: 3000,
            showConfirmButton: false,
            position: "top-end",
          });
          return;
        }
      }

      try {
        // Create FormData object
        const newStatus = "Anulada";
        const formData = new FormData();
        formData.append("status", newStatus);
        const id = this.$route.params.id;

        this.btnloading = true;
        this.loading = true;
        const response = await axios.put(`api/charge/revoke/${id}`, formData, {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });

        Toast.fire({
          icon: "success",
          title: "Successo!",
          text: "Cobranca anulada com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.loading = false;
        this.$router.push("/listarcobrancas");
        this.isSuccess = true;
        console.log(response);
        this.$emit("Anulada com sucesso");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: errorMessage,
          });
          this.btnloading = false;
          this.loading = false;
          console.error("Erro ao anular cobranca:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou actualize a pagina.",
          });
          console.error("Erro anulando cobranca:", error.message);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        this.btnloading = false;
        this.loading = false;
      }
    },

    async fetchData() {
      try {
        this.btnloading = true;
        this.loading = true;
        // const id = this.$route.params.id;
        const token = Cookies.get("token");

        // const response = await axios.get(`api/user/getbyid/${id}`
        const response = await axios.get("api/user/getall/customers", {
          headers: {
            token: token,
          },
        });

        this.customers = response.data.customer;

        // Store fetched customers and selected customer ID in local storage
        localStorage.setItem("customers", JSON.stringify(this.customers));
        const storedCustomerId = localStorage.getItem("selectedCustomerId");
        if (storedCustomerId) {
          this.customerId = storedCustomerId;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.btnloading = false;
        this.loading = false;
      }
    },
    async fetchCharge() {
      try {
        this.btnloading = true;
        this.loading = true;
        const id = this.$route.params.id;
        const token = Cookies.get("token");

        const response = await axios.get(`api/charge/getbyid/${id}`, {
          headers: {
            token: token,
          },
        });
        const charge = response.data.charge;
        this.firstName = charge.customer?.firstName;
        this.lastName = charge.customer?.lastName;
        this.lastName = charge.customer?.lastName;
        this.service = charge.service?.title;
        this.amount = this.formatCurrency(charge.amount);
        this.createdAt = this.formatDate(charge.createdAt);
        this.status = charge.status;
        this.paymentMethod = charge.paymentMethod;
        this.msisdn = charge.msisdn;
        this.output_ResponseDesc = charge.data.output_ResponseDesc;
        this.output_TransactionID = charge.data.output_TransactionID;
        this.output_ConversationID = charge.data.output_ConversationID;

        this.customerId = charge.customer._id;
        this.serviceId = charge.service._id;
      } catch (error) {
        console.error(error);
      } finally {
        this.btnloading = false;
        this.loading = false;
      }
    },

    async fetchServices() {
      try {
        this.loading = true;
        this.btnloading = true;
        const token = Cookies.get("token");
        const response = await axios.get("/api/servicos/getall", {
          headers: {
            token: token,
          },
        });

        const services = response.data.service;
        this.services = services;
        // Store fetched services and selected service ID in local storage
        localStorage.setItem("services", JSON.stringify(this.services));
        const storedServiceId = localStorage.getItem("selectedServiceId");
        if (storedServiceId) {
          this.serviceId = storedServiceId;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
        this.btnloading = false;
      }
    },

    getStatusClass(status) {
      if (status === "Done") {
        return "text-success";
      } else if (status === "Pending") {
        return "text-pending";
      } else if (status === "Canceled") {
        return "text-danger";
      } else if (status === "Under_approval") {
        return "text-warning";
      } else if (status === "Under_assessment") {
        return "text-muted";
      } else if (status === "Received") {
        return "text-primary";
      } else if (status === "Completed") {
        return "text-success";
      } else if (status === "Revoked") {
        return "text-danger";
      }
      {
        return ""; // Default class if no match
      }
    },
  },
  created() {
    // Try fetching services from local storage
    // const storedServices = localStorage.getItem("services");
    // if (storedServices) {
    //   this.services = JSON.parse(storedServices);
    // } else {
    //   // If not in local storage, fetch services from the API
    //   this.fetchServices();
    // }

    // // Try fetching customers from local storage
    // const storedCustomers = localStorage.getItem("customers");
    // if (storedCustomers) {
    //   this.customers = JSON.parse(storedCustomers);
    // } else {
    //   // If not in local storage, fetch customers from the API
    //   this.fetchData();
    // }

    // this.fetchData();
    // this.fetchServices();
    this.fetchCharge();
  },
};
</script>
<style>
.col-xl-4.col-sm-4 button.btn-primary {
  margin-right: 10px; /* Adjust the value as needed */
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
.custom-date-input {
  width: 150px; /* Adjust the width as needed */
  padding: 5px; /* Adjust the padding as needed */
  font-size: 12px; /* Adjust the font size as needed */
  /* Add any other styles you want to customize the appearance */
}
</style>
