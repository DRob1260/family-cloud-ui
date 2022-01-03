import React, { useContext, useState } from 'react';
import './WishListDataGrid.scss';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useGetWishListQuery } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { CircularProgress, Link, Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { WishListItemActions } from './WishListItemActions/WishListItemActions';
import { useMatch } from 'react-location';
import { WishListTitle } from '../WishListTitle/WishListTitle';

export type WishListItemRow = {
    id: number;
    title: string;
    quantity: number;
    contributionsQuantity: number;
    description?: string;
    url?: string;
    actionsRowNumber: number;
};

export const WishListDataGrid: React.FunctionComponent = () => {
    const [rows, setRows] = useState<WishListItemRow[]>([]);

    const { token } = useContext(TokenContext);
    const { params } = useMatch();

    const getWishList = useGetWishListQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: parseInt(params.activeWishListId),
        },
        {
            onSuccess: (data) => {
                const newRows: WishListItemRow[] =
                    data.familycloud_wish_list_by_pk?.wish_list_items.map(
                        (item, index) => {
                            return {
                                id: item.id,
                                title: item.title,
                                quantity: item.quantity,
                                contributionsQuantity:
                                    item.wish_list_item_contributions_aggregate
                                        ?.aggregate?.count || 0,
                                description: item.description || '',
                                url: item.url || '',
                                actionsRowNumber: index,
                            };
                        },
                    ) || [];
                setRows(newRows);
            },
        },
    );

    const columns: GridColDef[] = [
        {
            field: 'actionsRowNumber',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return <WishListItemActions wishListItem={params.row} />;
            },
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 125,
        },
        {
            field: 'contributionsQuantity',
            headerName: 'Contributions',
            width: 125,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 300,
        },
        {
            field: 'url',
            headerName: 'Url',
            width: 300,
            renderCell: (params) => {
                return (
                    <Link
                        href={params.row.url}
                        target={'blank'}
                        rel={'noreferrer'}
                    >
                        {params.row.url}
                    </Link>
                );
            },
        },
    ];

    return (
        <div className={'WishListDataGrid'}>
            {getWishList.isLoading && <CircularProgress />}
            {getWishList.isSuccess && getWishList.data && (
                <Paper elevation={3} id={'wish-list-data-grid-paper'}>
                    <WishListTitle
                        title={
                            getWishList.data.familycloud_wish_list_by_pk
                                ?.title || ''
                        }
                    />
                    <DataGrid columns={columns} rows={rows} autoHeight={true} />
                </Paper>
            )}
        </div>
    );
};
