<template>
  <div>
    <div class="login-account">
      <div class="row h-100">
        <div class="col-lg-6 align-self-start">
          <div class="account-info-area">
            <div
              class="login-content"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
              "
            >
              <div class="image-container">
                <img
                  src="../common/images/moz.png"
                  alt="moz"
                  style="max-width: 70%"
                />
              </div>
              <h1 class="titlementor">Mentor</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
          <div class="login-form">
            <div class="login-head">
              <h3 class="title">Bem vindo</h3>
              <p>
                Insira credenciais de login para autenticação e acesso a
                conteúdo seguro.
              </p>
            </div>
            <h6 class="login-title"><span>Login</span></h6>

            <form @submit.prevent="onLogin">
              <div class="mb-4">
                <label class="mb-1 text-black">Usuario</label>
                <input type="texte" v-model="username" class="form-control" />
              </div>
              <div class="mb-4">
                <label class="mb-1 text-black">Senha</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                />
              </div>
              <div class="form-row d-flex justify-content-between mt-4 mb-2">
                <div class="mb-4"></div>
                <div class="mb-4">
                  <a href="" class="btn-link text-primary"
                    >Esqueceu sua senha?</a
                  >
                </div>
              </div>
              <div class="text-center mb-4">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  :disabled="btnLoading"
                >
                  <div
                    v-if="btnLoading"
                    class="spinner-border spinner-border-sm"
                  ></div>
                  <span v-if="btnLoading">Processando</span>
                  <span v-else>Entrar</span>
                </button>

                <!-- <button type="submit"  :disabled="btnLoading" class="btn btn-primary btn-block">
                  Entrar
                </button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
      username: "",
      password: "",
      btnLoading: false,
      loading: false,
      errors: {},
    };
  },
  computed: {
    axiosBaseUrl() {
      return axios.defaults.baseURL;
    },
  },
  created() {
    this.axios = axios; // Create a reference to axios
  },
  methods: {
    async onLogin() {
      // Check if both email and password fields are empty
      if (!this.username || !this.password) {
        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: "Usuario e senha são obrigatórios.",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
        });
        return;
      }

      try {
        this.loading = true;
        this.btnLoading = true;

        const user = {
          username: this.username,
          password: this.password,
        };

        const res = await this.axios.post("/api/signin", user);

        if (res.status === 200) {
          Cookies.set("token", res.data.token, { expires: 7 });
          Cookies.set("role", res.data.role, { expires: 7 });
          this.$emit("loginSuccess");
          this.$router.go("/");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          this.errors = { username: [error.response.data.error] };
          console.log(this.errors);
          Swal.fire({
            icon: "warning",
            title: "Aviso!",
            toast: true,
            text: `${this.errors.username}`,
            timer: 3000,
            showConfirmButton: false,
            position: "top-end",
          });
        } else {
          // Show a generic error message for unexpected errors
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente mais tarde.",
          });
        }
      } finally {
        this.loading = false;
        this.btnLoading = false;
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    const isAuthenticated = Cookies.get("token");
    if (isAuthenticated) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  },
};
</script>

<style>
.titlementor {
  color: #148abe;
  margin-top: 40px;
  opacity: 0.3;
}
.account-info-area {
  background-color: #ffffff !important;
  /* color: #fafafa !important; */
}
.image-container img {
  /* max-width: 50%; */
  opacity: 0.8;
  /* margin-top: 20px; */
  /* width: 50%; */
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
