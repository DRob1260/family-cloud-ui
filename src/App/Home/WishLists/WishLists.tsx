import {
    Alert,
    CircularProgress,
    Divider,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListSubheader,
    Paper,
    Typography,
} from '@mui/material';
import './WishLists.scss';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../../../contexts/TokenContext';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import { useWishListsQuery } from '../../../types/hasura';
import { AddCircle } from '@mui/icons-material';
import { CreateWishList } from './CreateWishList/CreateWishList';

export type WishListsProps = {
    activeWishListId: number | null;
    setActiveWishListId: (wishListId: number) => void;
};

export const WishLists: React.FunctionComponent<WishListsProps> = ({
    activeWishListId,
    setActiveWishListId,
}) => {
    const { token } = useContext(TokenContext);
    const [createWishListOpen, setCreateWishListOpen] = useState(false);

    const wishListsQuery = useWishListsQuery(GraphqlClientWithAuth(token));

    return (
        <div className={'WishLists'}>
            <CreateWishList
                open={createWishListOpen}
                setOpen={setCreateWishListOpen}
                refetchWishLists={wishListsQuery.refetch}
            />
            <Grid container spacing={2}>
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
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <List
                            subheader={
                                <ListSubheader>
                                    <Grid container>
                                        <Grid
                                            item
                                            xs={11}
                                            id={'wish-lists-header-grid'}
                                        >
                                            <Typography variant={'h6'}>
                                                Wish Lists
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton
                                                id={'create-wish-list-button'}
                                                size={'small'}
                                                onClick={() =>
                                                    setCreateWishListOpen(true)
                                                }
                                            >
                                                <AddCircle
                                                    id={
                                                        'create-wish-list-button-icon'
                                                    }
                                                />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListSubheader>
                            }
                        >
                            {wishListsQuery.isSuccess && (
                                <div>
                                    {wishListsQuery.data.familycloud_wish_list.map(
                                        (wishList) => (
                                            <div>
                                                <Divider />
                                                <ListItemButton
                                                    selected={
                                                        activeWishListId ===
                                                        wishList.id
                                                    }
                                                    onClick={() => {
                                                        setActiveWishListId(
                                                            wishList.id,
                                                        );
                                                    }}
                                                >
                                                    {wishList.title}
                                                </ListItemButton>
                                            </div>
                                        ),
                                    )}
                                </div>
                            )}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
