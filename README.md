# Table of Contents

-   General Info
-   Technologies
-   Setup
-   Using the app

# General Info

An easy to use GIF searcher, to enable you to easily find gifs and share them with others.

**A hosted version of the site can be found here: [https://gifsearcher.vercel.app/](https://gifsearcher.vercel.app/)**

## Technologies

-   Node v.16.14.0
-   React.js v.17.0.20
-   Vercel continuous deployment
-   Tailwind v. 3.1.4
-   React Hooks - (useState, useEffect, useCallback, useRef)

## Setup

1.  Clone this repository to your usual file directory for project. To do this, run the following command in your terminal

        git clone https://github.com/popatre/gifsearcher

2.  Open the directory in your usual code editor and then run the following command to install the dependencies needed to run the project

        npm install

3.  You will need to register for an API key from GIPHY.
    [https://developers.giphy.com/](https://developers.giphy.com/)

4.  Create a .env file and add your API key to this file, following the format below:

        REACT_APP_API_KEY=yourApiKeyHere

5.  Start the app by using the command below

        npm start

## Using the App

The main page will load the current day's trending gifs. Users can scroll down to load more gifs of the day.

To search for a specific topic, users can use the search box. To return to the trending page, either clear the search box, or use the navigation button in the footer.

The randomiser button will return a random gif from the GIPHY library.

All gifs can be copied by clicking the copy button below each gif.
