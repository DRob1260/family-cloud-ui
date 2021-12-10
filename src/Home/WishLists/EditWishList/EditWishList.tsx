import React, { useContext, useState } from 'react';
import './EditWishList.scss';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { TokenContext } from '../../../contexts/TokenContext';
import { useGetWishListByIdQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../GraphqlClient';
import { EditWishListItem } from './EditWishListItem/EditWishListItem';

export type EditWishListType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    wishListId: null | number;
};

export const EditWishList: React.FunctionComponent<EditWishListType> = ({
    open,
    setOpen,
    wishListId,
}) => {
    const { token } = useContext(TokenContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [newWishListItem, setNewWishListItem] = useState(true);

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

    return (
        <div className={'EditWishList'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth={'md'}
                fullWidth={true}
            >
                <DialogTitle>
                    {getWishList.isSuccess ? (
                        <TextField
                            defaultValue={
                                getWishList.data.familycloud_wish_list_by_pk
                                    ?.title
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
                    ) : (
                        <CircularProgress />
                    )}
                </DialogTitle>
                <DialogContent>
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
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={'subtitle1'}>
                                Wish List Items
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={() =>
                                    setNewWishListItem(!newWishListItem)
                                }
                            >
                                {newWishListItem ? 'Cancel' : 'Add item'}
                            </Button>
                        </Grid>
                        {newWishListItem && (
                            <Grid item xs={4}>
                                <EditWishListItem
                                    newItem={true}
                                    wishListId={
                                        getWishList.data
                                            ?.familycloud_wish_list_by_pk?.id ||
                                        -1
                                    }
                                    initialTitle={''}
                                    initialDescription={''}
                                    initialUrl={''}
                                    refetchWishListItems={getWishList.refetch}
                                />
                            </Grid>
                        )}
                        {getWishList.data?.familycloud_wish_list_by_pk?.wish_list_items?.map(
                            (item) => (
                                <Grid item xs={4}>
                                    <EditWishListItem
                                        itemId={item.id}
                                        wishListId={
                                            getWishList.data
                                                ?.familycloud_wish_list_by_pk
                                                ?.id || -1
                                        }
                                        initialTitle={item.title}
                                        initialDescription={item.description}
                                        initialUrl={item.url}
                                        refetchWishListItems={
                                            getWishList.refetch
                                        }
                                    />
                                </Grid>
                            ),
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
