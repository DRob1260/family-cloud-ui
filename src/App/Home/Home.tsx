import React, { useState } from 'react';
import './Home.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { WishLists } from './WishLists/WishLists';
import { Auth0TokenWrapper } from '../../auth0/Auth0TokenWrapper';
import { Grid, Typography } from '@mui/material';
import { WishListDataGrid } from './WishListDataGrid/WishListDataGrid';

export const Home: React.FunctionComponent = () => {
    const { isAuthenticated, user } = useAuth0();
    const [activeWishListId, setActiveWishListId] = useState<null | number>(
        null,
    );

    return (
        <div className={'Home'}>
            {isAuthenticated && user && (
                <div className={'page'}>
                    <Auth0TokenWrapper>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    variant={'h5'}
                                    component={'div'}
                                    id={'welcome-header'}
                                >
                                    Welcome, {user?.nickname}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <WishLists
                                    activeWishListId={activeWishListId}
                                    setActiveWishListId={setActiveWishListId}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                {activeWishListId && (
                                    <WishListDataGrid
                                        wishListId={activeWishListId}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </Auth0TokenWrapper>
                </div>
            )}
            {!isAuthenticated && <div>Please login.</div>}
        </div>
    );
};
