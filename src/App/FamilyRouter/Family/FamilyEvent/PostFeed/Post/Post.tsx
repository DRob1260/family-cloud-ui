import React from "react";
import "./Post.scss";
import {Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import {DateTime} from "luxon";

export type PostProps = {
    message: string;
    images: [{
        url: string;
    }]
    author: {
        firstName: string;
        lastName: string;
    }
    created_at: string;
}
export const Post: React.FunctionComponent<PostProps> = ({message, images, author, created_at}) => {
    return (
        <div className={"Post"}>
            <Card>
                <CardHeader
                    title={`${author.firstName} ${author.lastName}`}
                    subheader={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
                />
                {images && images.map(image => {
                    return <CardMedia key={image.url} src={image.url} component={"img"} />
                })}
                <CardContent>
                    <Typography variant={"body1"} component={"p"}>{message}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
