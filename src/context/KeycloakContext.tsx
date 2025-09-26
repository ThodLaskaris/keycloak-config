import React, { createContext, ReactNode, useEffect, useState } from 'react';
import keycloak, { initKeycloak } from '../auth/keyclock.ts';
import type { KeycloakInstance } from 'keycloak-js';

interface KeycloakContextProps {
  keycloak?: KeycloakInstance;
  authenticated: boolean;
  initialized: boolean;
}

export const KeycloakContext = createContext<KeycloakContextProps>({
  authenticated: false,
  initialized: false,
});

interface Props {
  children: ReactNode;
  authenticated: boolean;
}

export const KeycloakProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialized, setInitialized] = useState(false);

 useEffect(() => {
    // Καλούμε initKeycloak μόνο αν το keycloak δεν έχει ήδη αρχικοποιηθεί
    if (!keycloak.authenticated && !initialized) {
      initKeycloak().then((auth) => {
        setAuthenticated(auth);
        setInitialized(true);
      });
    } else if (keycloak.authenticated) {
      setAuthenticated(true);
      setInitialized(true);
    }
    // eslint-disable-next-line
  }, []);
 // Αν δεν έχει γίνει init ή δεν είναι authenticated, μην κάνεις render τα children
  if (!initialized) {
    return <div>Loading...</div>;
  }
  if (!authenticated) {
    // Το keycloak.login() καλείται ΜΟΝΟ από το initKeycloak, όχι εδώ!
    return null;
  }
  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, initialized }}>
      {children}
    </KeycloakContext.Provider>
  );
};
