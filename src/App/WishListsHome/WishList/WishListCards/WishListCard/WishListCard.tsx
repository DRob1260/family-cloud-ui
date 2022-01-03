import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export type WishListCardProps = {
    id: number;
    title: string;
    description?: string | null;
    url?: string | null;
};

export const WishListCard: React.FunctionComponent<WishListCardProps> = ({
    id,
    title,
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
                    <Typography variant={'body2'}>{description}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};
