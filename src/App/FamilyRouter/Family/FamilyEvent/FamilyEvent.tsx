import React from 'react';
import "./FamilyEvent.scss";
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {FamilyEventType} from '../../../../models/FamilyEventType';
import {CircularProgress, Grid, Typography} from '@material-ui/core';
import {Gallery} from '../../../Gallery/Gallery';
import {PostFeed} from './PostFeed/PostFeed';
import {PlaylistCard} from '../../../Playlist/PlaylistCard';
import {useGetFamilyEventQuery} from '../../../../graphql/generated/types';
import {Alert} from '@material-ui/lab';

export const FamilyEvent: React.FunctionComponent = () => {
    const {familyEventId} = useParams<{
        familyEventId: string;
    }>();

    const { data, isLoading, isSuccess, isError } = useGetFamilyEventQuery({ familyEventId: familyEventId });

    return (
        <div className={"FamilyEvent"}>
            {isSuccess && data?.familyEventById &&
                <div>
                    <Typography variant={"h4"} component={"h1"}>{data.familyEventById.name}</Typography>
                    <Grid container id={"content"}>
                        {/*{data.gallery && (*/}
                        {/*    <Grid item xs={12} md={6} lg={8}>*/}
                        {/*        <Grid container id={"content"}>*/}
                        {/*            <Grid item xs={12}>*/}
                        {/*                <Gallery*/}
                        {/*                    gallery={familyEventQuery.data.gallery}*/}
                        {/*                />*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*)}*/}
                        <Grid item xs={12} md={6} lg={4}>
                            <Grid container direction={"column"}>
                                {data.familyEventById?.postFeedConnections &&
                                    <div>
                                        {data.familyEventById.postFeedConnections
                                            .map(postFeed => {
                                                return postFeed
                                                    ?
                                                        <Grid key={postFeed._id} item xs={12}>
                                                            <div id={"messages"}>
                                                                <PostFeed postFeedId={postFeed._id} />
                                                            </div>
                                                        </Grid>
                                                    : <div></div>
                                            })
                                        }
                                    </div>
                                }
                                {/*{familyEventQuery.data.playlistCode &&*/}
                                {/*    <Grid item xs={12}>*/}
                                {/*        <div id={'playlist'}>*/}
                                {/*            <PlaylistCard playlistCode={familyEventQuery.data.playlistCode} />*/}
                                {/*        </div>*/}
                                {/*    </Grid>*/}
                                {/*}*/}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }
            {isLoading && <CircularProgress />}
            {isError && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert> }
        </div>
    );
}
