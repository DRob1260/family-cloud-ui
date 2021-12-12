import React from 'react';
import './ItemActions.scss';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { WishListItemRow } from '../WishListDataGrid';

export type ItemActionsProps = {
    itemRow: WishListItemRow;
    deleteItem: (itemRow: WishListItemRow) => void;
    editItem: (itemRow: WishListItemRow) => void;
};

export const ItemActions: React.FunctionComponent<ItemActionsProps> = ({
    itemRow,
    deleteItem,
    editItem,
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
