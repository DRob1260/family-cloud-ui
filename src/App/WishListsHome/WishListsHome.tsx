import React from 'react';
import './WishListsHome.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { WishLists } from './WishLists/WishLists';
import { Grid, Typography } from '@mui/material';
import { WishListDataGrid } from './WishListDataGrid/WishListDataGrid';
import { Router, useLocation } from 'react-location';
import { CreateWishList } from './CreateWishList/CreateWishList';
import { CreateWishListItem } from './CreateWishListItem/CreateWishListItem';
import { ShareWishList } from './ShareWishList/ShareWishList';
import { UpdateWishList } from './WishListDataGrid/UpdateWishList/UpdateWishList';

export const WishListsHome: React.FunctionComponent = () => {
    const { isAuthenticated, user } = useAuth0();
    const location = useLocation();

    return (
        <div className={'WishListsHome'}>
            <CreateWishList />
            {isAuthenticated && user && (
                <div className={'page'}>
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
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <WishLists />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Router
                                location={location}
                                routes={[
                                    {
                                        path: '/wish-lists/:activeWishListId',
                                        element: (
                                            <div>
                                                <WishListDataGrid />
                                                <CreateWishListItem />
                                                <ShareWishList />
                                                <UpdateWishList />
                                            </div>
                                        ),
                                    },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </div>
            )}
            {!isAuthenticated && <div>Please login.</div>}
        </div>
    );
};
