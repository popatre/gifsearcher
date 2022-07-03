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
    return (
        <div className=" border-solid border-slate-500 border-4 max-w-3xl w-11/12 mx-auto md:w-4/5 py-12 rounded-xl bg-white">
            <h2 className="text-lg font-bold">{title}</h2>
            <img src={images.url} alt={title} className="mx-auto px-2 py-7" />
            <CopyToClipboard
                className="border-2 p-1 border-slate-500 rounded-xl hover:bg-slate-200"
                onCopy={handleCopy}
                options={{
                    message: "Whoa!",
                }}
                text={embedUrl}
                style={
                    res
                        ? {
                              background: "#22c55e",
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
