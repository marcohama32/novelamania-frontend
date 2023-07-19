<template>
  <div>
    <nav class="side-nav">
      <a href="#" class="intro-x flex items-center pl-5 pt-4 mt-3">
        <img alt="logo" class="w-6" src="../logo.png" />
        <span class="hidden xl:block text-white text-lg ml-3"> Mediplus </span>
      </a>
      <div class="side-nav__devider my-6"></div>
      <ul>
        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div class="side-menu__title">Dashboard</div>
          </a>
        </li>
        <li v-if="hasRoute('Customer Transactions')">
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div class="side-menu__title">
              Customer
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createcustomer" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add customer</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewcustomer" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List customer</div>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-building-2"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
            </div>
            <div class="side-menu__title">
              Company
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createcompany" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add company</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewcompany" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List company</div>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart-handshake"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                />
                <path
                  d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
                />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
            </div>
            <div class="side-menu__title">
              Partner
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createpartner" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add partner</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewpartner" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List partner</div>
              </router-link>
            </li>
            <li>
              <router-link to="/createpartneruser" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add user partner</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewpartneruser" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List user partner</div>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="side-nav__devider my-6"></li>
        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-gantt-chart-square"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 8h7" />
                <path d="M8 12h6" />
                <path d="M11 16h5" />
              </svg>
            </div>
            <div class="side-menu__title">
              Plan
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createplan" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add plan</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewplan" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List plan</div>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-network"
              >
                <rect x="16" y="16" width="6" height="6" rx="1" />
                <rect x="2" y="16" width="6" height="6" rx="1" />
                <rect x="9" y="2" width="6" height="6" rx="1" />
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                <path d="M12 12V8" />
              </svg>
            </div>
            <div class="side-menu__title">
              Service
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createservice" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add service</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewservice" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List service</div>
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="javascript:;" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
            <div class="side-menu__title">
              Employer
              <div class="side-menu__sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </a>
          <ul class="">
            <li>
              <router-link to="/createemployer" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">Add employer</div>
              </router-link>
            </li>
            <li>
              <router-link to="/viewemployer" class="side-menu">
                <div class="side-menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div class="side-menu__title">List employer</div>
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/chat" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-square"
              >
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                />
              </svg>
            </div>
            <div class="side-menu__title">Chat</div>
          </router-link>
        </li>

        <li>
          <router-link to="/event" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-days"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
            </div>
            <div class="side-menu__title">Event</div>
          </router-link>
        </li>
        <li class="side-nav__devider my-6"></li>
        <li>
          <router-link to="/customertransactions" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file-bar-chart"
              >
                <path
                  d="M19 21V4H5v16m0-16h14l-4 4-4-4z"
                />
              </svg>
            </div>
            <div class="side-menu__title">Customer Transactions</div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
  filteredRoutes() {
    try {
      const isAuthenticated = localStorage.getItem("token");
      const userRole = localStorage.getItem("role");

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
    const hasRoute = this.filteredRoutes.some(route => route.name === routeName);
    return hasRoute;
  }
  },
};
</script>

<style>
/* Add your styles here */
</style>
