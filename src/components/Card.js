import React, { useRef, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

export function Card({
    slug,
    title,
    images,
    embedUrl,

    hasMore,
    setTrendingOffSet,
    index,
    length,
    isLoading,
}) {
    const [clicked, setClicked] = useState("Copy to clipboard");
    const [res, setRes] = useState(false);
    const { filter } = useParams();

    const handleCopy = (text, result) => {
        setClicked("Copied Successfully!! ");
        setRes(result);
    };

    const observer = useRef();
    const lastGifLoaded = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore && !filter) {
                    setTrendingOffSet((prevOffset) => prevOffset + 11);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    return (
        <div
            data-cy="gif-card"
            ref={length === index ? lastGifLoaded : null}
            key={slug}
            className="relative border-solid border-slate-500 border-2 rounded-xl p-4 pb-12 shadow-lg bg-white"
        >
            <h2 className="text-lg py-2 font-medium"> {title}</h2>

            <img
                className="mx-auto py-3 mb-4"
                src={images.downsized.url}
                alt={title}
            />

            <CopyToClipboard
                className="absolute bottom-5 right-1/3 sm:right-1/4 border-2 p-1 border-slate-500 rounded-xl hover:bg-slate-200"
                onCopy={handleCopy}
                options={{
                    message: "Whoa!",
                }}
                text={embedUrl}
                style={res ? { background: "#22c55e" } : null}
            >
                <button>
                    {clicked}{" "}
                    {res ? (
                        <FontAwesomeIcon icon={faCircleCheck} />
                    ) : (
                        <FontAwesomeIcon icon={faCopy} />
                    )}
                </button>
            </CopyToClipboard>
        </div>
    );
}
