import React from "react";
import "./Gallery.scss";
import "swiper/swiper.scss";
import SwiperCore, {Navigation, Pagination, A11y, Lazy, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {useQuery} from 'react-query';
import {getGalleryPhotos} from '../../api/api';
import {GalleryType} from '../../models/GalleryType';

SwiperCore.use([Navigation, Pagination, A11y, Lazy, Autoplay]);

export type GalleryProps = {
    gallery: GalleryType
}

export const Gallery: React.FunctionComponent<GalleryProps> = ({gallery}) => {
    const galleryPhotosQuery = useQuery<Array<string>, Error>(
        ["galleryPhotos", {galleryCode: gallery.galleryCode}],
        getGalleryPhotos
    );

    return(
        <div className={"Gallery"}>
            {galleryPhotosQuery.isSuccess &&
                <Swiper
                    lazy={{
                        loadPrevNext: true,
                        loadPrevNextAmount: 2
                    }}
                    pagination={{ dynamicBullets: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {galleryPhotosQuery.data.map(photoUrl => {
                            return (
                                <SwiperSlide key={photoUrl}>
                                    <img
                                        className={'swiper-lazy'}
                                        data-src={photoUrl}
                                        alt={`from a gallery titled ${gallery.galleryName}`}
                                    />
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            }
        </div>
    )
}
