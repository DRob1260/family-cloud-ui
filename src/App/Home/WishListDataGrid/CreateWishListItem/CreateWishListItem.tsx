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

export type CreateItemProps = {
    wishListId: number;
    refetchWishListItems: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const CreateWishListItem: React.FunctionComponent<CreateItemProps> = ({
    wishListId,
    refetchWishListItems,
    open,
    setOpen,
}) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const { token } = useContext(TokenContext);

    const insertWishListItem = useInsertWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                // todo: add new item manually instead of refetching api
                refetchWishListItems();
                setOpen(false);
                setTitle('');
                setDescription('');
                setUrl('');
            },
        },
    );

    return (
        <div className={'CreateWishListItem'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                            setOpen(false);
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
                            insertWishListItem.mutate({
                                wishListId: wishListId,
                                title: title,
                                description: description,
                                url: url,
                            });
                        }}
                        disabled={!title}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
