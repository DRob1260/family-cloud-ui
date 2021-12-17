import React, { useContext, useEffect, useState } from 'react';
import './EditUserContribution.scss';
import { UserContributions } from '../ContributeItem';
import { useAuth0 } from '@auth0/auth0-react';
import {
    Alert,
    Button,
    CircularProgress,
    IconButton,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import {
    useDeleteWishListItemContributionMutation,
    useInsertWishListItemContributionMutation,
} from '../../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../../graphql/GraphqlClient';
import { TokenContext } from '../../../../../contexts/TokenContext';
import { useQueryClient } from 'react-query';

export type EditUserContributionProps = {
    userContribution: UserContributions;
    wishListItemId: number;
    wishListItemQuantity: number;
    existingContributionsQuantity: number;
};

export const EditUserContribution: React.FunctionComponent<
    EditUserContributionProps
> = ({
    userContribution,
    wishListItemId,
    wishListItemQuantity,
    existingContributionsQuantity,
}) => {
    const [quantity, setQuantity] = useState(1);
    const [updateError, setUpdateError] = useState(false);
    const [updateButtonLoading, setUpdateButtonLoading] = useState(false);
    const [deleteButtonLoading, setDeleteButtonLoading] = useState(false);

    const auth0 = useAuth0();

    useEffect(() => {
        setQuantity(userContribution.contributions.quantity);
    }, [userContribution.contributions.quantity]);

    const { token } = useContext(TokenContext);

    const queryClient = useQueryClient();

    const insertWishListItemContribution =
        useInsertWishListItemContributionMutation(
            GraphqlClientWithAuth(token),
            {
                onSuccess: () => {
                    setUpdateError(false);
                    queryClient.invalidateQueries(
                        'GetWishListItemContributions',
                    );
                },
                onError: () => {
                    setUpdateError(true);
                },
                onSettled: () => {
                    setUpdateButtonLoading(false);
                    setDeleteButtonLoading(false);
                },
            },
        );

    const deleteWishListItemContribution =
        useDeleteWishListItemContributionMutation(
            GraphqlClientWithAuth(token),
            {
                onSuccess: () => {
                    setUpdateError(false);
                    queryClient.invalidateQueries(
                        'GetWishListItemContributions',
                    );
                    close();
                },
                onError: () => {
                    setUpdateError(true);
                },
                onSettled: () => {
                    setUpdateButtonLoading(false);
                    setDeleteButtonLoading(false);
                },
            },
        );

    const updateWishListItemContribution = () => {
        if (quantity > userContribution.contributions.quantity) {
            insertWishListItemContribution.mutate({
                wish_list_item_id: wishListItemId,
            });
        } else if (quantity < userContribution.contributions.quantity) {
            deleteWishListItemContribution.mutate({
                id: userContribution.contributions.ids[0],
            });
        }
    };

    const disableUpdateButton = () => {
        const valueHasBeenUpdate =
            quantity === userContribution.contributions.quantity;
        const quantityInvalid =
            quantity <= 0 ||
            quantity > wishListItemQuantity - existingContributionsQuantity;

        return (
            valueHasBeenUpdate ||
            quantityInvalid ||
            updateButtonLoading ||
            deleteButtonLoading
        );
    };

    useState(() => {
        setQuantity(userContribution.contributions.quantity);
    });

    return (
        <div className={'EditUserContribution'}>
            {auth0.user?.sub === userContribution.user.id ? (
                <div>
                    <ListItem>
                        <TextField
                            label={'Quantity of Contributions'}
                            type={'number'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth={true}
                            value={quantity}
                            onChange={(event) =>
                                setQuantity(parseInt(event.target.value))
                            }
                        />
                        {deleteButtonLoading ? (
                            <CircularProgress
                                className={
                                    'edit-wish-list-item-contribution-spinner'
                                }
                            />
                        ) : (
                            <IconButton
                                id={'delete-wish-list-contribution-button'}
                                disabled={
                                    updateButtonLoading || deleteButtonLoading
                                }
                            >
                                <Delete
                                    id={'delete-wish-list-contribution-icon'}
                                    onClick={() => {
                                        setDeleteButtonLoading(true);
                                        deleteWishListItemContribution.mutate({
                                            id: userContribution.contributions
                                                .ids[0],
                                        });
                                    }}
                                />
                            </IconButton>
                        )}
                    </ListItem>
                    <ListItem>
                        {/* todo: display feedback when/why button is disabled */}
                        <Button
                            variant={'contained'}
                            disabled={disableUpdateButton()}
                            onClick={() => {
                                setUpdateButtonLoading(true);
                                updateWishListItemContribution();
                            }}
                        >
                            Update
                        </Button>
                        {updateButtonLoading && (
                            <CircularProgress
                                className={
                                    'edit-wish-list-item-contribution-spinner'
                                }
                            />
                        )}
                    </ListItem>
                    {updateError && (
                        <ListItem>
                            <Alert severity={'error'}>
                                <Typography>
                                    An error occurred while updating the
                                    contribution.
                                </Typography>
                            </Alert>
                        </ListItem>
                    )}
                </div>
            ) : (
                <div>
                    <ListItem>
                        <ListItemText
                            primary={`Quantity of Contributions: ${userContribution.contributions.quantity}`}
                        />
                    </ListItem>
                </div>
            )}
        </div>
    );
};
