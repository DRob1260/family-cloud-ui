import React, { useContext, useState } from 'react';
import './ShareWishList.scss';
import {
    Autocomplete,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import {
    useInsertWishListInviteMutation,
    useSearchUserQuery,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';

export type SharingWishListProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    wishListId: number;
};

export const ShareWishList: React.FunctionComponent<SharingWishListProps> = ({
    open,
    setOpen,
    wishListId,
}) => {
    const [userSelected, setUserSelected] = useState('');
    const [userSearchInput, setUserSearchInput] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const { token } = useContext(TokenContext);

    const searchUser = useSearchUserQuery(GraphqlClientWithAuth(token), {
        input: `${userSearchInput}%`,
    });

    const insertWishListInvite = useInsertWishListInviteMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                setIsAdmin(false);
                setUserSelected('');
                setUserSearchInput('');
            },
        },
    );

    return (
        <div className={'ShareWishList'}>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setUserSearchInput('');
                    setUserSelected('');
                }}
                fullWidth={true}
                maxWidth={'sm'}
                className={'ShareWishList-dialog'}
            >
                <DialogTitle>Share Wish List</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Autocomplete
                                fullWidth={true}
                                freeSolo={true}
                                inputValue={userSearchInput}
                                onInputChange={(_, value) => {
                                    setUserSearchInput(value);
                                    if (value) {
                                        searchUser.refetch();
                                    }
                                }}
                                value={userSearchInput}
                                onChange={(_, value) =>
                                    setUserSelected(value || '')
                                }
                                renderInput={(params) => (
                                    <TextField
                                        label={'Search User'}
                                        {...params}
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                                options={[
                                    ...(searchUser.data?.familycloud_person?.map(
                                        (person) => person.nickname,
                                    ) || []),
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={'Give admin access'}
                                value={isAdmin}
                                onChange={(_, value) => setIsAdmin(value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant={'contained'}
                                disabled={!userSelected}
                                onClick={() => {
                                    const user =
                                        searchUser.data?.familycloud_person?.find(
                                            (person) =>
                                                person.nickname ===
                                                userSelected,
                                        );
                                    if (user) {
                                        insertWishListInvite.mutate({
                                            wish_list_id: wishListId,
                                            person_id: user.id,
                                            admin: isAdmin,
                                        });
                                    }
                                }}
                            >
                                Share
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpen(false);
                            setUserSearchInput('');
                            setUserSelected('');
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
