<template>
  <div>
    <!--**********************************
            Sidebar start
        ***********************************-->
    <div class="deznav">
      <div class="deznav-scroll">
        <ul class="metismenu" id="menu">
          <li v-if="hasRoute('Dashboard')">
            <a class="ai-icon" href="/" aria-expanded="false">
              <i class="flaticon-381-networking"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li v-if="hasRoute('View Clientes')">
            <a
              href="page-error-404.html"
              class="ai-icon has-arrow"
              aria-expanded="false"
            >
              <i class="flaticon-381-settings-2"></i>
              <span class="nav-text">Clientes</span>
            </a>
            <ul aria-expanded="false">
              <li v-if="hasRoute('View Clientes')"><router-link to="/addclientes">Registrar</router-link></li>
              <li v-if="hasRoute('View Clientes')"><router-link to="/listarclientes">Listar</router-link></li>
            </ul>
          </li>
          <li v-if="hasRoute('View Cobrancas')">
            <a
              class="has-arrow ai-icon"
              href="javascript:;"
              aria-expanded="false"
            >
              <i class="flaticon-381-controls-3"></i>
              <span class="nav-text">Cobrancas</span>
            </a>
            <ul aria-expanded="false">
              <li v-if="hasRoute('Add Cobrancas')"><router-link to="/addcobranca">Processar</router-link></li>
              <li v-if="hasRoute('View Cobrancas')"><router-link to="/listarcobrancas">Listar</router-link></li>
            </ul>
          </li>
          <li v-if="hasRoute('Listar Despesas')">
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-layer-1"></i>
              <span class="nav-text">Despesas</span>
          </a>
            <ul aria-expanded="false">
              <li v-if="hasRoute('Listar Despesas')"><router-link to="/adddespesa">Registrar</router-link></li>
              <li v-if="hasRoute('Listar Despesas')"><router-link to="/listardespesas">Listar</router-link></li>
            </ul>
          </li>
          <li v-if="hasRoute('Listar Servicos')">
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-heart"></i>
              <span class="nav-text">Servicos</span>
            </a>
            <ul aria-expanded="false">
              <li v-if="hasRoute('Listar Servicos')"><router-link to="/addservico">Registrar</router-link></li>
              <li v-if="hasRoute('Listar Servicos')"><router-link to="/listarservicos">Listar</router-link></li>
            </ul>
          </li>
          <li v-if="hasRoute('Listar Analises')">
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-notepad"></i>
              <span class="nav-text">Relatorios</span>
            </a>
            <ul aria-expanded="false">
              <!-- <li><a href="javascript:;">Mensal</a></li>
              <li><a href="javascript:;">Anual</a></li> -->
              <li><router-link to="/relatorios" href="javascript:;">Analises</router-link></li>
            </ul>
          </li>
          <li v-if="hasRoute('Listar Analises')">
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
             <i class="flaticon-381-layer-1"></i>
              <span class="nav-text">Usuarios</span>
            </a>
            <ul aria-expanded="false">
              <li><router-link to="/addusuario" href="javascript:;">Registrar</router-link></li>
              <li><router-link to="/listarusuarios" href="javascript:;">Listar</router-link></li>
            </ul>
          </li>
          <!-- <li>
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-network"></i>
              <span class="nav-text">Comunicados</span>
            </a>
            <ul aria-expanded="false">
              <li><a href="javascript:;">Registrar</a></li>
              <li><a href="javascript:;">Gerir</a></li>
            </ul>
          </li> -->
        </ul>

        <div class="copyright">
          <p><strong>Mentor</strong> © 2023</p>
        </div>
      </div>
    </div>
    <!--**********************************
            Sidebar end
        ***********************************-->
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  computed: {
    filteredRoutes() {
      try {
        // const isAuthenticated = localStorage.getItem("token");
        // const userRole = localStorage.getItem("role");
        const isAuthenticated = Cookies.get("token"); // Retrieve token from cookie
        const userRole = Cookies.get("role"); // Retrieve role from cookie
        // Filter routes based on authentication and user role
        const routes = this.$router.options.routes;
        const filteredRoutes = routes.filter((route) => {
          if (route.meta && route.meta.requiresAuth && !isAuthenticated) {
            return false;
          }
          if (
            route.meta &&
            route.meta.roles &&
            !route.meta.roles.includes(userRole)
          ) {
            return false;
          }
          return true;
        });
        return filteredRoutes;
      } catch (error) {
        console.error("Error in filteredRoutes:", error);
        return [];
      }
    },
  },
  methods: {
    hasRoute(routeName) {
      const hasRoute = this.filteredRoutes.some(
        (route) => route.name === routeName
      );
      return hasRoute;
    },
  },
};
</script>