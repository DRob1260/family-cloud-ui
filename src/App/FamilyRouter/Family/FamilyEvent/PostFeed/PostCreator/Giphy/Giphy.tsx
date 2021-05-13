import React, { useContext } from 'react';
import "./Giphy.scss";
import {Carousel, SearchBar, SearchContext, SearchContextManager} from '@giphy/react-components';
import {Image} from '../../../../../../../models/Image';

export type GiphyProps = {
    setImage: (image: Image) => void
}

const getGiphyId = (id?: string | number) => {
    if(id) {
        if(typeof id === "string")
            return id;
        else
            return id.toString();
    } else {
        return undefined
    }
}

export const Giphy: React.FunctionComponent<GiphyProps> = ({ setImage }) => {

    const Components = () => {
        const { fetchGifs, searchKey } = useContext(SearchContext)
        return (
            <>
                <div id={"search"}>
                    <SearchBar />
                </div>
                <div id={"results"}>
                    <Carousel
                        gifHeight={500}
                        key={searchKey}
                        fetchGifs={fetchGifs}
                        noLink={true}
                        onGifClick={gif => {
                            setImage({
                                url: gif.images.original.url,
                                source: "giphy",
                                sourceId: getGiphyId(gif.id)
                            });
                        }}
                    />
                </div>
            </>
        )
    }

    return (
        <div className={"Giphy"}>
            <SearchContextManager apiKey={"ZZgsMTXFbdfqD4tOMG3iuDqUBdyYJo1O"}>
                <Components />
            </SearchContextManager>
        </div>
    )
}

