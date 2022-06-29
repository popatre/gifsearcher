import { Link } from "react-router-dom";

export default function Random() {
    return (
        <Link to="/random">
            <button className="py-4 px-4 bg-slate-200 border-solid border-2 border-red-600 rounded-lg hover:bg-slate-300 mb-10">
                Randomiser
            </button>
        </Link>
    );
}
