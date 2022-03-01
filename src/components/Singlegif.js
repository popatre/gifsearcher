export default function SingleGif({ randomGif, setRandomGif }) {
    const handleClick = () => {
        setRandomGif([]);
    };

    return (
        <div>
            <button onClick={handleClick}>Take me back</button>
            <h2> {randomGif.title}</h2>
            <img src={randomGif.images.downsized.url} alt={randomGif.title} />
        </div>
    );
}
