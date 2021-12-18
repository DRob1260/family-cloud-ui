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
    Link,
    Paper,
    Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AddCircle, PeopleAlt, Settings } from '@mui/icons-material';
import { CreateWishListItem } from './CreateWishListItem/CreateWishListItem';
import { ItemActions } from './ItemActions/ItemActions';
import { DeleteWishListItem } from './DeleteWishListItem/DeleteWishListItem';
import { UpdateWishListItem } from './UpdateWishListItem/UpdateWishListItem';
import { UpdateWishList } from './UpdateWishList/UpdateWishList';
import { ShareWishList } from './ShareWishList/ShareWishList';
import { ContributeItem } from './ContributeItem/ContributeItem';

export type WishListDataGridProps = {
    wishListId: number;
};

export type WishListItemRow = {
    id: number;
    title: string;
    quantity: number;
    contributionsQuantity: number;
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
    const [openWishListSharing, setOpenWishListSharing] = useState(false);
    const [openContributeItem, setOpenContributeItem] = useState(false);
    const [actionRow, setActionRow] = useState<WishListItemRow>({
        id: -1,
        title: '',
        actionsRowNumber: -1,
        quantity: 1,
        contributionsQuantity: 0,
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
        const rowsCopy = [...rows];
        rowsCopy[itemRow.actionsRowNumber] = itemRow;
        setRows(rowsCopy);
    };

    const contributeItem = (itemRow: WishListItemRow) => {
        setActionRow(itemRow);
        setOpenContributeItem(true);
    };

    const columns: GridColDef[] = [
        {
            field: 'actionsRowNumber',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <ItemActions
                        itemRow={params.row}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        contributeItem={contributeItem}
                    />
                );
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
            <UpdateWishList
                wishListId={wishListId}
                initialTitle={
                    getWishList.data?.familycloud_wish_list_by_pk?.title || ''
                }
                initialDescription={
                    getWishList.data?.familycloud_wish_list_by_pk
                        ?.description || ''
                }
                initialContributionsHidden={
                    getWishList.data?.familycloud_wish_list_by_pk
                        ?.author_item_contributions_hidden || true
                }
                open={openWishListSettings}
                setOpen={setOpenWishListSettings}
            />
            <ShareWishList
                open={openWishListSharing}
                setOpen={setOpenWishListSharing}
                wishListId={wishListId}
            />
            <ContributeItem
                open={openContributeItem}
                setOpen={setOpenContributeItem}
                wishListItemId={actionRow.id}
                wishListItemQuantity={actionRow.quantity}
            />
            {getWishList.isLoading && <CircularProgress />}
            {getWishList.isSuccess && getWishList.data && (
                <Paper elevation={3} id={'wish-list-data-grid-paper'}>
                    <Grid container id={'wish-lists-data-grid-header-grid'}>
                        <Grid item xs={6} md={10} lg={11}>
                            <Typography variant={'h6'}>
                                {
                                    getWishList.data.familycloud_wish_list_by_pk
                                        ?.title
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2} lg={1}>
                            <ButtonGroup id={'wish-list-data-grid-actions'}>
                                <IconButton
                                    title={'Configure Wish List'}
                                    id={'wish-list-settings-button'}
                                    onClick={() =>
                                        setOpenWishListSettings(true)
                                    }
                                >
                                    <Settings />
                                </IconButton>
                                <IconButton
                                    title={'Share Wish List'}
                                    onClick={() => setOpenWishListSharing(true)}
                                >
                                    <PeopleAlt id={'share-wish-list-icon'} />
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
