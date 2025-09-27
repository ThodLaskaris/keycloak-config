import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initKeycloak } from './auth/keyclock.ts';
import { KeycloakProvider } from './context/KeycloakContext.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);

initKeycloak().then(() => {
root.render(
  <React.StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </React.StrictMode>
  );
})

