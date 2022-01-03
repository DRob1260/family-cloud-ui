import React, { useContext } from 'react';
import './DeleteWishListItem.scss';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useDeleteWishListItemMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { useQueryClient } from 'react-query';
import { useNavigate, useSearch } from 'react-location';
import { ActiveWishListItem } from '../WishListDataGrid/ItemActions/ItemActions';

export const DeleteWishListItem: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const search = useSearch();

    const close = () => {
        navigate({
            search: (old) => {
                delete old?.deleteWishListItem;

                return old || {};
            },
        });
    };

    const deleteWishListItem = useDeleteWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('GetWishList');
                close();
            },
        },
    );

    return (
        <div className={'DeleteWishListItem'}>
            <Dialog
                open={!!search.deleteWishListItem}
                onClose={close}
                fullWidth={true}
                maxWidth={'xs'}
                id={'DeleteWishListItem-dialog'}
            >
                <DialogTitle>Delete Wish List Item</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Are you sure you want to delete this item?
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            const activeWishListItem =
                                search.activeWishListItem as ActiveWishListItem;
                            deleteWishListItem.mutate({
                                itemId: activeWishListItem.id,
                            });
                        }}
                        id={'delete-wish-list-item-button'}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
