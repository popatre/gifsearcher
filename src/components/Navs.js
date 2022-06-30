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
        <div className="mt-6">
            <button
                className="bg-white shadow-xl border-solid border-2 border-slate-600 rounded-lg py-1 px-2 mx-2 hover:bg-slate-200"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className=" bg-white shadow-xl border-solid border-2 border-slate-600 rounded-lg py-1 px-2 mx-2 my-5 hover:bg-slate-200"
                onClick={handleClick}
            >
                Next
            </button>
        </div>
    );
}
