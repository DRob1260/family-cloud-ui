import React, { useContext, useState } from 'react';
import './WishListItemsDataGrid.scss';
import { TokenContext } from '../../../contexts/TokenContext';
import { useGetWishListItemsQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import {
    CircularProgress,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AddCircle } from '@mui/icons-material';
import { CreateItem } from './CreateItem/CreateItem';

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

export const WishListItemsDataGrid: React.FunctionComponent<
    WishListDataGridProps
> = ({ wishListId }) => {
    const [open, setOpen] = useState(false);

    const { token } = useContext(TokenContext);

    const getWishListItems = useGetWishListItemsQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: wishListId,
        },
    );

    return (
        <div className={'WishListItemsDataGrid'}>
            <CreateItem
                wishListId={wishListId}
                refetchWishListItems={getWishListItems.refetch}
                open={open}
                setOpen={setOpen}
            />
            {getWishListItems.isLoading && <CircularProgress />}
            {getWishListItems.isSuccess && (
                <Paper elevation={3} id={'wish-list-items-data-grid-paper'}>
                    <Grid
                        container
                        id={'wish-lists-items-data-grid-header-grid'}
                    >
                        <Grid item xs={11}>
                            <Typography variant={'h6'}>
                                Wish List Items
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                id={'add-wish-list-item-button'}
                                onClick={() => setOpen(true)}
                            >
                                <AddCircle id={'add-wish-list-item-icon'} />
                            </IconButton>
                        </Grid>
                    </Grid>
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
