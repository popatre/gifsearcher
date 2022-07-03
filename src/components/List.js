import { Card } from "./Card";

export default function List({
    gifList,
    isLoading,
    hasMore,
    setTrendingOffSet,
}) {
    // console.log(gifList);

    return (
        <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 ">
            {gifList.map((gif, index) => {
                return (
                    <Card
                        key={gif.id}
                        slug={gif.slug}
                        title={gif.title}
                        images={gif.images}
                        embedUrl={gif.images?.original.url}
                        hasMore={hasMore}
                        setTrendingOffSet={setTrendingOffSet}
                        length={gifList.length}
                        index={index + 1}
                        isLoading={isLoading}
                    />
                );
            })}

            <div>{isLoading && "Loading..."}</div>
        </div>
    );
}
