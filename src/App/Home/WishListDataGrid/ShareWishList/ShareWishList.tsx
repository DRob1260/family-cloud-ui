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
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    List,
    ListItem,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import {
    useDeleteWishListInviteMutation,
    useGetWishListInvitesQuery,
    useInsertWishListInviteMutation,
    useSearchUserQuery,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { Delete } from '@mui/icons-material';

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

    const searchUser = useSearchUserQuery(
        GraphqlClientWithAuth(token),
        {
            input: `${userSearchInput}%`,
        },
        {
            enabled: userSearchInput !== '',
        },
    );

    const getWishListInvites = useGetWishListInvitesQuery(
        GraphqlClientWithAuth(token),
        { wish_list_id: wishListId },
    );

    const insertWishListInvite = useInsertWishListInviteMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                setIsAdmin(false);
                setUserSelected('');
                setUserSearchInput('');
                getWishListInvites.refetch();
            },
        },
    );

    const deleteWishListInvite = useDeleteWishListInviteMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                getWishListInvites.refetch();
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
                            <Paper
                                id={'add-wish-list-invite-paper'}
                                elevation={3}
                            >
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography>Send Invite</Typography>
                                    </Grid>
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
                                            onChange={(_, value) =>
                                                setIsAdmin(value)
                                            }
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
                                                    insertWishListInvite.mutate(
                                                        {
                                                            wish_list_id:
                                                                wishListId,
                                                            person_id: user.id,
                                                            admin: isAdmin,
                                                        },
                                                    );
                                                }
                                            }}
                                        >
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} id={'wish-list-invites-grid-item'}>
                            <Paper id={'wish-list-invites-paper'}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Wish List Invites
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <List>
                                            {getWishListInvites.data?.familycloud_wish_list_invite?.map(
                                                (invite) => (
                                                    <div>
                                                        <Divider />
                                                        <ListItem>
                                                            <span>
                                                                {
                                                                    invite
                                                                        .person
                                                                        .nickname
                                                                }
                                                            </span>
                                                            <span
                                                                id={
                                                                    'delete-wish-list-invite-button-span'
                                                                }
                                                            >
                                                                <IconButton
                                                                    id={
                                                                        'delete-wish-list-invite-button'
                                                                    }
                                                                    onClick={() => {
                                                                        deleteWishListInvite.mutate(
                                                                            {
                                                                                id: invite.id,
                                                                            },
                                                                        );
                                                                    }}
                                                                >
                                                                    <Delete
                                                                        id={
                                                                            'delete-wish-list-invite-button-icon'
                                                                        }
                                                                    />
                                                                </IconButton>
                                                            </span>
                                                        </ListItem>
                                                    </div>
                                                ),
                                            )}
                                        </List>
                                    </Grid>
                                </Grid>
                            </Paper>
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
