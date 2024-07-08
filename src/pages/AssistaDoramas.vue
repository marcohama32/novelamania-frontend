<template>
  <div>
    <!-- breadcrumb-area -->
    <section
      class="breadcrumb-area breadcrumb-bg"
      loading="lazy"
      data-background="img/bg/breadcrumb_bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">Todos <span>Doramas</span></h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Doramas
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!-- movie-area -->
    <section class="movie-area movie-bg" data-background="img/bg/movie_bg.jpg">
      <div class="container">
        <div class="row align-items-end mb-60">
          <div class="col-lg-6">
            <div class="section-title text-center text-lg-left">
              <span class="sub-title">TRANSMISSÃO ON-LINE</span>
              <h2 class="title">Nossos Doramas</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="movie-page-meta">
              <div class="tr-movie-menu-active text-center">
                <form @submit.prevent="applyFilter">
                  <input
                    class="searchInput"
                    type="text"
                    v-model="searchTerm"
                    placeholder="Pesquisar..."
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-if="loading" class="spinner-container">
            <div class="spinner"></div>
          </div>
          <div v-else class="row tr-movie-active">
            <div
              v-for="novel in novels"
              :key="novel._id"
              class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div class="movie-item movie-item-three mb-50">
                <div class="movie-poster">
                  <img
                    :src="getAvatarUrl(novel.image_url)"
                    :alt="novel.title"
                  />
                  <ul class="overlay-btn">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>

                    <li>
                      <router-link :to="`/detalhe-novela/${novel._id}`">
                        <a
                          href=""
                          class="btn"
                          @click.prevent="handleWatchClick(novel._id)"
                          :class="{ 'btn-loading': loading }"
                        >
                          <span v-if="!loading">Assistir</span>
                          <span v-else>Processando...</span>
                        </a>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="movie-content">
                  <div class="top">
                    <h5 class="title">
                      <a href="#">{{ novel.title }}</a>
                    </h5>
                    <span class="date">{{
                      formatDate(novel.release_year)
                    }}</span>
                  </div>
                  <div class="bottom">
                    <ul>
                      <li><span class="quality">hd</span></li>
                      <li>
                        <span class="rating"
                          ><i class="fa fa-eye"></i> {{ novel.views }} K</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="pagination-wrap mt-30">
              <nav>
                <ul>
                  <li>
                    <a
                      @click="previousPage"
                      :class="{ disabled: !hasPreviousPage }"
                      >Anterior</a
                    >
                  </li>
                  <li
                    v-for="page in totalPages"
                    :key="page"
                    :class="{ active: isActivePage(page) }"
                  >
                    <a @click="goToPage(page)">{{ page }}</a>
                  </li>
                  <li>
                    <a @click="nextPage" :class="{ disabled: !hasNextPage }"
                      >Seguinte</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- movie-area-end -->
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { checkToken } from "../utils/authUtils.js"; // Caminho para o arquivo de utilitário


