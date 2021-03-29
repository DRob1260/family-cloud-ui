import {FamilyEventType} from '../models/FamilyEventType';

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
