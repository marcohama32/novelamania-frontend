// src/utils/authUtils.js

import Cookies from "js-cookie";
import axios from "axios";

const TOKEN_COOKIE = "token";
const ROLE_COOKIE = "role";

export async function checkToken() {
  const token = Cookies.get(TOKEN_COOKIE);

  if (token) {
    try {
      const response = await axios.get("/api/check/verify-token", {
        headers: { token },
      });

      if (response.data.message !== "Token is valid") {
        console.error("Token inválido:", response.data.message);

        // Limpa o cache do perfil do usuário
        localStorage.removeItem("userProfile");

        // Faz a requisição para o endpoint de logout
        await axios.get("/api/logout", {
          headers: { token },
        });

        // Remove os cookies
        Cookies.remove(TOKEN_COOKIE);
        Cookies.remove(ROLE_COOKIE);

        // Recarrega a página para aplicar as mudanças
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
    }
  } else {
    // Token não existe
    // console.log("Token não existe");
  }
}
