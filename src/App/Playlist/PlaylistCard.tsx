import React from "react";
import {Card, CardHeader} from '@material-ui/core';
import "./PlaylistCard.scss";
import {useQuery} from 'react-query';
import {SongCard} from './SongCard';
import {PlaylistType} from '../../models/PlaylistType';

export type PlaylistCardProps = {
    playlistCode: string;
}
export const PlaylistCard: React.FunctionComponent<PlaylistCardProps> = ({ playlistCode }) => {
    const playlistQuery = useQuery<PlaylistType, Error>(["playlist", { playlistCode: playlistCode }]);

    return (
        <div className={"PlaylistCard"}>
            <Card>
                {playlistQuery.isSuccess &&
                    <div>
                        <CardHeader title={'Now Playing'} />
                        <SongCard song={playlistQuery.data.currentSong} />
                    </div>
                }
            </Card>
        </div>
    );
}
