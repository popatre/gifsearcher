import { searchGifs } from "../api/apifunctions";

export default function SearchBar({
    setGifList,
    setTitle,
    setEmpty,
    query,
    setQuery,
    setOffset,
}) {
    const handleChange = (e) => {
        const { value } = e.target;
        setEmpty(false);
        setQuery(value);
        setOffset(0);
        if (value === "") {
            setEmpty(true);
            setTitle("The Day");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGifs(query).then((data) => {
            setGifList(data.data);
            setTitle(query);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for gifs: </label>
            <input name="search" value={query} onChange={handleChange}></input>
            <button>Search</button>
        </form>
    );
}
