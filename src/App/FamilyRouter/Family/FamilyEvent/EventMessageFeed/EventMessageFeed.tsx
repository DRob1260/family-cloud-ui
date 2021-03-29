import React from "react";
import {useQuery} from 'react-query';
import {EventMessageType} from '../../../../../models/EventMessageType';
import {getEventMessages} from '../../../../../api/api';
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EventMessage} from './EventMessage/EventMessage';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export type EventMessageFeedProps = {
    familyCode: string;
    eventCode: string;
}

export const EventMessageFeed: React.FunctionComponent<EventMessageFeedProps> = ({familyCode, eventCode}) => {
    const eventMessagesQuery = useQuery<Array<EventMessageType>, Error>(
        ["eventMessages", {familyCode, eventCode}],
        getEventMessages
    );

    return (
        <div className={"EventMessageFeed"}>
            {eventMessagesQuery.isSuccess &&
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {eventMessagesQuery.data.map(eventMessage => {
                        return (
                            <SwiperSlide key={`event-message-${eventMessage.eventMessageId}`}>
                                <EventMessage eventMessage={eventMessage} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            }
        </div>
    )
}
