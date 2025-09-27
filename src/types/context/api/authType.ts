import { ReactNode } from "react";
import type Keycloak from 'keycloak-js';

export interface KeycloakContextProps  {
    keycloak: Keycloak;
    authenticated: boolean;
    initialized: boolean;
    setAuthenticated: (auth: boolean) => void;
    setInitialized: (init: boolean) => void;
}
export  interface ContextProps {
    children: ReactNode;
}