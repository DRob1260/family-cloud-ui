import React from 'react';
import './AuthButton.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress } from '@mui/material';
import { useLocation, useSearch } from 'react-location';

export const AuthButton: React.FunctionComponent = () => {
    const { isAuthenticated, isLoading, loginWithRedirect, logout } =
        useAuth0();

    const location = useLocation();
    const search = useSearch();

    return (
        <div className={'AuthButton'}>
            {isLoading && <CircularProgress />}
            {!isAuthenticated && !isLoading && (
                <Button
                    onClick={() => {
                        location.history.push('/login');
                        localStorage.setItem(
                            'family-cloud-url-path',
                            location.current.pathname,
                        );
                        localStorage.setItem(
                            'family-cloud-url-params',
                            location.stringifySearch(search),
                        );
                        loginWithRedirect();
                    }}
                >
                    Login
                </Button>
            )}
            {isAuthenticated && (
                <Button
                    onClick={() => {
                        localStorage.clear();
                        location.history.push('/logout');
                        logout({
                            returnTo: window.location.href,
                        });
                    }}
                >
                    Logout
                </Button>
            )}
        </div>
    );
};
