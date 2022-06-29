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
        <form
            className=" flex flex-col p-7 border-solid border-red-500 border-2 mb-8 max-w-md mx-auto rounded-lg"
            onSubmit={handleSubmit}
        >
            <span className="mb-4">
                <label htmlFor="search">Search for gifs: </label>
                <input
                    className="border-solid border-black border-2 mx-1"
                    name="search"
                    value={query}
                    onChange={handleChange}
                ></input>
            </span>
            <Link to={`/${query}`}>
                <button className="py-2 px-4 bg-slate-200 border-solid border-2 border-red-600 rounded-lg hover:bg-slate-300">
                    Search
                </button>
            </Link>
        </form>
    );
}
