import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: String(import.meta.env.VITE_KEYCLOAK_URL),
  realm: String(import.meta.env.VITE_KEYCLOAK_REALM),
  clientId: String(import.meta.env.VITE_KEYCLOAK_CLIENT_ID),
});

export async function initKeycloak() {
  try {
    const authenticated = await keycloak.init({ onLoad: 'login-required', pkceMethod: 'S256' });
    if (authenticated) console.log('Keycloak success');
    else console.warn('Keycloak authentication failed');
    return authenticated;
  } catch (error) {
    console.error(`Keycloak initialization failed: ${error}`);
    return false;
  }
}

export default keycloak;