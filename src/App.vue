<template>
  <div>
    <TopBar />
    <main><router-view></router-view></main>
    <FooterPage />
  </div>
</template>

<script>
import TopBar from "./pages/common/TopBar.vue";
import FooterPage from "./pages/common/FooterPage.vue";
import Cookies from "js-cookie";

export default {
  name: "App",
  components: {
    TopBar,
    FooterPage,
  },
  computed: {
    isAuthenticated() {
      const token = Cookies.get("token");
      return !!token && this.isTokenValid(token);
    },
    isLoginRoute() {
      return this.$route.name === "Login";
    },
    isResetRoute() {
      return this.$route.name === "Reset Token";
    },
    isForgetRoute() {
      return this.$route.name === "Forget Password";
    },
  },
  methods: {
    isTokenValid(token) {
      if (!token) {
        return false;
      }

      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));

        // Check if the token is expired
        const expiration = decodedToken?.exp;
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

        return currentTime < expiration;
      } catch (error) {
        console.error("Invalid token format");
        return false;
      }
    },
  },
};
</script>
