<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa">Meu Perfil</div>
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
                <h5 class="f-w-500">Email <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ email }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Sexo <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ gender }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">
                  Data de nascimento <span class="pull-end">:</span>
                </h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ dob }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Id Type <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ idType }}</span>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-3 col-5">
                <h5 class="f-w-500">Id number <span class="pull-end">:</span></h5>
              </div>
              <div class="col-sm-9 col-7">
                <span>{{ idNumber }}</span>
              </div>
            </div>
            <div>
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
                    Usuario <span class="pull-end">:</span>
                  </h5>
                </div>
                <div class="col-sm-9 col-7">
                  <span>{{ username }}</span>
                </div>
              </div>
             
            </div>
          </div>

          <div class="mb-3"></div>

          <button type="button" class="btn btn-dark" @click="goBack">
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
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      dob: "",
      idType: "",
      idNumber: "",
      address: "",
      contact1: "",
      role: "",
      username: "",

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

    async profile() {
      try {
        this.loading = true;

        const token = Cookies.get("token");
        const response = await axios.get("/api/me", {
          headers: {
            token: token,
          },
        });

        if (response) {
          //  const totalTransactions = response.data.totalTransactions;
          const profile = response.data.user;
          this.firstName = profile.firstName;
          this.lastName = profile.lastName;
          this.email = profile.email;
          this.gender = profile.gender;
          this.dob = this.formatDateWithTime(profile.dob);
          this.idType = profile.idType;
          this.idNumber = profile.idNumber;
          this.address = profile.address;
          this.contact1 = profile.contact1;
          this.role = profile.role;
          this.username = profile.username;

          this.role = profile.role;
        } else {
          console.error("erro");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
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
    this.profile();
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
