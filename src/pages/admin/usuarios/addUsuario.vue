<template>
  <div>
    <div class="page-titles">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)">Adicionar Cliente</a>
        </li>
      </ol>
    </div>
    <!-- colocar cards para primeiro selecionar se e um clinte individual com
    corporativo, verificar como se faz a cobranca para os 2 casos -->
    <div class="col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="basic-form">
            <form @submit.prevent="onCreateCustomer">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Nome *</label>
                  <input v-model="firstName" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Apelido *</label>
                  <input v-model="lastName" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Tipo documento *</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                    v-model="idType"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="BI">BI</option>
                    <option value="Passaport">Passaport</option>
                    <option value="Cartao_de_Eleitor">Cartao de Eleitor</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Doc. Numero *</label>
                  <input v-model="idNumber" type="text" class="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Genero *</label>
                  <select
                    v-model="gender"
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
                  <input type="date" v-model="dob" class="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Endereco *</label>
                  <input v-model="address" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Contacto *</label>
                  <input
                    v-model="contact1"
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Role *</label>
                  <select
                    v-model="role"
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="1">Admin</option>
                    <option value="2">Gestor</option>
                    <option value="3">Agente</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Email</label>
                  <input v-model="email" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Usuario *</label>
                  <input v-model="username" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Senha *</label>
                  <input v-model="password" type="password" class="form-control" placeholder="pelo menos 6 digitos"/>
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
                <span v-else>Gravar</span>
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
      username: "",
      password: "",
      role: "",
      avatar: null,
      btnloading: false,
    };
  },
  created() {},
  methods: {
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
    async onCreateCustomer() {
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
        "role",
        "username",
        "password"
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
        formData.append("username", this.username);
        formData.append("role", this.role);
        formData.append("password", this.password);



        this.btnloading = true;
        const response = await axios.post(
          "api/user/signup",
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
          text: "Usuario criado com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.$router.push("/listarusuarios");
        this.isSuccess = true;
        console.log(response);
        this.$emit("Criando com sucesso");
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
          this.btnloading = false;
          console.error("Erro ao criar Usuario:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou actualize a pagina.",
          });
          console.error("Erro ao criar Usuario:", error.message);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        this.btnloading = false;
      }
    },
  },
};
</script>
