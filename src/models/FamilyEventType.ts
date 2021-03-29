import {GalleryType} from './GalleryType';

export type FamilyEventType = {
    eventCode: string;
    eventName: string;
    date: Date;
    gallery?: GalleryType
}
