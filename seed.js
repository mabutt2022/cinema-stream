const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


// prisma.ticketPrice.findMany({
//     where: {
//         ticket: "ADULT",
//     },
// }).then((data) => console.log(data[0].price))



// prisma.ticketHeader.deleteMany({}).then((data) => console.log(data))
// prisma.ticket.deleteMany({}).then((data) => console.log(data))


// async function deleteAll () {
//     await prisma.Movies.deleteMany({})
//     // await prisma.User.deleteMany({})
//     // await prisma.$transaction([user, profile])
// }

// deleteAll()
// // console.log('seeding')

// const url_link = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Action&limit=15&endYear=2023&info=base_info&startYear=2020';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '79e30925b0msh93c2ab201f76cb1p1fc1dfjsnf15e03be1f4f',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// async function dataAdd(movie, title, releaseYear, plot, genre, rank, image, runtime) {
//     const createMovie = await prisma.movies.create({
//         data: {
//             movie: title,
//             year: releaseYear,
//             description: plot,
//             genre: genre,
//             rating: rank,
//             image: image,
//             // length: runtime
//         }
//     })
//     console.log(createMovie);
// }
// async function fetchingData() {

//     try {
//         const response = await fetch(url_link, options);
//         const result = await response.json();
//         const data = result["results"];
//         // console.log(data);
//         await data.map((movie) => {
//         const rank = movie.meterRanking?.currentRank;
//         const image = movie.primaryImage?.url;
//         const title = movie.titleText?.text;
//         const releaseYear = movie.releaseYear?.year;
//         const plot = movie.plot?.plotText?.plainText;
//         const runtime = movie?.runtime;
//         const genre = movie.genres?.genres[0]?.text;
//         // const { primaryImage: {url}, titleText: {text},  releaseYear: {year}, plot: {plotText: {plainText}}, runtime} = movie || {};
//         // console.log(rank);
//         // console.log(image);
//         // console.log(title);
//         // console.log(releaseYear);
//         // console.log(plot);
//         // console.log(runtime);
//         // console.log(genre);  
//         dataAdd(movie, title, releaseYear, plot, genre, rank, image, runtime);            
//         console.log('_________________________________________')
//         return null;
//         })
//     } catch (error) {
//         console.error(error);
//     }
// }


// // fetchingData();

// async function priceAdd() {
//     const createPrice = await prisma.ticketPrice.createMany({
//         data: [
//             {price: 20.0, ticket: "ADULT"},
//             {price: 15.0, ticket: "CHILD"},
//             {price: 10.0, ticket: "SENIOR"}]
//     })
//     console.log(createPrice);
// }

// async function movieDateAdd() {
//     const movies = await prisma.movies.findMany();
//     // const date = new Date().toLocaleDateString();
//     // console.log(date);
//     await movies.map(async (movie) => {
//     const createMovieDate = await prisma.movieDate.createMany({
//             data: [
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString()},
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString()},
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString()},
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString()},
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()},
//                 {movieId: movie.id, date: new Date(new Date().setDate(new Date().getDate() + 40)).toISOString()},
//             ]
//         })
//         console.log(createMovieDate);
//     })
// }

// async function timeAdd() {
//     const movies = await prisma.movies.findMany();
//     await movies.map(async (movie) => {
//     const createMovieTime = await prisma.movieTime.createMany({
//             data: [
//                 {movieId: movie.id, time: "10:00 AM"},
//                 {movieId: movie.id, time: "01:00 PM"},
//                 {movieId: movie.id, time: "03:00 PM"},
//                 {movieId: movie.id, time: "06:00 PM"},
//                 {movieId: movie.id, time: "09:00 PM"},]
//         })
//         console.log(createMovieTime);
//     })
// }

// priceAdd();
// movieDateAdd();
// timeAdd();


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    
    async function getMovies(url) {
        const resp = await fetch(url);
        const respData = await resp.json();
        const {results} = respData;
        
        console.log(results);
    }
    getMovies(APIURL);