import React, { useContext, useState } from 'react';
import './ContributeItem.scss';
import {
    Alert,
    AlertTitle,
    Button,
    CircularProgress,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { GraphqlClientWithAuth } from '../../../../graphql/GraphqlClient';
import {
    useGetWishListItemContributionsQuery,
    useInsertWishListItemContributionMutation,
} from '../../../../types/hasura';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { EditUserContribution } from './EditContribution/EditUserContribution';
import { useAuth0 } from '@auth0/auth0-react';
import { useQueryClient } from 'react-query';

export type ContributeItemProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    wishListItemId: number;
    wishListItemQuantity: number;
};

export type UserContributions = {
    user: {
        id: string;
        nickname: string;
    };
    contributions: {
        ids: number[];
        quantity: number;
    };
};

export const ContributeItem: React.FunctionComponent<ContributeItemProps> = ({
    open,
    setOpen,
    wishListItemId,
    wishListItemQuantity,
}) => {
    const [quantity, setQuantity] = useState(1);
    const [userContributions, setUserContributions] = useState<
        UserContributions[]
    >([]);
    const [selectedUserContributions, setSelectedUserContributions] =
        useState('');
    const [retrieveError, setRetrieveError] = useState(false);
    const [insertError, setInsertError] = useState(false);

    const auth0 = useAuth0();

    const { token } = useContext(TokenContext);

    const queryClient = useQueryClient();

    const getWishListItemContributions = useGetWishListItemContributionsQuery(
        GraphqlClientWithAuth(token),
        { wish_list_item_id: wishListItemId },
        {
            onSuccess: (data) => {
                setRetrieveError(false);
                if (data) {
                    const newUserContributions: UserContributions[] = [];

                    let users = Array.from(
                        data.familycloud_wish_list_item_contribution.map(
                            (contribution) => {
                                return {
                                    id: contribution.person.id,
                                    nickname: contribution.person.nickname,
                                };
                            },
                        ),
                    );
                    users = Array.from(
                        new Set(users.map((user) => user.id)),
                    ).map((userId) => {
                        const user = users.find((user) => user.id === userId);
                        return {
                            id: userId,
                            nickname: user?.nickname || '',
                        };
                    });

                    users.forEach((user) => {
                        const userContributions =
                            data.familycloud_wish_list_item_contribution.filter(
                                (contribution) =>
                                    contribution.person.id === user.id,
                            );
                        newUserContributions.push({
                            user: user,
                            contributions: {
                                ids: userContributions.map(
                                    (contributions) => contributions.id,
                                ),
                                quantity: userContributions.length,
                            },
                        });
                    });

                    setUserContributions(newUserContributions);
                }
            },
            onError: () => {
                setRetrieveError(true);
            },
        },
    );

    const insertWishListItemContribution =
        useInsertWishListItemContributionMutation(
            GraphqlClientWithAuth(token),
            {
                onSuccess: () => {
                    queryClient.invalidateQueries('GetWishList');
                    setInsertError(false);
                    getWishListItemContributions.refetch();
                },
                onError: () => {
                    setInsertError(true);
                },
            },
        );

    const close = () => {
        setRetrieveError(false);
        setInsertError(false);
        setOpen(false);
    };

    const contributeButtonDisabled = () => {
        const existingContributionsQuantity =
            getWishListItemContributions.data
                ?.familycloud_wish_list_item_contribution.length || 0;

        const invalidQuantity =
            quantity <= 0 ||
            quantity > wishListItemQuantity - existingContributionsQuantity;

        return invalidQuantity || insertWishListItemContribution.isLoading;
    };

    return (
        <div className={'ContributeItem'}>
            <Dialog
                open={open}
                onClose={close}
                className={'ContributeItem-dialog'}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogTitle>Contribute Wish List Item</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper id={'contribute-item-paper'} elevation={3}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label={'Quantity of Contributions'}
                                            type={'number'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth={true}
                                            value={quantity}
                                            onChange={(event) =>
                                                setQuantity(
                                                    parseInt(
                                                        event.target.value,
                                                    ),
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* todo: display feedback when/why button is disabled */}
                                        <Button
                                            variant={'contained'}
                                            onClick={() => {
                                                for (
                                                    let i = 0;
                                                    i < quantity;
                                                    i++
                                                ) {
                                                    insertWishListItemContribution.mutate(
                                                        {
                                                            wish_list_item_id:
                                                                wishListItemId,
                                                        },
                                                    );
                                                }
                                            }}
                                            disabled={contributeButtonDisabled()}
                                        >
                                            Contribute
                                        </Button>
                                        {insertWishListItemContribution.isLoading && (
                                            <CircularProgress
                                                id={
                                                    'contribute-wish-list-item-spinner'
                                                }
                                            />
                                        )}
                                    </Grid>
                                    {insertError && (
                                        <Grid item xs={12}>
                                            <Alert severity={'error'}>
                                                <Typography>
                                                    An error occurred while
                                                    creating your contribution.
                                                </Typography>
                                            </Alert>
                                        </Grid>
                                    )}
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} id={'item-contributions-grid'}>
                            <Paper
                                id={'item-contributions-paper'}
                                elevation={3}
                            >
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Contributions
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {retrieveError && (
                                        <Grid item xs={12}>
                                            <Alert severity={'error'}>
                                                <AlertTitle>
                                                    <Typography>
                                                        An error occurred while
                                                        retrieving
                                                        contributions.
                                                    </Typography>
                                                </AlertTitle>
                                            </Alert>
                                        </Grid>
                                    )}
                                    <Grid item xs={12}>
                                        <List>
                                            {userContributions.map(
                                                (userContribution) => (
                                                    <div
                                                        className={
                                                            userContribution
                                                                .user.id ===
                                                            selectedUserContributions
                                                                ? `userContributionSelected`
                                                                : ''
                                                        }
                                                    >
                                                        <Divider />
                                                        <ListItemButton
                                                            onClick={() => {
                                                                if (
                                                                    selectedUserContributions ===
                                                                    userContribution
                                                                        .user.id
                                                                ) {
                                                                    setSelectedUserContributions(
                                                                        '',
                                                                    );
                                                                } else {
                                                                    setSelectedUserContributions(
                                                                        userContribution
                                                                            .user
                                                                            .id,
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={
                                                                    auth0.user
                                                                        ?.sub ===
                                                                    userContribution
                                                                        .user.id
                                                                        ? `${userContribution.user.nickname} (you)`
                                                                        : userContribution
                                                                              .user
                                                                              .nickname
                                                                }
                                                            />
                                                            {selectedUserContributions ===
                                                            userContribution
                                                                .user.id ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )}
                                                        </ListItemButton>
                                                        <Collapse
                                                            in={
                                                                selectedUserContributions ===
                                                                userContribution
                                                                    .user.id
                                                            }
                                                            timeout={'auto'}
                                                            unmountOnExit={true}
                                                        >
                                                            <EditUserContribution
                                                                userContribution={
                                                                    userContribution
                                                                }
                                                                wishListItemId={
                                                                    wishListItemId
                                                                }
                                                                wishListItemQuantity={
                                                                    wishListItemQuantity
                                                                }
                                                                existingContributionsQuantity={
                                                                    getWishListItemContributions
                                                                        .data
                                                                        ?.familycloud_wish_list_item_contribution
                                                                        .length ||
                                                                    0
                                                                }
                                                            />
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
                    <Button onClick={close}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
