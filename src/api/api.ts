import {FamilyEventType} from '../models/FamilyEventType';
import {EventMessageType} from '../models/EventMessageType';

type FamilyEventParams = {
    queryKey: [string, {familyCode: string, eventCode: string}]
}
export const getFamilyEvent = (params: FamilyEventParams): Promise<FamilyEventType> => {
    const [, { familyCode, eventCode }] = params.queryKey;

    return Promise.resolve({
        eventCode: eventCode,
        eventName: "Danielle's Graduation",
        date: new Date(2021, 5, 22),
        gallery: {
            galleryCode: eventCode,
            galleryName: "Senior Pictures"
        }
    });
}

type GalleryPhotosParams = {
    queryKey: [string, {galleryCode: string}]
}
export const getGalleryPhotos = (params: GalleryPhotosParams): Promise<Array<string>> => {
    const [, { galleryCode }] = params.queryKey;

    return Promise.resolve(["https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080"]);
}

type EventMessagesParams = {
    queryKey: [string, {familyCode: string, eventCode: string}];
}
export const getEventMessages = (params: EventMessagesParams): Promise<Array<EventMessageType>> => {
    const [, { familyCode, eventCode }] = params.queryKey;

    return Promise.resolve([
        {
            eventMessageId: "0",
            text: "Congradulations!",
            photo: "https://picsum.photos/500/500",
            author: {
                username: "DRob1260",
                name: {
                    firstName: "Drew",
                    lastName: "Robert"
                }
            },
            creationDate: new Date()
        },
        {
            eventMessageId: "1",
            text: "I pooped!",
            photo: "https://picsum.photos/500/500",
            author: {
                username: "danirose",
                name: {
                    firstName: "Danielle",
                    lastName: "Robert"
                }
            },
            creationDate: new Date()
        },
        {
            eventMessageId: "2",
            text: "Good job",
            photo: "https://picsum.photos/500/500",
            author: {
                username: "draco161",
                name: {
                    firstName: "Drake",
                    lastName: "Robert"
                }
            },
            creationDate: new Date()
        }
    ])
}
