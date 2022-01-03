import React, { useContext, useState } from 'react';
import './WishListDataGrid.scss';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useGetWishListQuery } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
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
import { ItemActions } from './ItemActions/ItemActions';
import { useMatch, useNavigate } from 'react-location';

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
    const navigate = useNavigate();

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
                return <ItemActions itemRow={params.row} />;
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
                                        navigate({
                                            search: (old) => ({
                                                ...old,
                                                updateWishList: true,
                                            }),
                                        })
                                    }
                                >
                                    <Settings />
                                </IconButton>
                                <IconButton
                                    title={'Share Wish List'}
                                    onClick={() =>
                                        navigate({
                                            search: (old) => ({
                                                ...old,
                                                shareWishList: true,
                                            }),
                                        })
                                    }
                                >
                                    <PeopleAlt id={'share-wish-list-icon'} />
                                </IconButton>
                                <IconButton
                                    title={'Add Wish List Item'}
                                    id={'add-wish-list-item-button'}
                                    onClick={() =>
                                        navigate({
                                            search: (old) => ({
                                                ...old,
                                                createWishListItem: true,
                                            }),
                                        })
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
