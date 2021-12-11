import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { WishLists } from './WishLists/WishLists';
import { Auth0TokenWrapper } from '../../auth0/Auth0TokenWrapper';

export const Home: React.FunctionComponent = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className={'Home page'}>
            {isAuthenticated && user && (
                <Auth0TokenWrapper>
                    <div>Welcome, {user?.nickname}</div>
                    <WishLists />
                </Auth0TokenWrapper>
            )}
            {!isAuthenticated && <div>Please login.</div>}
        </div>
    );
};
