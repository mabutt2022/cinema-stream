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

async function getTickets(req, res, next) {
  try {
    const tickets = await prisma.TicketHeader.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        ticket: true,
        movie: true,
      },
    });

    res.json(tickets);
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

async function loopTicket(
  noOfTickets,
  type,
  movieDate,
  movieTime,
  userId,
  movieId,
  ticketPrice,
  ticketHeaderId
) {
  for (let i = 0; i < parseInt(noOfTickets); i++) {
    await prisma.ticket.create({
      data: {
        ticketType: type,
        movieDate: movieDate,
        movieTime: movieTime,
        userId: userId,
        movieId: movieId,
        price: ticketPrice,
        ticketHeaderId: ticketHeaderId,
      },
    });
    // console.log(ticketCreate)
  }
}

async function submitTicket(req, res, next) {
  try {
    const {adult, child, senior, movieDate, movieTime, movieId, orderTotal, userId} = req.body;
    const jsonObj = [
      { adult: parseInt(adult) },
      { child: parseInt(child) },
      { senior: parseInt(senior) },
    ];

    const ticketHead = await prisma.TicketHeader.create({
      data: {
        userId: userId,
        total: orderTotal,
        movieId: movieId,
        ticketCount: parseInt(adult) + parseInt(child) + parseInt(senior),
        ticketType: jsonObj,
      },
    });

    if (parseInt(adult) !== 0) {
      let ticketPrice = await getPriceOfTicket("ADULT");
      await loopTicket( adult, "ADULT", movieDate, movieTime, userId, movieId, ticketPrice, ticketHead.id );
    }

    if (parseInt(child) !== 0) {
      let ticketPrice = await getPriceOfTicket("CHILD");
      await loopTicket( adult, "CHILD", movieDate, movieTime, userId, movieId, ticketPrice, ticketHead.id );
    }

    if (parseInt(senior) !== 0) {
      let ticketPrice = await getPriceOfTicket("SENIOR");
      await loopTicket( adult, "SENIOR", movieDate, movieTime, userId, movieId, ticketPrice, ticketHead.id );
    }
    res.json({ message: "Ticket(s) purchased successfully!" });
  } catch (error) {
    console.error(error);
  }
}

async function deleteTicket(req, res, next) {
  try {
    const { id } = req.params;
    const deleteTicket = await prisma.TicketHeader.delete({
      where: {
        id: id,
      }
    });
    res.json("Ticket deleted successfully!");
  } catch (error) {
    console.error(error);
  }
}

async function searchMovie(req, res, next) {
  try {
    const { search } = req.params;
    const movies = await prisma.movies.findMany({
      where: {
        movie: {
          contains: search,
          mode: "insensitive",
        },
      },
      include: {
        movieDate: true,
        movieTime: true,
      },
    });
    res.json(movies);
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getMovies,
  getPrice,
  submitTicket,
  getTickets,
  deleteTicket,
  searchMovie
};
