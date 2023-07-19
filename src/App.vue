<template>
    <div>
      <div v-if="isAuthenticated" class="fullcontent">
        <MobileMenu />
  
        <div class="flex mt-[4.7rem] md:mt-0 overflow-hidden">
          <SideMenu />
  
          <div class="content">
            <TopBar />
  
            <router-view v-if="isAuthenticated && !isLoginRoute"></router-view>
          </div>
          <!-- END: Content -->
        </div>
      </div>
      <div v-else>
        <!-- Render login route separately -->
        <router-view v-if="isLoginRoute"></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import MobileMenu from "./components/MobileMenu.vue";
  import SideMenu from "./components/SideMenu.vue";
  import TopBar from "./components/TopBar.vue";
  
  export default {
    name: "App",
    components: {
      TopBar,
      SideMenu,
      MobileMenu,
    },
    computed: {
      isAuthenticated() {
        const token = localStorage.getItem("token");
        return !!token && this.isTokenValid(token);
      },
      isLoginRoute() {
        return this.$route.name === "Login";
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
          const expiration = decodedToken.exp;
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
  