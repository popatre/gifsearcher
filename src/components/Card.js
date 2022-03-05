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
        <div key={slug}>
            <h2> {title}</h2>

            <img src={images.downsized.url} alt={title} />
            {/* <p>Embed: {embedUrl}</p> */}
            <CopyToClipboard
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
