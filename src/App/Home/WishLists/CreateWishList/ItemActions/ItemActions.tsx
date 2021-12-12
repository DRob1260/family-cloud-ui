import React from 'react';
import './ItemActions.scss';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export type ItemActionsProps = {
    itemId: number;
    actionsRowNumber: number;
    deleteItem: (itemId: number, actionRowId: number) => void;
    editItem: (itemId: number, actionRowId: number) => void;
};

export const ItemActions: React.FunctionComponent<ItemActionsProps> = ({
    itemId,
    actionsRowNumber,
    deleteItem,
    editItem,
}) => {
    return (
        <div className={'ItemActions'}>
            <IconButton
                onClick={() => {
                    deleteItem(itemId, actionsRowNumber);
                }}
            >
                <Delete id={'delete-wish-list-item-icon'} />
            </IconButton>
            <IconButton
                onClick={() => {
                    editItem(itemId, actionsRowNumber);
                }}
            >
                <Edit id={'edit-wish-list-item-button'} />
            </IconButton>
        </div>
    );
};
