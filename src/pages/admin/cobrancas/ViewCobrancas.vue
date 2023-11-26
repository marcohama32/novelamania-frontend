<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa"><i class="fa-solid fa-filter me-2"></i>Filtro</div>
            <div class="tools">
              <a href="javascript:void(0);" class="expand SlideToolHeader"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div class="cm-content-body form excerpt">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3 col-sm-6">
                  <input
                    type="text"
                    class="form-control mb-3 mb-xl-0"
                    id="exampleFormControlInput1"
                    placeholder="pesquisar"
                    v-model="searchTerm"
                    @input="applyFilter"
                  />
                </div>
                <div class="col-xl-2 col-sm-4">
                  <input
                    type="date"
                    name="datepicker"
                    class="form-control mb-3 mb-xl-0"
                    id="startDate"
                    v-model="startDate"
                    :config="datePickerConfig"
                  />
                </div>
                <div class="col-xl-2 col-sm-4">
                  <input
                    type="date"
                    name="datepicker"
                    class="form-control mb-3 mb-xl-0"
                    id="endDate"
                    v-model="endDate"
                    :config="datePickerConfig"
                  />
                </div>

                <div class="col-xl-4 col-sm-4">
                  <button
                    class="btn btn-primary"
                    title="Click here to Search"
                    type="button"
                    @click="applyFilterDate"
                  >
                    <i class="fa fa-search me-1"></i>Buscar
                  </button>

                  <button
                    class="btn btn-danger light"
                    title="Click here to remove filter"
                    type="button"
                    @click="refresh"
                  >
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <ul class="d-flex align-items-center flex-wrap">
            <li>
              <a @click="exportToExcel" class="btn btn-primary">Export</a>
            </li>
            <div v-if="loading" class="spinner" style="font-size: 18px"></div>
          </ul>
        </div>
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa">
              <i class="fa-solid fa-file-lines me-1"></i>Cobranças
            </div>
            <div class="tools">
              <a href="javascript:void(0);" class="expand SlideToolHeader"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div class="cm-content-body form excerpt">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-responsive-sm mb-0">
                  <thead>
                    <tr>
                      <th><strong>Factura</strong></th>
                      <th><strong>Cliente</strong></th>
                      <th><strong>Servico</strong></th>
                      <th><strong>Valor</strong></th>
                      <th><strong>Pagamento</strong></th>
                      <th><strong>ID</strong></th>
                      <th><strong>Contacto</strong></th>
                      <th><strong>Agent</strong></th>
                      <th><strong>Estado</strong></th>
                       <th><strong>Data</strong></th>
                      <th style="width: 85px"><strong>Acoes</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="charge in charges" :key="charge._id">
                      <td>{{ charge.invoice }}</td>
                      <td>
                        {{ charge.customer.firstName }}
                        {{ charge.customer.lastName }}
                      </td>

                      <td class="recent-stats">
                        {{ charge.servico.title }}
                      </td>
                      <td class="recent-stats">
                        <!-- {{ charge.amount }}  -->
                        {{ formatCurrency(charge.amount) }}
                      </td>
                      <td class="recent-stats">
                        {{ charge.paymentMethod }}
                      </td>
                      <td class="recent-stats">
                        {{ charge.data?.output_TransactionID }}
                      </td>
                      <td class="recent-stats">
                        {{ charge.msisdn }}
                      </td>

                      <td class="recent-stats">
                        {{ charge.user?.firstName }}
                      </td>

                      <td class="recent-stats">
                        {{ charge.status }}
                      </td>
                      <td class="recent-stats">
                        {{ formatDateWithTime(charge.createdAt) }}
                      </td>
                      <td>
                        
                          <router-link
                          v-if="role === '1'"
                          :to="`/anularcobranca/${charge._id}`"
                          class="btn btn-primary shadow btn-xs sharp rounded-circle me-1"
                          ><i class="fa fa-pencil"></i
                        ></router-link>
                       
                      
                          <!-- <router-link
                          :to="`/anularcobranca/${charge._id}`"
                          class="btn btn-primary shadow btn-xs sharp rounded-circle me-1"
                          ><i class="fa fa-pencil"></i
                        ></router-link> -->
                      
                        <!-- <router-link
                          :to="`/apiprint/${charge._id}`"
                          class="btn btn-secondary shadow btn-xs sharp rounded-circle me-1"
                          ><i class="las la-print scale5"></i
                        ></router-link> -->
                         <router-link
                          :to="`/factura/${charge._id}`"
                          class="btn btn-rounded btn-success shadow btn-xs sharp rounded-circle me-1"
                          ><i class="las la-print scale5"></i
                        ></router-link>
                        <a
                          @click="deleteItem(charge._id, charge.invoice)"
                          class="btn btn-danger shadow btn-xs sharp rounded-circle"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="d-flex align-items-center justify-content-xl-between flex-wrap justify-content-center mt-3"
              >
                <span>
                  Mostrando {{ firstEntryIndex }} a {{ lastEntryIndex }} de
                  {{ count }} entradas</span
                >

                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-2 mb-sm-0">
                    <li class="page-item">
                      <a class="page-link" @click="previousPage"
                        ><i class="fa-solid fa-angle-left"></i
                      ></a>
                    </li>
                    <li
                      class="page-item"
                      v-for="page in totalPages"
                      :key="page"
                      :class="{ active: isActivePage(page) }"
                    >
                      <a class="page-link" @click="goToPage(page)">{{
                        page
                      }}</a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" @click="nextPage"
                        ><i class="fa-solid fa-angle-right"></i
                      ></a>
                    </li>
                  </ul>
                </nav>
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
import { utils, writeFile } from "xlsx";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Cookies from "js-cookie";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

