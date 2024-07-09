import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import Cookies from "js-cookie";
import router from "./router/router";
import store from "./store/store";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Registrar Service Worker para cache de imagens e arquivos estáticos
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error);
      });
  });
}

// Definir a base URL para o Axios
axios.defaults.baseURL = "https://novelamania-api.onrender.com";

// Definir as constantes
const TOKEN_COOKIE = "token";
const ROLE_COOKIE = "role";
const LOGOUT_REASON_COOKIE = "logoutReason";
const VERIFY_TOKEN_ENDPOINT = "/api/check/verify-token";
// const LOGOUT_ENDPOINT = "/api/logout";

// Adicionar o interceptor para tratamento de erros de autorização (401)
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("Erro na requisição Axios:", error); // Log para depuração
    if (error.response && error.response.status === 401) {
      const token = Cookies.get(TOKEN_COOKIE);

      if (token) {
        try {
          // Verificar o token
          const response = await axios.get(VERIFY_TOKEN_ENDPOINT, {
            headers: { token },
          });

          // Se o token for inválido, realizar logout
          if (!response.data.valid) {
            // Realizar logout
            await handleLogout(error.response.data.returnMessage);
          }
        } catch (verifyTokenError) {
          console.error("Erro ao verificar token:", verifyTokenError);
          // Realizar logout em caso de erro na verificação do token
          await handleLogout("Erro na verificação do token");
        }
      }
    }
    return Promise.reject(error);
  }
);

// Função para realizar o logout
const handleLogout = async (logoutReason) => {
  try {
    // Realizar chamada para logout no backend, se necessário
    // await axios.get(LOGOUT_ENDPOINT, { headers: { token } });

    // Limpar cookies e localStorage
    Cookies.remove(TOKEN_COOKIE);
    Cookies.remove(ROLE_COOKIE);
    Cookies.set(LOGOUT_REASON_COOKIE, logoutReason);
    localStorage.removeItem("userProfile");

    // Exibir mensagem de logout usando SweetAlert2
    await Swal.fire({
      icon: "info",
      title: "Sessão expirada",
      text: "Você foi desconectado devido à expiração da sessão.",
      confirmButtonText: "OK",
    });

    // Redirecionar para a página inicial
    router.push("/");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    // Tratamento adicional de erro, se necessário
  }
};

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
