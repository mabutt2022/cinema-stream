-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "image" TEXT,
ADD COLUMN     "trailerLink" TEXT DEFAULT 'No trailer exists for this movie.',
ALTER COLUMN "description" SET DEFAULT 'No plot exists for this movie.',
ALTER COLUMN "genre" SET DEFAULT 'Action',
ALTER COLUMN "length" SET DEFAULT '80 Minutes';
