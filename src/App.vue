<template>
  <div>
    <!-- Authenticated Users -->
    <div v-if="isAuthenticated && !isLoginRoute" id="main-wrapper">
      <TopBar />
      <SideBar />

      <!-- Content Body -->
      <div class="content-body">
        <div class="container-fluid">
          <!-- Home content -->
          <router-view></router-view>
        </div>
      </div>

      <FooterPage />
    </div>

    <!-- Non-authenticated Users -->
    <div v-else>
      <!-- Redirect to reset password route when not authenticated -->
      <router-view v-if="isResetRoute || isForgetRoute"></router-view>

      <!-- Show login route if not accessing reset route -->
      <router-view v-else-if="isLoginRoute"></router-view>
    </div>
  </div>
</template>


<script>
import SideBar from "./pages/common/SideBar.vue";
import TopBar from "./pages/common/TopBar.vue";
import FooterPage from "./pages/common/FooterPage.vue";
import Cookies from "js-cookie";

export default {
  name: "App",
  components: {
    TopBar,
    SideBar,
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
