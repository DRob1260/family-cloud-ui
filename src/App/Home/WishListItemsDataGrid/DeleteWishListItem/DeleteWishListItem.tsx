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

export type DeleteWishListItemProps = {
    itemId: number;
    rowId: number;
    removeRow: (rowId: number) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const DeleteWishListItem: React.FunctionComponent<
    DeleteWishListItemProps
> = ({ itemId, rowId, removeRow, open, setOpen }) => {
    const { token } = useContext(TokenContext);

    const deleteWishListItem = useDeleteWishListItemMutation(
        GraphqlClientWithAuth(token),
    );

    return (
        <div className={'DeleteWishListItem'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            deleteWishListItem.mutate({
                                itemId: itemId,
                            });
                            removeRow(rowId);
                            setOpen(false);
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
