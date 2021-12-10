import React, { useContext, useState } from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListSubheader,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../contexts/TokenContext';
import { useGetWishListByIdQuery } from '../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../GraphqlClient';

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
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    {getWishList.isSuccess ? (
                        <TextField
                            variant={'standard'}
                            defaultValue={
                                getWishList.data.familycloud_wish_list_by_pk
                                    ?.title
                            }
                            id={'wish-list-title'}
                            label={'Title'}
                            fullWidth={true}
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
                        variant={'standard'}
                        id={'wish-list-description'}
                        label={'Description'}
                        type={'text'}
                        rows={3}
                        multiline={true}
                        fullWidth={true}
                        value={description}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                    <List>
                        <ListSubheader>Wish List Items</ListSubheader>
                        {getWishList.isSuccess &&
                            getWishList.data.familycloud_wish_list_by_pk?.wish_list_items.map(
                                (item) => <ListItem>{item.title}</ListItem>,
                            )}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
