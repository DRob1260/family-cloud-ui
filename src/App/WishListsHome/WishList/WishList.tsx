import React, { useContext, useEffect, useState } from 'react';
import './WishList.scss';
import { useGetWishListQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import { WishListDataGrid } from './WishListDataGrid/WishListDataGrid';
import { TokenContext } from '../../../contexts/TokenContext';
import { useMatch, useNavigate, useSearch } from 'react-location';
import { UpdateWishList } from './UpdateWishList/UpdateWishList';
import { CreateWishListItem } from './CreateWishListItem/CreateWishListItem';
import { ShareWishList } from './ShareWishList/ShareWishList';
import { DeleteWishListItem } from './DeleteWishListItem/DeleteWishListItem';
import { UpdateWishListItem } from './UpdateWishListItem/UpdateWishListItem';
import { ContributeItem } from './ContributeItem/ContributeItem';
import { WishListCards } from './WishListCards/WishListCards';
import { Stack, Switch, useMediaQuery, useTheme } from '@mui/material';
import { GridView, List } from '@mui/icons-material';

export enum WishListViewEnum {
    DATA_GRID = 'DATA_GRID',
    CARDS = 'CARDS',
}

export const WishList: React.FunctionComponent = () => {
    const [wishListView, setWishListView] = useState(WishListViewEnum.CARDS);

    const { token } = useContext(TokenContext);
    const search = useSearch();
    const match = useMatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const screenIsLarge = useMediaQuery(theme.breakpoints.up('lg'));

    // todo: new query that doesn't retrieve item data
    const getWishList = useGetWishListQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: parseInt(match.params.activeWishListId),
        },
        {
            onSuccess: (data) => {
                navigate({
                    search: (old) => ({
                        ...old,
                        activeWishList: {
                            id: data.familycloud_wish_list_by_pk?.id,
                            title: data.familycloud_wish_list_by_pk?.title,
                            description:
                                data.familycloud_wish_list_by_pk?.description,
                            authorItemContributionsHidden:
                                data.familycloud_wish_list_by_pk
                                    ?.author_item_contributions_hidden,
                        },
                    }),
                });
            },
        },
    );

    useEffect(() => {
        navigate({
            search: (old) => ({
                ...old,
                wishListView,
            }),
        });
    }, [navigate, wishListView]);

    useEffect(() => {
        if (screenIsLarge) {
            setWishListView(WishListViewEnum.DATA_GRID);
        } else {
            setWishListView(WishListViewEnum.CARDS);
        }
    }, [screenIsLarge]);

    return (
        <div className={'WishList'}>
            {getWishList.isSuccess && (
                <div>
                    <ShareWishList />
                    <UpdateWishList />
                    <ContributeItem />
                    <UpdateWishListItem />
                    <DeleteWishListItem />
                    <CreateWishListItem />
                    <div id={'wish-list-view-switch'}>
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <List />
                            <Switch
                                title={'Wish List view'}
                                checked={
                                    wishListView === WishListViewEnum.CARDS
                                }
                                onChange={(event) => {
                                    let view = WishListViewEnum.CARDS;
                                    if (!event.target.checked) {
                                        view = WishListViewEnum.DATA_GRID;
                                    }
                                    setWishListView(view);
                                }}
                            />
                            <GridView />
                        </Stack>
                    </div>
                </div>
            )}
            {search.wishListView === WishListViewEnum.DATA_GRID && (
                <WishListDataGrid />
            )}
            {search.wishListView === WishListViewEnum.CARDS && (
                <WishListCards />
            )}
        </div>
    );
};
