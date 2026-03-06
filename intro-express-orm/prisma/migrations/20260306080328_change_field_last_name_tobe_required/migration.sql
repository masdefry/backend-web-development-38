/*
  Warnings:

  - Made the column `lastName` on table `members` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "members" ALTER COLUMN "lastName" SET NOT NULL;
