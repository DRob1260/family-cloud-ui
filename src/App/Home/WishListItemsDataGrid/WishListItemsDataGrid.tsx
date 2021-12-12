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
import { ItemActions } from '../WishLists/CreateWishList/ItemActions/ItemActions';
import { DeleteWishListItem } from './DeleteWishListItem/DeleteWishListItem';

export type WishListDataGridProps = {
    wishListId: number;
};

type WishListItemRow = {
    id: number;
    title: string;
    description?: string;
    url?: string;
    actionsRowNumber: number;
};

export const WishListItemsDataGrid: React.FunctionComponent<
    WishListDataGridProps
> = ({ wishListId }) => {
    const [rows, setRows] = useState<WishListItemRow[]>([]);
    const [openCreateWishListItem, setOpenCreateWishListItem] = useState(false);
    const [openDeleteWishListItem, setOpenDeleteWishListItem] = useState(false);
    const [actionRowId, setActionRowId] = useState(-1);
    const [actionItemId, setActionItemId] = useState(-1);

    const { token } = useContext(TokenContext);

    const getWishListItems = useGetWishListItemsQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: wishListId,
        },
        {
            onSuccess: (data) => {
                const newRows: WishListItemRow[] =
                    data.familycloud_wish_list_item.map((item, index) => {
                        return {
                            id: item.id,
                            title: item.title,
                            description: item.description || '',
                            url: item.url || '',
                            actionsRowNumber: index,
                        };
                    });
                setRows(newRows);
            },
        },
    );

    const deleteItem = (itemId: number, actionRowId: number) => {
        setActionRowId(actionRowId);
        setActionItemId(itemId);
        setOpenDeleteWishListItem(true);
    };

    const removeRow = (rowId: number) => {
        const rowsCopy = [...rows];
        setRows([...rowsCopy.splice(0, rowId), ...rowsCopy.splice(rowId + 1)]);
    };

    const editItem = (itemId: number, actionRowId: number) => {
        // do nothing
    };

    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
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
        {
            field: 'actionsRowNumber',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => {
                return (
                    <ItemActions
                        itemId={params.id as number}
                        actionsRowNumber={params.row.actionsRowNumber}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                );
            },
        },
    ];

    return (
        <div className={'WishListItemsDataGrid'}>
            <CreateItem
                wishListId={wishListId}
                refetchWishListItems={getWishListItems.refetch}
                open={openCreateWishListItem}
                setOpen={setOpenCreateWishListItem}
            />
            <DeleteWishListItem
                itemId={actionItemId}
                rowId={actionRowId}
                removeRow={removeRow}
                open={openDeleteWishListItem}
                setOpen={setOpenDeleteWishListItem}
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
                                onClick={() => setOpenCreateWishListItem(true)}
                            >
                                <AddCircle id={'add-wish-list-item-icon'} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <DataGrid columns={columns} rows={rows} autoHeight={true} />
                </Paper>
            )}
        </div>
    );
};
