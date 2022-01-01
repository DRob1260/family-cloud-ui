import React from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useLocation } from 'react-location';

export const Auth0ProviderWithHistory: React.FunctionComponent = ({
    children,
}) => {
    const location = useLocation();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

    const onRedirectCallback = (appState: AppState) => {
        location.history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={`${window.location.origin}/authenticated`}
            audience={'family-cloud'}
            onRedirectCallback={onRedirectCallback}
            className={'Auth0ProviderWithHistory'}
        >
            {children}
        </Auth0Provider>
    );
};
