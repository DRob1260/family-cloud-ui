import React, { useContext } from 'react';
import './WishListDataGrid.scss';
import { TokenContext } from '../../../contexts/TokenContext';
import { useGetWishListItemsQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import { CircularProgress, Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export type WishListDataGridProps = {
    wishListId: number;
};

const columns: GridColDef[] = [
    {
        field: 'title',
        headerName: 'Title',
        width: 150,
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
    },
];

export const WishListDataGrid: React.FunctionComponent<
    WishListDataGridProps
> = ({ wishListId }) => {
    const { token } = useContext(TokenContext);

    const getWishListItems = useGetWishListItemsQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: wishListId,
        },
    );

    return (
        <div className={'WishListDataGrid'}>
            {getWishListItems.isLoading && <CircularProgress />}
            {getWishListItems.isSuccess && (
                <Paper elevation={3} id={'wish-list-data-grid-paper'}>
                    <DataGrid
                        columns={columns}
                        rows={getWishListItems.data?.familycloud_wish_list_item?.map(
                            (item) => {
                                return {
                                    id: item.id,
                                    title: item.title,
                                    description: item.description,
                                    url: item.url,
                                };
                            },
                        )}
                        autoHeight={true}
                    />
                </Paper>
            )}
        </div>
    );
};
