/*
  Warnings:

  - A unique constraint covering the columns `[movie]` on the table `Movies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movies" ALTER COLUMN "length" SET DEFAULT '1h 30m';

-- CreateIndex
CREATE UNIQUE INDEX "Movies_movie_key" ON "Movies"("movie");
