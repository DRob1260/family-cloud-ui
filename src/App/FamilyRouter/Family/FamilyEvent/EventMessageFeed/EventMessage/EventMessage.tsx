import React from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import {EventMessageType} from '../../../../../../models/EventMessageType';
import {DateTime} from "luxon";

export type EventMessageProps = {
    eventMessage: EventMessageType;
}
export const EventMessage: React.FunctionComponent<EventMessageProps> = ({eventMessage}) => {
    return (
        <div className={"EventMessage"}>
            <Card>
                <CardHeader
                    title={`${eventMessage.author.name.firstName} ${eventMessage.author.name.lastName}`}
                    subheader={DateTime.fromJSDate(eventMessage.creationDate).toLocaleString(DateTime.DATE_MED)}
                />
                <CardMedia src={eventMessage.photo} component={"img"}/>
                <CardContent>
                    <Typography variant={"body1"} component={"p"}>{eventMessage.text}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
