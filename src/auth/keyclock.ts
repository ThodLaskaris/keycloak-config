import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
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