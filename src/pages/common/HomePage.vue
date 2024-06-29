<template>
  <div>
    <!-- preloader -->
    <!-- <div v-if="loading" id="preloader">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <img src="img/preloader.svg" alt="" />
        </div>
      </div>
    </div> -->
    <!-- preloader-end -->

    <section
      class="banner-area banner-bg"
      data-background="img/banner/banner_bg01.jpg"
    >
      <div class="container custom-container">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="banner-content">
              <h6
                class="sub-title wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration="1.8s"
              >
                NovelaMania
              </h6>

              <h2
                class="title wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1.8s"
              >
                Novelas, <span>Series</span>, Doramas, & muito mais.
              </h2>

              <div
                class="banner-meta wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1.8s"
              >
                <ul>
                  <li class="quality">
                    <span>Pg 18</span>
                    <span>hd</span>
                  </li>
                  <li class="category">
                    <a href="#">Romance,</a>
                    <a href="#">Drama</a>
                  </li>
                  <li class="release-time">
                    <!-- <span><i class="far fa-calendar-alt"></i> 2021</span>
                    <span><i class="far fa-clock"></i> 128 min</span> -->
                  </li>
                </ul>
              </div>
              <router-link
                class="banner-btn btn popup-video wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1.8s"
                to="/novelas"
                ><i class="fas fa-play"></i> Assistir</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- banner-area-end -->

    <!-- up-coming-movie-area -->
    <section class="ucm-area ucm-bg" data-background="img/bg/ucm_bg.jpg">
      <div class="ucm-bg-shape" data-background="img/bg/ucm_bg_shape.png"></div>
      <div class="container">
        <div class="row align-items-end mb-55">
          <div class="col-lg-6">
            <div class="section-title text-center text-lg-left">
              <span class="sub-title">TRANSMISSÃO ON-LINE</span>
              <h2 class="title">Novidades</h2>
            </div>
          </div>
          <!-- <div class="col-lg-6">
            <div class="ucm-nav-wrap">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="tvShow-tab"
                    data-toggle="tab"
                    href="#tvShow"
                    role="tab"
                    aria-controls="tvShow"
                    aria-selected="true"
                    >Novelas</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="movies-tab"
                    data-toggle="tab"
                    href="#movies"
                    role="tab"
                    aria-controls="movies"
                    aria-selected="false"
                    >Series</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="anime-tab"
                    data-toggle="tab"
                    href="#anime"
                    role="tab"
                    aria-controls="anime"
                    aria-selected="false"
                    >Doramas</a
                  >
                </li>
              </ul>
            </div>
          </div> -->
        </div>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="tvShow"
            role="tabpanel"
            aria-labelledby="tvShow-tab"
          >
            <div>
              <div v-if="loading" class="spinner-container">
                <div class="spinner"></div>
              </div>
              <div class="ucm-active owl-carousel">
                <div class="row">
                  <div
                    v-for="recentContent in recentContents"
                    :key="recentContent._id"
                    class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                  >
                    <div class="movie-item movie-item-three mb-50">
                      <div class="movie-poster">
                        <img
                          :src="getAvatarUrl(recentContent.image_url)"
                          :alt="recentContent.title"
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
                            <router-link
                              :to="`/detalhe-novela/${recentContent._id}`"
                            >
                              <a
                                href=""
                                class="btn"
                                @click.prevent="
                                  handleWatchClick(recentContent._id)
                                "
                              >
                                Assistir
                              </a>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="movie-content">
                        <div class="top">
                          <h5 class="title">
                            <a href="movie-details.html">{{
                              recentContent.title
                            }}</a>
                          </h5>
                          <span class="date">{{
                            formatDate(recentContent.release_year)
                          }}</span>
                        </div>
                        <div class="bottom">
                          <ul>
                            <li><span class="quality">hd</span></li>
                            <li>
                              <!-- <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      > -->
                              <span class="rating"
                                ><i class="fa fa-eye"></i>
                                {{ recentContent.views }}K</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->

                  <!-- Adicione mais colunas de filmes aqui conforme necessário -->
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="movies"
            role="tabpanel"
            aria-labelledby="movies-tab"
          >
            <div class="ucm-active owl-carousel">
              <div class="row">
                <!-- <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!--  -->
                <!-- <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!--  -->
                <!-- <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- Adicione mais colunas de filmes aqui conforme necessário -->
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="anime"
            role="tabpanel"
            aria-labelledby="anime-tab"
          >
            <!-- <div class="ucm-active owl-carousel">
              <div class="row">
                <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div class="col-md-3">
                  <div class="movie-item mb-50">
                    <div class="movie-poster">
                      <a href="movie-details.html"
                        ><img
                          src="img/poster/ucm_poster01.jpg"
                          alt="Women's Day"
                      /></a>
                    </div>
                    <div class="movie-content">
                      <div class="top">
                        <h5 class="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span class="date">2021</span>
                      </div>
                      <div class="bottom">
                        <ul>
                          <li><span class="quality">HD</span></li>
                          <li>
                            <span class="duration"
                              ><i class="far fa-clock"></i> 128 min</span
                            >
                            <span class="rating"
                              ><i class="fas fa-thumbs-up"></i> 3.5</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- up-coming-movie-area-end -->

    <!-- services-area -->
    <section
      class="services-area services-bg"
      data-background="img/bg/services_bg.jpg"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="services-img-wrap">
              <img src="img/images/services_img.jpg" alt="" />
              <!-- <a
                href="img/images/services_img.jpg"
                class="download-btn"
                download
                >Download <img src="fonts/download.svg" alt=""
              /></a> -->
            </div>
          </div>
          <div class="col-lg-6">
            <div class="services-content-wrap">
              <div class="section-title title-style-two mb-20">
                <span class="sub-title">Nossos servicos</span>
                <h2 class="title">
                  Descubra o Melhor do Entretenimento Online!
                </h2>
              </div>
              <p class="text-justify">
                Bem-vindo à NovelaMania, sua plataforma de streaming definitiva
                para novelas, séries, e doramas. Desfrute de um vasto catálogo
                com histórias emocionantes e dramas cativantes. Tudo isso com
                muita qualidade. Assine agora e mergulhe em um mundo de
                entretenimento sem fim!
              </p>
              <div class="services-list">
                <ul>
                  <li>
                    <div class="icon">
                      <i class="flaticon-television"></i>
                    </div>
                    <div class="content">
                      <h5>Aproveite na sua TV.</h5>
                      <p>
                        Assista a novelas, séries, doramas e livros direto na
                        sua TV com qualidade e conforto.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="flaticon-video-camera"></i>
                    </div>
                    <div class="content">
                      <h5>Assista a Em todos os lugares.</h5>
                      <p>
                        Curta seu conteúdo favorito onde e quando quiser, sem
                        limitações.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- services-area-end -->

    <!-- top-rated-movie -->
    <section class="top-rated-movie tr-movie-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center mb-50">
              <span class="sub-title">TRANSMISSÃO ON-LINE</span>
              <h2 class="title">Favoritas do Público</h2>
            </div>
          </div>
        </div>
        <!-- <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="tr-movie-menu-active text-center">
              <button class="active" data-filter="*">Novelas</button>
              <button class="" data-filter=".cat-one">Series</button>
              <button class="" data-filter=".cat-two">Doramas</button>
              <button class="" data-filter=".cat-three">Livros</button>
            </div>
          </div>
        </div> -->
        <div>
          <div v-if="loading" class="spinner-container">
            <div class="spinner"></div>
          </div>
          <div class="row tr-movie-active">
            <!-- <div
            v-for="topViewedContent in topViewedContents"
            :key="topViewedContent._id"
            class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
          > -->
            <div
              v-for="topViewedContent in topViewedContents"
              :key="topViewedContent._id"
              class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div class="movie-item movie-item-three mb-50">
                <div class="movie-poster">
                  <img
                    :src="getAvatarUrl(topViewedContent.image_url)"
                    :alt="topViewedContent.title"
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
                      <!-- <router-link
                            :to="`/detalhe-novela/${topViewedContent._id}`"
                          >
                            <a
                              href=""
                              class="btn"
                              @click.prevent="
                                handleWatchClick(topViewedContent._id)
                              "
                            >
                              Assistir
                            </a>
                          </router-link> -->
                      <router-link
                        :to="`/detalhe-novela/${topViewedContent._id}`"
                      >
                        <a
                          href=""
                          class="btn"
                          @click.prevent="
                            handleWatchClick(topViewedContent._id)
                          "
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
                      <a href="movie-details.html">{{
                        topViewedContent.title
                      }}</a>
                    </h5>
                    <span class="date">{{
                      formatDate(topViewedContent.release_year)
                    }}</span>
                  </div>
                  <div class="bottom">
                    <ul>
                      <li><span class="quality">hd</span></li>
                      <li>
                        <!-- <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      > -->
                        <span class="rating"
                          ><i class="fa fa-eye"></i>
                          {{ topViewedContent.views }}K</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- top-rated-movie-end -->

    <!-- live-area -->
    <section class="live-area live-bg fix" data-background="img/bg/live_bg.jpg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-6">
            <div class="section-title title-style-two mb-25">
              <span class="sub-title">TRANSMISSÃO ON-LINE</span>
              <h2 class="title">
                Filmes e Programas de TV ao Vivo para Curtir com Amigos e
                Família
              </h2>
            </div>
            <div class="live-movie-content">
              <p>
                Transforme seus momentos em memórias preciosas com nossos
                programas ao vivo, criando uma atmosfera de diversão e união
                entre amigos e familiares.
              </p>
              <div class="live-fact-wrap">
                <div class="resolution">
                  <h2>HD 4K</h2>
                </div>
                <div class="active-customer">
                  <h4>1<span class="odometer" data-count="20"></span>K+</h4>
                  <p>Usuarios activos</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                class="btn popup-video"
                ><i class="fas fa-play"></i> Assistir</a
              >
            </div>
          </div>
          <div class="col-xl-7 col-lg-6">
            <div
              class="live-movie-img wow fadeInRight"
              data-wow-delay=".2s"
              data-wow-duration="1.8s"
            >
              <img src="img/images/live_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- live-area-end -->

    <!-- tv-series-area -->
    <!-- <section
      class="tv-series-area tv-series-bg"
      data-background="img/bg/tv_series_bg.jpg"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center mb-50">
              <span class="sub-title">Best TV Series</span>
              <h2 class="title">World Best TV Series</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="movie-item mb-50">
              <div class="movie-poster">
                <a href="movie-details.html"
                  ><img src="img/poster/ucm_poster09.jpg" alt=""
                /></a>
              </div>
              <div class="movie-content">
                <div class="top">
                  <h5 class="title">
                    <a href="movie-details.html">Women's Day</a>
                  </h5>
                  <span class="date">2021</span>
                </div>
                <div class="bottom">
                  <ul>
                    <li><span class="quality">hd</span></li>
                    <li>
                      <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      >
                      <span class="rating"
                        ><i class="fas fa-thumbs-up"></i> 3.5</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="movie-item mb-50">
              <div class="movie-poster">
                <a href="movie-details.html"
                  ><img src="img/poster/ucm_poster10.jpg" alt=""
                /></a>
              </div>
              <div class="movie-content">
                <div class="top">
                  <h5 class="title">
                    <a href="movie-details.html">The Perfect Match</a>
                  </h5>
                  <span class="date">2021</span>
                </div>
                <div class="bottom">
                  <ul>
                    <li><span class="quality">4k</span></li>
                    <li>
                      <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      >
                      <span class="rating"
                        ><i class="fas fa-thumbs-up"></i> 3.5</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="movie-item mb-50">
              <div class="movie-poster">
                <a href="movie-details.html"
                  ><img src="img/poster/ucm_poster03.jpg" alt=""
                /></a>
              </div>
              <div class="movie-content">
                <div class="top">
                  <h5 class="title">
                    <a href="movie-details.html">The Dog Woof</a>
                  </h5>
                  <span class="date">2021</span>
                </div>
                <div class="bottom">
                  <ul>
                    <li><span class="quality">hd</span></li>
                    <li>
                      <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      >
                      <span class="rating"
                        ><i class="fas fa-thumbs-up"></i> 3.5</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="movie-item mb-50">
              <div class="movie-poster">
                <a href="movie-details.html"
                  ><img src="img/poster/ucm_poster04.jpg" alt=""
                /></a>
              </div>
              <div class="movie-content">
                <div class="top">
                  <h5 class="title">
                    <a href="movie-details.html">The Easy Reach</a>
                  </h5>
                  <span class="date">2021</span>
                </div>
                <div class="bottom">
                  <ul>
                    <li><span class="quality">hd</span></li>
                    <li>
                      <span class="duration"
                        ><i class="far fa-clock"></i> 128 min</span
                      >
                      <span class="rating"
                        ><i class="fas fa-thumbs-up"></i> 3.5</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- tv-series-area-end -->
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export default {
  data() {
    return {
      recentContents: [],
      topViewedContents: [],
      shapeBg: "img/bg/ucm_bg_shape.png",
      loading: false,
      currentPage: 1,
      pageSize: 10,
      searchTerm: "",
      startDate: null,
      endDate: null,
      count: 0,
      totalPages: 0,
      firstEntryIndex: 0,
      lastEntryIndex: 0,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const token = Cookies.get("token");
        const queryParams = {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          searchTerm: this.searchTerm,
        };

        if (this.startDate && this.endDate) {
          queryParams.startDate = this.startDate;
          queryParams.endDate = this.endDate;
        }

        const response = await axios.get("/api/content/getrecentandtopview", {
          headers: { token },
          params: queryParams,
        });

        this.recentContents = response.data.recentContents;
        this.topViewedContents = response.data.topViewedContents;
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
    async logout() {
      try {
        const token = Cookies.get("token");

        const response = await axios.get("/api/logout", {
          headers: { token },
        });

        if (response.status === 200) {
          this.clearUserData();
          window.location.replace("/");
        } else {
          throw new Error("Falha ao efetuar logout");
        }
      } catch (error) {
        this.clearUserData();
        window.location.replace("/");
        console.error("Erro ao fazer logout:", error);

        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Um erro ocorreu. Por favor, tente novamente mais tarde.",
        });
      }
    },
    clearUserData() {
      Cookies.remove("token");
      Cookies.remove("role");
      sessionStorage.removeItem("visitedBefore");
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
            Cookies.remove("token");
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
.banner-bg {
  background-image: url("./../../../public/img/banner/banner_bg01.jpg");
  background-size: cover;
  background-position: center;
}
.top-rated-movie {
  background-image: url("./../../../public/img/bg/tr_movies_bg.jpg");
  background-size: cover;
  background-position: center;
}
.services-area {
  background-image: url("./../../../public/img/bg/services_bg.jpg");
  background-size: cover;
  background-position: center;
}
.tv-series-area {
  background-image: url("./../../../public/img/bg/tv_series_bg.jpg");
  background-size: cover;
  background-position: center;
}
.ucm-area {
  background-image: url("./../../../public/img/bg/ucm_bg.jpg");
  background-size: cover;
  background-position: center;
}
.ucm-bg-shape {
  background-image: url("./../../../public/img/bg/ucm_bg_shape.png");
  background-size: cover;
  background-position: center;
}
.movie-item-margin {
  margin-right: 20px; /* Ajuste conforme necessário */
}
.movie-item {
  width: 100%;
  margin-bottom: 30px;
}

.movie-poster {
  width: 100%;
  height: 400px; /* Defina a altura desejada para o contêiner do pôster */
  overflow: hidden; /* Evita que imagens de diferentes proporções alterem o layout */
}

.movie-poster img {
  width: 100%;
  height: 100%; /* Ocupa toda a altura do contêiner, mantendo a proporção */
  object-fit: cover; /* Corta a imagem para preencher o contêiner mantendo a proporção */
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
