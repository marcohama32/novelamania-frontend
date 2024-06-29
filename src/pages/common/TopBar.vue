<template>
  <div>
    <!-- header-area -->
    <header>
      <div id="sticky-header" class="menu-area transparent-header">
        <div class="container custom-container">
          <div class="row">
            <div class="col-12">
              <div class="mobile-nav-toggler" @click="toggleMobileMenu">
                <i class="fas fa-bars"></i>
              </div>
              <div class="menu-wrap">
                <nav class="menu-nav show">
                  <div class="logo">
                    <router-link to="/">
                      <img src="/img/logo/logo.png" alt="Logo" />
                    </router-link>
                  </div>
                  <div class="navbar-wrap main-menu d-none d-lg-flex">
                    <ul class="navigation">
                      <li :class="{ active: isActiveRoute('/') }">
                        <router-link to="/">Home</router-link>
                      </li>
                      <!-- <li :class="{ active: isActiveRoute('/movie') }" class="menu-item-has-children">
                        <router-link to="#">Movie</router-link>
                        <ul class="submenu">
                          <li :class="{ active: isActiveRoute('/movie.html') }">
                            <router-link to="/movie.html">Movie</router-link>
                          </li>
                          <li :class="{ active: isActiveRoute('/movie-details.html') }">
                            <router-link to="/movie-details.html">Movie Details</router-link>
                          </li>
                        </ul>
                      </li> -->
                      <li :class="{ active: isActiveRoute('/tv-show') }">
                        <router-link to="/novelas">Novelas</router-link>
                      </li>
                      <li :class="{ active: isActiveRoute('/tv-show') }">
                        <router-link to="/doramas">Doramas</router-link>
                      </li>
                      <!-- <li :class="{ active: isActiveRoute('/pricing') }">
                        <router-link to="/livros">Livros</router-link>
                      </li> -->
                      <li :class="{ active: isActiveRoute('/pricing') }">
                        <router-link to="/pacotes">Pacotes</router-link>
                      </li>
                      <!-- <li
                        :class="{ active: isActiveRoute('/blog') }"
                        class="menu-item-has-children"
                      >
                        <router-link to="#">Blog</router-link>
                        <ul class="submenu">
                          <li :class="{ active: isActiveRoute('/blog.html') }">
                            <router-link to="/blog.html">Blog</router-link>
                          </li>
                          <li
                            :class="{
                              active: isActiveRoute('/blog-details.html'),
                            }"
                          >
                            <router-link to="/blog-details.html"
                              >Blog Details</router-link
                            >
                          </li>
                        </ul>
                      </li> -->
                      <li :class="{ active: isActiveRoute('/contact') }">
                        <router-link to="/contactos">Contactos</router-link>
                      </li>
                    </ul>
                  </div>

                  <div class="header-action d-none d-md-block">
                    <ul>
                      <!-- <li class="header-search">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#search-modal"
                        >
                          <i class="fas fa-search"></i>
                        </a>
                      </li> -->
                      <!-- Mostra o botão de login apenas se o usuário não estiver logado -->
                      <div v-if="!isLoggedIn">
                        <li
                          class="header-btn popup-video"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <router-link to="" class="btn">Entrar</router-link>
                        </li>
                      </div>

                      <!-- Mostra informações do usuário se ele estiver logado -->
                      <div class="ml-3 mr-2">
                        <div v-if="isLoggedIn">
                          <span>{{ firstName }} {{ lastName }}</span>
                        </div>
                        <div v-if="isLoggedIn">
                          <span class="mr-2"
                            >{{ daysRemaining }} dias restantes</span
                          >
                        </div>
                      </div>

                      <li class="header-btn" v-if="isLoggedIn">
                        <a to="/login" class="btn" @click="logout">Sair</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <!-- Mobile Menu  -->
              <div class="mobile-menu">
                <div class="close-btn" @click="closeMobileMenu">
                  <i class="fas fa-times"></i>
                </div>

                <nav class="menu-box">
                  <div class="nav-logo">
                    <router-link to="/">
                      <img src="img/logo/logo.png" alt="" title="" />
                    </router-link>
                  </div>
                  <ul class="navigation">
                    <!-- <li
                      :class="{ active: isActiveRoute('/') }"
                      class="menu-item-has-children"
                    >
                      <router-link to="#">Home</router-link>
                      <ul class="submenu">
                        <li :class="{ active: isActiveRoute('/index.html') }">
                          <router-link to="/index.html">Home One</router-link>
                        </li>
                        <li :class="{ active: isActiveRoute('/index-2.html') }">
                          <router-link to="/index-2.html">Home Two</router-link>
                        </li>
                      </ul>
                      <div class="dropdown-btn open">
                        <span class="fas fa-angle-down"></span>
                      </div>
                    </li> -->
                    <!-- <li :class="{ active: isActiveRoute('/movie') }" class="menu-item-has-children">
                      <router-link to="#">Movie</router-link>
                      <ul class="submenu">
                        <li :class="{ active: isActiveRoute('/movie.html') }">
                          <router-link to="/movie.html">Movie</router-link>
                        </li>
                        <li :class="{ active: isActiveRoute('/movie-details.html') }">
                          <router-link to="/movie-details.html">Movie Details</router-link>
                        </li>
                      </ul>
                      <div class="dropdown-btn open">
                        <span class="fas fa-angle-down"></span>
                      </div>
                    </li> -->
                    <li :class="{ active: isActiveRoute('/tv-show.html') }">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li :class="{ active: isActiveRoute('/tv-show.html') }">
                      <router-link to="/novelas">Novelas</router-link>
                    </li>
                    <li :class="{ active: isActiveRoute('/tv-show.html') }">
                      <router-link to="/doramas">Doramas</router-link>
                    </li>
                    <li :class="{ active: isActiveRoute('/pricing.html') }">
                      <router-link to="/pacotes">Pacotes</router-link>
                    </li>
                    <!-- <li
                      :class="{ active: isActiveRoute('/blog') }"
                      class="menu-item-has-children"
                    >
                      <router-link to="#">Blog</router-link>
                      <ul class="submenu">
                        <li :class="{ active: isActiveRoute('/blog.html') }">
                          <router-link to="/blog.html">Our Blog</router-link>
                        </li>
                        <li
                          :class="{
                            active: isActiveRoute('/blog-details.html'),
                          }"
                        >
                          <router-link to="/blog-details.html"
                            >Blog Details</router-link
                          >
                        </li>
                      </ul>
                      <div class="dropdown-btn open">
                        <span class="fas fa-angle-down"></span>
                      </div>
                    </li> -->
                    <li :class="{ active: isActiveRoute('/contact.html') }">
                      <router-link to="/contactos">Contactos</router-link>
                    </li>
                  </ul>

                  <div class="social-links">
                    <div v-if="!isLoggedIn">
                      <li
                        class="header-btn popup-video"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <router-link to="" class="btn">Entrar</router-link>
                      </li>
                    </div>
                    <div class="mb-3" v-if="isLoggedIn">
                      {{ firstName }} {{ lastName }}
                    </div>
                    <span class="mr-2" v-if="isLoggedIn"
                      >{{ daysRemaining }} dias restantes</span
                    >

                    <li class="header-btn mt-3" v-if="isLoggedIn">
                      <a to="/login" class="btn" @click="logout">Sair</a>
                    </li>
                    <ul class="clearfix">
                      <!-- <li>
                        <a href="#"><span class="fab fa-twitter"></span></a>
                      </li> -->
                      <li>
                        <a href="#"
                          ><span class="fab fa-facebook-square"></span
                        ></a>
                      </li>
                      <li>
                        <a href="https://wa.me/+258863881425" target="_blank"
                          ><span class="fab fa-whatsapp-square"></span
                        ></a>
                      </li>
                      <li>
                        <a href="#"><span class="fab fa-instagram"></span></a>
                      </li>
                      <!-- <li>
                        <a href="#"><span class="fab fa-youtube"></span></a>
                      </li> -->
                    </ul>
                  </div>
                </nav>
              </div>
              <div class="menu-backdrop" @click="closeMobileMenu"></div>
              <!-- End Mobile Menu -->

              <!-- Modal Search -->
              <div
                class="modal fade"
                id="search-modal"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <form>
                      <input
                        type="text"
                        v-model="searchTerm"
                        @input="applyFilter"
                        placeholder="Pesquisar..."
                      />
                      <button>
                        <i class="fas fa-search" @click="applyFilterDate"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <!-- Modal Search-end -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header-area-end -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      ref="loginModal"
    >
      <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="video-container">
              <form @submit.prevent="onLogin">
                <div class="form-row mt-3">
                  <div class="col-md-12 mb-3">
                    <label for="validationDefault01">Contacto</label>
                    <input
                      v-model="contact1"
                      type="text"
                      class="form-control"
                      id="validationDefault01"
                      placeholder="Insira contacto"
                    />
                  </div>
                </div>
                <div class="form-row mt-2">
                  <div class="col-md-12 mb-3">
                    <label for="validationDefault03">Senha</label>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="validationDefault03"
                      placeholder="senha"
                    />
                  </div>
                </div>
                <div class="float-left">

                  <button
                    type="submit"
                    class="btn btn-gradient-primary mr-2"
                    v-if="!btnloading"
                  >
                    Entrar
                  </button>
                  <button
                    type="button"
                    class="btn btn-gradient-primary mr-2"
                    disabled
                    v-if="btnloading"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Logando...
                  </button>

                  <!-- <button
                    class="btn btn-primary mt-2"
                    type="submit"
                    :disabled="btnLoading"
                  >
                    Entrar
                  </button> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of modal -->
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
export default {
  data() {
    return {
      showMobileMenu: false,
      contact1: null,
      password: null,
      firstName: "",
      lastName: "",
      role: "",
      ogv: null,

      firstEntryIndex: 0,
      lastEntryIndex: 0,
      searchTerm: "",

      loading: false,
      btnloading: false,
      errors: {},
      userID: "",
      notifications: [], // Array to hold notifications
      showNotificationsDropdown: false, // Control the visibility of the dropdown
      isLoggedIn: false, // Variável para controlar o estado de login
      daysRemaining: "",
    };
  },
  computed: {
    reversedNotifications() {
      // Reverse the order of notifications
      return this.notifications.slice().reverse();
    },
    currentRouteName() {
      return this.$route.name;
    },
    filteredRoutes() {
      try {
        const isAuthenticated = Cookies.get("token");
        const userRole = Cookies.get("role");

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
  // watch: {
  //   currentPage: "fetchData",
  //   pageSize: "fetchData",
  //   searchTerm: "fetchData",
  // },
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route;
    },
    toggleMobileMenu() {
      console.log("toggleMobileMenu called");
      this.showMobileMenu = !this.showMobileMenu; // Alterna entre abrir e fechar o menu móvel
    },
    closeMobileMenu() {
      console.log("closeMobileMenu called");
      this.showMobileMenu = false; // Fecha o menu móvel
    },

    async onLogin() {
      this.btnLoading = true;
      // Verificar se ambos os campos de contacto e senha estão vazios
      if (!this.contact1 || !this.password) {
        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: "Contacto e senha são obrigatórios.",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
        });
        return;
      }

      // Validar o campo de contacto
      if (!/^258\d{9}$/.test(this.contact1)) {
        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: "O contacto deve iniciar com 258 e ter 12 dígitos.",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
        });
        return;
      }

      try {
        this.loading = true;
        this.btnloading = true;

        const user = {
          contact1: this.contact1,
          password: this.password,
        };

        // Certifique-se de que axios está configurado corretamente
        const res = await axios.post("/api/signin", user);

        if (res.status === 200) {
          Cookies.set("token", res.data.token, { expires: 7 });
          Cookies.set("role", res.data.role, { expires: 7 });
          this.isLoggedIn = true; // Atualizar o estado de login

          // this.$emit("loginSuccess");
          // this.$router.push("/");
          location.reload();
        }
      } catch (error) {
        console.error("Erro na requisição:", error); // Log para depuração

        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          this.errors = { username: [error.response.data.error] };
          Swal.fire({
            icon: "warning",
            title: "Aviso!",
            toast: true,
            text: this.errors.username,
            timer: 3000,
            showConfirmButton: false,
            position: "top-end",
          });
        } else {
          // Exibir uma mensagem de erro genérica para erros inesperados
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente mais tarde.",
          });
        }
      } finally {
        this.loading = false;
        this.btnloading = false;
      }
    },

    // async onLogin() {
    //   // Verificar se ambos os campos de contacto e senha estão vazios
    //   if (!this.contact1 || !this.password) {
    //     Swal.fire({
    //       icon: "warning",
    //       title: "Aviso!",
    //       toast: true,
    //       text: "Contacto e senha são obrigatórios.",
    //       timer: 3000,
    //       showConfirmButton: false,
    //       position: "top-end",
    //     });
    //     return;
    //   }

    //   try {
    //     this.loading = true;
    //     this.btnLoading = true;

    //     const user = {
    //       contact1: this.contact1, // Supondo que 'contact1' é o campo de email ou username
    //       password: this.password,
    //     };

    //     // Certifique-se de que axios está configurado corretamente
    //     const res = await axios.post("/api/signin", user);

    //     if (res.status === 200) {
    //       Cookies.set("token", res.data.token, { expires: 7 });
    //       Cookies.set("role", res.data.role, { expires: 7 });
    //       this.isLoggedIn = true; // Atualizar o estado de login

    //       this.$emit("loginSuccess");
    //       // this.$router.push("/");
    //       location.reload();
    //     }
    //   } catch (error) {
    //     console.error("Erro na requisição:", error); // Log para depuração

    //     if (
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.error
    //     ) {
    //       this.errors = { username: [error.response.data.error] };
    //       Swal.fire({
    //         icon: "warning",
    //         title: "Aviso!",
    //         toast: true,
    //         text: this.errors.username,
    //         timer: 3000,
    //         showConfirmButton: false,
    //         position: "top-end",
    //       });
    //     } else {
    //       // Exibir uma mensagem de erro genérica para erros inesperados
    //       Swal.fire({
    //         icon: "error",
    //         title: "Erro!",
    //         text: "Um erro ocorreu. Por favor, tente novamente mais tarde.",
    //       });
    //     }
    //   } finally {
    //     this.loading = false;
    //     this.btnLoading = false;
    //   }
    // },
    async profile() {
      try {
        this.loading = true;

        const token = Cookies.get("token");

        const response = await axios.get("/api/user/userprofile", {
          headers: {
            token: token,
          },
        });

        if (response && response.data && response.data.user) {
          const profile = response.data.user;
          this.firstName = profile.firstName;
          this.lastName = profile.lastName;
          this.daysRemaining = profile.subscription.daysRemaining; // Corrigido para 'subscription'

          this.role = profile.role;
        } else {
          console.error("Erro ao obter perfil de usuário");
        }
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      } finally {
        this.loading = false;
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString); // Create a Date object from the ISO 8601 date string
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1 and pad with '0' if needed
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`; // Return the formatted date as a string
    },
    getStatusClass(status) {
      if (status === "Active") {
        return "text-success";
      } else if (status === "Inactive") {
        return "text-danger";
      } else {
        return ""; // Default class if no match
      }
    },
    async logout() {
      try {
        // Remove os dados da sessionStorage
        sessionStorage.removeItem("visitedBefore");

        const token = Cookies.get("token");

        // Faz a requisição para o endpoint de logout
        const response = await axios.get("/api/logout", {
          headers: { token },
        });

        if (response.status !== 200) {
          throw new Error("Falha ao efetuar logout");
        }
      } catch (error) {
        console.error("Erro ao fazer logout:", error);

        // Tratamento de erro específico para diferentes tipos de erro
        if (error.response?.data?.error) {
          // Exibe mensagem de aviso usando Swal (SweetAlert)
          Swal.fire({
            icon: "warning",
            title: "Aviso!",
            toast: true,
            text: error.response.data.error,
            timer: 3000,
            showConfirmButton: false,
            position: "top-end",
          });
        } else {
          // Exibe mensagem de erro genérica
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Um erro ocorreu. Por favor, tente novamente mais tarde.",
          });
        }
      } finally {
        // Remove os cookies
        Cookies.remove("token");
        Cookies.remove("role");

        // Redireciona o usuário para a página inicial usando window.location
        window.location.replace("/");
      }
    },
    getAvatarUrl() {
      if (this.avatar) {
        // Use the configured base URL and ensure forward slashes in the avatar path
        return `${axios.defaults.baseURL}/${this.avatar.replace(/\\/g, "/")}`;
      }
      // Use an absolute path or root-relative path for the default image URL
      return `${axios.defaults.baseURL}/path/to/default/image/logow.png`; // Replace with your default image path
    },
    hasRoute(routeName) {
      const hasRoute = this.filteredRoutes.some(
        (route) => route.name === routeName
      );
      return hasRoute;
    },
  },
  created() {
    const token = Cookies.get("token");
    if (token) {
      this.profile();
      this.isLoggedIn = true;
    }
  },
  mounted() {
    // Código JavaScript para o menu móvel
    if ($(".mobile-menu").length) {
      $(".mobile-menu .menu-box .menu-outer").append(
        $(".menu-area .main-menu").html()
      );

      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );

      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  },
};
</script>
<style>
/* Estilo personalizado para a modal */
.modal-content {
  background-color: rgba(0, 0, 0, 0.8); /* Fundo preto transparente */
  border: none;
}

.modal-header,
.modal-footer {
  border: none;
}

.modal-header .close {
  color: white;
}

.modal-title {
  color: white;
}
</style>
