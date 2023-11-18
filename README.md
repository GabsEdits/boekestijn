<div align="center">
<img src="/public/images/icon-boek.png" width="140"/>

# Boekestijn Transport Moldova Website
The Source Code to [soferii.md](https://soferii.md/) & [boekestijn.md](https://boekestijn.md) domains

</div>

>**Note**
> Even though the main stable websites hosted on the soferii.md and boekestijn.md domains each have their dedicated servers, this repository is specifically linked to boekestijn.gabs.eu.org, which serves as our development environment. Here, you can preview the forthcoming version of the website, which is updated whenever there are necessary changes in progress.

## Project Overview
### Introduction: The Idea behind it
Welcome to the documentation for the new driver recruitment website tailored to the Moldovan audience. This project was conceived with a singular goal: to provide an efficient and user-friendly platform for hiring drivers, where a substantial portion of the company's driver workforce originates. It's apart of the [Aeolus](https://gabs.eu.org/aeolus) customers.

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
This website has been developed using Vue.js and Vite and is an integral part of the <a href="https://gabs.eu.org/aeolus"><b>Aeolus</b></a> project. The Framework's structure follows the <a href="https://semantichtml.github.io">Semantic HTML Convention</a> and an Component-Based Architecture. If you want to contribute to it and clone it to your local mashine, then just run the following:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for the Stable Production
As said above, for the testing page it gets compile and Minified using GitHub Actions, but for the Stable Site you should manually run the following: 

```sh
npm run build
```
