# MUZIFY
Upload and share your music!

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [Screenshots](#screenshots)
* [Room for Improvement](#room-for-improvement)
* [Setup](#setup)


## General Information
Muzify is a web application for users to upload music and listen to it using the built-in player. Users can comment on songs, share them with others and creating lists. The main assumption of the project was to learn the Vue.js framework in practice.

## Technologies Used
- Vue.js
- Firebase Auth, Firestore, Firebase Storage
- Howler.js
- i18n
- Pinia
- TailwindCSS
- Caching

## Usage
 - uploading music
 - lisening music by audio player
 - adding comments to uploaded songs

## Project Status
Project is: _in progress_ 

## Screenshot
![Alt text](https://github.com/SzymczykI/MUZIFY/blob/main/screenshot/screenshot.png "screen")

## Room for improvement
- creating personalized lists of songs
- tagging songs


## Setup
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + 

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

