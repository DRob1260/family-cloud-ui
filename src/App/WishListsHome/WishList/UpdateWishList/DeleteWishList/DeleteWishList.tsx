import React from 'react';
import './DeleteWishList.scss';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from '@mui/material';

export type DeleteWishListProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    deleteWishList: () => void;
};

export const DeleteWishList: React.FunctionComponent<DeleteWishListProps> = ({
    open,
    setOpen,
    deleteWishList,
}) => {
    return (
        <div className={'DeleteWishList'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                className={'DeleteWishList-dialog'}
            >
                <DialogTitle>Delete Wish List</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography>
                                Are you sure you want to delete this wish list?
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                    <Button
                        variant={'contained'}
                        id={'delete-wish-list-button'}
                        onClick={() => {
                            deleteWishList();
                            setOpen(false);
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
