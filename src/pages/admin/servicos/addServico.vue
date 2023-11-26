<template>
  <div>
    <div class="page-titles">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)">Adicionar Servico</a>
        </li>
      </ol>
    </div>
    <!-- colocar cards para primeiro selecionar se e um clinte individual com
    corporativo, verificar como se faz a cobranca para os 2 casos -->
    <div class="col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="basic-form">
            <form @submit.prevent="onCreateDespesa">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Titulo *</label>
                  <input v-model="title" type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Valor *</label>
                  <input
                    v-model="amount"
                    type="number"
                    class="form-control"
                    min="1"
                    step="0.01"
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label class="form-label">Descricao *</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="description"
                  ></textarea>
                  <div class="input-group-append"></div>
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
      title: "",
      amount: "",
      description: "",
      btnloading: false,
      loading: false,
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
    async onCreateDespesa() {
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
        "title",
        "date",
        "amount",
        "category",
        "paymentMethod",
        "description",
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

      try {
        // Create FormData object
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("amount", this.amount);
        formData.append("description", this.description);

        this.btnloading = true;
        const response = await axios.post("/api/service/create", formData, {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });

        Toast.fire({
          icon: "success",
          title: "Successo!",
          text: "Servico criado com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.$router.push("/listarservicos");
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
          this.btnloading = false;
          console.error("Erro ao criar Servico:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou actualize a pagina.",
          });
          console.error("Erro ao criar Servico:", error.message);
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
