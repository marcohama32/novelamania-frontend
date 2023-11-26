<template>
  <div>
    <div class="page-titles">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)">Edit Despesa</a>
        </li>
      </ol>
    </div>
    <!-- colocar cards para primeiro selecionar se e um clinte individual com
    corporativo, verificar como se faz a cobranca para os 2 casos -->
    <div class="col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="basic-form">
            <form @submit.prevent="onEditDespesa">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Titulo *</label>
                  <input v-model="title" type="text" class="form-control" />
                </div>

                <div class="mb-3 col-md-6">
                  <label class="form-label">Categoria *</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                    v-model="category"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Material_de_escritorio">
                      Material de escritorio
                    </option>
                    <option value="Cartao_de_Eleitor">Outro</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Metodo de Pagamento *</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                    v-model="paymentMethod"
                  >
                    <option value="" disabled selected>Selecionar...</option>
                    <option value="check">Check</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="mpesa">M Pesa</option>
                    <option value="transferencia">Transferencia</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Valor *</label>
                  <input v-model="amount" type="number" class="form-control"   min="1" step="0.01" />
                </div>

                <div class="mb-3 col-md-12">
                  <label class="form-label">Desricao *</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="description"
                  ></textarea>
                  <div class="input-group-append"></div>
                </div>

                <div class="mb-3 col-md-12">
                  <label class="form-label">Nota</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="notes"
                  ></textarea>
                  <div class="input-group-append"></div>
                </div>

                <div class="mb-3 col-md-12">
                  <label class="form-label">Data *</label>
                  <input type="date" v-model="date" class="form-control" />
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
                <span v-if="btnloading">Actualizando</span>
                <span v-else>Actualizar</span>
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
      date: "",
      amount: "",
      category: "",
      paymentMethod: "",
      notes: "",
      description: "",
      btnloading: false,
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return formatter.format(value);
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
    async onEditDespesa() {
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
        formData.append("date", this.date);
        formData.append("amount", this.amount);
        formData.append("category", this.category);
        formData.append("paymentMethod", this.paymentMethod);
        formData.append("description", this.description);
        formData.append("notes", this.notes);
        const id = this.$route.params.id;
        this.btnloading = true;
        const response = await axios.put(`/api/expense/edit/${id}`, formData, {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });

        Toast.fire({
          icon: "success",
          title: "Successo!",
          text: "Despesa actualizada com sucesso",
          timer: 3000,
        });

        this.btnloading = false;
        this.$router.push("/listardespesas");
        this.isSuccess = true;
        console.log(response);
        this.$emit("Actualizada com sucesso");
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
          console.error("Erro ao criar Despesa:", errorMessage);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente ou actualize a pagina.",
          });
          console.error("Erro ao actualizar Despesa:", error.message);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
        this.btnloading = false;
      }
    },

    async fetchData() {
      try {
        this.loading = true;
        this.btnloading = true;
        const id = this.$route.params.id;
        const token = Cookies.get("token");
        const response = await axios.get(`api/expense/getbyid/${id}`, {
          headers: {
            token: token,
          },
        });
        const expense = response.data.expense;

        this.title = expense.title;
        this.amount = expense.amount;
        this.category = expense.category;
        this.paymentMethod = expense.paymentMethod;
        this.notes = expense.notes;
        this.description = expense.description;
        this.date = this.formatDate(expense.date);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
        this.btnloading = false;
      }
    },
  },
};
</script>
