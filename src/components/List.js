import { Card } from "./Card";
export default function List({ gifList, isLoading }) {
    console.log(gifList);

    return (
        <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 ">
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
