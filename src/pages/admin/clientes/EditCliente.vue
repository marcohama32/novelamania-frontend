<template>
  <div>
    <div class="page-titles">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)">
            <span v-if="isAdmin()">Editar</span>
            <span v-if="!isAdmin()">Visualizar</span> Cliente</a
          >
        </li>
      </ol>
    </div>
    <!-- colocar cards para primeiro selecionar se e um clinte individual com
    corporativo, verificar como se faz a cobranca para os 2 casos -->
    <div class="col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="basic-form">
            <form @submit.prevent="onUpdateCustomer">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Nome *</label>
                  <input
                    v-model="firstName"
                    :disabled="!isAdmin()"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Apelido *</label>
                  <input
                    v-model="lastName"
                    :disabled="!isAdmin()"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Tipo documento *</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                    v-model="idType"
                    :disabled="!isAdmin()"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="BI">BI</option>
                    <option value="Passaport">Passaport</option>
                    <option value="Cartao_de_Eleitor">Cartao de Eleitor</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Doc. Numero *</label>
                  <input
                    v-model="idNumber"
                    :disabled="!isAdmin()"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Genero *</label>
                  <select
                    v-model="gender"
                    :disabled="!isAdmin()"
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Data de nascimento</label>
                  <input
                    type="date"
                    v-model="dob"
                    :disabled="!isAdmin()"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Endereco *</label>
                  <input
                    v-model="address"
                    :disabled="!isAdmin()"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Contacto *</label>
                  <input
                    v-model="contact1"
                    :disabled="!isAdmin()"
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Actividade *</label>
                  <select
                    v-model="activities"
                    :disabled="!isAdmin()"
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="Comerciante">Comerciante</option>
                    <option value="Pescador">Pescador</option>
                    <option value="Empresario">Empresario</option>
                  </select>
                </div>
                <div class="mb-3 col-md-3">
                  <label class="form-label">Email</label>
                  <input v-model="email" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-3">
                  <label class="form-label">Estado *</label>
                  <select
                    v-model="status"
                    :disabled="!isAdmin()"
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div class="mb-3"></div>
              <!-- <div :hidden="!isAdmin()"> -->
              <button
                type="submit"
                class="btn btn-primary me-2"
                :disabled="btnloading"
                :hidden="!isAdmin()"
              >
                <div
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                ></div>
                <span v-if="loading">Processando</span>
                <span v-else>Actualizar</span>
              </button>
              <!-- </div> -->
              <button type="button" class="btn btn-light ml-6" @click="goBack">
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
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
      contact1: "",
      contact2: "",
      user: "",
      activities: "",
      description: "",
      status: "",
      role: 4,
      avatar: null,
      btnloading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
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
        this.loading = false;
      }
    },
    async onUpdateCustomer() {
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

      const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "gender",
        "dob",
        "idType",
        "idNumber",
        "address",
        "contact1",
        "activities",
      ];
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

      // Validate contacts
      if (!this.validateContacts()) {
        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: "Contacto deve ser numero",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
        });
        return;
      }

      try {
        // Create FormData object
        const formData = new FormData();
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("email", this.email);
        formData.append("gender", this.gender);
        formData.append("dob", this.dob);
        formData.append("idType", this.idType);
        formData.append("idNumber", this.idNumber);
        formData.append("address", this.address);
        formData.append("contact1", this.contact1);
        formData.append("activities", this.activities);
        formData.append("status", this.status);
        const id = this.$route.params.id;

        this.btnloading = true;
        this.loading = true;
        const response = await axios.put(
          `api/user/edit/customer/${id}`,
          formData,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        );

        Toast.fire({
          icon: "success",
          title: "Successo!",
          text: "Cliente actualizado com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.loading = false;
        this.$router.push("/listarclientes");
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
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: errorMessage,
          });
          this.btnloading = false;
          this.loading = false;
          console.error("Erro ao actualizar Cliente:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou actualize a pagina.",
          });
          console.error("Error creating company:", error.message);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        this.btnloading = false;
        this.loading = false;
      }
    },
  },
};
</script>
