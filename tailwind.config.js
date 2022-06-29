/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "main-bg-pattern":
                    "url('https://www.transparenttextures.com/patterns/cartographer.png')",
            },
        },
    },
    variants: {},
    plugins: [],
};
