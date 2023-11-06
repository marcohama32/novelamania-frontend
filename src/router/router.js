import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/common/LogIn.vue";
import Home from "../pages/common/HomePage.vue";
import ViewClientes from "../pages/admin/clientes/ViewClientes.vue"
import AddClientes from "../pages/admin/clientes/AddClientes.vue"
import addDespesa from "@/pages/admin/despesas/addDespesa.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Dashboard",
  },
  /////////////////// admin ////////////
  {
    path: "/viewclientes",
    component: ViewClientes,
    name: "View Clientes",
  },
  {
    path: "/addclientes",
    component: AddClientes,
    name: "Add Clientes",
  },
  {
    path: "/adddespesa",
    component: addDespesa,
    name: "Add Despesa",
  },
  // Login & Logout
  {
    path: "/login",
    name: "Login",
    components: {
      default: Login,
      login: Login,
    },
    meta: { requiresAuth: false },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
