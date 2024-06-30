<div align="center">
<img src="/public/images/icon-boek.png" width="140"/>

# Boekestijn Transport Moldova Website

The Source Code to [soferii.md](https://soferii.md/) & [boekestijn.md](https://boekestijn.md) domains

</div>

> [!NOTE]
> Even though the main stable websites hosted on the soferii.md domain has it's own dedicated server, this repository is specifically linked to boekestijn.gxbs.me, which serves as our development environment. Here, you can preview the forthcoming version of the website, which is updated whenever there are necessary changes in progress.

## Project Overview

### Introduction: The Idea behind it

Welcome to the documentation for the new driver recruitment website tailored to the Moldovan audience. This project was conceived with a singular goal: to provide an efficient and user-friendly platform for hiring drivers, where a substantial portion of the company's driver workforce originates. Build with [Aplóe](https://aploe.gxbs.me).

### Key Features and Highlights

Designed exclusively for driver recruitment, this new website boasts a range of features to simplify the application process and create a positive user experience. Noteworthy elements include:

- A modern and engaging design that aligns with the recruitment objectives.
- Intuitive navigation that guides potential drivers through each step of the process.
- Dedicated sections offering detailed information about the company and its values.
- Streamlined application forms designed to gather essential candidate details efficiently.
- Mobile-responsive design for a consistent experience on smartphones and tablets.
- Build with Vue.js & Vite, with dynamic language options
- Better elements including a build in form
- Fully build on top of open source

## Development: The Power behind it

This website has been developed using Vue.js, Vite and [**Aplóe**](https://aploe.gxbs.me). The Framework's structure follows the [Semantic HTML](https://semantichtml.github.io) and Component-Based Architecture. If you want to contribute to it and clone it to your local mashine, then just run the following:

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Compile and Minify for the Stable Production

As said above, for the testing page it gets compile and Minified using GitHub Actions/Vercel, but for lunching the website on a dedicated server you should manually run the following:

```sh
pnpm run build
```
