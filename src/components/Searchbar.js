import { Link, useNavigate } from "react-router-dom";
export default function SearchBar({
    setGifList,
    setTitle,
    setEmpty,
    query,
    setQuery,
    setOffset,
    filter,
}) {
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e.target;
        setEmpty(false);
        setQuery(value);
        setOffset(0);
        if (value === "") {
            setEmpty(true);
            setTitle("The Day");
            navigate("/");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // searchGifs(filter).then((data) => {
        //     setGifList(data.data);
        //     setTitle(query);
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for gifs: </label>
            <input name="search" value={query} onChange={handleChange}></input>
            <Link to={`/${query}`}>
                <button>Search</button>
            </Link>
        </form>
    );
}
