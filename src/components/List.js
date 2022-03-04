import { Card } from "./Card";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function List({ gifList }) {
    console.log(gifList);
    const [clicked, setClicked] = useState("copy to clipboard");

    return (
        <div className="grid container">
            {gifList.map((gif) => {
                return (
                    <Card
                        slug={gif.slug}
                        title={gif.title}
                        images={gif.images}
                        embedUrl={gif.embed_url}
                    />
                );
            })}
        </div>
    );
}
