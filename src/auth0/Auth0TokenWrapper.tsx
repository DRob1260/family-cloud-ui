import React, {useEffect, useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import { TokenContext } from '../contexts/TokenContext';

export const Auth0TokenWrapper: React.FunctionComponent = ({children}) => {
    const [token, setToken] = useState("");

    const auth0 = useAuth0();

    useEffect( () => {
        auth0.getIdTokenClaims({audience: "family-cloud", scope: "openid profile"}).then(t => {
            setToken(t.__raw);
        });
    }, []);

    return (
        <div className={"Auth0TokenWrapper"}>
            {!auth0.isLoading && token &&
            <TokenContext.Provider value={{token: token}}>{children}</TokenContext.Provider>
            }
        </div>
    );
}