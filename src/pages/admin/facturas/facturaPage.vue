<template>
  <div>
      <div v-if="loading" class="spinner" style="font-size: 18px"></div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card mt-3">
          <div class="card-header">
            Factura <strong>{{ createdAt }}</strong>
            <span class="float-right">
              <strong>Status:</strong> {{ status }}</span
            >
            <button class="btn btn-primary" type="submit" @click="print" :disabled="loading">
              Imprimir
            </button>
          </div>
          <div class="card-body">
            <div class="row mb-5">
              <div class="mt-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h6>De:</h6>
                <div><strong>Governo de Magude</strong></div>
                <div>Email: governomagude@gov.co.mz</div>
                <div>Contacto: +258 84 02 62 320</div>
              </div>
              <div class="mt-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h6>Cliente:</h6>
                <div>
                  <strong>{{ firstName }} {{ lastName }}</strong>
                </div>
                <div>Contacto: +{{ msisdn }}</div>
              </div>
              <div
                class="mt-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start"
              >
                <div class="row align-items-center">
                  <div class="col-sm-9">
                    <div class="brand-logo mb-3">
                      <img
                        class="logo-abbr me-2"
                        src="/dist/images/logo.png"
                        alt=""
                      />
                      <img
                        class="logo-compact"
                        src="images/logo-text.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-3 mt-3">
                    <img
                      src="images/qr.png"
                      alt=""
                      class="img-fluid width110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="center">Factura</th>
                    <th>Servico</th>
                    <th>Valor</th>
                    <th class="right">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="center">{{ invoice }}</td>
                    <td class="left">{{ service }}</td>
                    <td class="left">{{ formatCurrency(amount) }}</td>
                    <td class="right">{{ createdAt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import axios from "axios";
import Cookies from "js-cookie";
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
      createdAt: "",
      service: "",
      msisdn: "",
      contact1: "",
      contact2: "",
      user: "",
      status: "",
      btnloading: false,
      loading: false
    };
  },
  created() {
    this.fetchData();
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Smooth scrolling effect
      });
    },
    async print() {
   
      const token = Cookies.get("token");
      

      try {
        // Create FormData object
        // this.btnloading = true;
        // this.loading = true;
          const id = this.$route.params.id;
        const response = await axios.get(
          `api/charge/invoice/${id}`,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        );


        this.btnloading = false;
        this.loading = false;
        // this.$router.push("/listarclientes");
        this.isSuccess = true;
        console.log(response);
        this.$emit("Actualizado com sucesso");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;

          this.btnloading = false;
          this.loading = false;
          console.error("Erro ao actualizar Cliente:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
         
          console.error("Error creating company:", error.message);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        this.btnloading = false;
        this.loading = false;
      }
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
    isAdmin() {
      const role = Cookies.get("role");
      return role === "1";
    },
    goBack() {
      this.$router.go(-1);
    },
    onFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      // Set the file object to the avatar property
      this.avatar = file;
    },
    validateContacts() {
      if (isNaN(this.contact1) || isNaN(this.contact2)) {
        return false;
      }
      return true;
    },
    formatDate(dateString) {
      const date = new Date(dateString); // Create a Date object from the ISO 8601 date string
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1 and pad with '0' if needed
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`; // Return the formatted date as a string
    },
    async fetchData() {
      try {
        this.loading = true;
        const id = this.$route.params.id;
        const token = Cookies.get("token");

        const {
          data: { charge },
        } = await axios.get(`api/charge/getbyid/${id}`, {
          headers: {
            token: token,
          },
        });

        const {
          invoice,
          paymentMethod,
          amount,
          createdAt,
          customer,
          msisdn,
          service,
          status,
        } = charge;

        this.invoice = invoice;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.createdAt = this.formatDate(createdAt);
        this.firstName = customer ? customer.firstName : "N/A";
        this.lastName = customer ? customer.lastName : "N/A";
        this.msisdn = msisdn;
        this.service = service.title;
        this.status = status;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
