import React, { useContext, useState } from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useInsertWishListMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';

export type CreateWishListType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    refetchWishLists: () => void;
};

export const CreateWishList: React.FunctionComponent<CreateWishListType> = ({
    open,
    setOpen,
    refetchWishLists,
}) => {
    const { token } = useContext(TokenContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contributionsHidden, setContributionsHidden] = useState(true);

    const insertWishListMutation = useInsertWishListMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                setOpen(false);
                refetchWishLists();
            },
        },
    );

    return (
        <div className={'CreateWishList'}>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>New Wish List</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id={'wish-list-title'}
                                label={'Title'}
                                fullWidth={true}
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
                                rows={3}
                                multiline={true}
                                fullWidth={true}
                                onChange={(event) => {
                                    setDescription(event.target.value);
                                }}
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
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            insertWishListMutation.mutate({
                                title: title,
                                description: description,
                                author_item_contributions_hidden:
                                    contributionsHidden,
                            });
                        }}
                    >
                        {insertWishListMutation.isLoading ? (
                            <CircularProgress />
                        ) : (
                            'Save'
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
