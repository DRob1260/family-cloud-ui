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
import {
    useGetWishListQuery,
    useGetWishListsQuery,
    useUpdateWishListMutation,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { TokenContext } from '../../../../contexts/TokenContext';

export type WishListSettings = {
    wishListId: number;
    initialTitle: string;
    initialDescription: string;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const WishListSettings: React.FunctionComponent<WishListSettings> = ({
    wishListId,
    initialTitle,
    initialDescription,
    open,
    setOpen,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
    }, [initialTitle, initialDescription]);

    const { token } = useContext(TokenContext);

    const { refetch: refetchWishLists } = useGetWishListsQuery(
        GraphqlClientWithAuth(token),
    );

    // todo: this could become an expensive refetch
    const { refetch: refetchWishList } = useGetWishListQuery(
        GraphqlClientWithAuth(token),
        { wishListId: wishListId },
    );

    const updateWishList = useUpdateWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                refetchWishLists();
                refetchWishList();
                setOpen(false);
            },
        },
    );

    return (
        <div className={'WishListSettings'}>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Update Wish List Configuration</DialogTitle>
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
                                label={'Description'}
                                multiline={true}
                                rows={3}
                                fullWidth={true}
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
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
                </DialogActions>
            </Dialog>
        </div>
    );
};
