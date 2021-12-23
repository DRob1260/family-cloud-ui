import React, { useContext, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from '@mui/material';
import { useInsertWishListItemMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useMatch, useNavigate, useSearch } from 'react-location';
import { useQueryClient } from 'react-query';

export const CreateWishListItem: React.FunctionComponent = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const { token } = useContext(TokenContext);
    const queryClient = useQueryClient();
    const search = useSearch();
    const navigate = useNavigate();
    const match = useMatch();

    const closeCreateWishListItem = () => {
        navigate({
            search: (old) => {
                delete old?.createWishListItem;
                return old || {};
            },
        });
    };

    const insertWishListItem = useInsertWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                // todo: add new item manually instead of refetching api
                queryClient.invalidateQueries('GetWishLists');
                closeCreateWishListItem();
                setTitle('');
                setDescription('');
                setUrl('');
            },
        },
    );

    return (
        <div className={'CreateWishListItem'}>
            <Dialog
                open={search.createWishListItem === true}
                onClose={closeCreateWishListItem}
                maxWidth={'xs'}
                fullWidth={true}
            >
                <DialogTitle>New Wish List Item</DialogTitle>
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
                    <Button
                        onClick={() => {
                            closeCreateWishListItem();
                            setTitle('');
                            setDescription('');
                            setUrl('');
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            console.log(match);
                            insertWishListItem.mutate({
                                wishListId: parseInt(
                                    match.params.activeWishListId,
                                ),
                                quantity: quantity,
                                title: title,
                                description: description,
                                url: url,
                            });
                        }}
                        disabled={!title || quantity < 1}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
