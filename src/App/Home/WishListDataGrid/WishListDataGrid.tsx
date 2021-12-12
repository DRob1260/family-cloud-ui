import React, { useContext, useState } from 'react';
import './WishListDataGrid.scss';
import { TokenContext } from '../../../contexts/TokenContext';
import { useGetWishListQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../graphql/GraphqlClient';
import {
    ButtonGroup,
    CircularProgress,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AddCircle, Settings, Share } from '@mui/icons-material';
import { CreateWishListItem } from './CreateWishListItem/CreateWishListItem';
import { ItemActions } from './ItemActions/ItemActions';
import { DeleteWishListItem } from './DeleteWishListItem/DeleteWishListItem';
import { UpdateWishListItem } from './UpdateWishListItem/UpdateWishListItem';
import { WishListSettings } from './WishListSettings/WishListSettings';

export type WishListDataGridProps = {
    wishListId: number;
};

export type WishListItemRow = {
    id: number;
    title: string;
    description?: string;
    url?: string;
    actionsRowNumber: number;
};

export const WishListDataGrid: React.FunctionComponent<
    WishListDataGridProps
> = ({ wishListId }) => {
    const [rows, setRows] = useState<WishListItemRow[]>([]);
    const [openCreateWishListItem, setOpenCreateWishListItem] = useState(false);
    const [openDeleteWishListItem, setOpenDeleteWishListItem] = useState(false);
    const [openUpdateWishListItem, setOpenUpdateWishListItem] = useState(false);
    const [openWishListSettings, setOpenWishListSettings] = useState(false);
    const [actionRow, setActionRow] = useState<WishListItemRow>({
        id: -1,
        title: '',
        actionsRowNumber: -1,
    });

    const { token } = useContext(TokenContext);

    const getWishList = useGetWishListQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: wishListId,
        },
        {
            onSuccess: (data) => {
                const newRows: WishListItemRow[] =
                    data.familycloud_wish_list_by_pk?.wish_list_items.map(
                        (item, index) => {
                            return {
                                id: item.id,
                                title: item.title,
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

    const deleteItem = (itemRow: WishListItemRow) => {
        setActionRow(itemRow);
        setOpenDeleteWishListItem(true);
    };

    const removeRow = (itemRow: WishListItemRow) => {
        const rowsCopy = [...rows];
        setRows([
            ...rowsCopy.splice(0, itemRow.actionsRowNumber),
            ...rowsCopy.splice(itemRow.actionsRowNumber + 1),
        ]);
    };

    const editItem = (itemRow: WishListItemRow) => {
        setActionRow(itemRow);
        setOpenUpdateWishListItem(true);
    };

    const updateRow = (itemRow: WishListItemRow) => {
        console.log(itemRow);

        const rowsCopy = [...rows];
        rowsCopy[itemRow.actionsRowNumber] = itemRow;
        setRows(rowsCopy);
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
                        itemRow={params.row}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                );
            },
        },
    ];

    return (
        <div className={'WishListDataGrid'}>
            <CreateWishListItem
                wishListId={wishListId}
                refetchWishListItems={getWishList.refetch}
                open={openCreateWishListItem}
                setOpen={setOpenCreateWishListItem}
            />
            <DeleteWishListItem
                itemRow={actionRow}
                removeRow={removeRow}
                open={openDeleteWishListItem}
                setOpen={setOpenDeleteWishListItem}
            />
            <UpdateWishListItem
                itemRow={actionRow}
                updateRow={updateRow}
                open={openUpdateWishListItem}
                setOpen={setOpenUpdateWishListItem}
            />
            <WishListSettings
                wishListId={wishListId}
                initialTitle={
                    getWishList.data?.familycloud_wish_list_by_pk?.title || ''
                }
                initialDescription={
                    getWishList.data?.familycloud_wish_list_by_pk
                        ?.description || ''
                }
                open={openWishListSettings}
                setOpen={setOpenWishListSettings}
            />
            {getWishList.isLoading && <CircularProgress />}
            {getWishList.isSuccess && (
                <Paper elevation={3} id={'wish-list-data-grid-paper'}>
                    <Grid container id={'wish-lists-data-grid-header-grid'}>
                        <Grid item xs={10}>
                            <Typography variant={'h6'}>
                                {
                                    getWishList.data.familycloud_wish_list_by_pk
                                        ?.title
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <ButtonGroup>
                                <IconButton
                                    title={'Configure Wish List'}
                                    id={'wish-list-settings-button'}
                                    onClick={() =>
                                        setOpenWishListSettings(true)
                                    }
                                >
                                    <Settings />
                                </IconButton>
                                <IconButton title={'Share Wish List'}>
                                    <Share id={'share-wish-list-icon'} />
                                </IconButton>
                                <IconButton
                                    title={'Add Wish List Item'}
                                    id={'add-wish-list-item-button'}
                                    onClick={() =>
                                        setOpenCreateWishListItem(true)
                                    }
                                >
                                    <AddCircle id={'add-wish-list-item-icon'} />
                                </IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <DataGrid columns={columns} rows={rows} autoHeight={true} />
                </Paper>
            )}
        </div>
    );
};
