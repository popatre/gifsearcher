import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getTrending = (offset) => {
    return axios
        .get(
            `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}&limit=10`
        )
        .then(({ data }) => {
            return data;
        });
    // .catch((err) => {
    //     console.log("in heree", err);
    // });

    // return fetch(
    //     "https://api.giphy.com/v1/gifs/trending?api_key=sic6ryZpTlLo4nDeJmbO3HS9VY3W8TZW"
    // )
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         return data;
    //     });
};

export const searchGifs = (query, offset) => {
    return fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&offset=${offset}&limit=21`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
};

export const randomGif = () => {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.dir(data.data);
            return data.data;
        });
};
