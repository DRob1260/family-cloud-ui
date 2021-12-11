import React from 'react';
import './Home.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { WishLists } from './WishLists/WishLists';
import { Auth0TokenWrapper } from '../../auth0/Auth0TokenWrapper';
import { Typography } from '@mui/material';

export const Home: React.FunctionComponent = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className={'Home page'}>
            {isAuthenticated && user && (
                <Auth0TokenWrapper>
                    <Typography
                        variant={'h5'}
                        component={'div'}
                        id={'welcome-header'}
                    >
                        Welcome, {user?.nickname}
                    </Typography>
                    <WishLists />
                </Auth0TokenWrapper>
            )}
            {!isAuthenticated && <div>Please login.</div>}
        </div>
    );
};
