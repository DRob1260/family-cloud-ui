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
import { useUpdateWishListItemMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { useQueryClient } from 'react-query';
import { useNavigate, useSearch } from 'react-location';
import { ActiveWishListItem } from '../WishListDataGrid/WishListItemActions/WishListItemActions';

export const UpdateWishListItem: React.FunctionComponent = () => {
    const [id, setId] = useState(-1);
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const { token } = useContext(TokenContext);
    const queryClient = useQueryClient();
    const search = useSearch();
    const navigate = useNavigate();

    const close = () => {
        navigate({
            search: (old) => {
                delete old?.updateWishListItem;
                return old || {};
            },
        });
    };

    const updateWishListItem = useUpdateWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('GetWishList');
                close();
            },
        },
    );

    useEffect(() => {
        const activeWishListItem =
            search.activeWishListItem as ActiveWishListItem;
        setId(activeWishListItem.id);
        setTitle(activeWishListItem.title || '');
        setQuantity(activeWishListItem.quantity || 1);
        setUrl(activeWishListItem?.url || '');
        setDescription(activeWishListItem?.description || '');
    }, [search.activeWishListItem]);

    return (
        <div className={'UpdateWishListItem'}>
            <Dialog
                open={!!search.updateWishListItem}
                onClose={close}
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
                    <Button onClick={close}>Cancel</Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            updateWishListItem.mutate({
                                itemId: id,
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
