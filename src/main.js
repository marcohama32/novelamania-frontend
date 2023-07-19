import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import router from "./router/router";
import store from "./store/store";

// Set default base URL for Axios requests
axios.defaults.baseURL = "http://localhost:8000/api";

// Add an Axios interceptor for handling 401 status code
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      let msg = error.response.data.returnMessage;
      localStorage.setItem("logoutReason", msg);
      const response = axios.get("/logout");
      if (response.data.success) {
        localStorage.removeItem("token");
        this.$router.go("/login");
        router.go("/login");
      }
    }
    return Promise.reject(error);
  }
);

const app = createApp(App);
app.use(VueCookies);
app.use(router);
app.use(store);
app.mount("#app");
