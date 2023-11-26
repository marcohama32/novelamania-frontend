<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa">Pagamento Dinheiro em espécie</div>
            <div class="tools">
              <a href="javascript:void(0);" class="expand SlideToolHeader"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
        </div>

        <div v-if="loading" class="spinner mb-6" style="font-size: 18px"></div>
        <form @submit.prevent="onProcessCobranca">
          <div class="tab-pane">
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
                  <h5 class="f-w-500">
                    Contacto <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ contact1 }}</span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-3 col-5">
                  <h5 class="f-w-500">
                    Actividade <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ activities }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="mb-3 col-md-4">
              <label class="form-label">Servico</label>
              <select
                class="form-control default-select wide"
                id="inputState"
                v-model="selectedService"
              >
                <!-- <option selected disabled>Selecione um servico...</option> -->
                <option
                  v-for="service in services"
                  :key="service._id"
                  :value="service"
                >
                  {{ service.title }} - {{ formatCurrency(service.amount) }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-3"></div>
          <button
            type="submit"
            class="btn btn-primary me-2"
            :disabled="btnloading"
          >
            <div
              v-if="btnloading"
              class="spinner-border spinner-border-sm"
            ></div>
            <span v-if="btnloading">Processando</span>
            <span v-else>Processar</span>
          </button>
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
import { utils, writeFile } from "xlsx";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Cookies from "js-cookie";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

export default {
  data() {
    return {
      customers: [],
      services: [],
      selectedService: [],
      transactionFiles: [], // Initialize as an empty array
      contact1: "",
      firstName: "",
      msisdn: "",
      activities: "",
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10,
      firtName: "",
      lastName: "",
      idType: "",
      paymentMethod: "dinheiro",
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
    shortenFileName(fileName, maxLength = 20) {
      if (fileName.length > maxLength) {
        return fileName.slice(0, maxLength) + "...";
      } else {
        return fileName;
      }
    },
    openTransactionFilesModal(transaction) {
      // Replace this logic with fetching the files for the selected transaction
      // For example, you can populate this.transactionFiles with your file data.
      this.transactionFiles = transaction.multipleFiles.split(",");

      // Open the modal
      const modal = document.getElementById("files-modal");
      modal.style.display = "block";
    },
    getFilePath(file) {
      return `${axios.defaults.baseURL}/${file}`;
    },
    formatNumber(number) {
      // Check if the input is a valid number
      if (isNaN(number)) {
        return "Invalid Number";
      }

      // Convert the number to a string and split it into parts
      const parts = number.toString().split(".");

      // Format the integer part with commas as thousands separators
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Join the integer and decimal parts with a dot
      return parts.join(".");
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
    isActivePage(page) {
      return page === this.currentPage;
    },
    async onProcessCobranca() {
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

      const token = Cookies.get("token");

      try {
        if (
          !this.selectedService ||
          !this.selectedService._id ||
          !this.selectedService.amount
        ) {
          // console.log("No service selected.");
          Toast.fire({
            icon: "warning",
            title: "Aviso!",
            text: "Por favor, selecione um serviço.",
            timer: 3000,
          });
          return; // Stop execution if no service selected
        }
         const customer = this.$route.params.id;
        const serviceId = this.selectedService._id;
        const amount = this.selectedService.amount;

        const formData = new FormData();
        formData.append("customer", customer);
        formData.append("service", serviceId);
        formData.append("amount", amount);
        formData.append("msisdn", this.contact1);
        formData.append("paymentMethod", this.paymentMethod);

        this.btnloading = true;
        const response = await axios.post("api/charge/create", formData, {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });

        Toast.fire({
          icon: "success",
          title: "Successo!",
          text: "Cobranca criada com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.$router.push("/listarcobrancas");
        this.isSuccess = true;
        console.log(response);
        this.$emit("Crianda com sucesso");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: errorMessage,
          });
          console.error("Erro ao criar Cobranca:", errorMessage);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou atualize a página.",
          });
          console.error("Erro ao criar Cobranca:", error.message);
        }
        this.btnloading = false;
      }
    },

    async fetchData() {
      try {
        this.btnloading = true;
        this.loading = true;
        const id = this.$route.params.id;
        const token = Cookies.get("token");
        const response = await axios.get(`api/user/getbyid/${id}`, {
          headers: {
            token: token,
          },
        });
        const customer = response.data.customer;

        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.email = customer.email;
        this.gender = customer.gender;
        this.dob = this.formatDate(customer.dob);
        this.idType = customer.idType;
        this.idNumber = customer.idNumber;
        this.address = customer.address;
        this.contact1 = customer.contact1;
        this.activities = customer.activities;
        this.status = customer.status;
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
        // Store services in local storage
        localStorage.setItem("services", JSON.stringify(services));
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
        this.btnloading = false;
      }
    },

    applyFilter() {
      this.currentPage = 1;
      this.fetchData();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this.fetchData();
      }
    },
    async changePageSize() {
      this.currentPage = 1;
      this.itemsPerPage = this.pageSize;
      await this.fetchData();
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
    exportToExcel() {
      const table = document.querySelector("table");
      const workbook = utils.table_to_book(table);
      writeFile(workbook, "clientes_lista.xlsx");
    },
    exportToPDF() {
      const table = document.querySelector("table");
      setTimeout(() => {
        const element = document.createElement("div");
        element.appendChild(table);
        html2pdf()
          .set({ filename: "transactions_list.pdf" })
          .from(element)
          .save();
      }, 500);
    },
  },
  created() {
    // Try fetching services from local storage
    const storedServices = localStorage.getItem("services");
    if (storedServices) {
      this.services = JSON.parse(storedServices);
    } else {
      // If not in local storage, fetch services from the API
      this.fetchServices();
    }
    this.fetchData();
    this.fetchServices();
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
