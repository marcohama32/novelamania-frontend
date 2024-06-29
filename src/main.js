// import { createApp } from "vue";
// import axios from "axios";
// import App from "./App.vue";
// import VueCookies from "vue-cookies";
// // import Cookies from "js-cookie";
// import router from "./router/router";
// import store from "./store/store";
// import "flatpickr/dist/flatpickr.css";

// axios.defaults.baseURL = "http://localhost:8000";

// // Adicionando o interceptor para tratamento de erros de autorização (401)
// // axios.interceptors.response.use(
// //   function (response) {
// //     return response;
// //   },
// //   async function (error) {
// //     if (error.response && error.response.status === 401) {
// //       // Captura o motivo da desconexão
// //       let msg = error.response.data.returnMessage;
// //       VueCookies.set("logoutReason", msg);

// //       // Realiza o logout na API
// //     //   const token = VueCookies.get("token");
// //       const token = Cookies.get("token");
// //       try {
// //         const response = await axios.get("/api/check/verify-token", {
// //           headers: {
// //             token: token,
// //           },
// //         });

// //         // Se o token for inválido, realiza o logout
// //         if (!response.data.valid) {
// //           await axios.get("/api/logout", {
// //             headers: {
// //               token: token,
// //             },
// //           });
// //           Cookies.remove("token");
// //           Cookies.remove("role");
// //           VueCookies.remove("token");
// //           router.push("/");
// //         }
// //       } catch (verifyTokenError) {
// //         console.error("Erro ao verificar token:", verifyTokenError);

// //         // Em caso de erro na verificação do token, realiza o logout e limpa os cookies
// //         await axios.get("/api/logout", {
// //           headers: {
// //             token: token,
// //           },
// //         });
// //         Cookies.remove("token");
// //         Cookies.remove("role");
// //         VueCookies.remove("token");
// //         router.push("/");
// //       }
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// const app = createApp(App);

// app.use(VueCookies);
// app.use(router);
// app.use(store);

// app.mount("#app");

import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import Cookies from "js-cookie";
import router from "./router/router";
import store from "./store/store";
import "flatpickr/dist/flatpickr.css";

// Definir a base URL para o Axios
// axios.defaults.baseURL = "http://localhost:8000";
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
            //   await axios.get(LOGOUT_ENDPOINT, { headers: { token } });
            Cookies.remove(TOKEN_COOKIE);
            Cookies.remove(ROLE_COOKIE);
            Cookies.set(
              LOGOUT_REASON_COOKIE,
              error.response.data.returnMessage
            );
            router.push("/");
          }
        } catch (verifyTokenError) {
          console.error("Erro ao verificar token:", verifyTokenError);

          // Em caso de erro na verificação do token, realizar logout e limpar os cookies
          // await axios.get(LOGOUT_ENDPOINT, { headers: { token } });
          Cookies.remove(TOKEN_COOKIE);
          Cookies.remove(ROLE_COOKIE);
          Cookies.set(LOGOUT_REASON_COOKIE, "Erro na verificação do token");
          router.push("/");
        }
      }
    }
    return Promise.reject(error);
  }
);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
