import {Alert, CircularProgress, Typography} from "@mui/material";
import React, {useContext} from "react";
import {TokenContext} from "../../contexts/TokenContext";
import { GraphqlClientWithAuth } from "../../GraphqlClient";
import { useWishListsQuery } from "../../types/hasura";

export const WishLists: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);

    const wishListsQuery = useWishListsQuery(GraphqlClientWithAuth(token))

    return (
        <div className={"WishLists"}>
            <Typography variant={"h6"} component={"div"}>Wish Lists</Typography>
            {wishListsQuery.isLoading &&
                <CircularProgress />
            }
            {wishListsQuery.isError &&
                <Alert severity={"error"}>An error occured while retrieving your Wish Lists.</Alert>
            }
            {wishListsQuery.isSuccess &&
            <div>
                {wishListsQuery.data.familycloud_wish_list.map(wishList => {
                    {wishList.title}
                })}
            </div>
            }
        </div>
    )
}

