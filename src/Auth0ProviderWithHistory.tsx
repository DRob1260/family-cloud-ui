import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory: React.FunctionComponent = ({
    children,
}) => {
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

    const onRedirectCallback = (appState: AppState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
