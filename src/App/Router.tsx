import React from "react";
import {Router as ReactRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppState, Auth0Provider} from '@auth0/auth0-react';
import {auth0ClientId, auth0Domain} from '../variables';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const onRedirectCallback = (appState: AppState) => {
    console.log("appState:")
    console.log(appState);
    history.replace({
        pathname: appState?.returnTo || window.location.pathname,
        search: ''
    });
};

export const Router: React.FunctionComponent = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <Auth0Provider
            domain={auth0Domain}
            clientId={auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <ReactRouter history={history}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ReactRouter>
        </Auth0Provider>
    )
}
