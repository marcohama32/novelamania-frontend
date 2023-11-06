<template>
  <div>
    <div class="form-head mb-4">
      <h2 class="text-black font-w600 mb-0">Painel de Controle</h2>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="row">
          <div class="col-xl-8 col-lg-6 col-md-7 col-sm-8">
            <div class="card-bx stacked">
              <img
                src="../../../public/dist/images/card/card.png"
                alt=""
                class="mw-100"
              />
              <div class="card-info text-white">
                <p class="mb-1">Valor Total</p>
                <h2 class="fs-36 text-white mb-sm-4 mb-3">$73,250.66</h2>
                <div
                  class="d-flex align-items-center justify-content-between mb-sm-5 mb-3"
                >
                  <img src="images/dual-dot.png" alt="" class="dot-img" />
                  <!-- <h4 class="fs-20 text-white mb-0">**** **** **** 1234</h4> -->
                </div>
                <!-- <div class="d-flex">
                  <div class="me-5">
                    <p class="fs-14 mb-1 op6">VALID THRU</p>
                    <span>08/21</span>
                  </div>
                  <div>
                    <p class="fs-14 mb-1 op6">CARD HOLDER</p>
                    <span>Franklin Jr.</span>
                  </div>
                </div> -->
              </div>
              <!-- <a href="javascript:;"
                ><i class="fa fa-caret-down" aria-hidden="true"></i
              ></a> -->
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-5 col-sm-4">
            <div
              class="card bgl-primary card-body overflow-hidden p-0 d-flex rounded"
            >
              <div class="p-0 text-center mt-3">
                <span class="text-black">Limit</span>
                <h3 class="text-black fs-20 mb-0 font-w600">$4,000</h3>
                <small>/$10,000</small>
              </div>
              <canvas
                id="lineChart"
                height="300"
                class="mt-auto line-chart-demo"
              ></canvas>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="card">
              <div class="card-header d-block d-sm-flex border-0">
                <div class="me-3">
                  <h4 class="fs-20 text-black">Transações recentes</h4>
                  <!-- <p class="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur
                  </p> -->
                </div>
                <div class="card-action card-tabs d-inline-block mt-3 mt-sm-0">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#monthly"
                        role="tab"
                        >Ver todas</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body tab-content p-0">
                <div
                  class="tab-pane active show fade"
                  id="monthly"
                  role="tabpanel"
                >
                  <div class="table-responsive">
                    <table
                      class="table table-responsive-md card-table previous-transactions"
                    >
                      <tbody>
                        <tr>
                       
                          <td>
                            <h6 class="fs-16 font-w600 mb-0">
                              <a
                                href="transactions-details.html"
                                class="text-black"
                                >FAC-3443k34</a
                              >
                            </h6>
                            <span class="fs-14">Dinheiro</span>
                          </td>
                          <td>
                            <h6 class="fs-16 text-black font-w400 mb-0">
                              Outubro 4, 2023
                            </h6>
                            <span class="fs-14">05:34</span>
                          </td>
                          <td>
                            <span class="fs-16 text-black font-w500"
                              >+$5,553</span
                            >
                          </td>
                          <td>
                            <span
                              class="text-success fs-16 font-w500 text-end d-block"
                              >Completed</span
                            >
                          </td>
                        </tr>
                        <tr>
                         
                          <td>
                            <h6 class="fs-16 font-w600 mb-0">
                              <a
                                href="transactions-details.html"
                                class="text-black"
                                >FAC-3D03k34</a
                              >
                            </h6>
                            <span class="fs-14">M-Pesa</span>
                          </td>
                          <td>
                            <h6 class="fs-16 text-black font-w400 mb-0">
                              Outubro 5, 2023
                            </h6>
                            <span class="fs-14">05:34</span>
                          </td>
                          <td>
                            <span class="fs-16 text-black font-w500"
                              >-$167</span
                            >
                          </td>
                          <td>
                            <span
                              class="text-warning fs-16 font-w500 text-end d-block"
                              >Pending</span
                            >
                          </td>
                        </tr>
                        <tr>
                         
                          <td>
                            <h6 class="fs-16 font-w600 mb-0">
                              <a
                                href="transactions-details.html"
                                class="text-black"
                                >FAC-0043k34</a
                              >
                            </h6>
                            <span class="fs-14">M-Pesa</span>
                          </td>
                          <td>
                            <h6 class="fs-16 text-black font-w400 mb-0">
                              Outubro 5, 2023
                            </h6>
                            <span class="fs-14">05:34</span>
                          </td>
                          <td>
                            <span class="fs-16 text-black font-w500"
                              >+$5,553</span
                            >
                          </td>
                          <td>
                            <span
                              class="text-danger fs-16 font-w500 text-end d-block"
                              >Canceled</span
                            >
                          </td>
                        </tr>
                        <tr>
                       
                          <td>
                            <h6 class="fs-16 font-w600 mb-0">
                              <a
                                href="transactions-details.html"
                                class="text-black"
                                >FAC-3D43k78</a
                              >
                            </h6>
                            <span class="fs-14">M-Pesa</span>
                          </td>
                          <td>
                            <h6 class="fs-16 text-black font-w400 mb-0">
                              Outubro 5, 2023
                            </h6>
                            <span class="fs-14">05:34</span>
                          </td>
                          <td>
                            <span class="fs-16 text-black font-w500"
                              >+$5,553</span
                            >
                          </td>
                          <td>
                            <span
                              class="text-success fs-16 font-w500 text-end d-block"
                              >Completed</span
                            >
                          </td>
                        </tr>
                        <tr>
                        
                          <td>
                            <h6 class="fs-16 font-w600 mb-0">
                              <a
                                href="transactions-details.html"
                                class="text-black"
                                >FAC-806Rk34</a
                              >
                            </h6>
                            <span class="fs-14">M-Pesa</span>
                          </td>
                          <td>
                            <h6 class="fs-16 text-black font-w400 mb-0">
                              Outubro 4, 2023
                            </h6>
                            <span class="fs-14">05:34</span>
                          </td>
                          <td>
                            <span class="fs-16 text-black font-w500"
                              >-$167</span
                            >
                          </td>
                          <td>
                            <span
                              class="text-danger fs-16 font-w500 text-end d-block"
                              >Canceled</span
                            >
                          </td>
                        </tr>
                      </tbody>

                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="row">
          <div class="col-xl-6 col-sm-6">
            <div class="card">
              <div class="card-header flex-wrap border-0 pb-0">
                <div class="me-3 mb-2">
                  <p class="fs-14 mb-1">Valor mes corrente</p>
                  <span class="fs-24 text-black font-w600">$65,123</span>
                </div>
                <span class="fs-12 mb-2">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                      stroke="#2BC155"
                      stroke-width="2"
                    />
                    <path
                      d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="10.2499"
                        y1="3"
                        x2="10.9999"
                        y2="13.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#2BC155"
                          stop-opacity="0.73"
                        />
                        <stop
                          offset="1"
                          stop-color="#2BC155"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  4% (30 dias)</span
                >
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart1" height="80"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-sm-6">
            <div class="card">
              <div class="card-header flex-wrap border-0 pb-0">
                <div class="me-3 mb-2">
                  <p class="fs-14 mb-1">Previsao mes corrente</p>
                  <span class="fs-24 text-black font-w600">$24,551</span>
                </div>
                <span class="fs-12 mb-2">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3514 7.5C15.9974 9.37169 19.0572 12.8253 20 14H1V1L8.18919 10.75L14.3514 7.5Z"
                      fill="url(#paint0_linear1)"
                    />
                    <path
                      d="M19.5 13.5C18.582 12.4157 15.6027 9.22772 14 7.5L8 10.5L1 1.5"
                      stroke="#FF2E2E"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear1"
                        x1="10.5"
                        y1="2.625"
                        x2="9.64345"
                        y2="13.9935"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#FF2E2E" />
                        <stop
                          offset="1"
                          stop-color="#FF2E2E"
                          stop-opacity="0.03"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  4% (30 dias)</span
                >
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart2" height="80"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card overflow-hidden">
              <div class="card-header d-sm-flex d-block border-0 pb-0">
                <div class="mb-sm-0 mb-2">
                  <p class="fs-14 mb-1">Analise semanal</p>
                  <span class="mb-0">
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 6L5.99994 -2.62268e-07L-6.10352e-05 6"
                        fill="#2BC155"
                      />
                    </svg>
                    <strong class="fs-24 text-black ms-2 me-3">43%</strong>Do
                    que na semana passada</span
                  >
                </div>
                <span class="fs-12">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                      stroke="#2BC155"
                      stroke-width="2"
                    />
                    <path
                      d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                      fill="url(#paint0_linear2)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear2"
                        x1="10.2499"
                        y1="3"
                        x2="10.9999"
                        y2="13.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#2BC155"
                          stop-opacity="0.73"
                        />
                        <stop
                          offset="1"
                          stop-color="#2BC155"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  4% (30 dias)</span
                >
              </div>
              <div class="card-body p-0">
                <canvas id="widgetChart3" height="80"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body pb-1">
                <div class="row align-items-center">
                  <div class="col-xl-5 col-xxl-12 col-md-5">
                    <h4 class="fs-20 text-black mb-4">Despesas</h4>
                    <div class="row">
                      <div
                        class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4"
                      >
                        <svg
                          class="me-3"
                          width="14"
                          height="54"
                          viewBox="0 0 14 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="-6.10352e-05"
                            width="14"
                            height="54"
                            rx="7"
                            fill="#AC39D4"
                          />
                        </svg>
                        <div>
                          <p class="fs-14 mb-2">Investimento</p>
                          <span class="fs-18 font-w500"
                            ><span class="text-black me-2">$1,415</span
                            >/$2,000</span
                          >
                        </div>
                      </div>
                      <div
                        class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4"
                      >
                        <svg
                          class="me-3"
                          width="14"
                          height="54"
                          viewBox="0 0 14 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="-6.10352e-05"
                            width="14"
                            height="54"
                            rx="7"
                            fill="#40D4A8"
                          />
                        </svg>
                        <div>
                          <p class="fs-14 mb-2">Variáveis</p>
                          <span class="fs-18 font-w500"
                            ><span class="text-black me-2">$1,567</span
                            >/$5,000</span
                          >
                        </div>
                      </div>
                      <div
                        class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4"
                      >
                        <svg
                          class="me-3"
                          width="14"
                          height="54"
                          viewBox="0 0 14 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="-6.10352e-05"
                            width="14"
                            height="54"
                            rx="7"
                            fill="#1EB6E7"
                          />
                        </svg>
                        <div>
                          <p class="fs-14 mb-2">Operacionais</p>
                          <span class="fs-18 font-w500"
                            ><span class="text-black me-2">$487</span
                            >/$10,000</span
                          >
                        </div>
                      </div>
                      <div
                        class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4"
                      >
                        <svg
                          class="me-3"
                          width="14"
                          height="54"
                          viewBox="0 0 14 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="-6.10352e-05"
                            width="14"
                            height="54"
                            rx="7"
                            fill="#461EE7"
                          />
                        </svg>
                        <div>
                          <p class="fs-14 mb-2">Gastos</p>
                          <span class="fs-18 font-w500"
                            ><span class="text-black me-2">$3,890</span
                            >/$4,000</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7 col-xxl-12 col-md-7">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <div class="bg-secondary rounded text-center p-3">
                          <div
                            class="d-inline-block position-relative donut-chart-sale mb-3"
                          >
                            <span
                              class="donut1"
                              data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 0.2)"],   "innerRadius": 33, "radius": 10}'
                              >5/8</span
                            >
                            <small class="text-white">71%</small>
                          </div>
                          <span class="fs-14 text-white d-block"
                            >Investimento</span
                          >
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="bg-success rounded text-center p-3">
                          <div
                            class="d-inline-block position-relative donut-chart-sale mb-3"
                          >
                            <span
                              class="donut1"
                              data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 0.2)"],   "innerRadius": 33, "radius": 10}'
                              >3/8</span
                            >
                            <small class="text-white">30%</small>
                          </div>
                          <span class="fs-14 text-white d-block"
                            >Variáveis</span
                          >
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div
                          class="border border-2 border-primary rounded text-center p-3"
                        >
                          <div
                            class="d-inline-block position-relative donut-chart-sale mb-3"
                          >
                            <span
                              class="donut1"
                              data-peity='{ "fill": ["rgb(30, 170, 231)", "rgba(234, 234, 234, 1)"],   "innerRadius": 33, "radius": 10}'
                              >1/8</span
                            >
                            <small class="text-black">5%</small>
                          </div>
                          <span class="fs-14 text-black d-block"
                            >Operacionais</span
                          >
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="bg-info rounded text-center p-3">
                          <div
                            class="d-inline-block position-relative donut-chart-sale mb-3"
                          >
                            <span
                              class="donut1"
                              data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 0.2)"],   "innerRadius": 33, "radius": 10}'
                              >9/10</span
                            >
                            <small class="text-white">96%</small>
                          </div>
                          <span class="fs-14 text-white d-block">Gastos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
