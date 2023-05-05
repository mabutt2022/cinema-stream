const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getMovies(req, res, next) {
  try {
    const movies = await prisma.movies.findMany({
      orderBy: {
        movie: "asc",
      },
      include: {
        movieDate: true,
        movieTime: true,
      },
    });
    // console.log(movies)
    res.json(movies);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getPrice(req, res, next) {
  try {
    const price = await prisma.ticketPrice.findMany({
      orderBy: {
        ticket: "asc",
      },
      select: {
        price: true,
        ticket: true,
      },
    });
    res.json(price);
  } catch (error) {
    console.error(error);
  }
}

async function getPriceOfTicket(type) {
  const ticketPrice = await prisma.ticketPrice.findMany({
    where: {
      ticket: type,
    },
    select: {
      price: true,
    },
  });
  return ticketPrice[0].price;
}

async function loopTicket(noOfTickets, type, movieDate, movieTime, userId, movieId, ticketPrice) {
    for (let i = 0; i < parseInt(noOfTickets); i++) {
        await prisma.ticket.create({
          data: {
            ticketType: type,
            movieDate: movieDate,
            movieTime: movieTime,
            userId: userId,
            movieId: movieId,
            price: ticketPrice,
          },
        });
        // console.log(ticketCreate)
      }

}

async function submitTicket(req, res, next) {
  try {
    const { adult, child, senior, movieDate, movieTime, movieId, userId } = req.body;

    if (parseInt(adult) !== 0) {
      let ticketPrice = await getPriceOfTicket("ADULT");
      await loopTicket(adult, "ADULT", movieDate, movieTime, userId, movieId, ticketPrice);
    }

    if (parseInt(child) !== 0) {
        let ticketPrice = await getPriceOfTicket("CHILD");
      await loopTicket(child, "CHILD", movieDate, movieTime, userId, movieId, ticketPrice);
    }

    if (parseInt(senior) !== 0) {
        let ticketPrice = await getPriceOfTicket("SENIOR");
        await loopTicket(senior, "SENIOR", movieDate, movieTime, userId, movieId, ticketPrice);
        }
    res.json({ message: "Ticket(s) purchased successfully!" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getMovies,
  getPrice,
  submitTicket,
};
