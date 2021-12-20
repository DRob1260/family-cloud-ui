import React, { useContext, useEffect, useState } from 'react';
import './UpdateWishList.scss';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
} from '@mui/material';
import {
    useDeleteWishListMutation,
    useUpdateWishListMutation,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { TokenContext } from '../../../../contexts/TokenContext';
import { DeleteWishList } from './DeleteWishList/DeleteWishList';
import { useQueryClient } from 'react-query';

export type UpdateWishListProps = {
    wishListId: number;
    initialTitle: string;
    initialDescription: string;
    initialContributionsHidden: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const UpdateWishList: React.FunctionComponent<UpdateWishListProps> = ({
    wishListId,
    initialTitle,
    initialDescription,
    initialContributionsHidden,
    open,
    setOpen,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contributionsHidden, setContributionsHidden] = useState(true);
    const [openDeleteWishList, setOpenDeleteWishList] = useState(false);

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setContributionsHidden(initialContributionsHidden);
    }, [initialTitle, initialDescription, initialContributionsHidden]);

    const { token } = useContext(TokenContext);

    const queryClient = useQueryClient();

    const deleteWishList = useDeleteWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('GetWishLists');
                setOpen(false);
            },
        },
    );

    const updateWishList = useUpdateWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('GetWishLists');
                queryClient.invalidateQueries('GetWishList');
                setOpen(false);
            },
        },
    );

    return (
        <div className={'UpdateWishList'}>
            <DeleteWishList
                open={openDeleteWishList}
                setOpen={setOpenDeleteWishList}
                deleteWishList={() => {
                    deleteWishList.mutate({ wishListId: wishListId });
                }}
            />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                className={'UpdateWishList-dialog'}
            >
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
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={contributionsHidden}
                                        onChange={(event) =>
                                            setContributionsHidden(
                                                event.target.checked,
                                            )
                                        }
                                    />
                                }
                                label={'Hide item contributions from me'}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                    <Button
                        id={'delete-wish-list-button'}
                        variant={'contained'}
                        onClick={() => setOpenDeleteWishList(true)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            updateWishList.mutate({
                                id: wishListId,
                                title: title,
                                description: description,
                                author_item_contributions_hidden:
                                    contributionsHidden,
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
