import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import axios from "axios";
import Login from "@/pages/common/LogIn.vue";
import Home from "@/pages/common/HomePage.vue";
import ViewClientes from "@/pages/admin/clientes/ViewClientes.vue";
import AddClientes from "@/pages/admin/clientes/AddClientes.vue";
import EditCliente from "@/pages/admin/clientes/EditCliente.vue";

import ViewCobrancas from "@/pages/admin/cobrancas/ViewCobrancas.vue";
import AddCobranca from "@/pages/admin/cobrancas/AddCobranca.vue";
import CobrancaMpesa from "@/pages/admin/cobrancas/metodos/CobrancaMpesa.vue";
import CobrancaDinheiro from "@/pages/admin/cobrancas/metodos/CobrancaDinheiro.vue";
import CobrancaDinheiroProcessar from "@/pages/admin/cobrancas/metodos/CobrancaDinheiroProcessar.vue";
import CobrancaMpesaProcessar from "@/pages/admin/cobrancas/metodos/CobrancaMpesaProcessar.vue";

import AnularCobranca from "@/pages/admin/cobrancas/metodos/AnularCobranca.vue";
import facturaPage from "@/pages/admin/facturas/facturaPage.vue";
import NotFound from "@/pages/common/NotFound.vue";

// depesa
import AddDespesa from "@/pages/admin/despesas/addDespesa.vue";
import ViewDesesa from "@/pages/admin/despesas/viewDespesa.vue";
import EditDesesa from "@/pages/admin/despesas/editDespesa.vue";

// servico
import ViewServico from "@/pages/admin/servicos/viewServico.vue";
import AddServico from "@/pages/admin/servicos/addServico.vue";
import EditServico from "@/pages/admin/servicos/editServico.vue";

// usuarios
import ViewUsuarios from "@/pages/admin/usuarios/viewUsuarios.vue";
import AddUsuario from "@/pages/admin/usuarios/addUsuario.vue";
import EditUsuario from "@/pages/admin/usuarios/editUsuario.vue";

//relatorio
import ViewAnalises from "../pages/admin/relatorios/ViewAnalises.vue";

//perfil
import ViewPerfil from "../pages/admin/perfil/viewPerfil.vue";


const routes = [
  {
    path: "/",
    component: Home,
    name: "Dashboard",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  /////////////////// admin ////////////
  {
    path: "/listarclientes",
    component: ViewClientes,
    name: "View Clientes",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/addclientes",
    component: AddClientes,
    name: "Add Clientes",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/clienteedit/:id",
    component: EditCliente,
    name: "Edit Customer",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // cobrancas

  {
    path: "/listarcobrancas",
    component: ViewCobrancas,
    name: "View Cobrancas",
    meta: { requiresAuth: true, roles: ["1", "2", "3"] },
  },
  {
    path: "/addcobranca",
    component: AddCobranca,
    name: "Add Cobrancas",
    meta: { requiresAuth: true, roles: ["3"] },
  },
  {
    path: "/cobrancampesa",
    component: CobrancaMpesa,
    name: "Cobranca Mpesa",
    meta: { requiresAuth: true, roles: ["3"] },
  },
  {
    path: "/cobrancadinheiro",
    component: CobrancaDinheiro,
    name: "Cobranca Dinheiro",
    meta: { requiresAuth: true, roles: ["3"] },
  },
  {
    path: "/cobrancadinheiroprocessar/:id",
    component: CobrancaDinheiroProcessar,
    name: "Cobranca Dinheiro Processar",
    meta: { requiresAuth: true, roles: ["3"] },
  },
  {
    path: "/cobrancampesaprocessar/:id",
    component: CobrancaMpesaProcessar,
    name: "Cobranca Mpesa Processar",
    meta: { requiresAuth: true, roles: ["3"] },
  },

  {
    path: "/anularcobranca/:id",
    component: AnularCobranca,
    name: "Edit Cobranca Dinheiro",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // depesa
  {
    path: "/adddespesa",
    component: AddDespesa,
    name: "Add Despesa",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  {
    path: "/listardespesas",
    component: ViewDesesa,
    name: "Listar Despesas",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/despesaedit/:id",
    component: EditDesesa,
    name: "Editar Despesa",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // servico
  {
    path: "/listarservicos",
    component: ViewServico,
    name: "Listar Servicos",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/addservico",
    component: AddServico,
    name: "Add servico",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/editservico/:id",
    component: EditServico,
    name: "Editar Servico",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // usuarios
  {
    path: "/listarusuarios",
    component: ViewUsuarios,
    name: "Listar Usuarios",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/addusuario",
    component: AddUsuario,
    name: "Add Usuario",
    meta: { requiresAuth: true, roles: ["1"] },
  },
  {
    path: "/editusuario/:id",
    component: EditUsuario,
    name: "Editar Usuario",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // factura
  {
    path: "/factura/:id",
    component: facturaPage,
    name: "Factura",
    meta: { requiresAuth: true, roles: ["1", "2", "3"] },
  },

  // relatorios

  {
    path: "/relatorios",
    component: ViewAnalises,
    name: "Listar Analises",
    meta: { requiresAuth: true, roles: ["1"] },
  },

  // relatorios

  {
    path: "/perfil",
    component: ViewPerfil,
    name: "Meu Perfil",
    meta: { requiresAuth: true, roles: ["1", "2", "3"] },
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

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get("token");
  const userRole = Cookies.get("role");
  // const visitedBefore = sessionStorage.getItem("visitedBefore");

  // Check if authentication is required and the user is not authenticated
  if (
    (to.meta.requiresAuth && !isAuthenticated) ||
    (isTokenValid(isAuthenticated) === "false" && to.name !== "Login")
  ) {
    // Clear token and session data on token expiration
    clearUserData();
    window.location.replace("/login");
    return next({ path: "/login" });
  }

  // Redirect users to their respective dashboard based on their role
  if (to.path === "/" && isAuthenticated) {
    if (userRole === "2") {
      return next({ path: "/" });
    } else if (userRole === "3") {
      return next({ path: "/addcobranca" });
    } else if (userRole === "4") {
      return next({ path: "/" });
    }
  }

  // Check if roles are defined and the user role is not included
  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    return next({ name: "NotFound" });
  }

  // Reset the auto-logout timer on user activity
  if (isAuthenticated) {
    resetAutoLogoutTimer();
  }

  // Allow navigation to the next route
  next();
});

// Define the auto-logout timer functions
let autoLogoutTimer;

function resetAutoLogoutTimer() {
  clearTimeout(autoLogoutTimer);
  autoLogoutTimer = setTimeout(() => {
    clearUserData(); // Perform logout actions
    window.location.replace("/login");
  }, 900000); // 15 minutes (900,000 milliseconds)
}

function clearUserData() {
  Cookies.remove("token");
  Cookies.remove("role");
  sessionStorage.removeItem("visitedBefore");
}

async function isTokenValid(token) {
  try {
    const response = await axios.get("/api/check/verify-token/", {
      headers: {
        token: token,
      },
    });

    return response.status === 200; // Return true if token is valid
  } catch (error) {
    Cookies.remove("token");
    Cookies.remove("role");
    sessionStorage.removeItem("visitedBefore");
    return false; // Return false if token is invalid or request fails
  }
}

export default router;
