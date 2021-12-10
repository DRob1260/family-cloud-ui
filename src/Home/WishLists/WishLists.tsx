import {
    Alert,
    CircularProgress,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../../contexts/TokenContext';
import { GraphqlClientWithAuth } from '../../GraphqlClient';
import { useWishListsQuery } from '../../types/hasura';
import { AddCircle } from '@mui/icons-material';
import { CreateWishList } from './CreateWishList/CreateWishList';

export const WishLists: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const [openCreateWishList, setOpenCreateWishList] = useState(false);

    const wishListsQuery = useWishListsQuery(GraphqlClientWithAuth(token));

    return (
        <div className={'WishLists'}>
            <CreateWishList
                open={openCreateWishList}
                setOpen={setOpenCreateWishList}
                refetchWishLists={wishListsQuery.refetch}
            />
            <Grid container spacing={2}>
                <Grid item xs={'auto'}>
                    <Typography variant={'h5'} component={'div'}>
                        Wish Lists
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton
                        size={'small'}
                        onClick={() => setOpenCreateWishList(true)}
                    >
                        <AddCircle />
                    </IconButton>
                </Grid>
            </Grid>
            {wishListsQuery.isLoading && (
                <Grid item>
                    <CircularProgress />
                </Grid>
            )}
            {wishListsQuery.isError && (
                <Grid item>
                    <Alert severity={'error'}>
                        An error occured while retrieving your Wish Lists.
                    </Alert>
                </Grid>
            )}
            {wishListsQuery.isSuccess && (
                <div>
                    {wishListsQuery.data.familycloud_wish_list.map(
                        (wishList) => (
                            <Grid item xs={12}>
                                {wishList.title}
                            </Grid>
                        ),
                    )}
                </div>
            )}
        </div>
    );
};
