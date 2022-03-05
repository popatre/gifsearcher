import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
export function SingleCard({
    handleCopy,
    res,
    clicked,
    embedUrl,
    title,
    images,
}) {
    console.log(embedUrl);
    return (
        <div>
            <h2>{title}</h2>
            <img src={images.url} alt={title} />
            <CopyToClipboard
                onCopy={handleCopy}
                options={{
                    message: "Whoa!",
                }}
                text={embedUrl}
                style={
                    res
                        ? {
                              background: "lightGreen",
                          }
                        : null
                }
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
