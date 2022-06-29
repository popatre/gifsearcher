import { searchGifs } from "../api/apifunctions";

export default function Navs({ setGifList, query, offset, setOffset }) {
    const handleClick = () => {
        setOffset((prevRes) => {
            return prevRes + 20;
        });
        searchGifs(query, offset).then((res) => {
            setGifList(res.data);
        });
    };

    const handlePrev = () => {
        setOffset((prevRes) => {
            return prevRes - 20;
        });
        searchGifs(query, offset).then((res) => {
            setGifList(res.data);
        });
    };

    return (
        <div>
            <button
                className="border-2 border-red-300 py-1 px-2 rounded mx-2 hover:bg-slate-200"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="border-2 border-red-300 py-1 px-2 rounded mx-2 my-5 hover:bg-slate-200"
                onClick={handleClick}
            >
                Next
            </button>
        </div>
    );
}
