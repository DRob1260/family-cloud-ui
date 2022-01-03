import React from 'react';
import './WishListTitle.scss';
import { ButtonGroup, Grid, IconButton, Typography } from '@mui/material';
import { AddCircle, PeopleAlt, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-location';

export type WishListTitleProps = {
    title: string;
};

export const WishListTitle: React.FunctionComponent<WishListTitleProps> = ({
    title,
}) => {
    const navigate = useNavigate();

    return (
        <div className={'WishListTitle'}>
            <Grid container id={'wish-lists-title-grid'}>
                <Grid item xs={6} md={10} lg={11}>
                    <Typography variant={'h6'}>{title}</Typography>
                </Grid>
                <Grid item xs={6} md={2} lg={1}>
                    <ButtonGroup id={'wish-list-title-grid-actions'}>
                        <IconButton
                            title={'Configure Wish List'}
                            id={'wish-list-settings-button'}
                            onClick={() =>
                                navigate({
                                    search: (old) => ({
                                        ...old,
                                        updateWishList: true,
                                    }),
                                })
                            }
                        >
                            <Settings />
                        </IconButton>
                        <IconButton
                            title={'Share Wish List'}
                            onClick={() =>
                                navigate({
                                    search: (old) => ({
                                        ...old,
                                        shareWishList: true,
                                    }),
                                })
                            }
                        >
                            <PeopleAlt id={'share-wish-list-icon'} />
                        </IconButton>
                        <IconButton
                            title={'Add Wish List Item'}
                            id={'add-wish-list-item-button'}
                            onClick={() =>
                                navigate({
                                    search: (old) => ({
                                        ...old,
                                        createWishListItem: true,
                                    }),
                                })
                            }
                        >
                            <AddCircle id={'add-wish-list-item-icon'} />
                        </IconButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
};
