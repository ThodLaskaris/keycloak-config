import { createContext, useState } from 'react';
import keycloak from '../auth/keyclock.ts';
import { ContextProps, KeycloakContextProps } from '../types/context/api/authType.ts';


export const KeycloakContext = createContext<KeycloakContextProps>({
  keycloak,
  authenticated: false,
  initialized: false,
  setAuthenticated: () => {},
  setInitialized: () => {},
});

export const KeycloakProvider = ({ children }: ContextProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialized, setInitialized] = useState(false);

  return ( 
    <KeycloakContext.Provider
    value={{
      keycloak,
      authenticated,
      initialized,
      setAuthenticated,
      setInitialized
    }}
    >
      {children}
    </KeycloakContext.Provider>
  )
}