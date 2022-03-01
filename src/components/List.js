export default function List({ gifList }) {
    console.log(gifList);
    return (
        <div className="grid container">
            {gifList.map((gif) => {
                return (
                    <div key={gif.id}>
                        <h2> {gif.title}</h2>
                        <img src={gif.images.downsized.url} alt={gif.title} />
                        <p>Embed: {gif.embed_url}</p>
                    </div>
                );
            })}
        </div>
    );
}
