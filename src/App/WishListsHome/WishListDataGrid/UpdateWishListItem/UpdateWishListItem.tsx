import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { WishListItemRow } from '../WishListDataGrid';
import { useUpdateWishListItemMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';

export type UpdateWishListItemProps = {
    itemRow: WishListItemRow;
    updateRow: (row: WishListItemRow) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const UpdateWishListItem: React.FunctionComponent<
    UpdateWishListItemProps
> = ({ itemRow, updateRow, open, setOpen }) => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const { token } = useContext(TokenContext);

    const updateWishListItem = useUpdateWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                updateRow({
                    id: itemRow?.id || -1,
                    title: title,
                    quantity: quantity,
                    contributionsQuantity: itemRow.contributionsQuantity,
                    url: url,
                    description: description,
                    actionsRowNumber: itemRow?.actionsRowNumber,
                });
                setOpen(false);
            },
        },
    );

    useEffect(() => {
        setTitle(itemRow?.title || '');
        setQuantity(itemRow?.quantity || 1);
        setUrl(itemRow?.url || '');
        setDescription(itemRow?.description || '');
    }, [itemRow]);

    return (
        <div className={'UpdateWishListItem'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth={true}
                maxWidth={'xs'}
            >
                <DialogTitle>Update Wish List Item</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                label={'Title'}
                                fullWidth={true}
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={'Quantity'}
                                type={'number'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth={true}
                                value={quantity}
                                onChange={(event) => {
                                    setQuantity(parseInt(event.target.value));
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={'Url'}
                                fullWidth={true}
                                value={url}
                                onChange={(event) => setUrl(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={'Description'}
                                fullWidth={true}
                                multiline={true}
                                rows={3}
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            updateWishListItem.mutate({
                                itemId: itemRow?.id,
                                title: title,
                                quantity: quantity,
                                description: description,
                                url: url,
                            });
                        }}
                        disabled={!title || quantity < 1}
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
