import { Link } from "react-router-dom";

export default function Footer() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="h-20 b-t-4 border-t-2 border-slate-800  relative mt-20 bg-gradient-to-r from-gray-100 via-sky-600 to-sky-500 flex justify-center items-center">
            <div className="flex w-full justify-evenly">
                <p
                    onClick={scrollTop}
                    className="underline cursor-pointer text-white"
                >
                    Back to the top
                </p>
                <p className="underline cursor-pointer text-white">
                    <Link onClick={scrollTop} to="/">
                        Home
                    </Link>
                </p>
                <div className="giphy">
                    <p className="text-sm">Powered by </p>
                    <img
                        src="/images/GIPHY Logo 209px.png"
                        alt="image"
                        className="w-16"
                    />
                </div>
            </div>
        </div>
    );
}
