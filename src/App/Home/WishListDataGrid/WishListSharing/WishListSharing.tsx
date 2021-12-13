import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';

export type WishListSharingProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const WishListSharing: React.FunctionComponent<WishListSharingProps> = ({
    open,
    setOpen,
}) => {
    return (
        <div className={'WishListSharing'}>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Share Wish List</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
