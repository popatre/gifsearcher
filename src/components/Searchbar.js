import { Link, useNavigate } from "react-router-dom";
export default function SearchBar({
    setTitle,
    setEmpty,
    query,
    setQuery,
    setOffset,
    setTrendingOffSet,
}) {
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e.target;

        setQuery(value);

        if (value === "") {
            setEmpty(true);
            setTrendingOffSet(0);
            //setTitle("the Day");
            navigate("/");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOffset(0);
        setEmpty(false);
        // searchGifs(filter).then((data) => {
        //     setGifList(data.data);
        //     setTitle(query);
        // });
    };

    return (
        <form
            className=" flex flex-col p-7 border-solid border-slate-700 border-2 mb-8 max-w-md mx-auto rounded-lg bg-white shadow-xl"
            onSubmit={handleSubmit}
        >
            <span className="mb-4">
                <label htmlFor="search">Search for gifs: </label>
                <input
                    data-cy="search-bar"
                    className="border-solid border-black border-2 mx-1"
                    name="search"
                    value={query}
                    onChange={handleChange}
                ></input>
            </span>
            <Link to={`/${query}`}>
                <button
                    data-cy="search-btn"
                    className="py-2 px-4  bg-slate-200 border-solid border-2 border-slate-600 rounded-lg hover:bg-slate-300"
                >
                    Search
                </button>
            </Link>
        </form>
    );
}
