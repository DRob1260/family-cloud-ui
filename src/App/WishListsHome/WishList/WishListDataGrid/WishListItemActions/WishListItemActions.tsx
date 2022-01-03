import React from 'react';
import './WishListItemActions.scss';
import { IconButton } from '@mui/material';
import { CardGiftcard, Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-location';
import { WishListCardProps } from '../../WishListCards/WishListCard/WishListCard';

export type WishListItemActionsProps = {
    wishListItem: WishListCardProps;
};

export type ActiveWishListItem = {
    id: number;
    title: string;
    quantity: number;
    contributions: number;
    description?: string | null;
    url?: string | null;
};

export const WishListItemActions: React.FunctionComponent<
    WishListItemActionsProps
> = ({ wishListItem }) => {
    const navigate = useNavigate();

    const setActiveWishListItem = () => {
        const activeWishListItem: ActiveWishListItem = {
            id: wishListItem.id,
            title: wishListItem.title,
            quantity: wishListItem.quantity,
            contributions: wishListItem.contributions,
            description: wishListItem.description,
            url: wishListItem.url,
        };
        navigate({
            search: (old) => ({
                ...old,
                activeWishListItem,
            }),
        });
    };

    return (
        <div className={'WishListItemActions'}>
            <IconButton
                title={'Delete Wish List Item'}
                onClick={() => {
                    setActiveWishListItem();
                    navigate({
                        search: (old) => ({
                            ...old,
                            deleteWishListItem: true,
                        }),
                    });
                }}
            >
                <Delete id={'delete-wish-list-item-icon'} />
            </IconButton>
            <IconButton
                title={'Contribute Wish List Item'}
                onClick={() => {
                    setActiveWishListItem();
                    navigate({
                        search: (old) => ({
                            ...old,
                            contributeWishListItem: true,
                        }),
                    });
                }}
            >
                <CardGiftcard id={'contribute-wish-list-item'} />
            </IconButton>
            <IconButton
                title={'Edit Wish List Item'}
                onClick={() => {
                    setActiveWishListItem();
                    navigate({
                        search: (old) => ({
                            ...old,
                            updateWishListItem: true,
                        }),
                    });
                }}
            >
                <Edit id={'edit-wish-list-item-button'} />
            </IconButton>
        </div>
    );
};
