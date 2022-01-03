import React, { useContext } from 'react';
import { useGetWishListQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import { WishListDataGrid } from './WishListDataGrid/WishListDataGrid';
import { TokenContext } from '../../../contexts/TokenContext';
import { useMatch, useNavigate, useSearch } from 'react-location';
import { UpdateWishList } from './UpdateWishList/UpdateWishList';
import { CreateWishListItem } from '../CreateWishListItem/CreateWishListItem';
import { ShareWishList } from './ShareWishList/ShareWishList';
import { DeleteWishListItem } from './WishListDataGrid/DeleteWishListItem/DeleteWishListItem';
import { UpdateWishListItem } from './WishListDataGrid/UpdateWishListItem/UpdateWishListItem';
import { ContributeItem } from './WishListDataGrid/ContributeItem/ContributeItem';

export enum WishListViewEnum {
    DATA_GRID = 'DATA_GRID',
}

export const WishList: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const search = useSearch();
    const match = useMatch();
    const navigate = useNavigate();

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
                        wishListView: WishListViewEnum.DATA_GRID,
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
                </div>
            )}
            {search.wishListView === WishListViewEnum.DATA_GRID && (
                <WishListDataGrid />
            )}
        </div>
    );
};
