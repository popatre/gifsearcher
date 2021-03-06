import { SingleCard } from "./SingleCard";
import { randomGif } from "../api/apifunctions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

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
    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
                <span className="">
                    <Loading />
                </span>
            </div>
        );
    return (
        <section className="min-h-[calc(100vh-10rem)] flex justify-center flex-col">
            <Link
                data-cy="back-home"
                className="mb-8 bg-white shadow-xl border-solid border-2 border-slate-600 rounded-lg py-1 px-2 w-40 mx-auto hover:bg-slate-200 shadow-xl font-semibold"
                to="/"
            >
                Back to trending
            </Link>
            <SingleCard
                embedUrl={random.images?.original.url}
                title={random.title}
                images={images}
                handleCopy={handleCopy}
                res={res}
                clicked={clicked}
            />
        </section>
    );
}
