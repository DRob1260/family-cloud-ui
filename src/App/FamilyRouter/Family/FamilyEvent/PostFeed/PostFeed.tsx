import React from "react";
import {useQuery} from 'react-query';
import {EventMessageType} from '../../../../../models/EventMessageType';
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Post, PostProps} from './Post/Post';
import {GetPostFeedQuery, PostFeedConnection, useGetPostFeedQuery} from '../../../../../graphql/generated/types';
import {Alert} from '@material-ui/lab';
import {Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography} from '@material-ui/core';
import {DateTime} from 'luxon';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export type PostFeedProps = {
    postFeedId: string;
}

export const PostFeed: React.FunctionComponent<PostFeedProps> = ({postFeedId}) => {
    const { data, isLoading, isSuccess, isError } = useGetPostFeedQuery({ postFeedId });

    return (
        <div className={"PostFeed"}>
            {isSuccess && data?.postFeedById?.postConnections &&
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {data?.postFeedById.postConnections
                        .map(post => {
                            return (
                                <SwiperSlide key={`event-message-${post._id}`}>
                                    <div className={"Post"}>
                                        <Card>
                                            <CardHeader
                                                title={`${post.authorUserConnection?.firstName} ${post.authorUserConnection?.lastName}`}
                                                subheader={DateTime.fromISO(post.created_at).toLocaleString(DateTime.DATE_MED)}
                                            />
                                            {post.images && post.images.map(image => {
                                                return image && image.url ? <CardMedia key={image.url} src={image.url} component={"img"} /> : ""
                                            })}
                                            <CardContent>
                                                <Typography variant={"body1"} component={"p"}>{post.message}</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            }
            {isLoading && <CircularProgress />}
            {isError && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert> }
        </div>
    )
}
