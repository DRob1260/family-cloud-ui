import React, {useState} from 'react';
import "./PostFeed.scss";
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from "swiper";
import {useGetPostFeedQuery} from '../../../../graphql/generated/types';
import {Alert} from '@material-ui/lab';
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    Grid,
    IconButton,
    Paper,
    Typography
} from '@material-ui/core';
import {DateTime} from 'luxon';
import {AddCircle} from '@material-ui/icons';
import {PostCreator} from './PostCreator/PostCreator';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export type PostFeedProps = {
    postFeedId: string;
}

export const PostFeed: React.FunctionComponent<PostFeedProps> = ({postFeedId}) => {
    const { data, isLoading, isSuccess, isError, refetch } = useGetPostFeedQuery({ postFeedId });
    const [openPostCreator, setOpenPostCreator] = useState(true);

    return (
        <div className={"PostFeed"}>
            {openPostCreator &&
                // todo: pull in the current user
                <PostCreator
                    postFeedId={postFeedId}
                    authorUserId={"608b386bf767cc1222ba2d68"}
                    open={true}
                    onClose={() => {
                        setOpenPostCreator(false);
                        refetch();
                    }}
                />
            }
            {
                isSuccess && data &&
                    <div>
                        <Paper>
                            <Grid container>
                                <Grid item >
                                    <h3>{data.postFeedById?.name}</h3>
                                    <div>{data.postFeedById?.description}</div>
                                </Grid>
                                <Grid item xs>
                                    <div id={"add-post-button"}>
                                        <IconButton
                                            size={"medium"}
                                            onClick={() => setOpenPostCreator(!openPostCreator)}
                                        >
                                            <AddCircle />
                                        </IconButton>
                                    </div>
                                </Grid>
                                {data.postFeedById?.postConnections &&
                                    <Grid container item xs={12} id={"posts"}>
                                        {data?.postFeedById.postConnections
                                            .map(post => {
                                                return (
                                                    <Grid key={post._id} item xs={12} md={4} lg={3}>
                                                        <div className={"post"}>
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
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                }
                            </Grid>
                        </Paper>
                    </div>
            }
            {isLoading && <CircularProgress />}
            {isError && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert> }
        </div>
    )
}
