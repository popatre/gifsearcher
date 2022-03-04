import { useState, useEffect } from "react";
import { getTrending, searchGifs } from "../api/apifunctions";
import { useParams } from "react-router-dom";
import List from "./List";
import SearchBar from "./Searchbar";
import Random from "./RandomButton";
import SingleGif from "./Singlegif";
import Footer from "./Footer";
import Navs from "./Navs";

export default function Body() {
    const [gifList, setGifList] = useState([]);
    const [title, setTitle] = useState("The Day");
    const [empty, setEmpty] = useState(false);
    const [randomGif, setRandomGif] = useState([]);
    const [query, setQuery] = useState("");
    const [offset, setOffset] = useState(0);

    const { filter } = useParams();

    useEffect(() => {
        console.log(empty);
        getTrending().then((data) => {
            setGifList(data.data);
        });
    }, [empty]);

    useEffect(() => {
        if (filter) {
            searchGifs(filter).then((data) => {
                setGifList(data.data);
                setTitle(query);
            });
        }
    }, [filter]);

    if (randomGif.length !== 0)
        return <SingleGif randomGif={randomGif} setRandomGif={setRandomGif} />;
    return (
        <div>
            <h1>Gifs of {title}</h1>
            <Random setRandomGif={setRandomGif} />
            <SearchBar
                setGifList={setGifList}
                setTitle={setTitle}
                setEmpty={setEmpty}
                query={query}
                setQuery={setQuery}
                setOffset={setOffset}
            />
            <List gifList={gifList} />
            {filter && (
                <Navs
                    setGifList={setGifList}
                    query={query}
                    offset={offset}
                    setOffset={setOffset}
                />
            )}
            <Footer />
        </div>
    );
}
