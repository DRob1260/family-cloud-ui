import React, { useContext, useState } from 'react';
import { TokenContext } from '../../../../../contexts/TokenContext';
import { useGetWishListItemsQuery } from '../../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../../graphql/GraphqlClient';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { EditWishListItem } from '../EditWishListItem/EditWishListItem';

export type WishListItemsProps = {
    wishListId: number;
};

export const WishListItems: React.FunctionComponent<WishListItemsProps> = ({
    wishListId,
}) => {
    const [showingNewItem, setShowingNewItem] = useState(false);

    const { token } = useContext(TokenContext);
    const getWishListItems = useGetWishListItemsQuery(
        GraphqlClientWithAuth(token),
        { wishListId: wishListId },
    );

    return (
        <div className={'WishListItems'}>
            <Grid container spacing={1}>
                <Grid item xs={12} className={'wish-list-items-header'}>
                    <Typography variant={'subtitle2'}>
                        Wish List Items
                    </Typography>
                    <div>
                        {getWishListItems.isLoading ? (
                            <CircularProgress />
                        ) : (
                            <Button
                                disabled={showingNewItem}
                                onClick={() => {
                                    setShowingNewItem(!showingNewItem);
                                }}
                            >
                                Add item
                            </Button>
                        )}
                    </div>
                </Grid>
                {showingNewItem && (
                    <Grid item xs={4}>
                        <EditWishListItem
                            isNewItem={showingNewItem}
                            setIsNewItem={setShowingNewItem}
                            wishListId={wishListId}
                            initialTitle={''}
                            initialDescription={''}
                            initialUrl={''}
                            refetchWishListItems={getWishListItems.refetch}
                        />
                    </Grid>
                )}
                {getWishListItems.data?.familycloud_wish_list_item
                    ?.sort((item1, item2) => {
                        const item1Date = new Date(item1.created_at);
                        const item2Date = new Date(item2.created_at);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        return item2Date - item1Date;
                    })
                    .map((item) => {
                        return {
                            itemId: item.id,
                            wishListId: wishListId,
                            initialTitle: item.title,
                            initialUrl: item.url,
                            initialDescription: item.description,
                            refetchWishListItems: getWishListItems.refetch,
                        };
                    })
                    .map((itemProps) => (
                        <Grid item xs={4}>
                            <EditWishListItem {...itemProps} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
};
