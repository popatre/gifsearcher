import { Link } from "react-router-dom";

export default function Random() {
    return (
        <Link to="/random">
            <button className="py-4 px-4 bg-slate-200 border-solid border-2 border-slate-600 rounded-lg  mb-10 random__btn text-white">
                Randomiser
            </button>
        </Link>
    );
}
