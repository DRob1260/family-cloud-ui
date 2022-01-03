import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Link,
    Typography,
} from '@mui/material';
import { WishListItemActions } from '../../WishListDataGrid/WishListItemActions/WishListItemActions';

export type WishListCardProps = {
    id: number;
    title: string;
    quantity: number;
    contributions: number;
    description?: string | null;
    url?: string | null;
};

export const WishListCard: React.FunctionComponent<WishListCardProps> = ({
    id,
    title,
    quantity,
    contributions,
    description,
    url,
}) => {
    return (
        <div className={'WishListCard'}>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant={'h5'} component={'div'}>
                        {title}
                    </Typography>
                    <Typography variant={'body1'}>{description}</Typography>
                    <Link
                        href={url || ''}
                        target={'blank'}
                        rel={'noreferrer'}
                        underline={'hover'}
                    >
                        {url}
                    </Link>
                </CardContent>
                <CardActions>
                    <WishListItemActions
                        wishListItem={{
                            id,
                            title,
                            quantity,
                            contributions,
                            description,
                            url,
                        }}
                    />
                </CardActions>
            </Card>
        </div>
    );
};
