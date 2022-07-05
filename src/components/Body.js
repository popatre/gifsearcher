import { useState, useEffect } from "react";
import { getTrending, searchGifs } from "../api/apifunctions";
import { useParams } from "react-router-dom";
import List from "./List";
import SearchBar from "./Searchbar";
import Random from "./RandomButton";

import Navs from "./Navs";

export default function Body() {
    const [gifList, setGifList] = useState([]);
    const [title, setTitle] = useState("The Day");
    const [empty, setEmpty] = useState(false);
    const [query, setQuery] = useState("");
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [trendingOffSet, setTrendingOffSet] = useState(0);
    const { filter } = useParams();

    useEffect(() => {
        let mounted = true;

        setIsLoading(true);

        if (filter) {
            searchGifs(filter, offset).then((data) => {
                setGifList(data.data);
                setTitle(filter);
                setIsLoading(false);
            });
        } else {
            getTrending(trendingOffSet).then((data) => {
                if (mounted) {
                    if (trendingOffSet === 0) {
                        setIsLoading(false);
                        setGifList(data.data);
                        setTitle("the Day");
                        setHasMore(data.data.length > 0);
                    } else {
                        setIsLoading(false);

                        setGifList((prevList) => {
                            return [...new Set([...prevList, ...data.data])];
                        });

                        setHasMore(data.data.length > 0);
                    }
                }
            });
        }

        return () => {
            mounted = false;
        };
    }, [empty, filter, trendingOffSet, offset]);

    return (
        <div>
            <h1
                data-cy="title"
                className="text-5xl font-bold underline py-7 text-white drop-shadow-xl mb-6"
            >
                Gifs of {title}
            </h1>
            <Random />
            <SearchBar
                setGifList={setGifList}
                setTitle={setTitle}
                setEmpty={setEmpty}
                query={query}
                setQuery={setQuery}
                setOffset={setOffset}
                setTrendingOffSet={setTrendingOffSet}
            />
            <List
                gifList={gifList}
                isLoading={isLoading}
                hasMore={hasMore}
                setTrendingOffSet={setTrendingOffSet}
            />
            {filter && (
                <Navs
                    setGifList={setGifList}
                    query={query}
                    offset={offset}
                    setOffset={setOffset}
                />
            )}
        </div>
    );
}
