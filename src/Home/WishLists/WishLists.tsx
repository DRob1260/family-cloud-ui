import { Alert, CircularProgress, Grid, IconButton, Typography } from '@mui/material';
import React, {useContext} from "react";
import {TokenContext} from "../../contexts/TokenContext";
import { GraphqlClientWithAuth } from "../../GraphqlClient";
import { useWishListsQuery } from "../../types/hasura";

export const WishLists: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);

    const wishListsQuery = useWishListsQuery(GraphqlClientWithAuth(token))

    return (
        <div className={"WishLists"}>
            <Grid container spacing={2}>
                <Grid item xs={"auto"}>
                    <Typography variant={"h6"} component={"div"}>Wish Lists</Typography>
                </Grid>
                <Grid item xs={2}><IconButton>+</IconButton></Grid>
            </Grid>
            {wishListsQuery.isLoading &&
                <Grid item>
                    <CircularProgress />
                </Grid>
            }
            {wishListsQuery.isError &&
                <Grid item>
                    <Alert severity={"error"}>An error occured while retrieving your Wish Lists.</Alert>
                </Grid>
            }
            {wishListsQuery.isSuccess &&
            <Grid item>
                {wishListsQuery.data.familycloud_wish_list.map(wishList => {
                    {wishList.title}
                })}
            </Grid>
            }
        </div>
    )
}