export default {
  data() {
    return {
      novels: [],
      shapeBg: "img/bg/ucm_bg_shape.png",
      loading: false,
      currentPage: 1,
      pageSize: 8,
      searchTerm: "",
      startDate: null,
      endDate: null,
      count: 0,
      totalPages: 1,
      firstEntryIndex: 0,
      lastEntryIndex: 0,
      itemsPerPage: 8,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;

      const cacheExpiration = 5 * 60 * 60 * 1000; // 5 horas em milissegundos
      const currentTime = new Date().getTime();

      const cachedDoramas = localStorage.getItem("doramas");
      const cachedNovels = localStorage.getItem("novels");
      const cachedRecentContents = localStorage.getItem("recentContents");
      const cachedTopViewedContents = localStorage.getItem("topViewedContents");

      const isCacheValid = (cachedData) => {
        if (cachedData) {
          const { timestamp } = JSON.parse(cachedData);
          return currentTime - timestamp < cacheExpiration;
        }
        return false;
      };

      // Verifica se todos os caches são válidos
      const allCacheValid =
        isCacheValid(cachedDoramas) &&
        isCacheValid(cachedNovels) &&
        isCacheValid(cachedRecentContents) &&
        isCacheValid(cachedTopViewedContents);

      if (allCacheValid) {
        // console.log("Cache válido. Carregando dados do cache.");

        this.novels = JSON.parse(cachedDoramas).content;
        this.otherData = JSON.parse(cachedNovels).content;
        this.recentContents = JSON.parse(cachedRecentContents).content;
        this.topViewedContents = JSON.parse(cachedTopViewedContents).content;

        this.loading = false;
        return;
      }

      try {
        const token = Cookies.get("token");

        const queryParams = {
          page: this.currentPage,
          pageSize: this.pageSize,
          searchTerm: this.searchTerm,
        };

        // Faz múltiplas requisições simultâneas
        const [doramasResponse, novelsResponse, recentAndTopViewedResponse] =
          await Promise.all([
            axios.get("/api/content/getonlydoramas", {
              headers: { token },
              params: queryParams,
            }),
            axios.get("/api/content/getonlynovels", {
              headers: { token },
              params: queryParams,
            }),
            axios.get("/api/content/getrecentandtopview", {
              headers: { token },
              params: queryParams,
            }),
          ]);

        // Processa as respostas
        const doramasData = doramasResponse.data.doramas;
        const novelsData = novelsResponse.data.novels;
        const recentContents = recentAndTopViewedResponse.data.recentContents;
        const topViewedContents =
          recentAndTopViewedResponse.data.topViewedContents;

        // Obtém o cabeçalho de data da resposta
        const dateHeader =
          doramasResponse.headers.date ||
          novelsResponse.headers.date ||
          recentAndTopViewedResponse.headers.date;

        let serverTime = currentTime; // Use currentTime as fallback

        if (dateHeader) {
          serverTime = new Date(dateHeader).getTime();
          if (isNaN(serverTime)) {
            console.warn(
              "Falha ao converter o cabeçalho de data em um timestamp válido. Usando currentTime como fallback."
            );
            serverTime = currentTime;
          }
        } else {
          console.warn(
            "Nenhum cabeçalho de data encontrado nas respostas. Usando currentTime como timestamp."
          );
        }

        // Armazena os dados no localStorage
        const cacheData = (key, content) => {
          const dataToCache = { content, timestamp: serverTime };
          console.log(`Armazenando cache para ${key}:`, dataToCache);
          localStorage.setItem(key, JSON.stringify(dataToCache));
        };

        cacheData("doramas", doramasData);
        cacheData("novels", novelsData);
        cacheData("recentContents", recentContents);
        cacheData("topViewedContents", topViewedContents);

        // Atualiza os estados com os dados recebidos
        this.novels = doramasData;
        this.otherData = novelsData;
        this.recentContents = recentContents;
        this.topViewedContents = topViewedContents;

        this.count = doramasResponse.data.total;
        this.totalPages = Math.ceil(this.count / this.pageSize);
        this.firstEntryIndex = (this.currentPage - 1) * this.pageSize + 1;
        this.lastEntryIndex = Math.min(
          this.currentPage * this.pageSize,
          this.count
        );

        // console.log("Dados carregados do servidor.");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: "Erro ao buscar dados. Por favor, tente novamente.",
          timer: 6000,
          showConfirmButton: false,
          position: "top-end",
        });
      } finally {
        this.loading = false;
      }
    },

    async search() {
      this.loading = false;
      try {
        const token = Cookies.get("token");

        const queryParams = {
          page: this.currentPage,
          pageSize: this.pageSize,
          searchTerm: this.searchTerm,
        };

        if (this.startDate && this.endDate) {
          queryParams.startDate = this.startDate;
          queryParams.endDate = this.endDate;
        }

        const response = await axios.get("/api/content/getonlydoramas", {
          headers: { token },
          params: queryParams,
        });

        this.novels = response.data.doramas;

        this.count = response.data.total;
        this.totalPages = Math.ceil(this.count / this.pageSize);
        this.firstEntryIndex = (this.currentPage - 1) * this.pageSize + 1;
        this.lastEntryIndex = Math.min(
          this.currentPage * this.pageSize,
          this.count
        );
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        this.loading = false;
      }
    },

    async handleWatchClick(novelId) {
      const token = Cookies.get("token");

      if (!token) {
        Swal.fire({
          icon: "info",
          title: "Alerta!",
          toast: true,
          text: "Faça login para acessar seu conteúdo favorito; se ainda não tem uma conta, entre em contato conosco.",
          timer: 8000,
          showConfirmButton: true,
          position: "top-end",
        });
        return;
      }

      try {
        this.loading = true;
        const response = await axios.get("api/validate/subscription", {
          headers: { token },
        });

        // Considerar status 200 como sucesso
        if (response.status === 200 || response.status === 204) {
          console.log("Token e subscrição válidos");
          // Redirecionar para a página de detalhes da novela usando novelId
          this.$router.push(`/detalhe-novela/${novelId}`);
        } else {
          Swal.fire({
            icon: "info",
            title: "Alerta!",
            toast: true,
            text: "Contacte o administrador para assinar um pacote.",
            timer: 6000,
            showConfirmButton: false,
            position: "top-end",
          });
        }
      } catch (error) {
        console.error("Erro ao verificar token:", error);
        Swal.fire({
          icon: "info",
          title: "Alerta!",
          toast: true,
          text:
            error.response?.data?.error ||
            "Erro ao verificar token. Por favor, faça login novamente.",
          timer: 6000,
          showConfirmButton: false,
          position: "top-end",
        });
        this.loading = false;
      }
    },

    isActivePage(page) {
      return page === this.currentPage;
    },
    getImageUrl(imageUrl) {
      return imageUrl ? imageUrl.replace(/\\/g, "/") : "";
    },
    getAvatarUrl(imageUrl) {
      return imageUrl
        ? `${axios.defaults.baseURL}/${this.getImageUrl(imageUrl)}`
        : "";
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getFullYear()}`;
    },

    clearUserData() {
      Cookies.remove("token");
      Cookies.remove("role");
      sessionStorage.removeItem("visitedBefore");
    },
    applyFilter() {
      this.currentPage = 1;
      this.search();
    },
    refresh() {
      (this.startDate = null),
        (this.endDate = null),
        (this.searchTerm = null),
        this.fetchData();
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this.fetchData();
      }
    },
    async changePageSize() {
      this.currentPage = 1;
      this.itemsPerPage = this.pageSize;
      await this.fetchData();
    },
    // async checkToken() {
    //   const TOKEN_COOKIE = "token";
    //   const ROLE_COOKIE = "role";

    //   const token = Cookies.get(TOKEN_COOKIE);

    //   if (token) {
    //     try {
    //       const response = await axios.get("/api/check/verify-token", {
    //         headers: { token },
    //       });

    //       if (response.data.message !== "Token is valid") {
    //         console.error("Token inválido:", response.data.message);

    //         // Limpa o cache do perfil do usuário
    //         localStorage.removeItem("userProfile");

    //         // Faz a requisição para o endpoint de logout
    //         await axios.get("/api/logout", {
    //           headers: { token },
    //         });

    //         // Remove os cookies
    //         Cookies.remove(TOKEN_COOKIE);
    //         Cookies.remove(ROLE_COOKIE);

    //         // Recarrega a página para aplicar as mudanças
    //         window.location.reload();
    //       }
    //     } catch (error) {
    //       console.error("Erro ao verificar o token:", error);
    //     }
    //   } else {
    //     // Token não existe
    //     // console.log("Token não existe");
    //   }
    // },

    async checkToken() {
      // Exemplo de uso
      await checkToken();
    },
  },
  computed: {
    hasPreviousPage() {
      return this.currentPage > 1;
    },
    hasNextPage() {
      return this.currentPage < this.totalPages;
    },
  },
  watch: {
    currentPage: "search",
    pageSize: "search",
    searchTerm(val) {
      if (val === "") {
        this.searchTerm = this.defaultSearchTerm; // Definir searchTerm para o defaultSearchTerm se estiver vazio
        this.search(); // Chamar fetchData para buscar dados com o defaultSearchTerm
      } else {
        this.applyFilter(); // Chamar applyFilter para buscar dados com o novo searchTerm
      }
    },
  },
  created() {
    this.fetchData();
    this.checkToken();
  },
  mounted() {
    $(".tr-movie-menu-active button").click(function () {
      const filterValue = $(this).attr("data-filter");
      $(".tr-movie-active .grid-item").hide();
      $(".tr-movie-active").find(filterValue).show();
      $(".tr-movie-menu-active button").removeClass("active");
      $(this).addClass("active");
    });
  },
};
</script>
<style>
.movie-area {
  background-image: url("./../../public/img/bg/movie_bg.jpg");
  background-size: cover;
  background-position: center;
}
.breadcrumb-area {
  background-image: url("./../../public/img/bg/breadcrumb_bg.jpg");
  background-size: cover;
  background-position: center;
}
.pagination-wrap a {
  cursor: pointer;
}

.pagination-wrap a.disabled {
  cursor: not-allowed;
}

.searchInput {
  width: auto;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  background: 0 0;
  color: #fff;
  padding: 0 85px 12px 40px;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Altura total da viewport */
}

.spinner {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #f5f854; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
