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
import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../../contexts/TokenContext';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import { useGetWishListsQuery } from '../../../types/hasura';
import { AddCircle } from '@mui/icons-material';
import { useNavigate } from 'react-location';

export const WishLists: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
    const [activeWishListId, setActiveWishListId] = useState<null | number>(
        null,
    );

    const getWishLists = useGetWishListsQuery(
        GraphqlClientWithAuth(token),
        {},
        {
            onSuccess: (data) => {
                const activeWishList = data.familycloud_wish_list.find(
                    (wishList) => wishList.id === activeWishListId,
                );
                if (!activeWishList) {
                    setActiveWishListId(null);
                }
            },
        },
    );

    useEffect(() => {
        navigate({
            to: activeWishListId,
            search: (old) => ({
                ...old,
                activeWishList: {
                    id: activeWishListId,
                },
            }),
        });
    }, [activeWishListId, navigate]);

    return (
        <div className={'WishLists'}>
            <Grid container spacing={2}>
                {getWishLists.isLoading && (
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                )}
                {getWishLists.isError && (
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
                                                title={'Add Wish List'}
                                                id={'create-wish-list-button'}
                                                size={'small'}
                                                onClick={() =>
                                                    navigate({
                                                        search: (old) => ({
                                                            ...old,
                                                            createWishList:
                                                                true,
                                                        }),
                                                    })
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
                            {getWishLists.isSuccess && (
                                <div>
                                    {getWishLists.data.familycloud_wish_list.map(
                                        (wishList) => (
                                            <div>
                                                <Divider />
                                                <ListItemButton
                                                    selected={
                                                        activeWishListId ===
                                                        wishList.id
                                                    }
                                                    onClick={() => {
                                                        if (
                                                            activeWishListId ===
                                                            wishList.id
                                                        ) {
                                                            setActiveWishListId(
                                                                null,
                                                            );
                                                        } else {
                                                            setActiveWishListId(
                                                                wishList.id,
                                                            );
                                                        }
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
