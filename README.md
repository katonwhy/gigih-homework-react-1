## CREATE SPOTIFY PLAYLIST APP By KATON

This is a simple Web App to Create Spotify Music Playlist on user's Spotify Account.

## Features

- [x] Login Feature, user is required to login with Spotify account, and give permission to this app to create user's spotify music playlist
- [x] Search Song Track, user can search their Favorite Song track
- [x] Ceate New Spotify Music Playlist, user can select different song track from different artist and create user's custom spotify playlist

## Depedencies Used

- [x] [Create React App](https://create-react-app.dev/) to initialize the project.
- [x] [Typesript](https://www.typescriptlang.org/) to get better type control and minimalize client error.
- [x] [React Redux](https://react-redux.js.org/) to manage the app state.
- [x] [React-router-dom](https://reactrouter.com/) to create flexible single page navigation.
- [x] [Material UI](https://mui.com/) to create beautiful react UI component.
- [x] [Jest](https://jestjs.io/) & [react testing-library](https://testing-library.com/) to create unit testing.

## Problem

```
The main problem in this app is how to create new playlist in spotify by using API Spotify.
```

This is the list challange, I want to challange :

- [x] How to create connection to Api Spotify
- [x] How to get accessToken from Api Soptify
- [x] How to get userProfile from Api Spotify
- [x] How to create flexible routers
- [x] How to search music
- [x] How to create new playlist after selected our favorite music


## How to setup App after clone project from github

- Create your `.env.local` file to match `.env` file.
- Update your `.env.local` file as your local configs :

```
    REACT_APP_SPOTIFY_API_KEY = {Your client id in developer spotify account}

```

- In your terminal install all of the required dependencies 

```
    npm install <package-name>
```

## How to run app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits or code changes.
