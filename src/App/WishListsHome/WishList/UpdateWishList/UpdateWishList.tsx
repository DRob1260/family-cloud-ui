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
import { useNavigate, useSearch } from 'react-location';

export type ActiveWishListParams = {
    id: number;
    title: string;
    description: string;
    authorItemContributionsHidden: boolean;
};

export const UpdateWishList: React.FunctionComponent = () => {
    const [wishListId, setWishListId] = useState(-1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contributionsHidden, setContributionsHidden] = useState(true);
    const [openDeleteWishList, setOpenDeleteWishList] = useState(false);

    const search = useSearch();
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const queryClient = useQueryClient();

    useEffect(() => {
        const params = search.activeWishList as ActiveWishListParams;
        setWishListId(params.id);
        setTitle(params.title);
        setDescription(params.description);
        setContributionsHidden(params.authorItemContributionsHidden);
    }, [search]);

    const closeUpdateWishList = () => {
        navigate({
            search: (old) => {
                delete old?.updateWishList;
                return old || {};
            },
        });
    };

    const deleteWishList = useDeleteWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('GetWishLists');
                closeUpdateWishList();
            },
        },
    );

    const updateWishList = useUpdateWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('GetWishLists');
                queryClient.invalidateQueries('GetWishList');
                closeUpdateWishList();
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
                open={!!search.updateWishList}
                onClose={closeUpdateWishList}
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
                    <Button onClick={closeUpdateWishList}>Close</Button>
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
