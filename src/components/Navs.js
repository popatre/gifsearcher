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
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
