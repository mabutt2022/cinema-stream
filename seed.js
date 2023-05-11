const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const allMovies = [
    {
      movie: "The Pope's Exorcist",
      year: 2023,
      description: "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      length: '1h 30m',
      trailerLink: 'YJXqvnT_rsk'
    },
    {
      movie: 'Creed III',
      year: 2023,
      description: 'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      length: '1h 30m',
      trailerLink: 'AHmCH7iB_IM'
    },
    {
      movie: 'Murder Mystery 2',
      year: 2023,
      description: 'After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.',
      genre: 'Action',
      rating: 6,
      image: 'https://image.tmdb.org/t/p/w1280/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg',
      length: '1h 30m',
      trailerLink: 'LM2F56uK0fs'
    },
    {
      movie: 'Puss in Boots: The Last Wish',
      year: 2022,
      description: 'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
      genre: 'Action',
      rating: 8,
      image: 'https://image.tmdb.org/t/p/w1280/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
      length: '1h 30m',
      trailerLink: 'RqrXhwS33yc'
    },
    {
      movie: 'Fast X',
      year: 2023,
      description: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      genre: 'Action',
      rating: 0,
      image: 'https://image.tmdb.org/t/p/w1280/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      length: '1h 30m',
      trailerLink: 'aOb15GVFZxU'
    },
    {
      movie: 'Guardians of the Galaxy Volume 3',
      year: 2023,
      description: 'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
      genre: 'Action',
      rating: 8,
      image: 'https://image.tmdb.org/t/p/w1280/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
      length: '1h 30m',
      trailerLink: 'u3V5KDHRQvk'
    },
    {
      movie: 'Dungeons & Dragons: Honor Among Thieves',
      year: 2023,
      description: 'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg',
      length: '1h 30m',
      trailerLink: 'IiMinixSXII'
    },
    {
      movie: 'Ant-Man and the Wasp: Quantumania',
      year: 2023,
      description: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      genre: 'Action',
      rating: 6,
      image: 'https://image.tmdb.org/t/p/w1280/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg',
      length: '1h 30m',
      trailerLink: 'ZlNFpri-Y40'
    },
    {
      movie: 'Shazam! Fury of the Gods',
      year: 2023,
      description: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      genre: 'Action',
      rating: 6,
      image: 'https://image.tmdb.org/t/p/w1280/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg',
      length: '1h 30m',
      trailerLink: 'Zi88i4CpHe4'
    },
    {
      movie: 'AKA',
      year: 2023,
      description: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg',
      length: '1h 30m',
      trailerLink: '044PUmZQd1g'
    },
    {
      movie: 'Pirates Down the Street II: The Ninjas from Across',
      year: 2022,
      description: "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies!  While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
      genre: 'Action',
      rating: 6,
      image: 'https://image.tmdb.org/t/p/w1280/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg',
      length: '1h 30m',
      trailerLink: 'wgyWDK2Gycc'
    },
    {
      movie: 'Cocaine Bear',
      year: 2023,
      description: 'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
      genre: 'Action',
      rating: 6,
      image: 'https://image.tmdb.org/t/p/w1280/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
      length: '1h 30m',
      trailerLink: 'DuWEEKeJLMI'
    },
    {
      movie: 'Evil Dead Rise',
      year: 2023,
      description: 'Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      length: '1h 30m',
      trailerLink: 'smTK_AeAPHs'
    },
    {
      movie: 'The Super Mario Bros. Movie',
      year: 2023,
      description: 'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      length: '1h 30m',
      trailerLink: 'TnGl01FkMMo'
    },
    {
      movie: 'Ghosted',
      year: 2023,
      description: 'Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/liLN69YgoovHVgmlHJ876PKi5Yi.jpg',
      length: '1h 30m',
      trailerLink: 'IAdCsNtEuBU'
    },
    {
      movie: 'Avatar: The Way of Water',
      year: 2022,
      description: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      length: '1h 30m',
      trailerLink: 'd9MyW72ELq0'
    },
    {
      movie: 'The Last Kingdom: Seven Kings Must Die',
      year: 2023,
      description: "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg',
      length: '1h 30m',
      trailerLink: 'eqCYw_o5lng'
    },
    {
      movie: 'Peter Pan & Wendy',
      year: 2023,
      description: 'Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.',
      genre: 'Action',
      rating: 5,
      image: 'https://image.tmdb.org/t/p/w1280/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg',
      length: '1h 30m',
      trailerLink: '5sVX7MRj8'
    },
    {
      movie: 'Scream VI',
      year: 2023,
      description: 'Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg',
      length: '1h 30m',
      trailerLink: 'h74AXqw4Opc'
    },
    {
      movie: 'John Wick: Chapter 4',
      year: 2023,
      description: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      genre: 'Action',
      rating: 7,
      image: 'https://image.tmdb.org/t/p/w1280/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      length: '1h 30m',
      trailerLink: 'yjRHZEUamCc'
    }
  ]


async function priceAdd() {
    const createPrice = await prisma.ticketPrice.createMany({
        data: [
            {price: 20.0, ticket: "ADULT"},
            {price: 15.0, ticket: "CHILD"},
            {price: 10.0, ticket: "SENIOR"}]
    })
    // console.log(createPrice);
}

async function removeData() {
    await prisma.ticketHeader.deleteMany({}).then((data) => console.log(data))
    await prisma.ticket.deleteMany({}).then((data) => console.log(data))
    await prisma.movieDate.deleteMany({}).then((data) => console.log(data))
    await prisma.movieTime.deleteMany({}).then((data) => console.log(data))
    await prisma.Movies.deleteMany({}).then((data) => console.log(data))
    await prisma.ticketPrice.deleteMany({}).then((data) => console.log(data))
}


async function uploadMovies(title, releaseYear, plot, genre, rank, image, trailerLink) {
    const movies = await prisma.Movies.create({
        data: {
            movie: title,
            year: releaseYear,
            description: plot,
            genre: genre,
            rating: rank,
            image: image,
            trailerLink: trailerLink,
            movieDate: {
                create: [
                    {date: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString()},
                    {date: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString()},
                    {date: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString()},
                    {date: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString()},
                    {date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()},
                    {date: new Date(new Date().setDate(new Date().getDate() + 40)).toISOString()},
                ]
            },
            movieTime: {
                create: [
                    {time: "10:00 AM"},
                    {time: "01:00 PM"},
                    {time: "03:00 PM"},
                    {time: "06:00 PM"},
                    {time: "09:00 PM"},
                ]
            }
        }
    })
}

async function loadAllMovies () {
    allMovies.map((movie) => {
        const {movie: title, year: releaseYear, description: plot, genre, rating: rank, image, trailerLink} = movie;
        uploadMovies(title, releaseYear, plot, genre, rank, image, trailerLink);
        return null;
    })
}
    

// getMovies(APIURL);

async function runFunctions () {
    await loadAllMovies();
    await priceAdd();
}

runFunctions();
// removeData();

