<template>
  <div>
    <!--**********************************
            Sidebar start
        ***********************************-->
    <div class="deznav">
      <div class="deznav-scroll">
        <ul class="metismenu" id="menu">
          <li>
            <a class="ai-icon" href="/" aria-expanded="false">
              <i class="flaticon-381-networking"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li>
            <a
              href="page-error-404.html"
              class="ai-icon has-arrow"
              aria-expanded="false"
            >
              <i class="flaticon-381-settings-2"></i>
              <span class="nav-text">Clientes</span>
            </a>
            <ul aria-expanded="false">
              <li><router-link to="/addclientes">Registrar</router-link></li>
              <li><router-link to="/viewclientes">Listar</router-link></li>
            </ul>
          </li>
          <li>
            <a
              class="has-arrow ai-icon"
              href="javascript:;"
              aria-expanded="false"
            >
              <i class="flaticon-381-controls-3"></i>
              <span class="nav-text">Cobrancas</span>
            </a>
            <ul aria-expanded="false">
              <li><a href="chart-flot.html">Processar</a></li>
              <li><a href="chart-morris.html">Listar</a></li>
            </ul>
          </li>
          <li>
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-layer-1"></i>
              <span class="nav-text">Despesas</span>
          </a>
            <ul aria-expanded="false">
              <li><router-link to="/adddespesa">Registrar</router-link></li>
              <li><a href="page-login.html">Listar</a></li>
            </ul>
          </li>
          <li>
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-heart"></i>
              <span class="nav-text">Servicos</span>
            </a>
            <ul aria-expanded="false">
              <li><a href="javascript:;">Registrar</a></li>
              <li><a href="javascript:;">Listar</a></li>
            </ul>
          </li>
          <li>
            <a
              class="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i class="flaticon-381-notepad"></i>
              <span class="nav-text">Relatorios</span>
            </a>
            <ul aria-expanded="false">
              <li><a href="javascript:;">Mensal</a></li>
              <li><a href="javascript:;">Anual</a></li>
              <li><a href="javascript:;">Analises</a></li>
            </ul>
          </li>
          <li>
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
          </li>
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
