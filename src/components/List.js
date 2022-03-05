import { Card } from "./Card";
export default function List({ gifList }) {
    console.log(gifList);

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
