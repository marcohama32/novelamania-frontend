import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import axios from "axios";

// Componentes importados de forma dinâmica (Lazy Loading)
const Home = () => import("@/pages/common/HomePage.vue");
const AssistaNovelas = () => import("@/pages/AssistaNovelas.vue");
const AssistaDoramas = () => import("@/pages/AssistaDoramas.vue");
const NossosPacotes = () => import("@/pages/NossosPacotes.vue");
const NossosContactos = () => import("@/pages/NossosContactos.vue");
const NovelaDetalhe = () => import("@/pages/NovelaDetalhe.vue");

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/novelas", component: AssistaNovelas, name: "Assista Novelas" },
  { path: "/doramas", component: AssistaDoramas, name: "Assista Doramas" },
  { path: "/pacotes", component: NossosPacotes, name: "Nossos Pacotes" },
  { path: "/contactos", component: NossosContactos, name: "Nossos Contactos" },
  {
    path: "/detalhe-novela/:id",
    component: NovelaDetalhe,
    name: "Detalhes da Novela",
    meta: { requiresAuth: true, roles: ["2"] },
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const TOKEN_COOKIE = "token";
const ROLE_COOKIE = "role";

let logoutInProgress = false;

const handleLogout = async () => {
  try {
    const token = Cookies.get(TOKEN_COOKIE);
    if (token) {
      // Faz a requisição para o endpoint de logout
      const response = await axios.get("/api/logout", {
        headers: { token },
      });

      if (response.status !== 200) {
        throw new Error("Falha ao efetuar logout");
      }
    }
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  } finally {
    Cookies.remove(TOKEN_COOKIE);
    Cookies.remove(ROLE_COOKIE);

    // Limpa o cache do perfil do usuário
    localStorage.removeItem("userProfile");
    console.log("userProfile removido do localStorage.");

    // Verifica se o item foi realmente removido
    if (!localStorage.getItem("userProfile")) {
      // console.log("Confirmação: userProfile foi removido com sucesso.");
    } else {
      // console.error("Falha ao remover userProfile do localStorage.");
    }

    window.location.replace("/");
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      if (!logoutInProgress) {
        logoutInProgress = true;
        await handleLogout();
        logoutInProgress = false;
      }
    }
    return Promise.reject(error);
  }
);

router.beforeEach(async (to, from, next) => {
  const token = Cookies.get(TOKEN_COOKIE);

  try {
    if (to.meta.requiresAuth && token) {
      const userRole = Cookies.get(ROLE_COOKIE);
      if (!userRole || !to.meta.roles.includes(userRole)) {
        console.log("Usuário não tem permissão para acessar esta rota");
        next("/");
        return;
      }
    }
  } catch (error) {
    console.error("Erro ao verificar token:", error);
    await handleLogout();
    return;
  }

  next();
});

export default router;
