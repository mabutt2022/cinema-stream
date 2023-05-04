const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function getMovies(req, res, next) {
    try {
        const movies = await prisma.movies.findMany({
            orderBy: {
                movie: 'asc'
            }
        })
        // console.log(movies)
        res.json(movies)
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    getMovies,
}