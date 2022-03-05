import { SingleCard } from "./SingleCard";
import { randomGif } from "../api/apifunctions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RandomPage() {
    const [random, setRandom] = useState({});
    const [clicked, setClicked] = useState("Copy to clipboard");
    const [res, setRes] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState({});

    useEffect(() => {
        setIsLoading(true);
        randomGif().then((res) => {
            setIsLoading(false);
            setRandom(res);
            setImages(res.images.downsized);
        });
    }, []);

    const handleCopy = (text, result) => {
        setClicked("Copied Successfully!!");
        setRes(result);
    };
    if (isLoading) return <h1>loading...</h1>;
    return (
        <>
            <Link to="/">Back to trending</Link>
            <SingleCard
                embedUrl={random.embed_url}
                title={random.title}
                images={images}
                handleCopy={handleCopy}
                res={res}
                clicked={clicked}
            />
        </>
    );
}
