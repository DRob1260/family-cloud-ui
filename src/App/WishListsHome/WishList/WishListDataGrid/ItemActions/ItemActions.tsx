import React from 'react';
import './ItemActions.scss';
import { IconButton } from '@mui/material';
import { CardGiftcard, Delete, Edit } from '@mui/icons-material';
import { WishListItemRow } from '../WishListDataGrid';
import { useNavigate } from 'react-location';

export type ItemActionsProps = {
    itemRow: WishListItemRow;
};

export type ActiveWishListItem = {
    id: number;
    title: string;
    quantity: number;
    contributions: number;
    description?: string;
    url?: string;
};

export const ItemActions: React.FunctionComponent<ItemActionsProps> = ({
    itemRow,
}) => {
    const navigate = useNavigate();

    const setActiveWishListItem = () => {
        const activeWishListItem: ActiveWishListItem = {
            id: itemRow.id,
            title: itemRow.title,
            quantity: itemRow.quantity,
            contributions: itemRow.contributionsQuantity,
            description: itemRow.description,
            url: itemRow.url,
        };
        navigate({
            search: (old) => ({
                ...old,
                activeWishListItem,
            }),
        });
    };

    return (
        <div className={'ItemActions'}>
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
