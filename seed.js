// const {PrismaClient} = require('@prisma/client')
// const prisma = new PrismaClient()

// async function deleteAll () {
//     await prisma.Profile.deleteMany({})
//     await prisma.User.deleteMany({})
//     // await prisma.$transaction([user, profile])
// }

// deleteAll()
// console.log('seeding')

const url_link = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Action&limit=5&endYear=2023&info=base_info&startYear=2020';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79e30925b0msh93c2ab201f76cb1p1fc1dfjsnf15e03be1f4f',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

async function fetchingData() {

    try {
        const response = await fetch(url_link, options);
        const result = await response.json();
        const data = result["results"];
        console.log(data);
        data.map((movie) => {
        const rank = movie.meterRanking?.currentRank;
        const image = movie.primaryImage?.url;
        const title = movie.titleText?.text;
        const releaseYear = movie.releaseYear?.year;
        const plot = movie.plot?.plotText?.plainText;
        const runtime = movie?.runtime;
        const genre = movie.genres?.genres[0]?.text;
        // const { primaryImage: {url}, titleText: {text},  releaseYear: {year}, plot: {plotText: {plainText}}, runtime} = movie || {};
        console.log(rank);
        console.log(image);
        console.log(title);
        console.log(releaseYear);
        console.log(plot);
        console.log(runtime);
        console.log(genre);
        return null;
        })

    } catch (error) {
        console.error(error);
    }
}

fetchingData();