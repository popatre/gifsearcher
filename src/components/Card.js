import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

export function Card({ slug, title, images, embedUrl }) {
    const [clicked, setClicked] = useState("Copy to clipboard");
    const [res, setRes] = useState(false);

    const handleCopy = (text, result) => {
        setClicked("Copied Successfully!! ");
        setRes(result);
    };
    return (
        <div
            key={slug}
            className="relative border-solid border-red-400 border-2 rounded-xl p-4 pb-12 shadow-lg"
        >
            <h2> {title}</h2>

            <img
                className="mx-auto py-3 mb-4"
                src={images.downsized.url}
                alt={title}
            />

            <CopyToClipboard
                className="absolute bottom-5 right-1/3 sm:right-1/4 border-2 p-1 border-red-500 rounded-xl hover:bg-slate-200"
                onCopy={handleCopy}
                options={{
                    message: "Whoa!",
                }}
                text={embedUrl}
                style={res ? { background: "lightGreen" } : null}
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
