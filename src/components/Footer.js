export default function Footer() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="h-20 b-t-4 border-t-2 border-slate-800  relative mt-20 bg-slate-100 flex justify-center items-center">
            <div className="flex w-full justify-evenly">
                <p onClick={scrollTop} className="underline cursor-pointer">
                    Back to the top
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
