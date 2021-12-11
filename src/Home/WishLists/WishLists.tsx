import {
    Alert,
    CircularProgress,
    Grid,
    IconButton,
    Link,
    Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../../contexts/TokenContext';
import { GraphqlClientWithAuth } from '../../GraphqlClient';
import { useWishListsQuery } from '../../types/hasura';
import { AddCircle } from '@mui/icons-material';
import { CreateWishList } from './CreateWishList/CreateWishList';
import { EditWishList } from './EditWishList/EditWishList';

export const WishLists: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const [createWishListOpen, setCreateWishListOpen] = useState(false);
    const [editWishListOpen, setEditWishListOpen] = useState(false);
    const [editWishListId, setEditWishListId] = useState<null | number>(null);

    const wishListsQuery = useWishListsQuery(GraphqlClientWithAuth(token));

    return (
        <div className={'WishLists'}>
            <CreateWishList
                open={createWishListOpen}
                setOpen={setCreateWishListOpen}
                refetchWishLists={wishListsQuery.refetch}
            />
            <EditWishList
                open={editWishListOpen}
                setOpen={setEditWishListOpen}
                wishListId={editWishListId}
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
                        onClick={() => setCreateWishListOpen(true)}
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
                        An error occurred while retrieving your Wish Lists.
                    </Alert>
                </Grid>
            )}
            {wishListsQuery.isSuccess && (
                <div>
                    {wishListsQuery.data.familycloud_wish_list.map(
                        (wishList) => (
                            <Grid item xs={12}>
                                <Link
                                    href={'#'}
                                    onClick={() => {
                                        setEditWishListId(wishList.id);
                                        setEditWishListOpen(true);
                                    }}
                                >
                                    {wishList.title}
                                </Link>
                            </Grid>
                        ),
                    )}
                </div>
            )}
        </div>
    );
};
