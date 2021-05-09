import React from "react";
import {Card, CardMedia, Typography} from '@material-ui/core';
import {SongType} from '../../models/SongType';

export type SongCardProps = {
    song: SongType;
}
export const SongCard: React.FunctionComponent<SongCardProps> = ({ song }) => {
    return (
        <div className={"SongCard"}>
            <Card>
                <CardMedia
                    image={song.albumImage}
                    title={`Album cover for ${song.title}`}
                />
                <Typography variant={"h5"}>{song.title}</Typography>
                <Typography variant={"subtitle1"}>{song.artist}</Typography>
                <Typography variant={"subtitle2"}>{song.requester}</Typography>
            </Card>
        </div>
    )
}
