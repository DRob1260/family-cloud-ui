import React, {useState} from 'react';
import "./PostFeedHorizontal.scss";
import {useGetPostFeedQuery} from '../../../../../../graphql/generated/types';
import {PostCreator} from '../PostCreator/PostCreator';
import {Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import {DateTime} from 'luxon';
import {AddCircle, MoreHoriz} from '@material-ui/icons';
import { Image } from '../PostCreator/PostCreator';

export type PostFeedHorizontalProps = {
    postFeedId: string;
}

export const PostFeedHorizontal: React.FunctionComponent<PostFeedHorizontalProps> = ({ postFeedId }) => {
    const { data, isLoading, isSuccess, isError, refetch } = useGetPostFeedQuery({ postFeedId });
    const [openPostCreator, setOpenPostCreator] = useState(false);
    const [currentPostId, setCurrentPostId] = useState<string | undefined>();
    const [currentPostMessage, setCurrentPostMessage] = useState<string | undefined>();
    const [currentPostImages, setCurrentPostImages] = useState<Image[]>([]);

    return (
        <div className={"PostFeedHorizontal"}>
            {openPostCreator &&
                // todo: pull in the current user
                <PostCreator
                    postFeedId={postFeedId}
                    authorUserId={"608b386bf767cc1222ba2d68"}
                    open={true}
                    onClose={() => {
                        setOpenPostCreator(false);
                        setCurrentPostId(undefined);
                        setCurrentPostImages([]);
                        setCurrentPostMessage(undefined);
                        refetch();
                    }}
                    currentPostId={currentPostId}
                    currentMessage={currentPostMessage}
                    currentImages={currentPostImages}
                />
            }
            {isSuccess && data &&
                <div>
                    <Paper>
                        <div id={"add-post-button"}>
                            <IconButton
                                size={"medium"}
                                onClick={() => setOpenPostCreator(!openPostCreator)}
                            >
                                <AddCircle />
                            </IconButton>
                        </div>
                        {data.postFeedById?.postConnections &&
                            <div id={"post-list"}>
                                {data?.postFeedById.postConnections
                                    .map(post => {
                                        return (
                                            <div key={post._id} className={"post"}>
                                                <Card>
                                                    <CardHeader
                                                        title={`${post.authorUserConnection?.firstName} ${post.authorUserConnection?.lastName}`}
                                                        subheader={DateTime.fromISO(post.created_at).toLocaleString(DateTime.DATE_MED)}
                                                        action={
                                                            <IconButton
                                                                onClick={() => {
                                                                    setCurrentPostId(post._id);
                                                                    if(post.message) {
                                                                        setCurrentPostMessage(post.message);
                                                                    }
                                                                    if(post.images) {
                                                                        const images = post.images
                                                                            .map(image => {
                                                                                return {
                                                                                    url: image?.url || "",
                                                                                    source: image?.source || ""
                                                                                };
                                                                            });
                                                                        setCurrentPostImages(images);
                                                                    }
                                                                    setOpenPostCreator(true);
                                                                }}
                                                            >
                                                                <MoreHoriz />
                                                            </IconButton>
                                                        }
                                                    />
                                                    {post.images &&
                                                        post.images.map(image => {
                                                            return image && image.url ? <CardMedia key={image.url} src={image.url} component={"img"} /> : ""
                                                        })
                                                    }
                                                    <CardContent>
                                                        <Typography variant={"body1"} component={"p"}>{post.message}</Typography>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        }
                    </Paper>
                </div>
            }
        </div>
    )
}
