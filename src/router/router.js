// import { createRouter, createWebHistory } from "vue-router";
// import Cookies from "js-cookie";
// import axios from "axios";

// import Home from "@/pages/common/HomePage.vue";
// import AssistaNovelas from "@/pages/AssistaNovelas.vue";
// import AssistaDoramas from "@/pages/AssistaDoramas.vue";
// import NossosPacotes from "@/pages/NossosPacotes.vue";
// import NossosContactos from "@/pages/NossosContactos.vue";
// import NovelaDetalhe from "@/pages/NovelaDetalhe.vue";
// // import EditDesesa from "@/pages/admin/despesas/editDespesa.vue";
// // import ViewPerfil from "../pages/admin/perfil/viewPerfil.vue";

// const routes = [
//   { path: "/", component: Home, name: "Home" },
//   // { path: "/despesaedit/:id", component: EditDesesa, name: "Editar Despesa" },
//   // { path: "/perfil", component: ViewPerfil, name: "Meu Perfil" },
//   { path: "/novelas", component: AssistaNovelas, name: "Assista Novelas" },
//   { path: "/doramas", component: AssistaDoramas, name: "Assista Doramas" },
//   { path: "/pacotes", component: NossosPacotes, name: "Nossos Pacotes" },
//   { path: "/contactos", component: NossosContactos, name: "Nossos Contactos" },
//   {
//     path: "/detalhe-novela/:id",
//     component: NovelaDetalhe,
//     name: "Detalhes da Novela",
//     meta: { requiresAuth: true, roles: ["2"] },
//     props: true,
//   },
//   { path: "/:pathMatch(.*)*", name: "Home", component: Home },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// const VERIFY_TOKEN_ENDPOINT = "/api/check/verify-token";
// const LOGOUT_ENDPOINT = "/api/logout";
// const TOKEN_COOKIE = "token";
// const ROLE_COOKIE = "role";

// let logoutInProgress = false; // Flag para controlar múltiplas execuções de logout

// const handleLogout = async () => {
//   try {
//     const token = Cookies.get(TOKEN_COOKIE);
//     // console.log("Token antes de logout:", token); // Log adicional
//     if (token) {
//       await axios.get(LOGOUT_ENDPOINT, {
//         headers: { token: token },
//       });
//     }
//   } catch (error) {
//     console.error("Erro ao fazer logout:", error);
//   } finally {
//     // console.log("Removendo cookies e redirecionando");
//     Cookies.remove(TOKEN_COOKIE);
//     Cookies.remove(ROLE_COOKIE);
//     window.location.replace("/");
//   }
// };

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // console.log("Erro 401 detectado, executando logout");
//       if (!logoutInProgress) {
//         logoutInProgress = true;
//         await handleLogout();
//         logoutInProgress = false; // Resetar flag após o logout
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// router.beforeEach(async (to, from, next) => {
//   // console.log("Rota solicitada:", to.path); // Log adicional
//   const token = Cookies.get(TOKEN_COOKIE);
//   // console.log("Token encontrado:", token); // Log adicional

//   // const response = await axios.get(VERIFY_TOKEN_ENDPOINT, {
//   //   headers: { token: token },
//   // });

//   // if(response.data.message === "Token is valid"){
//   //   Cookies.remove(TOKEN_COOKIE);
//   //   Cookies.remove(ROLE_COOKIE);
//   //   // window.go("/");
//   // }
//   // console.log("Resposta da verificação do token:", response.data.message); // Log adicional

//   try {
//     if (to.meta.requiresAuth && token) {
//       await axios.get(VERIFY_TOKEN_ENDPOINT, {
//         headers: { token: token },
//       });

//       // console.log("Resposta da verificação do token:", response); // Log adicional

//       const userRole = Cookies.get(ROLE_COOKIE);
//       // console.log("Role encontrada:", userRole); // Log adicional

//       if (!userRole || !to.meta.roles.includes(userRole)) {
//         console.log("Usuário não tem permissão para acessar esta rota");
//         next("/");
//         return;
//       }
//     }
//   } catch (error) {
//     console.error("Erro:", error);
//     // console.error("Erro ao verificar token:", error);
//     await handleLogout();
//     return;
//   }

//   next();
// });

// export default router; // Exporta o router configurado

import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import axios from "axios";

import Home from "@/pages/common/HomePage.vue";
import AssistaNovelas from "@/pages/AssistaNovelas.vue";
import AssistaDoramas from "@/pages/AssistaDoramas.vue";
import NossosPacotes from "@/pages/NossosPacotes.vue";
import NossosContactos from "@/pages/NossosContactos.vue";
import NovelaDetalhe from "@/pages/NovelaDetalhe.vue";

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

const VERIFY_TOKEN_ENDPOINT = "/api/check/verify-token";
const LOGOUT_ENDPOINT = "/api/logout";
const TOKEN_COOKIE = "token";
const ROLE_COOKIE = "role";

let logoutInProgress = false;

const handleLogout = async () => {
  try {
    const token = Cookies.get(TOKEN_COOKIE);
    if (token) {
      await axios.get(LOGOUT_ENDPOINT, {
        headers: { token },
      });
    }
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  } finally {
    Cookies.remove(TOKEN_COOKIE);
    Cookies.remove(ROLE_COOKIE);
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
      await axios.get(VERIFY_TOKEN_ENDPOINT, {
        headers: { token },
      });

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
