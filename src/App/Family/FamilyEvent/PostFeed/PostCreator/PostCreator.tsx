import React, {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia, CircularProgress, Dialog, DialogTitle,
    Grid, List, ListItem, ListItemText,
    Modal,
    Paper, Snackbar,
    TextField,
    Typography
} from '@material-ui/core';
import "./PostCreator.scss";
import {
    useAddPostMutation,
    useDeletePostMutation,
    useGetUserQuery,
    useUpdatePostMutation
} from '../../../../../graphql/generated/types';
import {DateTime} from 'luxon';
import {Alert} from '@material-ui/lab';
import {Giphy} from './Giphy/Giphy';
import { Image } from "../../../../../models/Image";

export type PostCreatorProps = {
    postFeedId: string;
    authorUserId: string;
    open: boolean | false;
    onClose: () => void;
    currentPostId?: string;
    currentMessage?: string;
    currentImages?: Image[];
}

export const PostCreator: React.FunctionComponent<PostCreatorProps> = ({
     postFeedId,
     authorUserId,
     open,
     onClose,
     currentPostId,
     currentMessage,
     currentImages
}) => {
    const { data, isLoading, isSuccess, isError } = useGetUserQuery({ userId: authorUserId });
    const [message, setMessage] = useState(currentMessage);
    const [images, setImages] = useState<Image[]>(currentImages || []);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const addPostMutation = useAddPostMutation({
        onSuccess: () => {
            setShowSuccessMessage(true);
            onClose();
        }
    });

    const updatePostMutation = useUpdatePostMutation({
        onSuccess: () => {
            setShowSuccessMessage(true);
            onClose();
        }
    });

    const deletePostMutation = useDeletePostMutation({
        onSuccess: () => {
            setShowSuccessMessage(true);
            onClose();
        }
    });

    return (
        <div className={"PostCreator"}>
            <Modal open={open} onClose={onClose}>
                <div className={"PostCreator-modal-content"}>
                    <Paper>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={8} >
                                <div className={"post-creator-item"}>
                                    <TextField
                                        label={"Message"}
                                        defaultValue={message}
                                        multiline={true}
                                        variant={"outlined"}
                                        rows={5}
                                        disabled={updatePostMutation.isLoading || addPostMutation.isLoading}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                </div>
                                <div className={"post-creator-item"}>
                                    <Giphy setImage={(image: Image) => { setImages([image]) }} />
                                </div>
                                {!currentPostId &&
                                    <div className={'post-creator-item'}>
                                        <Button
                                            variant={'contained'}
                                            onClick={() => {
                                                addPostMutation.mutate({
                                                    postFeedId: postFeedId,
                                                    authorUserId: authorUserId,
                                                    message: message,
                                                    images: images
                                                });
                                            }}
                                            disabled={
                                                addPostMutation.isLoading ||
                                                (!message && images.length === 0)
                                            }
                                        >Submit Message</Button>
                                    </div>
                                }
                                {currentPostId &&
                                    <div>
                                        <div className={"post-creator-item"}>
                                            <Button
                                                variant={"contained"}
                                                onClick={() =>
                                                    updatePostMutation.mutate({
                                                        postId: currentPostId,
                                                        message: message,
                                                        images: images
                                                    })
                                                }
                                                disabled={
                                                    updatePostMutation.isLoading ||
                                                    deletePostMutation.isLoading ||
                                                    (!message && images.length === 0)
                                                }
                                            >Update Message</Button>
                                        </div>
                                        <div className={'post-creator-item delete-button-container'}>
                                            <Button
                                                variant={'contained'}
                                                onClick={() => setShowDeleteDialog(true)}
                                                disabled={updatePostMutation.isLoading || addPostMutation.isLoading || deletePostMutation.isLoading}
                                            >
                                                Delete Message
                                            </Button>
                                            <Dialog open={showDeleteDialog}>
                                                <DialogTitle>Delete Post?</DialogTitle>
                                                <List>
                                                    <ListItem
                                                        button
                                                        onClick={() => {
                                                            setShowDeleteDialog(false);
                                                            deletePostMutation.mutate({postId: currentPostId});
                                                        }}
                                                    >
                                                        <ListItemText>Confirm</ListItemText>
                                                    </ListItem>
                                                    <ListItem
                                                        button
                                                        onClick={() => {
                                                            setShowDeleteDialog(false);
                                                        }}
                                                    >
                                                        <ListItemText>Cancel</ListItemText>
                                                    </ListItem>
                                                </List>
                                            </Dialog>
                                        </div>
                                    </div>
                                }
                                {(addPostMutation.isLoading || updatePostMutation.isLoading || deletePostMutation.isLoading) &&
                                    <div className={"post-creator-item"}>
                                        <CircularProgress/>
                                    </div>
                                }
                                {(addPostMutation.isError || updatePostMutation.isError || deletePostMutation.isError) &&
                                    <div className={"post-creator-item"}>
                                        <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert>
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                {isSuccess && data?.userById &&
                                    <Card>
                                        <CardHeader
                                            title={`${data.userById.firstName} ${data.userById.lastName}`}
                                            subheader={DateTime.now().toLocaleString(DateTime.DATE_MED)}
                                        />
                                        {images.map(image => {
                                            return <CardMedia key={image.url} src={image.url} component={"img"} />
                                        })}
                                        <CardContent>
                                            <Typography variant={"body1"} component={"p"}>{message}</Typography>
                                        </CardContent>
                                    </Card>
                                }
                                {(isLoading) && <CircularProgress />}
                                {(isError) && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert>}
                            </Grid>

                        </Grid>
                    </Paper>
                </div>
            </Modal>
            <Snackbar
                open={showSuccessMessage}
                onClose={() => setShowSuccessMessage(false)}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Alert severity="success">
                    Submission successful.
                </Alert>
            </Snackbar>
        </div>
    );
}

