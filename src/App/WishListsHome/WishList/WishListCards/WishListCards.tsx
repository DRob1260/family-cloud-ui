import React, { useContext } from 'react';
import { Grid, Paper } from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useMatch } from 'react-location';
import { useGetWishListQuery } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { WishListTitle } from '../WishListTitle/WishListTitle';
import { WishListCard } from './WishListCard/WishListCard';

export const WishListCards: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const { params } = useMatch();

    const getWishList = useGetWishListQuery(GraphqlClientWithAuth(token), {
        wishListId: parseInt(params.activeWishListId),
    });

    return (
        <div className={'WishListCards'}>
            {getWishList.isSuccess && (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={3}>
                            <WishListTitle
                                title={
                                    getWishList.data
                                        ?.familycloud_wish_list_by_pk?.title ||
                                    ''
                                }
                            />
                        </Paper>
                    </Grid>
                    {getWishList.data.familycloud_wish_list_by_pk?.wish_list_items.map(
                        (item) => (
                            <Grid item xs={12}>
                                <WishListCard
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                />
                            </Grid>
                        ),
                    )}
                </Grid>
            )}
        </div>
    );
};
