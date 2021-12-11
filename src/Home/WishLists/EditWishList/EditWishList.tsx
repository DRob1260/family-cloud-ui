import React, { useContext, useState } from 'react';
import './EditWishList.scss';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../contexts/TokenContext';
import {
    useDeleteWishListMutation,
    useGetWishListByIdQuery,
    useUpdateWishListMutation,
} from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../GraphqlClient';
import { WishListItems } from './WishListItems/WishListItems';

export type EditWishListType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    wishListId: null | number;
    refetchWishLists: () => void;
};

export const EditWishList: React.FunctionComponent<EditWishListType> = ({
    open,
    setOpen,
    wishListId,
    refetchWishLists,
}) => {
    const { token } = useContext(TokenContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const getWishList = useGetWishListByIdQuery(
        GraphqlClientWithAuth(token),
        {
            wishListId: wishListId || -1, // setting to -1 if null, but query isn't enabled if it is null
        },
        {
            enabled: wishListId !== null && open,
            onSuccess: (data) => {
                setTitle(data.familycloud_wish_list_by_pk?.title || '');
                setDescription(
                    data.familycloud_wish_list_by_pk?.description || '',
                );
            },
        },
    );

    const updateWishList = useUpdateWishListMutation(
        GraphqlClientWithAuth(token),
    );

    const deleteWishList = useDeleteWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                refetchWishLists();
                setOpen(false);
            },
        },
    );

    return (
        <div className={'EditWishList'}>
            <Dialog
                className={'EditWishList-dialog'}
                open={open}
                onClose={() => setOpen(false)}
                maxWidth={'md'}
                fullWidth={true}
            >
                <DialogContent>
                    {getWishList.isSuccess ? (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    defaultValue={
                                        getWishList.data
                                            .familycloud_wish_list_by_pk?.title
                                    }
                                    id={'wish-list-title'}
                                    label={'Title'}
                                    fullWidth={true}
                                    required={true}
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id={'wish-list-description'}
                                    label={'Description'}
                                    type={'text'}
                                    rows={2}
                                    multiline={true}
                                    fullWidth={true}
                                    value={description}
                                    onChange={(event) => {
                                        setDescription(event.target.value);
                                    }}
                                />
                            </Grid>
                            {wishListId && (
                                <Grid item xs={12}>
                                    <WishListItems wishListId={wishListId} />
                                </Grid>
                            )}
                        </Grid>
                    ) : (
                        <CircularProgress />
                    )}
                </DialogContent>
                <DialogActions>
                    {wishListId && title && (
                        <Button
                            variant={'contained'}
                            onClick={() => {
                                updateWishList.mutate({
                                    wishListId: wishListId,
                                    title: title,
                                    description: description,
                                });
                            }}
                        >
                            Update
                        </Button>
                    )}
                    {wishListId && (
                        <Button
                            className={'wish-list-delete-button'}
                            onClick={() =>
                                deleteWishList.mutate({
                                    wishListId: wishListId,
                                })
                            }
                        >
                            Delete
                        </Button>
                    )}
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
