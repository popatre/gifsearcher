import { searchGifs } from "../api/apifunctions";

export default function Navs({ offset, setOffset }) {
    const handleClick = () => {
        setOffset((prevRes) => {
            return prevRes + 21;
        });
    };

    const handlePrev = () => {
        setOffset((prevRes) => {
            return prevRes - 21;
        });
    };

    return (
        <div className="mt-6">
            {offset !== 0 && (
                <button
                    className="bg-white shadow-xl border-solid border-2 border-slate-600 rounded-lg py-1 px-2 mx-2 hover:bg-slate-200"
                    onClick={handlePrev}
                >
                    Prev
                </button>
            )}
            <button
                className=" bg-white shadow-xl border-solid border-2 border-slate-600 rounded-lg py-1 px-2 mx-2 my-5 hover:bg-slate-200"
                onClick={handleClick}
            >
                Next
            </button>
        </div>
    );
}
