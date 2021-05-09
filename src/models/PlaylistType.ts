import {SongType} from './SongType';

export type PlaylistType = {
    title: string;
    currentSong: SongType;
    songQueue: SongType[];
}
