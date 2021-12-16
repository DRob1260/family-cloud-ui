import React, { useContext, useState } from 'react';
import './ShareWishList.scss';
import {
    Autocomplete,
    Button,
    Checkbox,
    CircularProgress,
    Collapse,
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
    ListItemButton,
    ListItemText,
    Paper,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import {
    useDeleteWishListInviteMutation,
    useGetWishListInvitesQuery,
    useInsertWishListInviteMutation,
    useSearchUserQuery,
    useUpdateWishListInviteMutation,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import { Delete, ExpandLess, ExpandMore } from '@mui/icons-material';

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
    const [wishListInviteSelected, setWishListInvitedSelected] = useState('');

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

    const updateWishListInvite = useUpdateWishListInviteMutation(
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
                                                    <div
                                                        className={
                                                            wishListInviteSelected ===
                                                            invite.id
                                                                ? 'invite-selected'
                                                                : ''
                                                        }
                                                    >
                                                        <Divider />
                                                        <ListItemButton
                                                            onClick={() => {
                                                                if (
                                                                    wishListInviteSelected ===
                                                                    invite.id
                                                                ) {
                                                                    setWishListInvitedSelected(
                                                                        '',
                                                                    );
                                                                } else {
                                                                    setWishListInvitedSelected(
                                                                        invite.id,
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={
                                                                    invite
                                                                        .person
                                                                        .nickname
                                                                }
                                                            />
                                                            {wishListInviteSelected ===
                                                            invite.id ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )}
                                                        </ListItemButton>
                                                        <Collapse
                                                            in={
                                                                wishListInviteSelected ===
                                                                invite.id
                                                            }
                                                            timeout={'auto'}
                                                            unmountOnExit={true}
                                                        >
                                                            <ListItem>
                                                                <ListItemText
                                                                    primary={`Status: Invite ${invite.status.toLowerCase()}`}
                                                                />
                                                                <IconButton
                                                                    onClick={() =>
                                                                        deleteWishListInvite.mutate(
                                                                            {
                                                                                id: invite.id,
                                                                            },
                                                                        )
                                                                    }
                                                                >
                                                                    <Delete
                                                                        id={
                                                                            'delete-wish-list-invite-icon'
                                                                        }
                                                                    />
                                                                </IconButton>
                                                            </ListItem>
                                                            <ListItem>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Switch
                                                                            checked={
                                                                                invite.admin
                                                                            }
                                                                            onClick={() => {
                                                                                updateWishListInvite.mutate(
                                                                                    {
                                                                                        id: invite.id,
                                                                                        admin: !invite.admin,
                                                                                    },
                                                                                );
                                                                            }}
                                                                        />
                                                                    }
                                                                    label={
                                                                        'Admin'
                                                                    }
                                                                />
                                                                {updateWishListInvite.isLoading && (
                                                                    <CircularProgress
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                )}
                                                            </ListItem>
                                                        </Collapse>
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
