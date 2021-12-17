import React from 'react';
import './ItemActions.scss';
import { IconButton } from '@mui/material';
import { CardGiftcard, Delete, Edit } from '@mui/icons-material';
import { WishListItemRow } from '../WishListDataGrid';

export type ItemActionsProps = {
    itemRow: WishListItemRow;
    deleteItem: (itemRow: WishListItemRow) => void;
    editItem: (itemRow: WishListItemRow) => void;
    contributeItem: (itemRow: WishListItemRow) => void;
};

export const ItemActions: React.FunctionComponent<ItemActionsProps> = ({
    itemRow,
    deleteItem,
    editItem,
    contributeItem,
}) => {
    return (
        <div className={'ItemActions'}>
            <IconButton
                title={'Delete Wish List Item'}
                onClick={() => {
                    deleteItem(itemRow);
                }}
            >
                <Delete id={'delete-wish-list-item-icon'} />
            </IconButton>
            <IconButton
                title={'Contribute Wish List Item'}
                onClick={() => {
                    contributeItem(itemRow);
                }}
            >
                <CardGiftcard id={'contribute-wish-list-item'} />
            </IconButton>
            <IconButton
                title={'Edit Wish List Item'}
                onClick={() => {
                    editItem(itemRow);
                }}
            >
                <Edit id={'edit-wish-list-item-button'} />
            </IconButton>
        </div>
    );
};
