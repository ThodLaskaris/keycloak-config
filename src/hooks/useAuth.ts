import { useContext, useEffect } from 'react';
import { KeycloakContext } from '../context/KeycloakContext.tsx';
import { initKeycloak } from '../auth/keyclock.ts';

export function useAuth() {
    const {keycloak, authenticated, initialized, setAuthenticated, setInitialized} = useContext(KeycloakContext);
 
    useEffect(() => {
        if (!keycloak.authenticated && !initialized) {
            initKeycloak()
            .then((auth) => {
                setAuthenticated(auth);
                setInitialized(true);
                if(!auth) keycloak.login();
                console.log('Keycloak initialized');
            });
        }else if (keycloak?.authenticated && !initialized) {
            setAuthenticated(true);
            setInitialized(true);
            console.log(`User is authenticated ${keycloak.authenticated}`);
        }
    }, [keycloak, initialized, setAuthenticated, setInitialized]);

    return { keycloak, authenticated, initialized };
}