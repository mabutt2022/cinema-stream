const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function getMovies(req, res, next) {
    try {
        const movies = await prisma.movies.findMany({
            orderBy: {
                movie: 'asc'
            },include: {
                movieDate: true,
                movieTime: true
            }
        })
        // console.log(movies)
        res.json(movies)
    }catch(err){
        res.status(400).json(err);
    }
}

async function getPrice(req, res, next) {
    try {
        const price = await prisma.ticketPrice.findMany({
            orderBy: {
                ticket: 'asc'
            },select: {
                price: true,
                ticket: true
            }
        });
        res.json(price)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getMovies,
    getPrice,
}