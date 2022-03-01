import { randomGif } from "../api/apifunctions";

export default function Random({ setRandomGif }) {
    const handleClick = () => {
        randomGif().then((res) => {
            setRandomGif(res);
        });
    };

    return <button onClick={handleClick}>Randomiser</button>;
}
