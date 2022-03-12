import { Card } from "./Card";
export default function List({ gifList, isLoading }) {
    console.log(gifList);

    return (
        <div className="grid container">
            {gifList.map((gif) => {
                return (
                    <Card
                        key={gif.id}
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
