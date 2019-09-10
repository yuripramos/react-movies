# react-movies

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octopus: Getting Started

:heavy_check_mark: react-create-app

:heavy_check_mark: Styled-Components

:heavy_check_mark: Dynamic Routes

:heavy_check_mark: Reusable Filter

:heavy_check_mark: React@16.8

:heavy_check_mark: High Scale Svg Icons Workflow

:heavy_check_mark: Cross-Browser Solution! (even for MS Edge)

Made with :heart: and Redux-zero.

## :cloud: Installation

Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make start
access http://localhost:3000/
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn install
npm run start
access http://localhost:3000/
```

**Requires node >= 8.9.3**
## Build anc check bundle
```sh

npm run build
npm install -g serve
serve -s build
```

## Why Redux-zero as a state manager over redux?

[Redux-zero](https://github.com/redux-zero/redux-zero) is a lightweight state container based on Redux.
I would like to share 3 arguments to choose redux-zero over redux.

1. Is lighter(less than 1kb) than redux and in projects that are not necessarily high usage of reducers, it helps to focus on what is important.
2. I participated in the conception of this lib, made mostly by an ex-coworker.
3. I'm currently focusing my career in leadership and share knowledge that I've learned across these years, so would be
   an honor gives a presentation about this amazing library.

More about Redux-zero [here](https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee)

## Features

1. Discover - Sidebar with the most popular movies, sorted in *descending* according popularity.
2. Search - Search titles from the server API.
3. Filter - There's a filter at the top of the page that allows you to filter by: *rating*. Can filter the discover results or the search results, depends which moment you want to use the filter.
4. Detailed View - When the user clicks in one certain movie the app provides a specific page for the movie.


## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
