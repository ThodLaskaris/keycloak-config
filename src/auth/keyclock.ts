import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

export async function initKeycloak() {
  try {
    await keycloak.init({
      onLoad: 'login-required',
      pkceMethod: 'S256',
    })
  } catch (error) {
    console.error(`Keycloak init fail ${error}`); 
  }
}

export default keycloak;