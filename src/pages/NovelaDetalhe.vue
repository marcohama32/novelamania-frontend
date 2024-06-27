<template>
  <div>
     <!-- preloader -->
     <div v-if="loading" id="preloader">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <img src="img/preloader.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- preloader-end -->
    <section
      class="movie-details-area"
      data-background="img/bg/movie_details_bg.jpg"
    >
      <div class="container">
        <div class="row align-items-center position-relative">
          <div class="col-xl-3 col-lg-4">
            <div class="movie-details-img">
              <img
                :src="getAvatarUrl(this.image_url)"
                :alt="this.title"
                class="img-resize"
              />
              <a
                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                class="popup-video"
                ><img src="img/images/play_icon.png" alt=""
              /></a>
            </div>
          </div>

          <div class="col-xl-6 col-lg-8">
            <div class="movie-details-content">
              <h5>Novos Episódios</h5>
              <h2>{{ this.NovelTitle }}</h2>
              <div class="banner-meta">
                <ul>
                  <li class="quality">
                    <span>Pg 18</span>
                    <span>hd</span>
                  </li>
                  <li class="category">
                    <!-- {{ this.genres }} -->
                  </li>
                  <li class="release-time">
                    <span
                      ><i class="far fa-calendar-alt"></i>
                      {{ formatDate(this.release_year) }}</span
                    >
                  </li>
                </ul>
              </div>
              <p class="text-justify">
                {{ this.description }}
              </p>
              <div class="movie-details-prime">
                <ul>
                  <li class="share">
                    <a href="#"><i class="fas fa-share-alt"></i> Share</a>
                  </li>
                  <li class="streaming">
                    <h6>Prime Video</h6>
                    <span>Streaming Channels</span>
                  </li>
                  <li class="watch">
                    <a href="#" class="btn popup-video"
                      ><i class="fas fa-play"></i> Watch Now</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- movie-details-area-end -->

    <!-- episode-area -->
    <section
      class="episode-area episode-bg"
      data-background="img/bg/episode_bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="movie-episode-wrap">
              <div class="episode-top-wrap">
                <div class="section-title">
                  <span class="sub-title">TRANSMISSÃO ON-LINE</span>
                  <h2 class="title">Assista todos episódios</h2>
                </div>
                <div class="total-views-count">
                  <!-- <p>2.7 million <i class="far fa-eye"></i></p> -->
                </div>
              </div>
              <div class="episode-watch-wrap">
                <div class="accordion" id="accordionExample">
                  <div
                    v-for="(season, index) in seasons"
                    :key="index"
                    class="card"
                  >
                    <div class="card-header" :id="'heading' + index">
                      <button
                        class="btn-block text-left"
                        type="button"
                        :data-toggle="'#collapse' + index"
                        :aria-expanded="index === 0 ? 'true' : 'false'"
                        :aria-controls="'collapse' + index"
                        @click="toggleAccordion(index)"
                      >
                        <span class="season">Temporada {{ index + 1 }}</span>
                        <span class="video-count"
                          >Episódios: {{ season.episodes.length }}</span
                        >
                      </button>
                    </div>
                    <div
                      :id="'collapse' + index"
                      class="collapse"
                      :class="{ show: index === activeAccordion }"
                      :aria-labelledby="'heading' + index"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <ul>
                          <li
                            v-for="(episode, eIndex) in season.episodes"
                            :key="eIndex"
                          >
                            <!-- eslint-disable-next-line -->
                            <a
                              href="#"
                              class="popup-video"
                              data-toggle="modal"
                              data-target="#exampleModalCenter1"
                              @click="setVideoUrl(episode.video_url)"
                            >
                              <i class="fas fa-play"></i> Episode
                              {{ eIndex + 1 }} - {{ episode.title }}
                            </a>
                            <span class="duration">
                              <i class="far fa-clock"></i>
                              {{ episode.duration }} Min
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="episode-img">
              <img src="img/images/episode_img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- episode-area-end -->

    <!-- tv-series-area -->

    <!-- Modal -->
    <!-- eslint-disable-next-line -->
    <div
      class="modal fade"
      id="exampleModalCenter1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="video-container">
              <iframe
                :src="currentVideoUrl"
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="hideModal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import Cookies from "js-cookie";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  data() {
    return {
      novels: [],
      seasons: [],
      activeAccordion: 0, // Indica qual accordion está ativo inicialmente
      NovelTitle: "",
      description: "",
      release_year: "",
      genres: "",
      image_url: "",
      currentVideoUrl: "",

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
      try {
        const token = Cookies.get("token");
        const id = this.$route.params.id;

        const response = await axios.get(`/api/novel/getbyid/${id}`, {
          headers: { token },
        });

        this.novels = response.data.content;
        this.NovelTitle = this.novels.title;
        this.description = this.novels.description;
        this.release_year = this.novels.release_year;
        this.genres = this.novels.genres;
        this.image_url = this.novels.image_url;

        this.seasons = response.data.content.seasons;

        console.log("Dados buscados com sucesso:", response.data.content.title);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        let errorMessage = "Erro ao buscar dados. Por favor, tente novamente.";

        // Verifica se a resposta de erro contém error definido
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          errorMessage = error.response.data.error;
        }

        Swal.fire({
          icon: "warning",
          title: "Aviso!",
          toast: true,
          text: errorMessage,
          timer: 6000,
          showConfirmButton: false,
          position: "top-end",
        });
      } finally {
        this.loading = false;
      }
    },
    hideModal() {
      this.currentVideoUrl = "";
    },
    setVideoUrl(videoUrl) {
      this.currentVideoUrl = videoUrl;
    },
    resetVideoUrl() {
      this.currentVideoUrl = "";
    },
    toggleAccordion(index) {
      // Método para alternar o accordion
      if (this.activeAccordion === index) {
        this.activeAccordion = -1; // Fecha o accordion se já estiver aberto
      } else {
        this.activeAccordion = index; // Abre o accordion clicado
      }
    },
    getHeadingId(index) {
      // Retorna o ID correto para o heading baseado no índice
      const headings = [
        "headingOne",
        "headingTwo",
        "headingThree",
        "headingFour",
        "headingFive",
      ]; // Exemplo de array de IDs desejados
      return headings[index] || ""; // Retorna o ID correspondente ao índice, ou uma string vazia se o índice estiver fora do alcance
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
    async checkToken() {
      const TOKEN_COOKIE = "token";

      const token = Cookies.get(TOKEN_COOKIE);

      if (token) {
        try {
          const response = await axios.get("/api/check/verify-token", {
            headers: { token },
          });

          if (response.data.message !== "Token is valid") {
            alert("Token invalido imprimido");
            await axios.get("/api/logout");
            Cookies.remove(TOKEN_COOKIE);
            Cookies.remove("role"); // Mantive a remoção do cookie "role" se existir
            window.location.reload();
          }
        } catch (error) {
          console.error("Erro ao verificar o token:", error);
        }
      } else {
        console.log("Token não existe");
      }
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
    currentPage: "fetchData",
    pageSize: "fetchData",
    searchTerm: "fetchData",
  },
  created() {
    this.checkToken();
    this.fetchData();
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
.movie-details-area {
  background-image: url("./../../public/img/bg/movie_details_bg.jpg");
  background-size: cover;
  background-position: center;
}
.episode-area {
  background-image: url("./../../public/img/bg/episode_bg.jpg");
  background-size: cover;
  background-position: center;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0;
  overflow: hidden;
  width: 100%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

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

.img-resize {
  width: 100%; /* Largura desejada */
  height: 380px; /* Altura ajustável para manter a proporção */
  object-fit: cover;
}
</style>
