import React from 'react';
import "./FamilyEvent.scss";
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {getFamilyEvent} from '../../../../api/api';
import {FamilyEventType} from '../../../../models/FamilyEventType';
import {CircularProgress, Grid, Typography} from '@material-ui/core';
import {Gallery} from '../../../Gallery/Gallery';

export const FamilyEvent: React.FunctionComponent = () => {
    const {familyCode, eventCode} = useParams<{
        familyCode: string;
        eventCode: string;
    }>();

    const familyEventQuery = useQuery<FamilyEventType, Error>(
        ["familyEvent", {familyCode: familyCode, eventCode: eventCode}],
        getFamilyEvent
    );

    return (
        <div className={"FamilyEvent"}>
            {familyEventQuery.isLoading && <CircularProgress />}
            {familyEventQuery.isSuccess &&
                <div>
                    <Typography variant={"h4"} component={"h1"}>{familyEventQuery.data.eventName}</Typography>
                    <Grid container id={"content"}>
                        {familyEventQuery.data.gallery && (
                            <Grid item xs={12} md={6} lg={8}>
                                <Grid container id={"content"}>
                                    <Grid item xs={12}>
                                        <Gallery
                                            gallery={familyEventQuery.data.gallery}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                        <Grid item xs={12} md={6} lg={4}>
                            <Grid container direction={"column"}>
                                <Grid item xs={12}>
                                    <div id={"messages"}>test</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div id={"playlist"}>test</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    );
}