export default {
  data() {
    return {
      charges: [],
      transactionFiles: [], // Initialize as an empty array
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10,
      firtName: "",
      lastName: "",
      idType: "",
      loading: false,
      pageSize: 10,
      count: 0,
      firstEntryIndex: 0,
      lastEntryIndex: 0,
      searchTerm: "",
      role:"",
      averageApprovalTime: "",
      startDate: "",
      endDate: "",
      selectedDate: null,
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
    getRole(){
      const role =Cookies.get("role");
      this.role = role
      return this.role
    },
    async deleteItem(id, invoiceNumber) {
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

      // Show confirmation dialog
      const confirmResult = await Swal.fire({
        title: "Tem certeza?",
        text: `Deseja excluir a Cobrança com número de fatura ${invoiceNumber} ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sim, exclua-o!",
      });

      // Check if user clicked 'Yes'
      if (confirmResult.isConfirmed) {
        this.loading = true;
        try {
          const token = Cookies.get("token");
          const response = await axios.delete(`api/charge/delete/${id}`, {
            headers: {
              token: token,
            },
          });

          // Assuming the response contains some data, you can check it here
          console.log(response.data); // Use the response here

          Toast.fire({
            icon: "success",
            title: "Cobrança excluída com sucesso!",
          });
          this.loading = false;
          this.fetchData();
        } catch (error) {
          console.error("Erro ao excluir Cobrança:", error);

          Toast.fire({
            icon: "error",
            title: "Erro ao excluir Cobrança ",
          });
        }
      } else {
        Toast.fire({
          icon: "info",
          title: "Exclusão cancelada",
        });
      }
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
      // Check if the value is an object with "$numberDecimal" property
      if (value && typeof value === "object" && "$numberDecimal" in value) {
        // Extract the numeric value
        value = parseFloat(value.$numberDecimal);
      }

      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return formatter.format(value);
    },
    isActivePage(page) {
      return page === this.currentPage;
    },
    async fetchData() {
      try {
        this.loading = true;

        const token = Cookies.get("token");
        // Prepare the query parameters for the API request
        const queryParams = {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          searchTerm: this.searchTerm,
        };

        // Check if both start and end dates are selected
        if (this.startDate && this.endDate) {
          queryParams.startDate = this.startDate;
          queryParams.endDate = this.endDate;
        }
        const response = await axios.get("api/charges/getall", {
          headers: {
            token: token,
          },
          params: queryParams,
        });

        this.charges = response.data.charges;
        // console.log(response.data.charges);
        this.count = response.data.total;
        this.totalPages = Math.ceil(this.count / this.pageSize);

        // Update the firstEntryIndex and lastEntryIndex values based on the current page and pageSize
        this.firstEntryIndex = (this.currentPage - 1) * this.pageSize + 1;
        this.lastEntryIndex = Math.min(
          this.currentPage * this.pageSize,
          this.count
        );
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
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
      writeFile(workbook, "cobrancas_lista.xlsx");
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
 this.getRole();
    this.fetchData();
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
