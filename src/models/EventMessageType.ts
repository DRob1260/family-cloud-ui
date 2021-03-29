import {UserType} from './UserType';

export type EventMessageType = {
    eventMessageId: string;
    text: string;
    photo: string;
    author: UserType;
    creationDate: Date;
}
