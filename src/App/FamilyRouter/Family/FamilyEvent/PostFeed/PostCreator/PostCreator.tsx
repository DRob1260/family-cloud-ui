import React, {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia, CircularProgress,
    Grid,
    Modal,
    Paper, Snackbar,
    TextField,
    Typography
} from '@material-ui/core';
import "./PostCreator.scss";
import {useAddPostMutation, useGetUserQuery} from '../../../../../../graphql/generated/types';
import {DateTime} from 'luxon';
import {Alert} from '@material-ui/lab';

export type PostCreatorProps = {
    postFeedId: string;
    authorUserId: string;
    open: boolean | false;
    onClose: () => void;
}

type Image = {
    url: string;
    source: string;
}

export const PostCreator: React.FunctionComponent<PostCreatorProps> = ({ postFeedId, authorUserId, open, onClose }) => {
    const { data, isLoading, isSuccess, isError } = useGetUserQuery({ userId: authorUserId });
    const [message, setMessage] = useState("");
    const [images, setImages] = useState<Image[]>([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const addPostMutation = useAddPostMutation({
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
                                        multiline={true}
                                        variant={"outlined"}
                                        rows={5}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                </div>
                                <div className={"post-creator-item"}>
                                    <TextField
                                        label={"Image"}
                                        variant={"outlined"}
                                        onChange={(event) => setImages([{url: event.target.value, source: "manual"}])}
                                    />
                                </div>
                                <div className={"post-creator-item submit-button-container"}>
                                    <Button
                                        variant={"contained"}
                                        onClick={() => addPostMutation.mutate(
                                            {
                                                postFeedId: postFeedId,
                                                authorUserId: authorUserId,
                                                message: message,
                                                images: images
                                            })
                                        }
                                    >Submit Message</Button>
                                </div>
                                {addPostMutation.isLoading &&
                                    <div className={"post-creator-item"}>
                                        <CircularProgress/>
                                    </div>
                                }
                                {addPostMutation.isError &&
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
                                {isLoading && <CircularProgress />}
                                {isError && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert>}
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
                    Post created successfully.
                </Alert>
            </Snackbar>
        </div>
    );
}

